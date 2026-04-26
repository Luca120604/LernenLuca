// src/App.jsx
// LernenLuca — Hauptkomponente. Lern-Psychologie-Style: ruhig, dunkel, fokussiert.

import React, { useState, useEffect } from "react";
import LernzettelView from "./components/LernzettelView";
import { BFK1_TOPICS } from "./data/bfk1";
import { HUMINFO_TOPICS } from "./data/humInfo";

const SUBJECTS = {
  bfk1: {
    name: "BFK 1",
    short: "I",
    teacher: "Müller",
    topics: BFK1_TOPICS,
    categories: ["VWL", "Altersvorsorge", "Versicherung"],
  },
  bfk2: {
    name: "BFK 2",
    short: "II",
    teacher: "Holder",
    topics: HUMINFO_TOPICS,
    categories: ["Hints", "Grundlagen", "Kreditarten", "Kreditprüfung", "Recht", "Bilanz", "Kennziffern", "Rechnen", "Sicherheiten", "Überwachung", "Checkliste"],
  },
};

export default function App() {
  const [active, setActive] = useState("bfk1");
  const [recall, setRecall] = useState(false);
  const subject = SUBJECTS[active];

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
      <div
        className="max-w-3xl mx-auto px-4"
        style={{
          paddingTop: "calc(16px + env(safe-area-inset-top))",
          paddingBottom: "calc(112px + env(safe-area-inset-bottom))",
        }}
      >
        <header className="mb-5">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">
            Lernzettel
          </p>
          <h1 className="text-[22px] font-bold tracking-tight">LernenLuca</h1>
          <p className="text-[12px] text-zinc-500 mt-0.5">
            {subject.name} · {subject.teacher} · {subject.topics.length} Themen
            {recall && " · Karteikarten an"}
          </p>
        </header>

        <main>
          <LernzettelView
            key={active}
            topics={subject.topics}
            categories={subject.categories}
            recall={recall}
          />
        </main>
      </div>

      <BottomNav
        active={active}
        onChange={setActive}
        subjects={SUBJECTS}
        recall={recall}
        onRecallToggle={() => setRecall((r) => !r)}
      />
    </div>
  );
}

function NavTab({ subject, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex flex-col items-center justify-center gap-0.5 rounded-xl py-1.5 px-2 active:scale-[0.98] transition ${
        active ? "text-white" : "text-zinc-500"
      }`}
      style={{ minHeight: "48px" }}
    >
      <div
        className={`w-7 h-7 rounded-lg flex items-center justify-center text-[12px] font-bold transition ${
          active ? "bg-white text-zinc-950" : "bg-zinc-900 text-zinc-400"
        }`}
      >
        {subject.short}
      </div>
      <span className="text-[11px] font-semibold leading-tight">{subject.name}</span>
      <span className="text-[9px] uppercase tracking-wider opacity-70 leading-tight">
        {subject.teacher}
      </span>
    </button>
  );
}

function CardsIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width="22"
      height="22"
    >
      <rect x="3" y="3" width="13" height="13" rx="2" />
      <path d="M8 8h13v13H8" />
    </svg>
  );
}

function BottomNav({ active, onChange, subjects, recall, onRecallToggle }) {
  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-20"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="relative bg-zinc-950/95 backdrop-blur border-t border-zinc-900">
          <div className="flex items-stretch py-1.5 gap-2">
            <NavTab
              subject={subjects.bfk1}
              active={active === "bfk1"}
              onClick={() => onChange("bfk1")}
            />
            <div className="w-14 shrink-0" aria-hidden="true" />
            <NavTab
              subject={subjects.bfk2}
              active={active === "bfk2"}
              onClick={() => onChange("bfk2")}
            />
          </div>
          <button
            onClick={onRecallToggle}
            aria-label={recall ? "Karteikarten-Modus aus" : "Karteikarten-Modus an"}
            className={`absolute left-1/2 -translate-x-1/2 -top-6 w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-black/40 active:scale-[0.95] transition ${
              recall ? "bg-emerald-500 text-white" : "bg-white text-zinc-950"
            }`}
            style={{ minHeight: "48px", minWidth: "48px" }}
          >
            <CardsIcon />
          </button>
          <span
            className={`absolute left-1/2 -translate-x-1/2 top-9 text-[9px] uppercase tracking-wider font-semibold whitespace-nowrap ${
              recall ? "text-emerald-400" : "text-zinc-500"
            }`}
          >
            Karten
          </span>
        </div>
      </div>
    </nav>
  );
}
