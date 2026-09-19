import type {
  CourseQueryResult,
  CourseDetailData,
  ResolvedCourseDetailData,
  LessonQueryResult,
  LessonDetailData,
  RawModule,
  ResolvedModule,
} from '../types'

/**
 * Derives `moduleNumber`, `lessonIndex`, and `displayNumber` from array
 * position and attaches them to each module/lesson.
 *
 * Call this at the consuming boundary (server component or API route)
 * after fetching a raw CourseQueryResult from Sanity.
 *
 * @example
 * const raw = await sanityFetch({ query: courseBySlugQuery, params: { slug } })
 * const course = raw ? deriveCourseNumbering(raw) : null
 */
export function deriveCourseNumbering(raw: CourseQueryResult): ResolvedCourseDetailData {
  const modules: ResolvedModule[] = raw.modules.map(
    (mod: RawModule, moduleIndex: number) => ({
      ...mod,
      moduleNumber: moduleIndex + 1,
      lessons: mod.lessons.map((lesson, lessonIndex) => ({
        ...lesson,
        lessonIndex,
        // e.g. module 2, lesson 3 → "2.3"
        displayNumber: `${moduleIndex + 1}.${lessonIndex + 1}`,
      })),
    })
  )

  return { ...raw, modules }
}

/**
 * Resolves a raw lessonBySlugQuery result into a fully annotated LessonDetailData:
 * - Derives module/lesson numbering for the sidebar curriculum
 * - Identifies which module and position this lesson belongs to
 * - Builds previous/next navigation from the flat lesson order
 *
 * Returns `null` if the lesson is not found in the course curriculum
 * (e.g. the reverse reference returned a different course).
 *
 * @example
 * const raw = await sanityFetch({ query: lessonBySlugQuery, params: { slug } })
 * const lesson = raw ? deriveLessonDetail(raw) : null
 */
export function deriveLessonDetail(raw: LessonQueryResult): LessonDetailData | null {
  if (!raw.course?.modules || !Array.isArray(raw.course.modules)) {
    return null
  }
  const course = raw.course
  const resolvedModules: ResolvedModule[] = course.modules.map(
    (mod: RawModule, moduleIndex: number) => ({
      ...mod,
      moduleNumber: moduleIndex + 1,
      lessons: mod.lessons.map((lesson, lessonIndex) => ({
        ...lesson,
        lessonIndex,
        displayNumber: `${moduleIndex + 1}.${lessonIndex + 1}`,
      })),
    })
  )

  // Find which module and position this lesson occupies
  let currentModule: LessonDetailData['currentModule'] | null = null
  for (const mod of resolvedModules) {
    const found = mod.lessons.find((l) => l.slug === raw.slug)
    if (found) {
      currentModule = {
        title: mod.title,
        moduleIndex: mod.moduleNumber,
        lessonNumber: found.displayNumber,
      }
      break
    }
  }

  if (!currentModule) return null

  // Build flat lesson list for prev/next navigation
  const flatLessons = resolvedModules.flatMap((mod) => mod.lessons)
  const currentIdx = flatLessons.findIndex((l) => l.slug === raw.slug)

  const prevLesson =
    currentIdx > 0
      ? { title: flatLessons[currentIdx - 1].title, slug: flatLessons[currentIdx - 1].slug }
      : null

  const nextLesson =
    currentIdx < flatLessons.length - 1
      ? { title: flatLessons[currentIdx + 1].title, slug: flatLessons[currentIdx + 1].slug }
      : null

  // Strip raw modules from the nested course — consumers use allModules instead
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { modules: _rawModules, ...courseWithoutModules } = course

  return {
    ...raw,
    course: courseWithoutModules,
    currentModule,
    allModules: resolvedModules,
    navigation: { prevLesson, nextLesson },
  }
}

/**
 * Given a flat lesson slug and a resolved course, finds the module and lesson
 * position for sidebar/breadcrumb rendering.
 *
 * Returns `null` if the lesson is not found in the curriculum (e.g. stale slug).
 */
export function findLessonPosition(
  lessonSlug: string,
  modules: ResolvedModule[]
): {
  module: ResolvedModule
  lesson: ResolvedModule['lessons'][number]
} | null {
  for (const mod of modules) {
    const lesson = mod.lessons.find((l) => l.slug === lessonSlug)
    if (lesson) return { module: mod, lesson }
  }
  return null
}
