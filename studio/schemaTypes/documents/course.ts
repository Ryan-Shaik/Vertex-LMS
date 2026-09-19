import { defineType, defineField, defineArrayMember } from 'sanity'
import { BookIcon } from '@sanity/icons/Book'

export const course = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Course Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Course Summary',
      description: 'Brief overview for cards and course hero',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Difficulty Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
        ],
        layout: 'radio',
      },
      initialValue: 'beginner',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price ($ USD)',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'popular',
      title: 'Popular Flag',
      description: 'Highlight this course as popular in the catalog',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'studentCount',
      title: 'Student Count (display only)',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'instructor',
      title: 'Instructor',
      type: 'reference',
      to: [{ type: 'instructor' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'learningOutcomes',
      title: 'What You Will Learn',
      description: 'Key takeaways and outcomes displayed on the course page',
      type: 'array',
      of: [defineArrayMember({ type: 'learningOutcome' })],
    }),
    defineField({
      name: 'modules',
      title: 'Curriculum Modules',
      description: 'Ordered list of modules containing lessons',
      type: 'array',
      of: [defineArrayMember({ type: 'module' })],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      instructorName: 'instructor.name',
      level: 'level',
      media: 'coverImage',
    },
    prepare({ title, instructorName, level, media }) {
      return {
        title: title || 'Untitled Course',
        subtitle: [instructorName, level].filter(Boolean).join(' • '),
        media,
      }
    },
  },
})
