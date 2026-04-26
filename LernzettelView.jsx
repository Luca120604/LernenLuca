// src/components/LernzettelView.jsx
// Lern-Psychologie-Style: ein Topic = ein Chunk. Ruhig, hoher Kontrast, klare Hierarchie.

import React, { useState, useMemo } from "react";

const ACCENT = {
  blue:   "bg-blue-400",
  green:  "bg-emerald-400",
  red:    "bg-red-400",
  amber:  "bg-amber-400",
  purple: "bg-purple-400",
};

function renderInline(text) {
  const parts = [];
  let last = 0;
  const re = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<strong key={m.index} className="text-white font-semibold">{m[1]}</strong>);
    else if (m[2]) parts.push(<em key={m.index} className="text-zinc-400 not-italic">{m[2]}</em>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export default function LernzettelView({ topics, categories }) {
  const [filter, setFilter] = useState("Alle");
  const [search, setSearch] = useState("");
  const [recall, setRecall] = useState(false);

  const cats = ["Alle", ...categories];

  const filtered = useMemo(() => {
    return topics.filter((t) => {
      if (filter !== "Alle" && t.cat !== filter) return false;
      if (!search) return true;
      const hay = (
        t.title +
        " " +
        t.sections
          .map((s) => s.h + " " + s.items.map((i) => i.t + " " + i.d).join(" "))
          .join(" ")
      ).toLowerCase();
      return hay.includes(search.toLowerCase());
    });
  }, [filter, search, topics]);

  return (
    <div>
      <div className="space-y-3 mb-5">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Suche…"
          className="w-full bg-zinc-900 rounded-xl px-3.5 py-2.5 text-[14px] placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-700"
          style={{ minHeight: "44px" }}
        />

        <div className="flex gap-2 -mx-4 px-4 overflow-x-auto">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1.5 rounded-full text-[12px] font-semibold whitespace-nowrap active:scale-[0.98] transition ${
                filter === c
                  ? "bg-white text-zinc-950"
                  : "bg-zinc-900 text-zinc-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <button
          onClick={() => setRecall((r) => !r)}
          className={`w-full rounded-full text-[13px] font-semibold py-2.5 px-4 active:scale-[0.98] transition ${
            recall ? "bg-emerald-600 text-white" : "bg-zinc-900 text-zinc-300"
          }`}
        >
          {recall ? "Karteikarten-Modus aktiv · Antworten verdeckt" : "Karteikarten-Modus starten"}
        </button>
      </div>

      <div className="space-y-2">
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[14px] text-zinc-300 mb-1">Nichts gefunden.</p>
            <p className="text-[12px] text-zinc-500">Anderes Stichwort versuchen.</p>
          </div>
        )}
        {filtered.map((topic) => {
          const accent = ACCENT[topic.color] || ACCENT.blue;
          return (
            <details
              key={topic.id}
              className="rounded-xl bg-zinc-900 overflow-hidden"
            >
              <summary className="px-4 py-3.5 flex items-center gap-3 active:bg-zinc-800/60">
                <span className={`${accent} w-1 h-10 rounded-full shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-0.5">
                    {topic.cat}
                  </p>
                  <h2 className="text-[15px] font-semibold tracking-tight truncate">
                    {topic.title}
                  </h2>
                </div>
                <span className="chev text-zinc-500 text-lg leading-none shrink-0">›</span>
              </summary>

              <div className="px-4 pb-4 pt-1 space-y-5">
                {topic.sections.map((sec, i) => (
                  <section key={i}>
                    <h3 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      {sec.h}
                    </h3>
                    <ul className="space-y-px rounded-xl bg-zinc-950 overflow-hidden">
                      {sec.items.map((item, j) => (
                        <RecallItem key={j} item={item} recall={recall} />
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}

function RecallItem({ item, recall }) {
  const [revealed, setRevealed] = useState(false);
  const showAnswer = !recall || revealed;

  return (
    <li className="bg-zinc-900 px-3.5 py-3">
      <div className="text-[14px] font-semibold text-white mb-1 leading-snug">
        {renderInline(item.t)}
      </div>
      {showAnswer ? (
        <div className="text-[14px] text-zinc-300 leading-relaxed">
          {renderInline(item.d)}
        </div>
      ) : (
        <button
          onClick={() => setRevealed(true)}
          className="text-[12px] uppercase tracking-wider text-zinc-500 active:text-zinc-300"
        >
          Antwort einblenden
        </button>
      )}
    </li>
  );
}
