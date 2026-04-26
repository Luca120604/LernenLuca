# Claude Code Prompt — LernenLuca Repo

Den ganzen Block unten 1:1 in Claude Code reinpacken (Terminal im Repo-Ordner). Er macht alles autonom.

---

```
KONTEXT: Ich habe ein GitHub-Repo "LernenLuca" mit GitHub Pages aktiviert.
Es ist eine mobile Lernzettel-App für meine Bankkaufmann-Ausbildung 
(BFK 1 bei Müller + HUM Info bei Frau HOL).

Stack: React + Vite + Tailwind CSS, Single-Page-App, Dark Theme.
Datenstruktur: src/data/bfk1.js und src/data/humInfo.js exportieren je 
ein TOPICS-Array. App.jsx hat einen Tab-Switcher zwischen den Fächern.

Topic-Format (immer einhalten):
{
  id: "kebab-case",
  cat: "Kategorie",
  title: "Anzeigename",
  color: "blue|green|red|amber|purple",
  sections: [
    {
      h: "Abschnittsüberschrift",
      items: [
        { t: "Stichpunkt-Titel", d: "Erklärung. **fett** und *kursiv* werden gerendert." }
      ]
    }
  ]
}

ARBEITSWEISE:
1. Lies vor jeder Änderung die betroffenen Files (App.jsx + die data/*.js).
2. Halte das exakte Format ein. Keine zusätzlichen Felder erfinden.
3. Wenn ein neues Fach: importiere das Topics-Array in App.jsx und ergänze 
   das SUBJECTS-Objekt mit name, teacher, topics, categories.
4. Pro Topic kurz und prägnant — Bankazubi-Niveau, nicht ausschweifen.
5. Fachbegriffe in Klammern erklären. Auf Deutschland bezogen.
6. Nach jeder Änderung: npm run build laufen lassen. Bei Fehler: fixen.
7. Wenn der Build clean durchläuft: git add → commit mit aussagekräftiger 
   Message → git push. Der GitHub Actions Workflow deployed automatisch.
8. Nach 1–2 Minuten ist die Live-URL aktualisiert.

WICHTIG zu index.html:
Die Datei "index.html" im Repo-ROOT ist eine standalone Single-File-Variante 
(React/Babel via CDN, alle Daten inline). Sie ist die SCHNELL-VARIANTE für 
GitHub Pages ohne Build-Schritt. Wenn ich src/data/*.js editiere, MUSS index.html 
neu generiert werden — entweder per Vite-Build (npm run build, dann dist/ 
deployen) ODER durch direktes Inlinen der data-Files in index.html. 
Frag mich vor dem ersten Mal, welche Variante ich will.

REGELN FÜR DICH:
- Direkt zur Sache, kein Smalltalk
- Bei Lücken/Unklarheiten nachfragen statt raten
- Wenn etwas im Lernfeld nicht passt oder ich falsch liege → korrigieren
- Keine Motivationssprüche

SETUP-CHECK BEIM ERSTEN MAL:
- Node 18+ installiert? (node -v)
- npm install im Repo-Ordner gelaufen?
- .github/workflows/deploy.yml vorhanden?
- vite.config.js: base: "/LernenLuca/" gesetzt?
- GitHub Pages in Repo Settings → Pages → Source: "GitHub Actions"?
Wenn was fehlt: Schritt für Schritt durchgehen.

WAS ICH JETZT WILL:
[Hier deine Aufgabe rein. Beispiele unten.]
```

---

## Beispiel-Aufgaben (statt "WAS ICH JETZT WILL")

**Neues Topic anlegen:**
```
WAS ICH JETZT WILL:
Füge in src/data/bfk1.js ein neues Topic über "Investmentfonds" hinzu.
Inhalte: Aktienfonds, Rentenfonds, Mischfonds, Geldmarktfonds, ETFs.
Steuerliche Behandlung: Vorabpauschale, Teilfreistellung.
Kosten: Ausgabeaufschlag, TER, Performance Fee.
Color: green. Cat: "Geldanlage".
Danach build, commit "Add Investmentfonds topic", push.
```

**Korrekturen:**
```
WAS ICH JETZT WILL:
Im HUM-Info-Topic "Annuitätendarlehen" — Frau HOL hat heute gesagt 
dass die Annuität auch jährlich gerechnet werden kann. Ergänze das 
als zweiten Beispiel-Block unter "Beispiel: jährlich".
```

**Komplett neues Fach:**
```
WAS ICH JETZT WILL:
Neues Fach: BFK 3 (Lehrer: Schmidt). Erstelle src/data/bfk3.js 
und ergänze App.jsx. Inhalte aus dem Unterricht:
[Stichpunkte / Foto / Mitschrift]
```

**Erstes Setup, wenn Repo gerade erst erstellt wurde:**
```
WAS ICH JETZT WILL:
Das Repo ist neu. Files sind drin. Mach:
1. npm install
2. npm run build (Build muss durchlaufen)
3. git init (falls nicht schon)
4. git remote add origin https://github.com/[username]/LernenLuca.git
5. git add . && git commit -m "Initial commit" && git push -u origin main
6. Danach: GitHub Pages auf "GitHub Actions" stellen via gh CLI:
   gh api -X PATCH /repos/[username]/LernenLuca/pages -f "build_type=workflow"
7. Workflow läuft → in 2 Min ist URL live
8. Gib mir die URL.
```
