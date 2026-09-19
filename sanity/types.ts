import type { PortableTextBlock } from 'next-sanity'

export interface SanityImageReference {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface Category {
  _id: string
  _type: 'category'
  title: string
  slug: {
    current: string
  }
  description?: string
}

export interface Instructor {
  _id: string
  _type: 'instructor'
  name: string
  slug: {
    current: string
  }
  photo?: SanityImageReference
  expertise: string
  bio: string
}

export interface LearningOutcome {
  _key: string
  icon?: string
  title: string
  description?: string
}

export type ResourceType = 'code' | 'doc' | 'link' | 'pdf' | 'exercise'

export interface Resource {
  _key: string
  type: ResourceType
  title: string
  description?: string
  url: string
}

export interface LessonReference {
  _key: string
  _ref: string
  _type: 'reference'
}

export interface Module {
  _key: string
  title: string
  summary?: string
  lessons: LessonReference[]
}

export interface Lesson {
  _id: string
  _type: 'lesson'
  title: string
  slug: {
    current: string
  }
  videoUrl: string
  thumbnail?: SanityImageReference
  duration: number
  isFreePreview?: boolean
  studentCount?: number
  keyPoints?: string[]
  proTip?: string
  notes?: PortableTextBlock[]
  resources?: Resource[]
}

export interface Course {
  _id: string
  _type: 'course'
  title: string
  slug: {
    current: string
  }
  summary: string
  coverImage: SanityImageReference
  level: 'beginner' | 'intermediate' | 'advanced'
  price: number
  popular?: boolean
  studentCount?: number
  instructor: Instructor | { _ref: string; _type: 'reference' }
  category: Category | { _ref: string; _type: 'reference' }
  learningOutcomes?: LearningOutcome[]
  modules: Module[]
}

export interface VideoChapter {
  _key: string
  startSeconds: number
  label: string
}

export interface VideoChunk {
  _key: string
  startSeconds: number
  text: string
}

export interface VideoDocument {
  _id: string
  _type: 'video'
  videoUrl: string
  chapters: VideoChapter[]
  chunks: VideoChunk[]
}

// -------------------------------------------------------------
// Projected Types for GROQ Queries
// -------------------------------------------------------------

export interface CourseCardData {
  _id: string
  title: string
  slug: string
  summary: string
  coverImage: SanityImageReference
  level: 'beginner' | 'intermediate' | 'advanced'
  price: number
  popular?: boolean
  studentCount?: number
  instructor: {
    name: string
    expertise: string
    photo?: SanityImageReference
  }
  category: {
    title: string
    slug: string
  }
  totalLessons: number
  totalDuration: number
}

export interface ResolvedModule {
  _key: string
  title: string
  summary?: string
  moduleNumber: number
  lessons: Array<{
    _id: string
    title: string
    slug: string
    duration: number
    isFreePreview?: boolean
    lessonIndex: number
    displayNumber: string // e.g. "5.1"
  }>
}

export interface CourseDetailData {
  _id: string
  title: string
  slug: string
  summary: string
  coverImage: SanityImageReference
  level: 'beginner' | 'intermediate' | 'advanced'
  price: number
  popular?: boolean
  studentCount?: number
  instructor: Instructor
  category: Category
  learningOutcomes?: LearningOutcome[]
  modules: ResolvedModule[]
  totalLessons: number
  totalDuration: number
}

export interface LessonDetailData {
  _id: string
  title: string
  slug: string
  videoUrl: string
  thumbnail?: SanityImageReference
  duration: number
  isFreePreview?: boolean
  studentCount?: number
  keyPoints?: string[]
  proTip?: string
  notes?: PortableTextBlock[]
  resources?: Resource[]
  course: {
    _id: string
    title: string
    slug: string
    instructor: {
      name: string
      expertise: string
      photo?: SanityImageReference
    }
  }
  currentModule: {
    title: string
    moduleIndex: number
    lessonNumber: string // e.g. "5.1"
  }
  allModules: ResolvedModule[]
  navigation: {
    prevLesson: { title: string; slug: string } | null
    nextLesson: { title: string; slug: string } | null
  }
}
