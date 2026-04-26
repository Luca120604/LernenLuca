// src/App.jsx
// LernenLuca — Hauptkomponente. Lern-Psychologie-Style: ruhig, dunkel, fokussiert.

import React, { useState, useEffect } from "react";
import LernzettelView from "./components/LernzettelView";
import { BFK1_TOPICS } from "./data/bfk1";
import { HUMINFO_TOPICS } from "./data/humInfo";

const SUBJECTS = {
  bfk1: {
    name: "BFK 1",
    teacher: "Müller",
    topics: BFK1_TOPICS,
    categories: ["VWL", "Altersvorsorge", "Versicherung"],
  },
  humInfo: {
    name: "HUM Info",
    teacher: "Frau HOL",
    topics: HUMINFO_TOPICS,
    categories: ["Hints", "Grundlagen", "Kreditarten", "Kreditprüfung", "Recht", "Bilanz", "Kennziffern", "Rechnen", "Sicherheiten", "Überwachung", "Checkliste"],
  },
};

export default function App() {
  const [active, setActive] = useState("bfk1");
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
          paddingBottom: "calc(96px + env(safe-area-inset-bottom))",
        }}
      >
        <header className="mb-5">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">
            Lernzettel
          </p>
          <h1 className="text-[22px] font-bold tracking-tight">LernenLuca</h1>
          <p className="text-[12px] text-zinc-500 mt-0.5">
            {subject.name} · {subject.teacher} · {subject.topics.length} Themen
          </p>
        </header>

        <main>
          <LernzettelView
            key={active}
            topics={subject.topics}
            categories={subject.categories}
          />
        </main>
      </div>

      <BottomNav active={active} onChange={setActive} subjects={SUBJECTS} />
    </div>
  );
}

function BottomNav({ active, onChange, subjects }) {
  const keys = Object.keys(subjects);
  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-20 bg-zinc-950/95 backdrop-blur border-t border-zinc-900"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="max-w-3xl mx-auto px-4 py-2 flex items-center justify-around gap-2">
        {keys.map((key) => {
          const s = subjects[key];
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`flex-1 flex flex-col items-center justify-center rounded-xl py-2 px-3 active:scale-[0.98] transition ${
                isActive ? "bg-white text-zinc-950" : "text-zinc-400"
              }`}
              style={{ minHeight: "48px" }}
            >
              <span className="text-[13px] font-semibold leading-tight">{s.name}</span>
              <span className="text-[10px] uppercase tracking-wider opacity-70 leading-tight mt-0.5">
                {s.teacher}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
