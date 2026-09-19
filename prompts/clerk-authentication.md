# Implementation Prompt: Add Clerk Authentication

## Goal
Set up Clerk authentication for the Vertex learning platform using the Clerk CLI, linking to Clerk application `app_3JWvXnz0KBlLbmJgZDox6qnlcvz`. Wire authentication through Next.js middleware/proxy, wrap the application with `ClerkProvider` in the root layout, and integrate responsive sign-in, sign-up, and `UserButton` controls into the header navigation.

## Skills Read & References Inspected
- `AGENTS.md` (Section 5: App structure & Clerk boundaries; Section 6: Tech stack; Section 7: Decisions; Section 12: Pitfalls & token security; Section 13: Checks to run)
- `clerk-setup` (`.agents/skills/clerk-setup/SKILL.md`: CLI-first setup, framework detection, `ClerkProvider` placement inside `<body>`, Next.js 15+ async `auth()`)
- `clerk-cli` (`.agents/skills/clerk-cli/SKILL.md`: `clerk --version`, `clerk update`, `clerk auth login`, `clerk init --app <id>`, `clerk doctor`)
- `clerk-nextjs-patterns` (`.agents/skills/clerk-nextjs-patterns/SKILL.md`: `<Show>` component, middleware matcher configuration, `await auth()`)

## Code Inspected
- `package.json`: Next.js 16.3.5, React 19.2.8, Tailwind CSS v4. No existing auth libraries.
- `app/layout.tsx`: Root layout with `<html>` and `<body>`. Currently does not have `ClerkProvider`.
- `app/page.tsx`: Home page navigation header currently displays a static Unsplash user avatar placeholder without functional sign-in, sign-up, or user profile controls.
- `next.config.ts`: Standard Next.js config; no existing proxy or middleware configured.

## Decisions & Assumptions
1. **CLI Installation & Auth**:
   - Check if `clerk` binary is present on PATH and update via `clerk update --yes` if present, or install globally via `npm install -g clerk`.
   - Run `clerk auth login` to ensure authenticated session before initialization.
2. **Project Initialization**:
   - Run `clerk init --app app_3JWvXnz0KBlLbmJgZDox6qnlcvz` against the existing Next.js project.
   - Do not pass `--framework` or `--pm` overrides unless CLI prompts.
3. **Proxy / Middleware Configuration**:
   - In Next.js (App Router), verify or create `proxy.ts` (or `middleware.ts`).
   - Configure `clerkMiddleware()` with `matcher` including Clerk's auto-proxy path:
     ```ts
     '/(api|trpc)(.*)',
     '/__clerk/:path*',
     ```
4. **Root Layout (`app/layout.tsx`)**:
   - Wrap `{children}` inside `<body>` with `<ClerkProvider>` from `@clerk/nextjs` (never wrap `<html>`).
5. **Auth Controls in Header Navigation (`app/page.tsx`)**:
   - Replace the static avatar placeholder with Clerk auth components:
     ```tsx
     <Show when="signed-out">
       <SignInButton mode="modal">
         <button className="text-sm font-medium text-[#334155] hover:text-[#0F172A] px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
           Sign in
         </button>
       </SignInButton>
       <SignUpButton mode="modal">
         <button className="text-sm font-semibold bg-[#0F172A] text-white hover:bg-[#1E293B] px-3.5 py-1.5 rounded-lg transition-all shadow-xs cursor-pointer">
           Sign up
         </button>
       </SignUpButton>
     </Show>
     <Show when="signed-in">
       <UserButton
         appearance={{
           elements: {
             avatarBox: "w-9 h-9 ring-1 ring-[#CBD5E1] hover:ring-[#F97316]/40 transition-all",
           },
         }}
       />
     </Show>
     ```
   - Retain mobile navigation responsiveness and existing layout styling.
6. **Health Check & Verification**:
   - Run `clerk doctor` to confirm env vars, middleware matcher, and SDK integrity.
   - Run `npm run lint` and `npm run build` to confirm zero build/type regressions.

## Files Expected to Touch
- `package.json` / `package-lock.json`: Added `@clerk/nextjs` dependency.
- `.env.local`: Configured with Clerk publishable & secret keys by `clerk init`.
- `proxy.ts` (or `middleware.ts`): Clerk middleware setup with matcher.
- `app/layout.tsx`: `ClerkProvider` placement inside `<body>`.
- `app/page.tsx`: Accessible header auth controls (`SignInButton`, `SignUpButton`, `UserButton`, `<Show>`).
- `prompts/clerk-authentication.md`: This implementation prompt document.

## Requirements
- Link project to Clerk app `app_3JWvXnz0KBlLbmJgZDox6qnlcvz`.
- Include `'/__clerk/:path*'` in middleware matcher.
- Place `ClerkProvider` inside `<body>`.
- Display polished sign-in, sign-up buttons when signed out, and user button when signed in.
- Pass `clerk doctor`, `npm run lint`, and `npm run build`.

## Security Considerations
- `CLERK_SECRET_KEY` must remain strictly server-side (in `.env.local`, never exposed to client bundles or committed to git).
- Only `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is exposed to the browser.
- `.env.local` is gitignored.

## Acceptance Criteria
- [ ] Clerk CLI installed / updated and authenticated.
- [ ] Project initialized and linked to Clerk app `app_3JWvXnz0KBlLbmJgZDox6qnlcvz`.
- [ ] Next.js middleware/proxy active with `'/__clerk/:path*'` in `matcher`.
- [ ] Root layout wraps children with `<ClerkProvider>` inside `<body>`.
- [ ] Navigation header displays "Sign in" and "Sign up" when signed out, and `UserButton` when signed in.
- [ ] `clerk doctor` health check passes.
- [ ] `npm run lint` and `npm run build` pass with zero errors.

## Checks to Run
- `clerk doctor`
- `npm run lint`
- `npm run build`

## Manual Test Steps
1. Run `npm run dev` and open `http://localhost:3000`.
2. Observe header navigation: confirm "Sign in" and "Sign up" buttons are visible in signed-out state.
3. Click "Sign up" button: confirm Clerk modal / sign-up flow opens.
4. Complete test sign-up.
5. Confirm user is signed in and `UserButton` appears in header replacing the static placeholder.
6. Click `UserButton` to open account management menu.
