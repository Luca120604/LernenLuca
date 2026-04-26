// src/App.jsx
// LernenLuca — Hauptkomponente. Lern-Psychologie-Style: ruhig, dunkel, fokussiert.

import React, { useState, useEffect, useMemo } from "react";
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

const SLICE_COLORS = [
  "#60a5fa", "#34d399", "#fbbf24", "#f87171", "#a78bfa",
  "#22d3ee", "#fb923c", "#f472b6", "#a3e635", "#e879f9", "#38bdf8",
];

export default function App() {
  const [active, setActive] = useState("bfk1");
  const [recall, setRecall] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
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
        sheetOpen={sheetOpen}
        onSheetToggle={() => setSheetOpen((o) => !o)}
      />

      {sheetOpen && (
        <OverviewSheet
          subject={subject}
          recall={recall}
          onRecallToggle={() => setRecall((r) => !r)}
          onClose={() => setSheetOpen(false)}
        />
      )}
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

function HubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3 v9 l6 3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M18 6 L6 18 M6 6 l12 12" />
    </svg>
  );
}

function BottomNav({ active, onChange, subjects, sheetOpen, onSheetToggle }) {
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
            onClick={onSheetToggle}
            aria-label="Übersicht öffnen"
            className={`absolute left-1/2 -translate-x-1/2 -top-6 w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-black/40 active:scale-[0.95] transition ${
              sheetOpen ? "bg-emerald-500 text-white rotate-45" : "bg-white text-zinc-950"
            }`}
            style={{ minHeight: "48px", minWidth: "48px" }}
          >
            <HubIcon />
          </button>
          <span className="absolute left-1/2 -translate-x-1/2 top-9 text-[9px] uppercase tracking-wider font-semibold whitespace-nowrap text-zinc-500">
            Übersicht
          </span>
        </div>
      </div>
    </nav>
  );
}

function Donut({ slices, size = 200 }) {
  const total = slices.reduce((s, d) => s + d.value, 0) || 1;
  const r = size / 2 - 8;
  const cx = size / 2;
  const cy = size / 2;
  let angle = -Math.PI / 2;
  const paths = slices.map((s, i) => {
    const a = (s.value / total) * Math.PI * 2;
    const x1 = cx + r * Math.cos(angle);
    const y1 = cy + r * Math.sin(angle);
    const x2 = cx + r * Math.cos(angle + a);
    const y2 = cy + r * Math.sin(angle + a);
    const large = a > Math.PI ? 1 : 0;
    const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
    angle += a;
    return <path key={i} d={d} fill={s.color} />;
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {paths}
      <circle cx={cx} cy={cy} r={r * 0.58} fill="#09090b" />
      <text x={cx} y={cy - 2} textAnchor="middle" fontSize="26" fontWeight="700" fill="#fafafa">
        {total}
      </text>
      <text x={cx} y={cy + 18} textAnchor="middle" fontSize="9" fill="#71717a" letterSpacing="2">
        THEMEN
      </text>
    </svg>
  );
}

function extractFormulas(topics) {
  const out = [];
  topics.forEach((topic) => {
    topic.sections.forEach((sec) => {
      sec.items.forEach((item) => {
        const text = item.d || "";
        if (/[=≈]|·\s*\d|\/\s*\d/.test(text) && text.length < 320) {
          out.push({ topic: topic.title, name: item.t, body: text });
        }
      });
    });
  });
  return out.slice(0, 24);
}

function OverviewSheet({ subject, recall, onRecallToggle, onClose }) {
  const slices = useMemo(() => {
    const counts = {};
    subject.topics.forEach((t) => {
      counts[t.cat] = (counts[t.cat] || 0) + 1;
    });
    return Object.entries(counts).map(([cat, value], i) => ({
      cat,
      value,
      color: SLICE_COLORS[i % SLICE_COLORS.length],
    }));
  }, [subject.topics]);

  const formulas = useMemo(() => extractFormulas(subject.topics), [subject.topics]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div className="fixed inset-0 z-30">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="absolute bottom-0 inset-x-0 max-w-3xl mx-auto bg-zinc-900 rounded-t-2xl overflow-hidden flex flex-col"
        style={{
          maxHeight: "88vh",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="px-4 pt-3 pb-2 flex items-center justify-between border-b border-zinc-800">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-zinc-500">Übersicht</p>
            <h2 className="text-[18px] font-bold tracking-tight">{subject.name} · {subject.teacher}</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Schließen"
            className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center active:scale-[0.95]"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="overflow-y-auto px-4 py-4 space-y-6">
          <section className="flex items-center gap-4">
            <div className="shrink-0">
              <Donut slices={slices} size={180} />
            </div>
            <ul className="flex-1 min-w-0 space-y-1.5">
              {slices.map((s) => (
                <li key={s.cat} className="flex items-center gap-2 text-[13px]">
                  <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: s.color }} />
                  <span className="flex-1 truncate text-zinc-200">{s.cat}</span>
                  <span className="text-zinc-500 tabular-nums">{s.value}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-zinc-950 rounded-xl p-3 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-white">Karteikarten-Modus</p>
              <p className="text-[11px] text-zinc-500 leading-snug">
                Antworten verdeckt — Active Recall trainieren
              </p>
            </div>
            <button
              onClick={onRecallToggle}
              role="switch"
              aria-checked={recall}
              className={`shrink-0 w-12 h-7 rounded-full p-0.5 transition ${
                recall ? "bg-emerald-500" : "bg-zinc-700"
              }`}
            >
              <span
                className={`block w-6 h-6 rounded-full bg-white transition-transform ${
                  recall ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </section>

          <section>
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Formeln im Stoff <span className="text-zinc-600">· {formulas.length}</span>
            </h3>
            {formulas.length === 0 ? (
              <p className="text-[13px] text-zinc-500">Keine erkannten Formeln im Lernzettel.</p>
            ) : (
              <ul className="space-y-px rounded-xl bg-zinc-950 overflow-hidden">
                {formulas.map((f, i) => (
                  <li key={i} className="bg-zinc-900 px-3.5 py-2.5">
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-0.5 truncate">
                      {f.topic}
                    </p>
                    <p className="text-[13px] font-semibold text-white mb-0.5 leading-snug">
                      {f.name}
                    </p>
                    <p className="text-[12.5px] text-zinc-300 leading-relaxed">
                      {f.body}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
