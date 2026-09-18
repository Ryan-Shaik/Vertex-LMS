# Implementation Prompt: Vertex Design System

## Goal
Implement the complete Vertex Design System based on `design/vertex-designsystem.png`, establishing the design tokens, fonts, theme rules, reusable UI components, and an interactive design system showcase page in Next.js.

## Skills Read & References Inspected
- `AGENTS.md` (Project rules, tech stack decisions, design system guidelines, UI precision rules)
- `design/vertex-designsystem.png` (Authoritative visual source of truth for colors, typography, type scale, spacing, radius, shadows, icons, buttons, inputs, badges, status indicators, progress bars, cards, navigation, and principles)
- `package.json` (Next.js 16, React 19, Tailwind CSS v4 setup)
- `app/globals.css` & `app/layout.tsx` (Current font imports and CSS theme setup)

## Code Inspected
- `package.json`: Configured with Next.js 16.3.5 and Tailwind CSS v4 (`@tailwindcss/postcss`).
- `app/layout.tsx`: Uses `Geist` font by default; needs Google Fonts `Playfair_Display` and `Inter` configured.
- `app/globals.css`: Contains `@import "tailwindcss";` and default Next.js starter CSS variables.

## Decisions & Assumptions
1. **Fonts & Typography**:
   - Configure Next.js `next/font/google` in `app/layout.tsx` for `Playfair_Display` (serif heading accent) and `Inter` (sans-serif body & UI font).
   - Set up CSS variables `--font-playfair` and `--font-inter` in `layout.tsx` and register `@theme` font tokens in `app/globals.css`.
2. **Color System (Tailwind v4 Theme Tokens)**:
   - Primary palette: 500 (`#F97316`), 400 (`#FB923C`), 300 (`#FDBA74`), 200 (`#FED7AA`), 100 (`#FFEEE5`).
   - Neutral palette: 900 (`#0F172A`), 700 (`#334155`), 500 (`#64748B`), 300 (`#CBD5E1`), 200 (`#E2E8F0`), 100 (`#F1F5F9`), 50 (`#FAFAFC`), White (`#FFFFFF`).
3. **Type Scale**:
   - Display 1: Playfair Display, 48px / 56px, Bold
   - Display 2: Playfair Display, 36px / 44px, Bold
   - Heading 1: Inter, 28px / 36px, SemiBold
   - Heading 2: Inter, 22px / 30px, SemiBold
   - Heading 3: Inter, 18px / 26px, Medium
   - Body Large: Inter, 16px / 24px, Regular
   - Body: Inter, 14px / 20px, Regular
   - Small: Inter, 12px / 16px, Regular
4. **Radius & Shadows**:
   - Radius: 4px (`xs`), 8px (`sm`), 12px (`md`), 16px (`lg`), 24px (`xl`), Full (`circle`).
   - Shadows:
     - `sm`: `0 1px 2px 0 rgba(15, 23, 42, 0.05)`
     - `md`: `0 4px 12px -2px rgba(15, 23, 42, 0.08)`
     - `lg`: `0 12px 24px -4px rgba(15, 23, 42, 0.10)`
     - `xl`: `0 20px 40px -8px rgba(15, 23, 42, 0.12)`
5. **Component Primitives**:
   - `Button`: Primary, Secondary, Tertiary, Text variants; states: Default, Hover, Disabled. Height 44px, radius 12px, font Inter Medium.
   - `Input` & `Select`: Search/Text input with ⌘K shortcut key visual, select dropdown. Height 44px, border 1px solid `#E2E8F0`, focus `#FB923C`.
   - `Badge`: Video, Lesson, Popular tags with matching pill styling.
   - `StatusIndicator`: In Progress, Completed, Now Playing, Locked states with icons.
   - `ProgressBar`: Track `#E2E8F0`, fill `#F97316`, rounded full with label.
   - `Card`: Course Card, Lesson Card (Video), Lesson Card (Lesson), Resource Card.
   - `Navigation` & `Breadcrumb` & `Pagination`: Logo (Vertex icon + title), nav items, breadcrumbs (`All Courses > Next.js for Production > Data Fetching & Caching`), pagination controls.
   - `Principles`: Clarity First, Consistency, Focus & Calm, Accessible grid cards.
6. **Showcase Page**:
   - Update `app/page.tsx` to display an exact, polished pixel-perfect rendering of the Vertex Design System board matching `design/vertex-designsystem.png`.

## Files Expected to Touch
- `app/layout.tsx`: Load Google Fonts (`Playfair_Display`, `Inter`), set root font variables.
- `app/globals.css`: Define Tailwind CSS theme custom properties (`@theme`), color tokens, typography utilities, and reset styles.
- `components/ui/vertex-components.tsx` (or modular component files in `components/ui/`): Implement reusable Vertex UI components.
- `app/page.tsx`: Serve the Vertex Design System interactive spec board.

## Requirements
- Match `design/vertex-designsystem.png` layout, colors, typography, borders, shadows, spacing, and micro-interactions exactly.
- Fully responsive layout while maintaining 1:1 desktop accuracy with reference design.
- Zero TypeScript or lint errors.
- Fast performance with clean Next.js App Router server/client components.

## Security Considerations
- Client/server boundaries strictly maintained. No private keys or secret variables exposed. All design system UI elements run safely in the browser.

## Acceptance Criteria
- [ ] Primary and neutral color tokens defined in Tailwind theme and CSS variables.
- [ ] Playfair Display and Inter fonts loaded and active across headings and body text.
- [ ] Type scale classes / styles implemented accurately (Display 1/2, Heading 1/2/3, Body Large, Body, Small).
- [ ] Border radius tokens (4px to Full) and shadow system (sm, md, lg, xl) configured.
- [ ] Reusable UI components implemented for Buttons, Inputs, Selects, Badges, Status Indicators, Progress Bars, Cards, Navigation, Breadcrumbs, and Pagination.
- [ ] Design System overview board at `app/page.tsx` renders sections 01 to 14 accurately matching `vertex-designsystem.png`.
- [ ] `npm run build` passes with zero TypeScript or build errors.

## Checks to Run
- `npm run lint`
- `npm run build`

## Manual Test Steps
1. Run `npm run dev` and navigate to `http://localhost:3000`.
2. Verify visual fidelity against `design/vertex-designsystem.png`:
   - Section 01 Colors: Swatches for Primary 500-100 and Neutral 900-White display accurate color hex values.
   - Section 02 & 03 Typography & Type Scale: Playfair Display and Inter render correctly at exact font sizes and weights.
   - Section 04 & 05 Spacing & Radius & Shadows: Box cards show 4px-64px scale, 4px-Full radius, and elevation shadows.
   - Section 06 Icons & 07 Buttons & 08 Inputs: Buttons (Primary, Secondary, Tertiary, Text) render in Default, Hover, and Disabled states. Inputs render with search icon, ⌘K badge, and dropdown select.
   - Section 09 Badges, 10 Status, 11 Progress: Video/Lesson/Popular badges, status pills (In Progress, Completed, Now Playing, Locked), and progress bar show correct colors.
   - Section 12 Cards: Course Card, Lesson Card (Video), Lesson Card (Lesson), and Resource Card render cleanly with proper metadata.
   - Section 13 Navigation & 14 Principles: Header, breadcrumbs, pagination, and principles cards match design.
