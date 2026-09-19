import { defineType, defineField, defineArrayMember } from 'sanity'
import { DocumentVideoIcon } from '@sanity/icons/DocumentVideo'

export const video = defineType({
  name: 'video',
  title: 'Video Transcript & Chapters',
  type: 'document',
  icon: DocumentVideoIcon,
  fields: [
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'chapters',
      title: 'Chapters (Table of Contents)',
      description: 'Timestamped section markers for precise seeking',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'chapter',
          fields: [
            defineField({
              name: 'startSeconds',
              title: 'Start Time (seconds)',
              type: 'number',
              validation: (rule) => rule.required().min(0),
            }),
            defineField({
              name: 'label',
              title: 'Chapter Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              startSeconds: 'startSeconds',
            },
            prepare({ title, startSeconds }) {
              const m = Math.floor((startSeconds || 0) / 60)
              const s = (startSeconds || 0) % 60
              return {
                title,
                subtitle: `${m}:${s.toString().padStart(2, '0')}`,
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'chunks',
      title: 'Transcript Chunks',
      description: 'Short timestamped transcript chunks for search lookup',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'transcriptChunk',
          fields: [
            defineField({
              name: 'startSeconds',
              title: 'Start Time (seconds)',
              type: 'number',
              validation: (rule) => rule.required().min(0),
            }),
            defineField({
              name: 'text',
              title: 'Transcript Segment Text',
              type: 'text',
              rows: 2,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'text',
              startSeconds: 'startSeconds',
            },
            prepare({ title, startSeconds }) {
              const m = Math.floor((startSeconds || 0) / 60)
              const s = (startSeconds || 0) % 60
              return {
                title,
                subtitle: `${m}:${s.toString().padStart(2, '0')}`,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'videoUrl',
      chapters: 'chapters',
      chunks: 'chunks',
    },
    prepare({ title, chapters, chunks }) {
      const chapterCount = Array.isArray(chapters) ? chapters.length : 0
      const chunkCount = Array.isArray(chunks) ? chunks.length : 0
      return {
        title: title || 'Untitled Video',
        subtitle: `${chapterCount} chapters • ${chunkCount} chunks`,
      }
    },
  },
})
