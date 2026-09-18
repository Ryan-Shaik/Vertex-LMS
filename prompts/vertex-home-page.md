# Implementation Prompt: Vertex Home Page

## Goal
Implement the exact Vertex Home Page based on the reference design in `design/vertex-home.png`, including top navigation bar, hero section with search bar and CTA, course grid section with course cards (Next.js, Docker, TypeScript), weekly updates banner, and footer decorative visuals.

## Skills Read & References Inspected
- `AGENTS.md` (Project rules, Next.js conventions, UI design rules, approval process)
- `design/vertex-home.png` (Authoritative visual source of truth for header, navigation, hero text, CTA button, search input, course cards, icons, metadata, divider, and bottom accent layout)
- `app/layout.tsx` & `app/globals.css` (Font definitions for `Playfair_Display` and `Inter`, theme color variables, type scale classes)
- `components/ui/vertex-components.tsx` (Reusable design system elements: `VertexLogo`, `Button`, `Input`, `CourseCard`, etc.)

## Code Inspected
- `app/page.tsx`: Currently contains default Next.js starter template. To be replaced with the exact Vertex Home Page layout matching `design/vertex-home.png`.
- `components/ui/vertex-components.tsx`: Contains basic UI components. Will reuse or extend where appropriate for the home page header, course cards, and search bar.
- `app/globals.css`: Loaded with design system custom CSS properties, `@theme` directives, and typography classes (`.text-display-1`, `.text-heading-1`, etc.).

## Decisions & Assumptions
1. **Header & Navigation Bar**:
   - Header with `VertexLogo` on the left, navigation links (`Courses`, `My Learning`) in the center-left, and right-aligned notification bell button and user profile avatar image.
   - Sticky/fixed or top container with subtle border-b `#E2E8F0`/`#F1F5F9` and full width background `#FAFAFC`.

2. **Hero Section**:
   - Top badge pill: "INTELLIGENT LEARNING" styled with orange text (`#F97316`), subtle orange border (`#FED7AA`), and rounded-full background (`#FFEEE5`/`#FFF7ED`).
   - Headline: "Search your learning in plain English." using Playfair Display serif font (`text-display-1` or `font-serif text-[48px] leading-[56px] font-bold text-[#0F172A]`).
   - Subtitle: "Vertex understands what you want to learn and finds the exact lessons across all your courses." using Inter sans-serif (`text-[#334155] text-base max-w-xl text-center`).
   - CTA Button: Primary orange button (`#F97316`) "Explore Courses" with a right arrow icon.
   - Search Bar: Centered search input (`Ask anything about your learning...`) with magnifying glass icon on the left and `⌘ K` shortcut badge on the right, housed in a rounded `[16px]` card container with soft shadow (`shadow-sm` / `shadow-md`).

3. **All Courses Section**:
   - Section header with serif heading "All Courses" on the left and "View all courses →" orange link on the right.
   - 3-column responsive grid featuring 3 specific courses:
     1. **Next.js for Production**: Dark square icon (`N`), description "Build scalable, high-performance web applications with Next.js.", metadata: Intermediate, 18h 24m, 12 modules.
     2. **Docker Essentials**: Docker whale icon SVG, description "Containerize applications and streamline your development workflow.", metadata: Beginner, 10h 12m, 8 modules.
     3. **TypeScript Deep Dive**: Blue square icon (`TS`), description "Go beyond the basics and write safer, more expressive code.", metadata: Intermediate, 14h 36m, 10 modules.

4. **Footer Banner & Decorative Graphics**:
   - Center line divider featuring an outline star icon and text: "New courses and lessons added every week."
   - Warm orange bar graph / accent visual gradient at the bottom edge matching the image.

5. **Responsiveness**:
   - Desktop 1:1 pixel accuracy.
   - Graceful mobile fallback (stacking columns, responsive padding, maintaining visual elegance).

## Files Expected to Touch
- `app/page.tsx`: Complete implementation of the Vertex Home Page.
- `components/ui/vertex-components.tsx`: Add/enhance Course card branding icons (Next.js, Docker SVG, TypeScript) or header avatar component if needed.

## Requirements
- Match `design/vertex-home.png` visual design, typography, spacing, colors, and layout exactly.
- Zero TypeScript compiler or linting errors.
- Clean Next.js App Router structure.

## Security Considerations
- Pure frontend presentation page; no secret keys, private environment variables, or sensitive user data exposed.

## Acceptance Criteria
- [ ] Header renders with Vertex logo, Courses & My Learning nav items, notification bell, and user avatar.
- [ ] Hero section displays INTELLIGENT LEARNING badge, Playfair Display heading, subtitle, Explore Courses button, and ⌘K search bar.
- [ ] All Courses section displays 3 course cards (Next.js, Docker, TypeScript) with accurate icons, titles, descriptions, and level/duration/module metadata.
- [ ] Weekly updates divider with star icon renders below course cards.
- [ ] Bottom orange accent visual elements render accurately.
- [ ] `npm run lint` and `npm run build` pass with zero errors.

## Checks to Run
- `npm run lint`
- `npm run build`

## Manual Test Steps
1. Start local server with `npm run dev`.
2. Open `http://localhost:3000` in browser.
3. Compare desktop view against `design/vertex-home.png`:
   - Check header alignment, logo, nav items, and user avatar.
   - Verify hero typography scale and search bar styling.
   - Verify course cards for Next.js, Docker, and TypeScript display correct icons and metadata.
   - Verify footer star divider and bottom graphic accents.
