"use client";

import { useState, useEffect, useRef } from "react";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { VertexLogo } from "@/components/ui/vertex-components";

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full border-b border-[#E2E8F0]/70 bg-[#FAF8F5]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <VertexLogo />
          </Link>
          <nav className="hidden sm:flex items-center gap-7">
            <Link
              href="/courses"
              className="text-sm font-medium text-[#334155] hover:text-[#0F172A] transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/my-learning"
              className="text-sm font-medium text-[#334155] hover:text-[#0F172A] transition-colors"
            >
              My Learning
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-full transition-all cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </button>

          <div className="hidden sm:flex items-center gap-3">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="text-sm font-medium text-[#334155] hover:text-[#0F172A] px-3 py-1.5 rounded-lg hover:bg-[#F1F5F9] transition-colors cursor-pointer">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="text-sm font-semibold bg-[#0F172A] text-white hover:bg-[#1E293B] px-3.5 py-1.5 rounded-lg transition-all shadow-xs cursor-pointer">
                  Sign up
                </button>
              </SignUpButton>
            </Show>
          </div>

          <Show when="signed-in">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9 ring-1 ring-[#CBD5E1] hover:ring-[#F97316]/40 transition-all",
                },
              }}
            />
          </Show>

          {/* Mobile Navigation Toggle Button */}
          <button
            ref={menuToggleRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            className="sm:hidden p-2 text-[#334155] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-lg transition-all cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="sm:hidden border-t border-[#E2E8F0] bg-[#FAF8F5] px-6 py-4 flex flex-col gap-3 shadow-md"
        >
          <Link
            href="/courses"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-[#334155] hover:text-[#0F172A] py-2 px-3 rounded-md hover:bg-[#F1F5F9] transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/my-learning"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-[#334155] hover:text-[#0F172A] py-2 px-3 rounded-md hover:bg-[#F1F5F9] transition-colors"
          >
            My Learning
          </Link>
          <div className="pt-2 border-t border-[#E2E8F0]/80 flex flex-col gap-2">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-left text-base font-medium text-[#334155] hover:text-[#0F172A] py-2 px-3 rounded-md hover:bg-[#F1F5F9] transition-colors cursor-pointer"
                >
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center text-sm font-semibold bg-[#0F172A] text-white hover:bg-[#1E293B] py-2.5 px-4 rounded-lg transition-all shadow-xs cursor-pointer"
                >
                  Sign up
                </button>
              </SignUpButton>
            </Show>
          </div>
        </nav>
      )}
    </header>
  );
}
