import type { StructureResolver } from 'sanity/structure'
import { BookIcon, PlayIcon, UserIcon, TagIcon, DocumentVideoIcon } from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Vertex Content')
    .items([
      S.listItem()
        .title('Courses')
        .icon(BookIcon)
        .child(
          S.documentTypeList('course')
            .title('Courses')
            .defaultOrdering([{ field: 'title', direction: 'asc' }])
        ),
      S.listItem()
        .title('Lessons')
        .icon(PlayIcon)
        .child(
          S.documentTypeList('lesson')
            .title('Lessons')
            .defaultOrdering([{ field: 'title', direction: 'asc' }])
        ),
      S.divider(),
      S.listItem()
        .title('Instructors')
        .icon(UserIcon)
        .child(
          S.documentTypeList('instructor')
            .title('Instructors')
            .defaultOrdering([{ field: 'name', direction: 'asc' }])
        ),
      S.listItem()
        .title('Categories')
        .icon(TagIcon)
        .child(
          S.documentTypeList('category')
            .title('Categories')
            .defaultOrdering([{ field: 'title', direction: 'asc' }])
        ),
      S.divider(),
      S.listItem()
        .title('Video Transcripts & Chapters')
        .icon(DocumentVideoIcon)
        .child(
          S.documentTypeList('video')
            .title('Video Documents')
            .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
        ),
    ])
