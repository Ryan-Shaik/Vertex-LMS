/**
 * sanity/lib/fetchers.ts
 *
 * Typed fetch functions for each major data boundary in Vertex.
 * Each function applies the appropriate transform so callers always
 * receive the fully-resolved type — never the raw GROQ result shape.
 *
 * These are server-only (sanityFetch imports 'server-only').
 */
import { sanityFetch } from './client'
import {
  allCoursesQuery,
  courseBySlugQuery,
  lessonBySlugQuery,
  allInstructorsQuery,
  instructorBySlugQuery,
  allCategoriesQuery,
} from './queries'
import { deriveCourseNumbering, deriveLessonDetail } from './transforms'

import type {
  CourseCardData,
  CourseDetailData,
  CourseQueryResult,
  InstructorDetailData,
  LessonDetailData,
  LessonQueryResult,
  ProjectedCategory,
  ProjectedInstructor,
} from '../types'

// ─── Catalog ────────────────────────────────────────────────────────────────

/**
 * Fetches all courses for the catalog listing page.
 * Returns raw card projections — no numbering derivation needed here.
 */
export async function fetchAllCourses(): Promise<CourseCardData[]> {
  const result = await sanityFetch({ query: allCoursesQuery })
  return (result ?? []) as CourseCardData[]
}

// ─── Course ──────────────────────────────────────────────────────────────────

/**
 * Fetches a single course by slug and derives module/lesson numbering.
 *
 * Returns `null` when no course matches the slug.
 *
 * @example
 * const course = await fetchCourseBySlug(params.slug)
 * if (!course) notFound()
 */
export async function fetchCourseBySlug(slug: string): Promise<CourseDetailData | null> {
  const result = await sanityFetch({
    query: courseBySlugQuery,
    params: { slug },
  })
  if (!result) return null
  return deriveCourseNumbering(result as CourseQueryResult)
}

// ─── Lesson ──────────────────────────────────────────────────────────────────

/**
 * Fetches a single lesson by slug and returns a fully resolved LessonDetailData:
 * - Module/lesson numbering (e.g. "2.3") derived from array position
 * - `currentModule` identifying which module this lesson belongs to
 * - `allModules` with numbering for the sidebar curriculum
 * - `navigation` with prev/next lesson stubs
 *
 * Returns `null` when:
 * - No lesson matches the slug
 * - The lesson is not found inside its reverse-referenced course curriculum
 *   (guards against stale or mis-linked content)
 *
 * @example
 * const lesson = await fetchLessonBySlug(params.slug)
 * if (!lesson) notFound()
 */
export async function fetchLessonBySlug(slug: string): Promise<LessonDetailData | null> {
  const result = await sanityFetch({
    query: lessonBySlugQuery,
    params: { slug },
  })
  if (!result) return null
  return deriveLessonDetail(result as LessonQueryResult)
}

// ─── Instructors ─────────────────────────────────────────────────────────────

export async function fetchAllInstructors(): Promise<ProjectedInstructor[]> {
  const result = await sanityFetch({ query: allInstructorsQuery })
  return (result ?? []) as ProjectedInstructor[]
}

export async function fetchInstructorBySlug(slug: string): Promise<InstructorDetailData | null> {
  const result = await sanityFetch({
    query: instructorBySlugQuery,
    params: { slug },
  })
  return (result ?? null) as InstructorDetailData | null
}

// ─── Categories ──────────────────────────────────────────────────────────────

export async function fetchAllCategories(): Promise<ProjectedCategory[]> {
  const result = await sanityFetch({ query: allCategoriesQuery })
  return (result ?? []) as ProjectedCategory[]
}

