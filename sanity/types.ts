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

/**
 * Lesson reference stub within a course module projection.
 * Numbering metadata fields (`lessonIndex`, `displayNumber`) are optional
 * on the raw query result and populated when transformed by `deriveCourseNumbering()`.
 */
export interface CourseModuleLesson {
  _id: string
  title: string
  slug: string
  duration: number
  isFreePreview?: boolean
  /** 0-based lesson position within this module (populated by deriveCourseNumbering) */
  lessonIndex?: number
  /** Formatted label e.g. "5.1" (populated by deriveCourseNumbering) */
  displayNumber?: string
}

export type RawLessonStub = CourseModuleLesson

/**
 * Module object within a course projection.
 * `moduleNumber` is optional on the raw query result and populated by `deriveCourseNumbering()`.
 */
export interface CourseModule {
  _key: string
  title: string
  summary?: string
  /** 1-based module position (populated by deriveCourseNumbering) */
  moduleNumber?: number
  lessons: CourseModuleLesson[]
}

export type RawModule = CourseModule

/**
 * Resolved module with required numbering metadata.
 */
export interface ResolvedModule extends CourseModule {
  moduleNumber: number
  lessons: Array<CourseModuleLesson & {
    lessonIndex: number
    displayNumber: string
  }>
}

/**
 * Projected instructor shape returned by courseBySlugQuery,
 * allInstructorsQuery, and instructorBySlugQuery.
 * Slugs are flattened to scalar strings and document discriminators are omitted.
 */
export interface ProjectedInstructor {
  _id: string
  name: string
  slug: string
  expertise: string
  bio: string
  photo?: SanityImageReference
}

export type CourseInstructor = ProjectedInstructor

/**
 * Projected category shape returned by courseBySlugQuery
 * and allCategoriesQuery.
 * Slugs are flattened to scalar strings and document discriminators are omitted.
 */
export interface ProjectedCategory {
  _id: string
  title: string
  slug: string
  description?: string
}

export type CourseCategory = ProjectedCategory

export interface InstructorDetailData extends ProjectedInstructor {
  courses: Array<{
    _id: string
    title: string
    slug: string
    summary: string
    coverImage: SanityImageReference
    level: 'beginner' | 'intermediate' | 'advanced'
    price: number
    popular?: boolean
    studentCount?: number
    totalLessons: number
  }>
}

/**
 * Course detail data precisely matching the fields returned by `courseBySlugQuery`.
 * Uses query-specific projected interfaces (CourseInstructor, CourseCategory, CourseModule)
 * structurally aligned with the GROQ projection.
 */
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
  instructor: CourseInstructor
  category: CourseCategory
  learningOutcomes?: LearningOutcome[]
  modules: CourseModule[]
  totalLessons: number
  totalDuration: number
}

/**
 * Type alias representing the query result shape of courseBySlugQuery.
 */
export type CourseQueryResult = CourseDetailData

/**
 * Fully resolved course detail data with guaranteed module and lesson numbering.
 * Produced by passing CourseDetailData through `deriveCourseNumbering()`.
 */
export interface ResolvedCourseDetailData extends CourseDetailData {
  modules: ResolvedModule[]
}

/**
 * Raw query result shape from lessonBySlugQuery.
 * The nested course carries RawModule[] with no derived numbering.
 * Call `deriveLessonDetail()` (or resolve manually) at the consuming boundary.
 */
export interface LessonQueryResult {
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
  /** Reverse-referenced parent course with raw (un-numbered) modules, or null if no parent matches. */
  course: {
    _id: string
    title: string
    slug: string
    instructor: {
      name: string
      expertise: string
      photo?: SanityImageReference
    }
    modules: RawModule[]
  } | null
}

/**
 * Fully resolved lesson detail with derived numbering and navigation.
 * Obtain by passing a LessonQueryResult through `deriveLessonDetail()`
 * in sanity/lib/transforms.ts.
 */
export interface LessonDetailData extends Omit<LessonQueryResult, 'course'> {
  course: Omit<LessonQueryResult['course'], 'modules'>
  /** Position of this lesson within its parent module. */
  currentModule: {
    title: string
    /** 1-based module position */
    moduleIndex: number
    /** Human-readable label, e.g. "5.1" */
    lessonNumber: string
  }
  /** All modules with derived numbering for the sidebar curriculum. */
  allModules: ResolvedModule[]
  navigation: {
    prevLesson: { title: string; slug: string } | null
    nextLesson: { title: string; slug: string } | null
  }
}
