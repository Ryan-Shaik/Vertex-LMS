"use client";

import React, { useState } from "react";
import {
  VertexLogo,
  Button,
  Input,
  Select,
  Badge,
  StatusIndicator,
  ProgressBar,
  CourseCard,
  LessonCardVideo,
  LessonCardLesson,
  ResourceCard,
  Breadcrumbs,
  Pagination,
  PrincipleCard,
} from "@/components/ui/vertex-components";

export default function VertexDesignSystemPage() {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("Most Relevant");
  const [progressVal, setProgressVal] = useState(35);

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#0F172A] p-6 sm:p-12 md:p-16 max-w-7xl mx-auto space-y-12">
      {/* HEADER SECTION */}
      <header className="flex flex-col md:flex-row md:items-start justify-between pb-10 border-b border-[#E2E8F0] gap-8">
        <div className="space-y-4 max-w-2xl">
          <VertexLogo />
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] pt-2">
            Design System
          </h1>
          <p className="text-base text-[#64748B] leading-relaxed">
            A unified design language for Vertex learning platform. Clean, modern and
            focused on clarity, consistency and intuitive learning experiences.
          </p>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] pt-2">
            VERSION 1.0 • MAY 2025
          </div>
        </div>

        {/* Quick section index badge grid */}
        <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-5 shadow-sm hidden lg:block w-72">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
            Design Tokens & Components
          </h4>
          <ul className="text-xs space-y-1.5 text-[#334155] font-medium">
            <li className="flex justify-between hover:text-[#F97316] cursor-pointer">
              <span>01 Colors</span> <span className="text-[#94A3B8]">5 Primary / 8 Neutral</span>
            </li>
            <li className="flex justify-between hover:text-[#F97316] cursor-pointer">
              <span>02 Typography</span> <span className="text-[#94A3B8]">Playfair & Inter</span>
            </li>
            <li className="flex justify-between hover:text-[#F97316] cursor-pointer">
              <span>03 Type Scale</span> <span className="text-[#94A3B8]">8 Scale Styles</span>
            </li>
            <li className="flex justify-between hover:text-[#F97316] cursor-pointer">
              <span>04 Spacing System</span> <span className="text-[#94A3B8]">Base unit 4px</span>
            </li>
            <li className="flex justify-between hover:text-[#F97316] cursor-pointer">
              <span>05 Radius & Shadows</span> <span className="text-[#94A3B8]">5 Radius / 4 Elevation</span>
            </li>
            <li className="flex justify-between hover:text-[#F97316] cursor-pointer">
              <span>07-12 Component Library</span> <span className="text-[#94A3B8]">Buttons, Cards, Forms</span>
            </li>
          </ul>
        </div>
      </header>

      {/* 01 COLORS */}
      <section className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-2">
          <span className="text-[#94A3B8]">01</span> COLORS
        </h2>

        {/* Primary Palette */}
        <div>
          <h3 className="text-sm font-semibold text-[#0F172A] mb-3">Primary</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { label: "Primary 500", hex: "#F97316", bg: "bg-[#F97316]", text: "text-white" },
              { label: "Primary 400", hex: "#FB923C", bg: "bg-[#FB923C]", text: "text-white" },
              { label: "Primary 300", hex: "#FDBA74", bg: "bg-[#FDBA74]", text: "text-[#0F172A]" },
              { label: "Primary 200", hex: "#FED7AA", bg: "bg-[#FED7AA]", text: "text-[#0F172A]" },
              { label: "Primary 100", hex: "#FFEEE5", bg: "bg-[#FFEEE5]", text: "text-[#0F172A]" },
            ].map((c) => (
              <div key={c.label} className="flex flex-col gap-2">
                <div className={`h-20 rounded-[12px] ${c.bg} ${c.text} p-3 flex flex-col justify-end shadow-sm border border-black/5`}>
                  <span className="text-xs font-bold">{c.label}</span>
                  <span className="text-[11px] opacity-90">{c.hex}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Neutral Palette */}
        <div>
          <h3 className="text-sm font-semibold text-[#0F172A] mb-3">Neutral</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {[
              { label: "Neutral 900", hex: "#0F172A", bg: "bg-[#0F172A]", text: "text-white" },
              { label: "Neutral 700", hex: "#334155", bg: "bg-[#334155]", text: "text-white" },
              { label: "Neutral 500", hex: "#64748B", bg: "bg-[#64748B]", text: "text-white" },
              { label: "Neutral 300", hex: "#CBD5E1", bg: "bg-[#CBD5E1]", text: "text-[#0F172A]" },
              { label: "Neutral 200", hex: "#E2E8F0", bg: "bg-[#E2E8F0]", text: "text-[#0F172A]" },
              { label: "Neutral 100", hex: "#F1F5F9", bg: "bg-[#F1F5F9]", text: "text-[#0F172A]" },
              { label: "Neutral 50", hex: "#FAFAFC", bg: "bg-[#FAFAFC]", text: "text-[#0F172A]" },
              { label: "White", hex: "#FFFFFF", bg: "bg-white", text: "text-[#0F172A]" },
            ].map((c) => (
              <div key={c.label} className="flex flex-col gap-2">
                <div className={`h-20 rounded-[12px] ${c.bg} ${c.text} p-2.5 flex flex-col justify-end border border-[#E2E8F0] shadow-sm`}>
                  <span className="text-[11px] font-bold truncate">{c.label}</span>
                  <span className="text-[10px] opacity-80">{c.hex}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPOGRAPHY & TYPE SCALE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 02 TYPOGRAPHY */}
        <section className="lg:col-span-4 bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-sm space-y-6 flex flex-col justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-2">
            <span className="text-[#94A3B8]">02</span> TYPOGRAPHY
          </h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="font-serif text-5xl font-bold text-[#0F172A]">Ag</span>
              <h3 className="font-serif text-xl font-bold text-[#0F172A]">Playfair Display</h3>
              <p className="text-xs text-[#64748B]">Elegant • Readable • Timeless</p>
            </div>

            <div className="pt-4 border-t border-[#F1F5F9] space-y-2">
              <span className="font-sans text-5xl font-bold text-[#0F172A]">Ag</span>
              <h3 className="font-sans text-xl font-bold text-[#0F172A]">Inter</h3>
              <p className="text-xs text-[#64748B]">Clean • Modern • Highly legible</p>
            </div>
          </div>
        </section>

        {/* 03 TYPE SCALE */}
        <section className="lg:col-span-8 bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-2">
            <span className="text-[#94A3B8]">03</span> TYPE SCALE
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-xs font-semibold text-[#64748B]">
                  <th className="pb-3 font-medium">Style</th>
                  <th className="pb-3 font-medium">Font</th>
                  <th className="pb-3 font-medium">Size / Line Height</th>
                  <th className="pb-3 font-medium">Weight</th>
                  <th className="pb-3 font-medium">Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] text-xs text-[#334155]">
                <tr>
                  <td className="py-3 font-bold text-[#0F172A]">Display 1</td>
                  <td className="py-3 font-serif">Playfair Display</td>
                  <td className="py-3">48 / 56</td>
                  <td className="py-3 font-semibold">Bold</td>
                  <td className="py-3 text-[#64748B]">Page titles</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-[#0F172A]">Display 2</td>
                  <td className="py-3 font-serif">Playfair Display</td>
                  <td className="py-3">36 / 44</td>
                  <td className="py-3 font-semibold">Bold</td>
                  <td className="py-3 text-[#64748B]">Section titles</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#0F172A]">Heading 1</td>
                  <td className="py-3 font-sans">Inter</td>
                  <td className="py-3">28 / 36</td>
                  <td className="py-3 font-semibold">Semi Bold</td>
                  <td className="py-3 text-[#64748B]">Card titles</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#0F172A]">Heading 2</td>
                  <td className="py-3 font-sans">Inter</td>
                  <td className="py-3">22 / 30</td>
                  <td className="py-3 font-semibold">Semi Bold</td>
                  <td className="py-3 text-[#64748B]">Sub section</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-[#0F172A]">Heading 3</td>
                  <td className="py-3 font-sans">Inter</td>
                  <td className="py-3">18 / 26</td>
                  <td className="py-3 font-medium">Medium</td>
                  <td className="py-3 text-[#64748B]">Small titles</td>
                </tr>
                <tr>
                  <td className="py-3 text-[#0F172A]">Body Large</td>
                  <td className="py-3 font-sans">Inter</td>
                  <td className="py-3">16 / 24</td>
                  <td className="py-3">Regular</td>
                  <td className="py-3 text-[#64748B]">Body copy</td>
                </tr>
                <tr>
                  <td className="py-3 text-[#0F172A]">Body</td>
                  <td className="py-3 font-sans">Inter</td>
                  <td className="py-3">14 / 20</td>
                  <td className="py-3 font-normal">Regular</td>
                  <td className="py-3 text-[#64748B]">Supporting text</td>
                </tr>
                <tr>
                  <td className="py-3 text-[#0F172A]">Small</td>
                  <td className="py-3 font-sans">Inter</td>
                  <td className="py-3">12 / 16</td>
                  <td className="py-3 font-normal">Regular</td>
                  <td className="py-3 text-[#64748B]">Captions, meta</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* 04 SPACING & 05 RADIUS & SHADOWS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 04 SPACING SYSTEM */}
        <section className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-2">
              <span className="text-[#94A3B8]">04</span> SPACING SYSTEM
            </h2>
            <span className="text-xs font-medium text-[#64748B]">Base unit: 4px</span>
          </div>

          <div className="flex items-end justify-between gap-1 pt-4 overflow-x-auto pb-2">
            {[
              { val: 4, rem: "0.25rem", h: "h-2 w-2" },
              { val: 8, rem: "0.5rem", h: "h-4 w-4" },
              { val: 12, rem: "0.75rem", h: "h-6 w-6" },
              { val: 16, rem: "1rem", h: "h-8 w-8" },
              { val: 24, rem: "1.5rem", h: "h-10 w-10" },
              { val: 32, rem: "2rem", h: "h-12 w-12" },
              { val: 40, rem: "2.5rem", h: "h-14 w-14" },
              { val: 48, rem: "3rem", h: "h-16 w-16" },
              { val: 64, rem: "4rem", h: "h-20 w-20" },
            ].map((s) => (
              <div key={s.val} className="flex flex-col items-center gap-2 shrink-0">
                <div className={`bg-[#FFEEE5] border border-[#FDBA74] rounded-[4px] ${s.h}`} />
                <span className="text-xs font-semibold text-[#0F172A]">{s.val}</span>
                <span className="text-[10px] text-[#64748B]">({s.rem})</span>
              </div>
            ))}
          </div>
        </section>

        {/* 05 RADIUS & SHADOWS */}
        <section className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-2">
            <span className="text-[#94A3B8]">05</span> RADIUS & SHADOWS
          </h2>

          {/* Radius Grid */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-[#64748B]">Radius</h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {[
                { name: "4px", tag: "xs", radius: "rounded-[4px]" },
                { name: "8px", tag: "sm", radius: "rounded-[8px]" },
                { name: "12px", tag: "md", radius: "rounded-[12px]" },
                { name: "16px", tag: "lg", radius: "rounded-[16px]" },
                { name: "24px", tag: "xl", radius: "rounded-[24px]" },
                { name: "Full", tag: "circle", radius: "rounded-full" },
              ].map((r) => (
                <div key={r.name} className="flex flex-col items-center gap-1.5 p-3 border border-[#E2E8F0] bg-[#FAFAFC] rounded-[12px]">
                  <div className={`w-10 h-10 border-2 border-[#F97316] bg-white ${r.radius}`} />
                  <span className="text-xs font-bold text-[#0F172A]">{r.name}</span>
                  <span className="text-[10px] text-[#64748B]">({r.tag})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shadows Grid */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-semibold text-[#64748B]">Shadows</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: "Sm", css: "shadow-[0_1px_2px_0_rgba(15,23,42,0.05)]", spec: "0 1px 2px 0\nrgba(15, 23, 42, 0.05)" },
                { name: "Md", css: "shadow-[0_4px_12px_-2px_rgba(15,23,42,0.08)]", spec: "0 4px 12px -2px\nrgba(15, 23, 42, 0.08)" },
                { name: "Lg", css: "shadow-[0_12px_24px_-4px_rgba(15,23,42,0.10)]", spec: "0 12px 24px -4px\nrgba(15, 23, 42, 0.10)" },
                { name: "Xl", css: "shadow-[0_20px_40px_-8px_rgba(15,23,42,0.12)]", spec: "0 20px 40px -8px\nrgba(15, 23, 42, 0.12)" },
              ].map((s) => (
                <div key={s.name} className={`p-4 bg-white border border-[#E2E8F0] rounded-[12px] ${s.css} space-y-1`}>
                  <h4 className="text-xs font-bold text-[#0F172A]">{s.name}</h4>
                  <pre className="text-[9px] text-[#64748B] font-mono leading-tight whitespace-pre-wrap">{s.spec}</pre>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 06 ICONS & 07 BUTTONS & 08 INPUTS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 06 ICONS */}
        <section className="lg:col-span-4 bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-2">
            <span className="text-[#94A3B8]">06</span> ICONS
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-semibold text-[#64748B] mb-2.5">Outline Style</h3>
              <div className="flex flex-wrap items-center gap-3 text-[#334155]">
                <div className="p-2 border border-[#E2E8F0] rounded-[8px] hover:border-[#F97316] cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                </div>
                <div className="p-2 border border-[#E2E8F0] rounded-[8px] hover:border-[#F97316] cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
                <div className="p-2 border border-[#E2E8F0] rounded-[8px] hover:border-[#F97316] cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                </div>
                <div className="p-2 border border-[#E2E8F0] rounded-[8px] hover:border-[#F97316] cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div className="p-2 border border-[#E2E8F0] rounded-[8px] hover:border-[#F97316] cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                </div>
                <div className="p-2 border border-[#E2E8F0] rounded-[8px] hover:border-[#F97316] cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                </div>
                <div className="p-2 border border-[#E2E8F0] rounded-[8px] hover:border-[#F97316] cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="p-2 border border-[#E2E8F0] rounded-[8px] hover:border-[#F97316] cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div className="p-2 border border-[#E2E8F0] rounded-[8px] hover:border-[#F97316] cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-[#64748B] mb-2.5">Filled Style</h3>
              <div className="flex flex-wrap items-center gap-3 text-[#334155]">
                <div className="p-2 border border-[#E2E8F0] rounded-[8px] hover:border-[#F97316] cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/></svg>
                </div>
                <div className="p-2 border border-[#E2E8F0] rounded-[8px] hover:border-[#F97316] cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div className="p-2 border border-[#E2E8F0] rounded-[8px] hover:border-[#F97316] cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                </div>
                <div className="p-2 border border-[#E2E8F0] rounded-[8px] hover:border-[#F97316] cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#F1F5F9] text-xs text-[#64748B] space-y-1">
              <h4 className="font-semibold text-[#0F172A]">Icon Specs</h4>
              <ul className="list-disc list-inside space-y-0.5">
                <li>24x24px grid</li>
                <li>2px stroke width (outline)</li>
                <li>Rounded line caps</li>
                <li>Consistent optical balance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 07 BUTTONS */}
        <section className="lg:col-span-8 bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-2">
            <span className="text-[#94A3B8]">07</span> BUTTONS
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E2E8F0] text-xs font-semibold text-[#64748B]">
                  <th className="pb-3 font-medium">State</th>
                  <th className="pb-3 font-medium">Primary</th>
                  <th className="pb-3 font-medium">Secondary</th>
                  <th className="pb-3 font-medium">Tertiary</th>
                  <th className="pb-3 font-medium">Text</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] text-xs">
                <tr>
                  <td className="py-3 font-semibold text-[#64748B]">Default</td>
                  <td className="py-3">
                    <Button variant="primary" size="md">Get Started</Button>
                  </td>
                  <td className="py-3">
                    <Button variant="secondary" size="md">Explore Courses</Button>
                  </td>
                  <td className="py-3">
                    <Button variant="tertiary" size="md" icon={
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    }>
                      View Lesson
                    </Button>
                  </td>
                  <td className="py-3">
                    <Button variant="text" size="md" icon={
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    }>
                      Watch Video
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#64748B]">Hover</td>
                  <td className="py-3">
                    <Button variant="primary" size="md" className="bg-[#FB923C]">Get Started</Button>
                  </td>
                  <td className="py-3">
                    <Button variant="secondary" size="md" className="bg-[#F8FAFC]">Explore Courses</Button>
                  </td>
                  <td className="py-3">
                    <Button variant="tertiary" size="md" className="bg-[#F8FAFC]" icon={
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    }>
                      View Lesson
                    </Button>
                  </td>
                  <td className="py-3">
                    <Button variant="text" size="md" className="text-[#FB923C]" icon={
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    }>
                      Watch Video
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#64748B]">Disabled</td>
                  <td className="py-3">
                    <Button variant="primary" size="md" disabled>Get Started</Button>
                  </td>
                  <td className="py-3">
                    <Button variant="secondary" size="md" disabled>Explore Courses</Button>
                  </td>
                  <td className="py-3">
                    <Button variant="tertiary" size="md" disabled icon={
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    }>
                      View Lesson
                    </Button>
                  </td>
                  <td className="py-3">
                    <Button variant="text" size="md" disabled icon={
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    }>
                      Watch Video
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-3 border-t border-[#F1F5F9] text-xs text-[#64748B] flex flex-wrap gap-4">
            <span className="font-semibold text-[#0F172A]">Button Specs:</span>
            <span>Height: 44px (default)</span>
            <span>Padding: 0 16px (lg), 0 12px (md)</span>
            <span>Radius: 12px</span>
            <span>Font: Inter Medium (14–16px)</span>
          </div>
        </section>
      </div>

      {/* 08 INPUTS & 09 BADGES & 10 STATUS & 11 PROGRESS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 08 INPUTS */}
        <section className="lg:col-span-6 bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-2">
            <span className="text-[#94A3B8]">08</span> INPUTS
          </h2>

          <div className="space-y-4 max-w-md">
            <div>
              <label className="text-xs font-semibold text-[#64748B] block mb-1.5">
                Search / Text Input
              </label>
              <Input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search anything..."
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#64748B] block mb-1.5">
                Select
              </label>
              <Select
                value={sortValue}
                onChange={(e) => setSortValue(e.target.value)}
                options={["Most Relevant", "Newest", "Highest Rated"]}
              />
            </div>
          </div>

          <div className="pt-3 border-t border-[#F1F5F9] text-xs text-[#64748B] space-y-0.5">
            <h4 className="font-semibold text-[#0F172A]">Field Specs</h4>
            <div className="grid grid-cols-2 gap-1 text-[11px]">
              <span>Height: 44px</span>
              <span>Radius: 12px</span>
              <span>Border: 1px solid #E2E8F0</span>
              <span>Padding: 0 16px</span>
              <span>Focus: Border color #FB923C</span>
            </div>
          </div>
        </section>

        {/* 09 BADGES & 10 STATUS & 11 PROGRESS */}
        <section className="lg:col-span-6 bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            {/* 09 BADGES / TAGS */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-2 mb-3">
                <span className="text-[#94A3B8]">09</span> BADGES / TAGS
              </h2>
              <div className="flex items-center gap-6">
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-[10px] text-[#64748B]">Video</span>
                  <Badge type="video" />
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-[10px] text-[#64748B]">Lesson</span>
                  <Badge type="lesson" />
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-[10px] text-[#64748B]">Popular</span>
                  <Badge type="popular" />
                </div>
              </div>
            </div>

            {/* 10 STATUS / INDICATORS */}
            <div className="pt-4 border-t border-[#F1F5F9]">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-2 mb-3">
                <span className="text-[#94A3B8]">10</span> STATUS / INDICATORS
              </h2>
              <div className="flex flex-wrap items-center gap-6">
                <StatusIndicator status="in-progress" />
                <StatusIndicator status="completed" />
                <StatusIndicator status="now-playing" />
                <StatusIndicator status="locked" />
              </div>
            </div>

            {/* 11 PROGRESS BAR */}
            <div className="pt-4 border-t border-[#F1F5F9]">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-2 mb-3">
                <span className="text-[#94A3B8]">11</span> PROGRESS BAR
              </h2>
              <div className="space-y-2">
                <ProgressBar progress={progressVal} />
                <div className="flex items-center gap-2 text-xs text-[#64748B]">
                  <span>Adjust demo progress:</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progressVal}
                    onChange={(e) => setProgressVal(Number(e.target.value))}
                    className="accent-[#F97316] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 12 CARDS */}
      <section className="bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-2">
          <span className="text-[#94A3B8]">12</span> CARDS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-semibold text-[#64748B] block mb-2">Course Card</span>
            <CourseCard />
          </div>
          <div>
            <span className="text-xs font-semibold text-[#64748B] block mb-2">Lesson Card (Video)</span>
            <LessonCardVideo />
          </div>
          <div>
            <span className="text-xs font-semibold text-[#64748B] block mb-2">Lesson Card (Lesson)</span>
            <LessonCardLesson />
          </div>
          <div>
            <span className="text-xs font-semibold text-[#64748B] block mb-2">Resource Card</span>
            <ResourceCard />
          </div>
        </div>
      </section>

      {/* 13 NAVIGATION & 14 PRINCIPLES */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 13 NAVIGATION */}
        <section className="lg:col-span-6 bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-2">
            <span className="text-[#94A3B8]">13</span> NAVIGATION
          </h2>

          <div className="space-y-6">
            {/* Header bar sample */}
            <div className="p-4 bg-[#FAFAFC] border border-[#E2E8F0] rounded-[12px] flex items-center justify-between">
              <VertexLogo />
              <div className="flex items-center gap-6 text-sm font-medium">
                <a href="#courses" className="text-[#F97316]">Courses</a>
                <a href="#my-learning" className="text-[#64748B] hover:text-[#0F172A]">My Learning</a>
              </div>
            </div>

            {/* Breadcrumb sample */}
            <div>
              <span className="text-xs font-semibold text-[#64748B] block mb-2">Breadcrumbs</span>
              <div className="p-3 bg-[#FAFAFC] border border-[#E2E8F0] rounded-[12px]">
                <Breadcrumbs />
              </div>
            </div>

            {/* Pagination sample */}
            <div>
              <span className="text-xs font-semibold text-[#64748B] block mb-2">Pagination</span>
              <div className="p-3 bg-[#FAFAFC] border border-[#E2E8F0] rounded-[12px] flex justify-center">
                <Pagination />
              </div>
            </div>
          </div>
        </section>

        {/* 14 PRINCIPLES */}
        <section className="lg:col-span-6 bg-white border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-2">
            <span className="text-[#94A3B8]">14</span> PRINCIPLES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <PrincipleCard
              title="Clarity First"
              description="Every element should communicate clearly."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              }
            />
            <PrincipleCard
              title="Consistency"
              description="Use components and patterns consistently across the platform."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
              }
            />
            <PrincipleCard
              title="Focus & Calm"
              description="Remove noise and help learners focus on what matters."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              }
            />
            <PrincipleCard
              title="Accessible"
              description="Design with accessibility and inclusivity in mind."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="4" r="2" />
                  <path d="m18 10-6-1-6 1" />
                  <path d="M12 9v6" />
                  <path d="m9 20 3-5 3 5" />
                </svg>
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
}
