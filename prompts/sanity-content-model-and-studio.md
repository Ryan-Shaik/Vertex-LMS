# Implementation Prompt: Sanity Content Model, Standalone Studio & Server Read Client

## Goal
Implement the complete Sanity content model for Vertex (`course`, `module`, `lesson`, `instructor`, `category`, `video`), set up the standalone Studio workspace according to project architecture guidelines, configure the server-side Sanity read client with secure server token isolation, and define GROQ query helpers with strongly-typed data models for Next.js.

## Skills Read & References Inspected
- `AGENTS.md`:
  - Section 5 (Two standalone workspaces in one repo: standalone Studio workspace and web workspace; no embedded studio)
  - Section 6 (Tech stack: Next.js App Router, `next-sanity`, `@sanity/image-url`, `@portabletext/react`, TypeScript)
  - Section 8 (Fixed data models and relationships: course, module as embedded object, lesson, instructor, category, video)
  - Section 12 (Dataset is private; server-side read token only; no client token leakage)
  - Section 13 (Checks: type check, lint, Next.js build, Studio verification)
- `sanity-best-practices`:
  - `references/schema.md` (Strict `defineType`, `defineField`, `defineArrayMember`, icons from subpaths, array keys `_key`)
  - `references/project-structure.md` (Standalone Studio under `studio/` with Vite dev/build, web under Next.js root)
  - `references/nextjs.md` (Server-only data fetching, Live Content API, token safety)
- `content-modeling-best-practices`:
  - Data over presentation, structured content, references vs embedded objects.

## Code Inspected
- `package.json`: Contains Next.js 16 dependencies; currently has untracked embedded sanity packages and `app/studio` route.
- `sanity.config.ts` & `sanity.cli.ts` (root): Previously placed in root for embedded mode, which violates Section 5.
- `.env.local`: Has `NEXT_PUBLIC_SANITY_DATASET="production"` and `NEXT_PUBLIC_SANITY_PROJECT_ID="oom7430q"`.
- Sanity Project `oom7430q`: Connected via MCP; has `production` dataset; CORS origins already configured for `http://localhost:3000` and `http://localhost:3333`.

## Decisions & Assumptions
1. **Standalone Studio Workspace (`studio/`)**:
   - Per `AGENTS.md` Section 5 & 12, the Studio must be a standalone workspace, NOT embedded in Next.js.
   - We will remove the untracked `app/studio/` route and root `sanity.config.ts`/`sanity.cli.ts`.
   - We will establish `studio/` as a standalone Vite-powered Sanity Studio workspace with its own `package.json`, `sanity.config.ts`, `sanity.cli.ts`, and `schemaTypes/`.
   - Root `package.json` will have convenience helper scripts (`"studio": "npm --prefix studio run dev"`, `"studio:build": "npm --prefix studio run build"`).
2. **Content Model Specifications**:
   - `category`: Document (`title`, `slug`, `description`, `TagIcon`).
   - `instructor`: Document (`name`, `slug`, `photo`, `expertise`, `bio`, `UserIcon`).
   - `lesson`: Document (`title`, `slug`, `videoUrl`, `thumbnail`, `duration`, `isFreePreview`, `studentCount`, `keyPoints`, `proTip`, `notes` (Portable Text), `resources` (array of typed objects with `type`, `title`, `description`, `url`), `PlayIcon`).
   - `module`: Embedded object type inside course (NOT a document). Contains `title`, `summary`, and `lessons` (ordered list of references to `lesson`).
   - `course`: Document (`title`, `slug`, `summary`, `coverImage`, `level`, `price`, `popular`, `studentCount`, `learningOutcomes` array of `{ icon, title, description }`, `instructor` reference, `category` reference, `modules` array of embedded `module` objects, `BookOpenIcon`).
   - `video`: Document for ingestion lookup (`videoUrl`, `chapters` array of `{ startSeconds, label }`, `chunks` array of `{ startSeconds, text }`, `FilmIcon`).
3. **Desk Structure (`studio/structure.ts`)**:
   - Clean desk navigation grouping Courses, Lessons, Instructors, Categories, and Video Transcripts with clear icons.
4. **Server-Side Data Access & Types in Web**:
   - `sanity/lib/client.ts`: Dedicated server client marked with `server-only` using private `SANITY_API_READ_TOKEN` when available, falling back to public reads on public datasets.
   - `sanity/lib/live.ts`: Live Content API client using `defineLive`.
   - `sanity/lib/queries.ts`: GROQ queries for catalog courses, course details by slug with resolved modules & lessons, lesson details by slug with reverse-referenced parent course & module, and instructor profile.
   - `sanity/types.ts`: Comprehensive TypeScript interfaces representing Course, Module, Lesson, Instructor, Category, Video, LearningOutcome, and Resource.
5. **Environment & Security**:
   - Document all keys in `.env.example`.
   - No token is exposed to the browser client. All client data access is server-side.

## Files Expected to Touch
- [DELETE] `app/studio/[[...tool]]/page.tsx` (remove embedded studio)
- [DELETE] `sanity.config.ts` (root)
- [DELETE] `sanity.cli.ts` (root)
- [NEW] `studio/package.json`
- [NEW] `studio/sanity.config.ts`
- [NEW] `studio/sanity.cli.ts`
- [NEW] `studio/structure.ts`
- [NEW] `studio/schemaTypes/index.ts`
- [NEW] `studio/schemaTypes/documents/course.ts`
- [NEW] `studio/schemaTypes/documents/lesson.ts`
- [NEW] `studio/schemaTypes/documents/instructor.ts`
- [NEW] `studio/schemaTypes/documents/category.ts`
- [NEW] `studio/schemaTypes/documents/video.ts`
- [NEW] `studio/schemaTypes/objects/module.ts`
- [NEW] `studio/schemaTypes/objects/learningOutcome.ts`
- [NEW] `studio/schemaTypes/objects/resource.ts`
- [NEW] `studio/schemaTypes/objects/blockContent.ts`
- [MODIFY] `package.json` (add studio convenience scripts, keep web clean)
- [MODIFY] `sanity/lib/client.ts` (server-only token isolation)
- [MODIFY] `sanity/lib/live.ts` (live content helper)
- [NEW] `sanity/lib/queries.ts` (GROQ queries for catalog, course, lesson, instructor, category)
- [NEW] `sanity/types.ts` (TypeScript types for data models)
- [NEW] `.env.example` (canonical list of environment variables)

## Requirements
- Full implementation of all schema types conforming to `AGENTS.md` Section 8.
- Strict definition syntax using `defineType`, `defineField`, and `defineArrayMember`.
- Standalone Studio workspace under `studio/` runnable independently via `npm run studio` or `cd studio && npm run dev` on port 3333.
- Complete server-side read client in web that keeps read tokens strictly on the server.
- Reverse-referencing GROQ queries that allow deriving parent course and module from lesson document.
- Zero TypeScript compiler errors across web and studio.
- Pass `npm run lint` and `npm run build` in web.

## Security Considerations
- Read tokens and secret keys are kept server-side only (`server-only` safeguard).
- Client bundle never receives `SANITY_API_READ_TOKEN`.
- Public/private dataset separation rules adhered to.

## Acceptance Criteria
- [ ] `app/studio` embedded route removed; Studio is standalone in `studio/`.
- [ ] Schema types for `course`, `module`, `lesson`, `instructor`, `category`, and `video` are complete with validation and icon imports.
- [ ] Studio desk structure organizes content into Courses, Lessons, Instructors, Categories, and Video Transcripts.
- [ ] Web workspace includes server-side client, live query wrapper, GROQ queries, and TypeScript definitions.
- [ ] `.env.example` committed with canonical environment variables.
- [ ] `npm run lint` and `npm run build` pass with zero errors in web.
- [ ] Studio builds cleanly with `npm --prefix studio run build`.

## Checks to Run
- `npm run lint` (in root/web)
- `npm run build` (in root/web)
- Studio compilation check (`npm --prefix studio run build` or type check)

## Manual Test Steps
1. Verify `studio/package.json` and install studio dependencies (`npm --prefix studio install`).
2. Run `npm --prefix studio run build` to verify studio builds cleanly into static assets without errors.
3. Run `npm run build` in root to verify Next.js builds cleanly with server read client and queries.
4. Open Sanity Studio (`npm run studio`) on `http://localhost:3333` and verify the desk structure, document creation forms for Course, Lesson, Instructor, Category, and embedded Module objects.
