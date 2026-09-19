import { defineType, defineField, defineArrayMember } from 'sanity'
import { PlayIcon } from '@sanity/icons/Play'

export const lesson = defineType({
  name: 'lesson',
  title: 'Lesson',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Lesson Title',
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
      name: 'videoUrl',
      title: 'Video URL',
      description: 'Supported providers: YouTube, Vimeo, Bunny embed URL',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail / Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'duration',
      title: 'Duration (seconds)',
      description: 'Total length in seconds',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'isFreePreview',
      title: 'Free Preview',
      description: 'Presentational badge indicating this lesson is free to preview',
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
      name: 'keyPoints',
      title: 'Key Points ("In this lesson you will")',
      description: 'Short list of takeaway bullet points',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'proTip',
      title: 'Pro Tip',
      description: 'Optional pro tip callout for this lesson',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'notes',
      title: 'Lesson Notes',
      description: 'Rich text notes rendered via Portable Text',
      type: 'blockContent',
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      description: 'Downloadable materials, links, repositories, and docs',
      type: 'array',
      of: [defineArrayMember({ type: 'resource' })],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      duration: 'duration',
      isFreePreview: 'isFreePreview',
      media: 'thumbnail',
    },
    prepare({ title, duration, isFreePreview, media }) {
      const minutes = duration ? Math.floor(duration / 60) : 0
      const seconds = duration ? duration % 60 : 0
      const formattedDuration = duration
        ? `${minutes}:${seconds.toString().padStart(2, '0')}`
        : '0:00'
      return {
        title: title || 'Untitled Lesson',
        subtitle: `${formattedDuration}${isFreePreview ? ' • Free Preview' : ''}`,
        media,
      }
    },
  },
})
