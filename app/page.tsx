import SiteHeader from "@/components/layout/site-header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#0F172A] font-sans relative overflow-x-hidden selection:bg-[#FFEEE5] selection:text-[#F97316]">
      {/* Background Subtle Texture / Diagonal Grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0F172A 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <SiteHeader />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center z-10">
        {/* Hero Section */}
        <section className="w-full max-w-4xl mx-auto px-6 pt-16 pb-12 flex flex-col items-center text-center">
          {/* Intelligent Learning Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-[11px] font-semibold tracking-wider text-[#EA580C] bg-[#FFF7ED] border border-[#FED7AA] rounded-full uppercase shadow-2xs mb-6">
            Intelligent Learning
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-[64px] font-bold tracking-tight text-[#0F172A] max-w-3xl leading-[1.12]">
            Search your learning <br className="hidden sm:inline" />
            in plain English.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-[#475569] text-base sm:text-lg max-w-xl leading-relaxed font-normal">
            Vertex understands what you want to learn and finds the exact lessons across all your courses.
          </p>

          {/* Explore Courses CTA Button */}
          <div className="mt-8">
            <Link 
              href="/courses" 
              className="inline-flex items-center gap-2.5 bg-[#E0561B] hover:bg-[#C94A14] text-white px-6 py-3 rounded-[12px] font-medium text-sm shadow-sm transition-all duration-150 cursor-pointer active:scale-[0.99]"
            >
              <span>Explore Courses</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Search Input Box */}
          <div className="w-full max-w-2xl mt-10">
            <div className="relative flex items-center w-full bg-white border border-[#E2E8F0] rounded-[16px] shadow-xs hover:shadow-sm focus-within:shadow-md focus-within:border-[#FB923C] focus-within:ring-2 focus-within:ring-[#FB923C]/20 transition-all px-4 py-2.5">
              <div className="text-[#64748B] shrink-0 pl-1">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Ask anything about your learning..."
                className="w-full bg-transparent text-[15px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none px-3.5 py-1.5 font-normal"
              />
              <div className="shrink-0 flex items-center justify-center px-3 py-1 bg-white border border-[#E2E8F0] rounded-[8px] text-xs font-medium text-[#475569] shadow-2xs whitespace-nowrap select-none font-sans min-w-[42px]">
                ⌘ K
              </div>
            </div>
          </div>
        </section>

        {/* All Courses Section */}
        <section className="w-full max-w-5xl mx-auto px-6 pt-6 pb-12">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold text-[#0F172A]">
              All Courses
            </h2>
            <Link 
              href="/courses" 
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#E0561B] hover:text-[#C94A14] transition-colors"
            >
              <span>View all courses</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Next.js for Production */}
            <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-[#0F172A] text-white rounded-[14px] flex items-center justify-center font-bold text-2xl mb-5 shadow-xs group-hover:scale-105 transition-transform">
                  N
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0F172A] group-hover:text-[#E0561B] transition-colors">
                  Next.js for Production
                </h3>
                <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                  Build scalable, high-performance web applications with Next.js.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-5 mt-6 border-t border-[#F1F5F9] text-[11px] font-medium text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20v-6M6 20V10M18 20V4" />
                  </svg>
                  Intermediate
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  18h 24m
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  12 modules
                </span>
              </div>
            </div>

            {/* Card 2: Docker Essentials */}
            <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-[#F0F9FF] border border-[#BAE6FD]/60 rounded-[14px] flex items-center justify-center mb-5 p-2.5 group-hover:scale-105 transition-transform">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.5C21.2 12 20.2 12 19.5 12.5C18.8 13 18.2 13 17.5 12.5C16.8 12 16.2 12 15.5 12.5C14.8 13 14.2 13 13.5 12.5" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
                    <rect x="3" y="9" width="2.5" height="2.5" rx="0.5" fill="#0284C7" />
                    <rect x="6.5" y="9" width="2.5" height="2.5" rx="0.5" fill="#0284C7" />
                    <rect x="10" y="9" width="2.5" height="2.5" rx="0.5" fill="#0284C7" />
                    <rect x="6.5" y="6" width="2.5" height="2.5" rx="0.5" fill="#0284C7" />
                    <rect x="10" y="6" width="2.5" height="2.5" rx="0.5" fill="#0284C7" />
                    <rect x="10" y="3" width="2.5" height="2.5" rx="0.5" fill="#0284C7" />
                    <path d="M2 13C2.5 15.5 5 18 10 18C16 18 19.5 14.5 20.5 12.5C21.5 12.5 22.5 11.5 22 10.5C21 9.5 19.5 10 19 10.5C18.5 9 17 8 15.5 8.5" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0F172A] group-hover:text-[#E0561B] transition-colors">
                  Docker Essentials
                </h3>
                <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                  Containerize applications and streamline your development workflow.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-5 mt-6 border-t border-[#F1F5F9] text-[11px] font-medium text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20v-6M6 20V10M18 20V4" />
                  </svg>
                  Beginner
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  10h 12m
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  8 modules
                </span>
              </div>
            </div>

            {/* Card 3: TypeScript Deep Dive */}
            <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-[#3178C6] text-white rounded-[14px] flex items-center justify-center font-bold text-xl mb-5 shadow-xs group-hover:scale-105 transition-transform">
                  TS
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0F172A] group-hover:text-[#E0561B] transition-colors">
                  TypeScript Deep Dive
                </h3>
                <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                  Go beyond the basics and write safer, more expressive code.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-5 mt-6 border-t border-[#F1F5F9] text-[11px] font-medium text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20v-6M6 20V10M18 20V4" />
                  </svg>
                  Intermediate
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  14h 36m
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  10 modules
                </span>
              </div>
            </div>
          </div>

          {/* Star Announcement Divider Line */}
          <div className="flex items-center justify-center gap-4 my-14">
            <div className="h-[1px] bg-[#E2E8F0] flex-1 max-w-[200px] sm:max-w-[280px]" />
            <div className="flex items-center gap-2 text-xs text-[#64748B] font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E0561B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>New courses and lessons added every week.</span>
            </div>
            <div className="h-[1px] bg-[#E2E8F0] flex-1 max-w-[200px] sm:max-w-[280px]" />
          </div>
        </section>
      </main>

      {/* Bottom Aesthetic Warm Orange Bar Visual Accent */}
      <footer className="w-full relative h-36 mt-auto overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-2 sm:gap-4 px-4 h-full opacity-60">
          <div className="w-12 sm:w-16 h-[75%] bg-gradient-to-t from-[#F97316]/40 via-[#F97316]/15 to-transparent rounded-t-lg" />
          <div className="w-12 sm:w-16 h-[90%] bg-gradient-to-t from-[#FB923C]/50 via-[#FB923C]/20 to-transparent rounded-t-lg" />
          <div className="w-12 sm:w-16 h-[60%] bg-gradient-to-t from-[#F97316]/30 via-[#F97316]/10 to-transparent rounded-t-lg" />
          <div className="w-12 sm:w-16 h-[100%] bg-gradient-to-t from-[#EA580C]/55 via-[#EA580C]/25 to-transparent rounded-t-lg" />
          <div className="w-12 sm:w-16 h-[80%] bg-gradient-to-t from-[#F97316]/40 via-[#F97316]/15 to-transparent rounded-t-lg" />
          <div className="w-12 sm:w-16 h-[65%] bg-gradient-to-t from-[#FB923C]/45 via-[#FB923C]/15 to-transparent rounded-t-lg" />
          <div className="w-12 sm:w-16 h-[85%] bg-gradient-to-t from-[#F97316]/35 via-[#F97316]/10 to-transparent rounded-t-lg" />
        </div>
      </footer>
    </div>
  );
}
