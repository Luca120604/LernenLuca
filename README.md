# LernenLuca

Mobile Lernzettel-App für meine Bankkaufmann-Ausbildung. Zwei Fächer in einer App:

- **BFK 1** (Müller) — VWL, Inflation, Versicherungen, Altersvorsorge
- **HUM Info** (Holder) — Unternehmensfinanzierung, Darlehen, Kennzahlen

Build mit React + Vite + Tailwind. Mobile-First, Dark Mode, Suche und Kategorie-Filter.

---

## Quick Start

```bash
npm install
npm run dev
```

Dev-Server läuft auf `http://localhost:5173`.

## Build

```bash
npm run build      # erzeugt dist/
npm run preview    # testet den Build
```

## Auf GitHub Pages deployen

```bash
npm install -D gh-pages   # einmalig
npm run deploy
```

Das pushed `dist/` auf den Branch `gh-pages`. In den GitHub-Repo-Settings → Pages → Source: `gh-pages` setzen.

URL danach: `https://<dein-username>.github.io/LernenLuca/`

> Wenn du den Repo umbenennst: in `vite.config.js` das `base` anpassen.

## Datenpflege

Alle Lerninhalte stecken in:

- `src/data/bfk1.js` — BFK 1 Topics
- `src/data/humInfo.js` — HUM Info Topics

Format pro Topic:

```js
{
  id: "kurze-id",
  cat: "Kategorie",       // erscheint als Tag
  title: "Anzeigename",
  color: "blue",          // blue | green | red | amber | purple
  sections: [
    {
      h: "Abschnittsüberschrift",
      items: [
        { t: "Stichpunkt-Titel", d: "Erklärung. **fett** und *kursiv* werden gerendert." },
      ],
    },
  ],
},
```

Neue Kategorien? In `src/App.jsx` unter `SUBJECTS.<fach>.categories` ergänzen.

## Standalone-Variante

Für sofortiges Lernen ohne Build: `lernen-luca-standalone.html` öffnen. Funktioniert auf jedem Mobile-Browser. Inhalt ist eingebettet — wenn die Daten geändert werden, muss die Standalone neu generiert werden (Vite-Setup ist Master).
