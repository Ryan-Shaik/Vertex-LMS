# Implementation Prompt: Vertex Home Page & Mobile Navigation

## Goal
Implement the exact Vertex Home Page based on `design/vertex-home.png` and add an accessible mobile navigation control for screen widths below the `sm` breakpoint so learners on mobile can access `Courses` and `My Learning`.

## Skills Read & References Inspected
- `AGENTS.md` (Section 3: UI Work & Mobile Responsiveness Adaptations)
- `design/vertex-home.png` (Desktop reference for header, logo, navigation, search bar, hero, course cards, star divider, and footer graphics)
- `app/page.tsx` (Current home page implementation with Client/Server component structure)

## Code Inspected
- `app/page.tsx`: Currently has `hidden sm:flex` on header `<nav>`, causing navigation links to be hidden on mobile without a fallback menu control.
- `components/ui/vertex-components.tsx`: Contains Vertex UI components.

## Decisions & Assumptions
1. **Header Navigation & Mobile Menu**:
   - Preserve exact desktop navigation bar layout (`VertexLogo`, `Courses`, `My Learning`, notification bell icon, user avatar photo).
   - On mobile view (`< sm` screen width):
     - Display a hamburger menu button with `aria-expanded={isOpen}`, `aria-controls="mobile-navigation"`, and `aria-label="Toggle mobile menu"`.
     - Clicking/pressing the toggle reveals a smooth, accessible mobile dropdown menu containing `Courses` and `My Learning` links.
     - Implement proper keyboard navigation support (Escape key closes the mobile menu, keyboard focus returned cleanly).
2. **Hero & Course Cards**:
   - Maintain 1:1 visual match with `design/vertex-home.png`.
   - Keep search input with ⌘K shortcut badge, course cards (Next.js, Docker, TypeScript), weekly updates banner, and warm orange footer graphics.

## Files Expected to Touch
- `app/page.tsx`: Add mobile menu state, mobile toggle button, accessible `aria-*` attributes, Escape listener, and mobile dropdown menu.
- `prompts/vertex-home-page.md`: Update documentation with mobile navigation specs.

## Requirements
- Preserve desktop layout 100% accurately matching `design/vertex-home.png`.
- Expose accessible `Courses` and `My Learning` links on mobile view (< `sm` breakpoint).
- Full accessibility support: `aria-expanded`, `aria-controls`, `aria-label`, keyboard operation (Escape key handler).
- Zero TypeScript or lint errors.

## Security Considerations
- Pure frontend navigation; no private keys or tokens exposed.

## Acceptance Criteria
- [ ] Desktop navigation remains intact with `Courses` and `My Learning` links visible on `sm` screens and wider.
- [ ] Mobile view (< `sm`) displays an accessible menu toggle button.
- [ ] Toggling the mobile menu expands/collapses the navigation dropdown containing `Courses` and `My Learning`.
- [ ] Accessible attributes (`aria-expanded`, `aria-controls`, `aria-label`) are dynamically updated.
- [ ] Pressing `Escape` key closes the expanded mobile menu.
- [ ] `npm run lint` and `npm run build` pass with zero errors.

## Checks to Run
- `npm run lint`
- `npm run build`

## Manual Test Steps
1. Run `npm run dev` and open `http://localhost:3000`.
2. On desktop (>640px), verify standard navigation bar (`Courses`, `My Learning`).
3. Resize viewport to mobile (<640px).
4. Verify hamburger menu button appears.
5. Click/press `Enter` on the hamburger toggle button and verify `Courses` and `My Learning` dropdown menu expands with correct `aria-expanded="true"`.
6. Press `Escape` key and verify mobile dropdown menu closes.
