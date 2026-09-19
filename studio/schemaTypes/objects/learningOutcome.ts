import { defineType, defineField } from 'sanity'
import { CheckmarkCircleIcon } from '@sanity/icons/CheckmarkCircle'

export const learningOutcome = defineType({
  name: 'learningOutcome',
  title: 'Learning Outcome',
  type: 'object',
  icon: CheckmarkCircleIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name or Key',
      type: 'string',
      description: 'Identifier for icon rendering (e.g. check, star, code, rocket)',
      initialValue: 'check',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
