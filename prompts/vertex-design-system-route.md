# Implementation Prompt: Design System Route Setup

## Goal
Move the full Vertex Design System showcase to a dedicated route at `/design-system` (`app/design-system/page.tsx`), and restore the root route (`app/page.tsx`) back to the Next.js default home page.

## Code & Structure Inspected
- `app/page.tsx`: Currently holds the Vertex Design System board. Will be reverted to the default Next.js starter page.
- `app/design-system/page.tsx`: [NEW] Will host the exact Vertex Design System board.

## Decisions & Assumptions
1. Move the complete Vertex Design System showcase page to `app/design-system/page.tsx`.
2. Revert `app/page.tsx` to the original default Next.js starter page.

## Files Expected to Touch
- `app/design-system/page.tsx`: [NEW] Dedicated Design System showcase route.
- `app/page.tsx`: [MODIFY] Reverted back to the default Next.js starter page.

## Acceptance Criteria
- [ ] `/design-system` renders the full Vertex Design System board.
- [ ] `/` renders the default Next.js starter page.
- [ ] Zero TypeScript or lint errors.

## Checks to Run
- `npm run lint`

## Manual Test Steps
1. Run `npm run dev`.
2. Visit `http://localhost:3000/design-system` to see the complete design system board.
3. Visit `http://localhost:3000/` to confirm it displays the default Next.js page.
