import { type SchemaTypeDefinition } from 'sanity'

// Documents
import { course } from './documents/course'
import { lesson } from './documents/lesson'
import { instructor } from './documents/instructor'
import { category } from './documents/category'
import { video } from './documents/video'

// Objects
import { moduleObject } from './objects/module'
import { learningOutcome } from './objects/learningOutcome'
import { resource } from './objects/resource'
import { blockContent } from './objects/blockContent'

export const schemaTypes: SchemaTypeDefinition[] = [
  // Documents
  course,
  lesson,
  instructor,
  category,
  video,

  // Objects
  moduleObject,
  learningOutcome,
  resource,
  blockContent,
]
