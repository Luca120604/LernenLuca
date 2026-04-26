// src/components/LernzettelView.jsx
// Wiederverwendbare Komponente — bekommt Topics + verfügbare Kategorien rein

import React, { useState, useMemo } from "react";

const COLOR_MAP = {
  blue:   { bg: "bg-blue-500/10",    border: "border-blue-500",    text: "text-blue-300",    badge: "bg-blue-500"    },
  green:  { bg: "bg-emerald-500/10", border: "border-emerald-500", text: "text-emerald-300", badge: "bg-emerald-500" },
  red:    { bg: "bg-red-500/10",     border: "border-red-500",     text: "text-red-300",     badge: "bg-red-500"     },
  amber:  { bg: "bg-amber-500/10",   border: "border-amber-500",   text: "text-amber-300",   badge: "bg-amber-500"   },
  purple: { bg: "bg-purple-500/10",  border: "border-purple-500",  text: "text-purple-300",  badge: "bg-purple-500"  },
};

function renderInline(text) {
  const parts = [];
  let last = 0;
  const re = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<strong key={m.index} className="text-white font-bold">{m[1]}</strong>);
    else if (m[2]) parts.push(<em key={m.index} className="text-slate-400 not-italic">{m[2]}</em>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export default function LernzettelView({ topics, categories }) {
  const [filter, setFilter] = useState("Alle");
  const [search, setSearch] = useState("");

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
      {/* Toolbar */}
      <div className="px-4 pt-2 pb-3 border-b border-slate-800">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Suche…"
          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm placeholder-slate-500 focus:outline-none focus:border-amber-500"
        />
        <div className="flex gap-2 mt-2 overflow-x-auto">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                filter === c
                  ? "bg-amber-500 text-slate-950"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Topics */}
      <div className="p-4 space-y-3">
        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">Nichts gefunden.</div>
        )}
        {filtered.map((topic) => {
          const c = COLOR_MAP[topic.color] || COLOR_MAP.blue;
          return (
            <details
              key={topic.id}
              className={`rounded-xl border ${c.border} ${c.bg} overflow-hidden`}
            >
              <summary className="px-4 py-3 flex items-center justify-between gap-3 cursor-pointer list-none active:bg-slate-800/50">
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`${c.badge} text-slate-950 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider whitespace-nowrap`}
                  >
                    {topic.cat}
                  </span>
                  <h2 className="font-bold text-sm truncate">{topic.title}</h2>
                </div>
                <span className={`${c.text} text-lg leading-none`}>›</span>
              </summary>
              <div className="px-4 pb-4 space-y-4 border-t border-slate-800/50 pt-3">
                {topic.sections.map((sec, i) => (
                  <div key={i}>
                    <h3 className={`text-xs font-bold uppercase tracking-wider mb-2 ${c.text}`}>
                      {sec.h}
                    </h3>
                    <ul className="space-y-2">
                      {sec.items.map((item, j) => (
                        <li
                          key={j}
                          className="bg-slate-900/60 rounded-lg p-3 border border-slate-800"
                        >
                          <div className="text-[13px] font-bold text-white mb-1">
                            {renderInline(item.t)}
                          </div>
                          <div className="text-[12.5px] text-slate-300 leading-relaxed">
                            {renderInline(item.d)}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
