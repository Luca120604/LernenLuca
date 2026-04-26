// src/App.jsx
// LernenLuca — Hauptkomponente mit Tab-Switcher zwischen BFK1 und HUM Info

import React, { useState } from "react";
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

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen antialiased">
      <div className="max-w-2xl mx-auto pb-24">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-slate-950/95 backdrop-blur border-b border-slate-800 px-4 pt-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-xl font-black tracking-tight">LernenLuca</h1>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider">
                {subject.name} · {subject.teacher}
              </p>
            </div>
            <span className="bg-amber-500 text-slate-950 text-[10px] font-bold px-2 py-1 rounded">
              v1.0
            </span>
          </div>

          {/* Subject Tabs */}
          <div className="flex gap-1 -mx-4 px-4">
            {Object.entries(SUBJECTS).map(([key, s]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex-1 px-3 py-2 text-sm font-semibold rounded-t-lg transition ${
                  active === key
                    ? "bg-slate-900 text-white border-b-2 border-amber-500"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {s.name}
                <span className="block text-[10px] font-normal opacity-70">
                  {s.teacher}
                </span>
              </button>
            ))}
          </div>
        </header>

        <main>
          <LernzettelView
            key={active}
            topics={subject.topics}
            categories={subject.categories}
          />
        </main>

        <footer className="px-4 mt-4 text-center text-[11px] text-slate-600">
          LernenLuca · Bankkaufmann · {new Date().toLocaleDateString("de-DE")}
        </footer>
      </div>
    </div>
  );
}
