import { groq } from 'next-sanity'

/**
 * Catalog courses query: retrieves all courses for course listing with
 * populated instructor, category, and lesson count.
 */
export const allCoursesQuery = groq`
  *[_type == "course"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    coverImage,
    level,
    price,
    popular,
    studentCount,
    instructor->{
      name,
      expertise,
      photo
    },
    category->{
      title,
      "slug": slug.current
    },
    "totalLessons": count(modules[].lessons[]),
    "totalDuration": math::sum(modules[].lessons[]->duration)
  }
`

/**
 * Single course detail query by slug: resolves instructor, category,
 * learning outcomes, and all modules with their referenced lessons.
 *
 * @returns {CourseQueryResult} Raw shape — modules carry no derived numbering.
 * Use `fetchCourseBySlug()` from sanity/lib/fetchers.ts to obtain the
 * fully-resolved `CourseDetailData` with `moduleNumber`, `lessonIndex`,
 * and `displayNumber` already derived.
 */
export const courseBySlugQuery = groq`
  *[_type == "course" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    coverImage,
    level,
    price,
    popular,
    studentCount,
    instructor->{
      _id,
      name,
      "slug": slug.current,
      expertise,
      bio,
      photo
    },
    category->{
      _id,
      title,
      "slug": slug.current,
      description
    },
    learningOutcomes[]{
      _key,
      title,
      description,
      icon
    },
    modules[]{
      _key,
      title,
      summary,
      lessons[]->{
        _id,
        title,
        "slug": slug.current,
        duration,
        isFreePreview
      }
    },
    "totalLessons": count(modules[].lessons[]),
    "totalDuration": math::sum(modules[].lessons[]->duration)
  }
`

/**
 * Single lesson query by slug: includes reverse-reference to the parent course
 * and full curriculum to build lesson sidebar navigation.
 *
 * @returns {LessonQueryResult} Raw shape — the nested course modules carry no
 * derived numbering, and `currentModule`, `allModules`, and `navigation` are
 * NOT present in the query result.
 * Use `fetchLessonBySlug()` from sanity/lib/fetchers.ts to obtain the fully-
 * resolved `LessonDetailData` with all derived fields applied.
 */
export const lessonBySlugQuery = groq`
  *[_type == "lesson" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    videoUrl,
    thumbnail,
    duration,
    isFreePreview,
    studentCount,
    keyPoints,
    proTip,
    notes,
    resources[]{
      _key,
      type,
      title,
      description,
      url
    },
    "course": *[_type == "course" && references(^._id)][0] {
      _id,
      title,
      "slug": slug.current,
      instructor->{
        name,
        expertise,
        photo
      },
      modules[]{
        _key,
        title,
        summary,
        lessons[]->{
          _id,
          title,
          "slug": slug.current,
          duration,
          isFreePreview
        }
      }
    }
  }
`

/**
 * Query all instructors for instructor listing
 */
export const allInstructorsQuery = groq`
  *[_type == "instructor"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    expertise,
    bio,
    photo
  }
`

/**
 * Query single instructor by slug with all courses taught
 */
export const instructorBySlugQuery = groq`
  *[_type == "instructor" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    expertise,
    bio,
    photo,
    "courses": *[_type == "course" && instructor._ref == ^._id] {
      _id,
      title,
      "slug": slug.current,
      summary,
      coverImage,
      level,
      price,
      popular,
      studentCount,
      "totalLessons": count(modules[].lessons[])
    }
  }
`

/**
 * Query all categories
 */
export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description
  }
`
