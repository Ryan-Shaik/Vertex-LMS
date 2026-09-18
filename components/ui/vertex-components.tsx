"use client";

import React from "react";

// --- LOGO ---
export function VertexLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L16 26L28 6H20L16 14.5L12 6H4Z"
          fill="#F97316"
        />
      </svg>
      <span className="font-serif text-2xl font-bold tracking-tight text-[#0F172A]">
        Vertex
      </span>
    </div>
  );
}

// --- BUTTONS ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "text";
  size?: "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center font-medium transition-all duration-150 rounded-[12px] h-[44px] cursor-pointer disabled:cursor-not-allowed text-sm";
  
  const paddingStyle = size === "lg" ? "px-4" : "px-3";

  const variantStyles = {
    primary:
      "bg-[#F97316] text-white hover:bg-[#FB923C] active:bg-[#EA580C] disabled:bg-[#FFEEE5] disabled:text-[#FDBA74] shadow-sm",
    secondary:
      "bg-white text-[#334155] border border-[#CBD5E1] hover:bg-[#F8FAFC] hover:border-[#94A3B8] active:bg-[#F1F5F9] disabled:bg-[#FAFAFC] disabled:text-[#94A3B8] disabled:border-[#E2E8F0] shadow-sm",
    tertiary:
      "bg-white text-[#334155] border border-[#E2E8F0] hover:bg-[#F8FAFC] hover:border-[#CBD5E1] active:bg-[#F1F5F9] disabled:bg-[#FAFAFC] disabled:text-[#94A3B8] disabled:border-[#E2E8F0] shadow-sm",
    text: "bg-transparent text-[#F97316] hover:text-[#FB923C] hover:bg-[#FFEEE5]/50 active:text-[#EA580C] disabled:text-[#FED7AA]",
  };

  return (
    <button
      disabled={disabled}
      className={`${baseStyle} ${paddingStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className="flex items-center gap-2">
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </span>
    </button>
  );
}

// --- INPUT & SELECT ---
export function Input({
  placeholder = "Search anything...",
  shortcut = "⌘K",
  className = "",
  value,
  onChange,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { shortcut?: string }) {
  return (
    <div className="relative flex items-center w-full">
      <div className="absolute left-3.5 text-[#64748B]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-[44px] pl-10 pr-12 text-sm bg-white border border-[#E2E8F0] rounded-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#FB923C] focus:ring-2 focus:ring-[#FB923C]/20 transition-all ${className}`}
        {...props}
      />
      {shortcut && (
        <div className="absolute right-3 px-1.5 py-0.5 text-[11px] font-medium text-[#64748B] bg-[#F1F5F9] border border-[#CBD5E1] rounded-[4px] pointer-events-none">
          {shortcut}
        </div>
      )}
    </div>
  );
}

export function Select({
  options = ["Most Relevant", "Newest", "Oldest"],
  value,
  onChange,
  className = "",
}: {
  options?: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}) {
  return (
    <div className="relative flex items-center w-full">
      <select
        value={value}
        onChange={onChange}
        className={`w-full h-[44px] pl-4 pr-10 text-sm font-medium bg-white border border-[#E2E8F0] rounded-[12px] text-[#0F172A] appearance-none cursor-pointer focus:outline-none focus:border-[#FB923C] focus:ring-2 focus:ring-[#FB923C]/20 transition-all ${className}`}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute right-3.5 pointer-events-none text-[#64748B]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}

// --- BADGES ---
export function Badge({
  type = "video",
  children,
}: {
  type?: "video" | "lesson" | "popular";
  children?: React.ReactNode;
}) {
  const styles = {
    video: "bg-[#FFEEE5] text-[#F97316]",
    lesson: "bg-[#F1F5F9] text-[#334155]",
    popular: "bg-[#FFEEE5] text-[#F97316]",
  };

  const defaultText = {
    video: "VIDEO",
    lesson: "LESSON",
    popular: "POPULAR",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-[11px] font-bold tracking-wider uppercase rounded-[4px] ${styles[type]}`}
    >
      {children || defaultText[type]}
    </span>
  );
}

// --- STATUS INDICATORS ---
export function StatusIndicator({
  status,
}: {
  status: "in-progress" | "completed" | "now-playing" | "locked";
}) {
  const config = {
    "in-progress": {
      text: "In Progress",
      color: "text-[#334155]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
    completed: {
      text: "Completed",
      color: "text-[#334155]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    "now-playing": {
      text: "Now Playing",
      color: "text-[#334155]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#F97316" stroke="none">
          <circle cx="12" cy="12" r="10" fill="#FFEEE5" />
          <polygon points="10,8 16,12 10,16" fill="#F97316" />
        </svg>
      ),
    },
    locked: {
      text: "Locked",
      color: "text-[#334155]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
  };

  const item = config[status];

  return (
    <div className="inline-flex items-center gap-2 text-sm font-medium text-[#334155]">
      {item.icon}
      <span>{item.text}</span>
    </div>
  );
}

// --- PROGRESS BAR ---
export function ProgressBar({
  progress = 35,
  showLabel = true,
}: {
  progress?: number;
  showLabel?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="relative flex-1 h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#F97316] rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-semibold text-[#64748B] whitespace-nowrap">
          <strong className="text-[#0F172A]">{progress}%</strong> complete
        </span>
      )}
    </div>
  );
}

// --- CARDS ---
export function CourseCard({
  title = "Next.js for Production",
  description = "Build scalable, high-performance web applications with Next.js.",
  level = "Intermediate",
  duration = "18h 24m",
  modules = "12 modules",
}: {
  title?: string;
  description?: string;
  level?: string;
  duration?: string;
  modules?: string;
}) {
  return (
    <div className="p-5 bg-white border border-[#E2E8F0] rounded-[16px] shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
      <div className="flex items-start gap-3.5">
        <div className="w-12 h-12 bg-[#0F172A] text-white rounded-[12px] flex items-center justify-center font-bold text-xl shrink-0">
          N
        </div>
        <div>
          <h3 className="font-sans font-semibold text-base text-[#0F172A]">
            {title}
          </h3>
          <p className="text-xs text-[#64748B] mt-1 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 pt-3 border-t border-[#F1F5F9] text-xs text-[#64748B]">
        <span className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20v-6M6 20V10M18 20V4" />
          </svg>
          {level}
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          {duration}
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          {modules}
        </span>
      </div>
    </div>
  );
}

export function LessonCardVideo({
  title = "Data Fetching in Server Components",
  description = "Learn how to fetch data on the server using async/await and Next.js best practices.",
  lessonMeta = "Lesson 5.1",
  duration = "12:45",
  watchTime = "12:45",
}: {
  title?: string;
  description?: string;
  lessonMeta?: string;
  duration?: string;
  watchTime?: string;
}) {
  return (
    <div className="p-5 bg-white border border-[#E2E8F0] rounded-[16px] shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
      <Badge type="video" />
      <h3 className="font-sans font-semibold text-base text-[#0F172A] mt-1">
        {title}
      </h3>
      <p className="text-xs text-[#64748B] leading-relaxed">
        {description}
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-[#F1F5F9] text-xs text-[#64748B]">
        <span>
          {lessonMeta} • {duration}
        </span>
        <Button variant="text" size="md" icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        }>
          Watch from {watchTime}
        </Button>
      </div>
    </div>
  );
}

export function LessonCardLesson({
  title = "Data Fetching & Caching",
  description = "Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance.",
  moduleMeta = "Module 5",
}: {
  title?: string;
  description?: string;
  moduleMeta?: string;
}) {
  return (
    <div className="p-5 bg-white border border-[#E2E8F0] rounded-[16px] shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
      <Badge type="lesson" />
      <h3 className="font-sans font-semibold text-base text-[#0F172A] mt-1">
        {title}
      </h3>
      <p className="text-xs text-[#64748B] leading-relaxed">
        {description}
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-[#F1F5F9] text-xs text-[#64748B]">
        <span>{moduleMeta}</span>
        <Button variant="tertiary" size="md" icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        }>
          View lesson
        </Button>
      </div>
    </div>
  );
}

export function ResourceCard({
  title = "Caching and Revalidation Guide",
  description = "Deep dive into Next.js caching strategies.",
  format = "PDF",
  size = "1.2 MB",
}: {
  title?: string;
  description?: string;
  format?: string;
  size?: string;
}) {
  return (
    <div className="p-5 bg-white border border-[#E2E8F0] rounded-[16px] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
      <div className="p-3 bg-[#F1F5F9] text-[#334155] rounded-[12px] shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-sans font-semibold text-sm text-[#0F172A] truncate">
          {title}
        </h4>
        <p className="text-xs text-[#64748B] mt-0.5 line-clamp-1">
          {description}
        </p>
        <div className="flex items-center justify-between mt-3 text-xs text-[#64748B]">
          <span>
            {format} • {size}
          </span>
          <button className="text-[#F97316] hover:text-[#FB923C] cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// --- NAVIGATION, BREADCRUMBS, PAGINATION ---
export function Breadcrumbs({
  items = ["All Courses", "Next.js for Production", "Data Fetching & Caching"],
}: {
  items?: string[];
}) {
  return (
    <nav className="flex items-center gap-2 text-xs text-[#64748B]">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
          <span
            className={
              idx === items.length - 1
                ? "font-medium text-[#0F172A]"
                : "hover:text-[#334155] cursor-pointer"
            }
          >
            {item}
          </span>
        </React.Fragment>
      ))}
    </nav>
  );
}

export function Pagination({
  currentPage = 1,
  totalPages = 8,
}: {
  currentPage?: number;
  totalPages?: number;
}) {
  return (
    <div className="flex items-center gap-1.5 text-xs font-medium">
      <button className="w-8 h-8 flex items-center justify-center rounded-[8px] border border-[#E2E8F0] text-[#64748B] hover:bg-[#F1F5F9] cursor-pointer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {[1, 2, 3].map((page) => (
        <button
          key={page}
          className={`w-8 h-8 flex items-center justify-center rounded-[8px] cursor-pointer ${
            page === currentPage
              ? "border border-[#F97316] bg-[#FFEEE5] text-[#F97316] font-semibold"
              : "text-[#64748B] hover:bg-[#F1F5F9]"
          }`}
        >
          {page}
        </button>
      ))}

      <span className="px-1 text-[#94A3B8]">...</span>

      <button className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[#64748B] hover:bg-[#F1F5F9] cursor-pointer">
        {totalPages}
      </button>


      <button className="w-8 h-8 flex items-center justify-center rounded-[8px] border border-[#E2E8F0] text-[#64748B] hover:bg-[#F1F5F9] cursor-pointer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m9 18 6-6 6-6" />
        </svg>
      </button>
    </div>
  );
}

// --- PRINCIPLES ---
export function PrincipleCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 p-4 bg-white border border-[#E2E8F0] rounded-[12px]">
      <div className="p-2.5 bg-[#F1F5F9] text-[#334155] rounded-[8px] shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-sans font-semibold text-xs text-[#0F172A]">
          {title}
        </h4>
        <p className="text-[11px] text-[#64748B] mt-0.5 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
