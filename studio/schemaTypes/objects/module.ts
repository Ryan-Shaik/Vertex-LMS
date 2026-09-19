import { defineType, defineField, defineArrayMember } from 'sanity'
import { FolderIcon } from '@sanity/icons'

export const moduleObject = defineType({
  name: 'module',
  title: 'Module',
  type: 'object',
  icon: FolderIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Module Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Module Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'lessons',
      title: 'Lessons',
      description: 'Ordered list of lessons belonging to this module',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'lesson' }],
        }),
      ],
      validation: (rule) =>
        rule
          .required()
          .min(1)
          .unique()
          .custom((lessons, context) => {
            const parentDoc = context.document as
              | { modules?: Array<{ _key?: string; lessons?: Array<{ _ref?: string }> }> }
              | undefined

            if (!parentDoc?.modules || !Array.isArray(lessons)) return true

            // Count occurrences of each lesson ref across all modules in this course
            const refCounts = new Map<string, number>()
            for (const mod of parentDoc.modules) {
              if (Array.isArray(mod.lessons)) {
                for (const item of mod.lessons) {
                  if (item?._ref) {
                    refCounts.set(item._ref, (refCounts.get(item._ref) || 0) + 1)
                  }
                }
              }
            }

            for (const item of lessons as Array<{ _ref?: string }>) {
              if (item?._ref && (refCounts.get(item._ref) || 0) > 1) {
                return 'A lesson cannot be referenced more than once within the same course.'
              }
            }
            return true
          }),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      lessons: 'lessons',
    },
    prepare({ title, lessons }) {
      const count = Array.isArray(lessons) ? lessons.length : 0
      return {
        title: title || 'Untitled Module',
        subtitle: `${count} lesson${count === 1 ? '' : 's'}`,
      }
    },
  },
})
