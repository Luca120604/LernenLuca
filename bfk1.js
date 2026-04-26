// src/data/bfk1.js
// BFK 1 — Müller — kompletter Stoff (VWL + Versicherungen)

export const BFK1_TOPICS = [
  // ============= VWL =============
  {
    id: "geld",
    cat: "VWL",
    title: "Geld — Funktionen & Eigenschaften",
    color: "blue",
    sections: [
      {
        h: "3 Funktionen von Geld",
        items: [
          { t: "Tauschmittel", d: "Der Tausch von Waren und Dienstleistungen wird vereinfacht. *(= ich muss nicht Äpfel gegen Brot tauschen — ich zahle einfach)*" },
          { t: "Wertaufbewahrungsmittel", d: "Sparen von Geld wird möglich. *(= heute arbeiten, nächsten Monat ausgeben)*" },
          { t: "Recheneinheit", d: "Über Preise lassen sich ungleiche Güter bewerten. *(= Auto und Brot vergleichbar in €)*" },
        ],
      },
      {
        h: "4 Geldeigenschaften",
        items: [
          { t: "Allgemein anerkannt (begehrt)", d: "Alle akzeptieren es als Zahlungsmittel." },
          { t: "Wertbeständig (knapp)", d: "Behält Wert über die Zeit. Bei Inflation gestört." },
          { t: "Handlich (transportierbar)", d: "Münzen/Scheine statt Goldbarren." },
          { t: "Fälschungssicher", d: "Wasserzeichen, Hologramm." },
        ],
      },
    ],
  },
  {
    id: "inflation-arten",
    cat: "VWL",
    title: "Inflation — Arten",
    color: "red",
    sections: [
      {
        h: "Nach Geschwindigkeit",
        items: [
          { t: "Schleichende Inflation", d: "Bis ca. 5%. EZB-Ziel = 2%. DE März 2026 = 2,7%." },
          { t: "Galoppierende Inflation", d: "~20–100%. Vertrauen sinkt. Flucht in Sachwerte." },
          { t: "Hyperinflation", d: ">50% pro Monat. Geld wertlos. DE 1923." },
        ],
      },
    ],
  },
  {
    id: "inflation-ursachen",
    cat: "VWL",
    title: "Inflation — Ursachen",
    color: "red",
    sections: [
      {
        h: "4 Hauptursachen",
        items: [
          { t: "Nachfrageinflation", d: "Zu viel Nachfrage, zu wenig Angebot. Beispiel: Immobilienboom München." },
          { t: "Angebotsinflation", d: "Produktionskosten steigen. Beispiel: Gas-Krise 2022." },
          { t: "Geldmengeninflation", d: "EZB pumpt Geld in Umlauf. Beispiel: Anleihekäufe 2015–2022." },
          { t: "Importierte Inflation", d: "Preisanstieg aus dem Ausland (Öl, Gas). DE als Importland besonders anfällig." },
        ],
      },
      {
        h: "Merksatz",
        items: [
          { t: "Geldmengen-Phänomen", d: "\"Inflation ist immer auch ein Geldmengenphänomen\" (Friedman). Andere Ursachen sind Auslöser, aber Geldmenge muss mitwachsen." },
        ],
      },
    ],
  },
  {
    id: "inflation-auswirkungen",
    cat: "VWL",
    title: "Inflation — Auswirkungen",
    color: "red",
    sections: [
      {
        h: "Wirkung auf Akteure",
        items: [
          { t: "Sparer", d: "Geld verliert Kaufkraft. Negativer Realzins, wenn Zinsen < Inflation." },
          { t: "Schuldner", d: "Schulden entwerten sich, da Kaufkraft des Rückzahlungsbetrags niedriger. Evtl. Schuldenaufnahme zur Lebensfinanzierung." },
          { t: "Löhne", d: "3% Lohnerhöhung bei 2,7% Inflation = 0,3% real mehr Kaufkraft." },
          { t: "Sachwerte", d: "Profitieren. Immobilien, Gold, Grundstücke — knappe reale Güter behalten Wert." },
          { t: "Staat", d: "Profitiert wie Schuldner. Aber: kalte Progression bei Steuern." },
        ],
      },
      {
        h: "Merksatz",
        items: [
          { t: "Sparer vs. Schuldner", d: "Inflation bestraft Sparer und belohnt Schuldner. Geldwerte verlieren — Sachwerte gewinnen." },
        ],
      },
    ],
  },
  {
    id: "realzins",
    cat: "VWL",
    title: "Realzins",
    color: "amber",
    sections: [
      {
        h: "Formel",
        items: [
          { t: "Realzins = Nominalzins − Inflationsrate", d: "Nominalzins = was die Bank auf dem Papier zahlt. Realzins = was real an Kaufkraft übrig bleibt." },
        ],
      },
      {
        h: "Beispiel",
        items: [
          { t: "10.000 € Festgeld @ 2,5%, Inflation 2,7%", d: "Realzins = 2,5 − 2,7 = **−0,2%**. Kunde bekommt 250 € Zinsen, verliert aber real Kaufkraft." },
        ],
      },
    ],
  },
  {
    id: "vpi",
    cat: "VWL",
    title: "VPI & Wägungsschema",
    color: "green",
    sections: [
      {
        h: "Inflation messen",
        items: [
          { t: "Verbraucherpreisindex (VPI)", d: "Statistisches Bundesamt vergleicht Warenkorb zwischen 2 Zeitpunkten." },
          { t: "Inflationsrate", d: "((VPI neu − VPI alt) / VPI alt) × 100" },
          { t: "Kaufkraftveränderung", d: "((VPI alt − VPI neu) / VPI neu) × 100" },
        ],
      },
      {
        h: "Wägungsschema (Beispiel 3000 €)",
        items: [
          { t: "Anteil pro Kategorie", d: "(Ausgabe / Gesamtausgaben) × 100. z.B. 360/3000 × 100 = 12%." },
          { t: "Preisindex pro Jahr", d: "Pro Kategorie: (Preis Messjahr / Preis Basisjahr) × Wägungsanteil. Summe = Gesamt-Preisindex." },
          { t: "Inflationsrate aus Index", d: "((Index neu − Index alt) / Index alt) × 100" },
        ],
      },
      {
        h: "Lückentext-Logik",
        items: [
          { t: "Warenkorb teurer", d: "→ Preisniveau steigt → Kaufkraft sinkt" },
          { t: "Warenkorb billiger", d: "→ Preisniveau sinkt → Kaufkraft steigt" },
        ],
      },
    ],
  },
  {
    id: "magisches-viereck",
    cat: "VWL",
    title: "Magisches Viereck (StabG §1)",
    color: "purple",
    sections: [
      {
        h: "4 Ziele des Stabilitätsgesetzes (1967)",
        items: [
          { t: "Preisniveaustabilität", d: "Inflationsrate ≤ 2%" },
          { t: "Hoher Beschäftigungsstand", d: "Arbeitslosenquote ≤ 3%" },
          { t: "Außenwirtschaftliches Gleichgewicht", d: "Export ≈ Import" },
          { t: "Angemessenes Wirtschaftswachstum", d: "BIP-Wachstum ca. 2–3%" },
        ],
      },
    ],
  },

  // ============= 3-SCHICHTEN-MODELL =============
  {
    id: "altersvorsorge-3-schichten",
    cat: "Altersvorsorge",
    title: "3 Schichten der Altersvorsorge",
    color: "purple",
    sections: [
      {
        h: "Überblick",
        items: [
          { t: "Schicht 1 — Basisversorgung", d: "Gesetzliche Rente · Rürup-Rente (Basisrente) · berufsständische Versorgung. Steuerlich: nachgelagerte Besteuerung." },
          { t: "Schicht 2 — Zusatzversorgung", d: "Betriebliche Altersvorsorge (z.B. Direktversicherung) · Riester-Rente. Staatliche Förderung in der Ansparphase." },
          { t: "Schicht 3 — Private Vorsorge", d: "Private Renten-/Lebensversicherungen, Banksparpläne, Fonds, Immobilien. Keine staatliche Förderung in der Ansparphase." },
        ],
      },
    ],
  },

  // ============= GESETZLICHE RV =============
  {
    id: "gesetzliche-rv",
    cat: "Versicherung",
    title: "Gesetzliche Rentenversicherung (RV)",
    color: "blue",
    sections: [
      {
        h: "Grundlagen",
        items: [
          { t: "System", d: "Umlageverfahren — die aktiven Beitragszahler finanzieren die heutigen Rentner. Generationenvertrag." },
          { t: "Träger", d: "Deutsche Rentenversicherung (DRV)." },
          { t: "Beitragssatz 2026", d: "18,6 % (paritätisch: AG 9,3 % + AN 9,3 %)." },
          { t: "BBG Rente 2026 (West)", d: "8.450 €/Monat = 101.400 €/Jahr." },
        ],
      },
      {
        h: "Rentenformel",
        items: [
          { t: "Formel", d: "Monatliche Rente = Entgeltpunkte (EP) × Zugangsfaktor × Aktueller Rentenwert × Rentenartfaktor" },
          { t: "Entgeltpunkte (EP)", d: "Pro Jahr: persönliches Brutto / Durchschnittsentgelt aller Versicherten. Wer Durchschnitt verdient = 1 EP/Jahr." },
          { t: "Zugangsfaktor", d: "1,0 bei regulärem Renteneintritt. − 0,3 % pro Monat früheren Bezug · + 0,5 % pro Monat späteren Bezug." },
          { t: "Aktueller Rentenwert (West)", d: "Stand Juli 2025: 40,79 €/EP. Wird jährlich zum 1. Juli angepasst." },
          { t: "Rentenartfaktor", d: "Altersrente = 1,0 · Volle EM-Rente = 1,0 · Halbe EM-Rente = 0,5 · Witwen-/Witwerrente = 0,55–0,6" },
        ],
      },
      {
        h: "Leistungsarten",
        items: [
          { t: "Altersrente", d: "Regelaltersgrenze aktuell 67 Jahre (Stufenweise eingeführt)." },
          { t: "Erwerbsminderungsrente", d: "Bei dauerhafter Krankheit/Behinderung — Voraussetzungen siehe eigenes Kapitel." },
          { t: "Hinterbliebenenrenten", d: "Witwen-/Witwerrente · Waisenrente." },
        ],
      },
    ],
  },

  // ============= RIESTER =============
  {
    id: "riester",
    cat: "Versicherung",
    title: "Riester-Rente",
    color: "green",
    sections: [
      {
        h: "Was ist das?",
        items: [
          { t: "Definition", d: "Staatlich geförderte private Altersvorsorge (Schicht 2). Eingeführt 2002. Reform ab 2027 (Altersvorsorgedepot) — für Klassenarbeit gelten noch die ALTEN Regeln." },
        ],
      },
      {
        h: "Förderberechtigt",
        items: [
          { t: "Direkt zulageberechtigt", d: "Pflichtversicherte in der gesetzl. RV · Beamte · Soldaten · Empfänger von Lohnersatzleistungen." },
          { t: "Mittelbar zulageberechtigt", d: "Ehepartner direkt Zulageberechtigter — eigener Vertrag, mind. 60 € Sockelbetrag pro Jahr." },
          { t: "Nicht förderberechtigt", d: "Selbstständige (außer rentenversicherungspflichtig), freiwillig gesetzlich Versicherte." },
        ],
      },
      {
        h: "Zulagen 2026",
        items: [
          { t: "Grundzulage", d: "175 € / Jahr für jeden Zulageberechtigten." },
          { t: "Kinderzulage (geb. ab 2008)", d: "300 € / Jahr / Kind, solange Kindergeldbezug." },
          { t: "Kinderzulage (geb. vor 2008)", d: "185 € / Jahr / Kind." },
          { t: "Berufseinsteigerbonus", d: "Einmalig 200 € extra, wenn Vertragsabschluss vor 25. Geburtstag." },
        ],
      },
      {
        h: "Eigenbeitrag & Förderung",
        items: [
          { t: "Mindesteigenbeitrag (für volle Zulage)", d: "4 % des rentenversicherungspflichtigen Vorjahres-Bruttoeinkommens, abzüglich Zulagen. Maximal 2.100 € / Jahr (inkl. Zulagen). Sockelbetrag: mind. 60 € / Jahr." },
          { t: "Sonderausgabenabzug (§10a EStG)", d: "Bis 2.100 € / Jahr (Alleinstehende) bzw. 4.200 € / Ehepaar als Sonderausgaben absetzbar." },
          { t: "Günstigerprüfung", d: "Finanzamt prüft automatisch: Zulagen oder Sonderausgabenabzug — der Sparer bekommt das Bessere. Bei höheren Einkommen meist Steuervorteil > Zulagen." },
        ],
      },
      {
        h: "Auszahlung",
        items: [
          { t: "Beginn", d: "Frühestens ab 62 (bei Verträgen vor 2012: ab 60)." },
          { t: "Form", d: "Lebenslange Leibrente. Bis zu 30 % können einmalig zu Rentenbeginn entnommen werden — Rest als Rente." },
          { t: "Besteuerung", d: "Nachgelagerte Besteuerung — Auszahlung voll steuerpflichtig." },
        ],
      },
      {
        h: "Beispiel-Rechnung",
        items: [
          { t: "Familie, 35.000 € Brutto, 2 Kinder ab 2008", d: "Mindesteigenbeitrag = 4% × 35.000 = 1.400 €. Davon ab: Zulagen 175 + 600 = 775 €. Eigene Einzahlung = 1.400 − 775 = **625 € pro Jahr**. Vertrag wächst um 1.400 €/Jahr." },
        ],
      },
    ],
  },

  // ============= bAV =============
  {
    id: "direktversicherung",
    cat: "Versicherung",
    title: "Direktversicherung (bAV)",
    color: "blue",
    sections: [
      {
        h: "Was ist das?",
        items: [
          { t: "Definition", d: "Form der betrieblichen Altersvorsorge. AG schließt Lebens-/Rentenversicherung auf das Leben des AN ab." },
        ],
      },
      {
        h: "Rollen",
        items: [
          { t: "Arbeitgeber (AG)", d: "Versicherungsnehmer — zahlt ein, führt Vertrag." },
          { t: "Arbeitnehmer (AN)", d: "Versicherte Person + Bezugsberechtigter." },
          { t: "Versicherer", d: "Lebensversicherungsgesellschaft." },
        ],
      },
      {
        h: "Entgeltumwandlung",
        items: [
          { t: "Funktionsweise", d: "AN verzichtet auf Teil des Bruttogehalts (z.B. 150 €). Geht direkt in Vertrag → KEINE Lohnsteuer und KEINE SV-Beiträge auf den Teil." },
        ],
      },
      {
        h: "Staatliche Förderung (§ 3 Nr. 63 EStG)",
        items: [
          { t: "Steuerfrei", d: "Bis 8% der BBG Rente." },
          { t: "SV-frei", d: "Bis 4% der BBG Rente." },
          { t: "BBG Rente 2026", d: "8.450 €/Monat × 12 = 101.400 €/Jahr → 4% = 338 €/Monat sv-frei · 8% = 676 €/Monat steuerfrei." },
        ],
      },
      {
        h: "AG-Pflichtzuschuss (§ 1a Abs. 1a BetrAVG)",
        items: [
          { t: "15% obendrauf", d: "AG muss 15% des umgewandelten Betrags zusätzlich zahlen — weil er durch EU SV-Beiträge spart." },
        ],
      },
      {
        h: "✓ Vorteile AN",
        items: [
          { t: "Liste", d: "1. Staatliche Förderung (Steuer + SV-frei). 2. 15% AG-Pflichtzuschuss. 3. Insolvenzschutz. 4. Portabilität bei Jobwechsel. 5. Sofortige Unverfallbarkeit bei EU. 6. Keine Gesundheitsprüfung (Gruppenvertrag). 7. Hinterbliebenenschutz möglich." },
        ],
      },
      {
        h: "✗ Nachteile",
        items: [
          { t: "Doppelverbeitragung", d: "In Auszahlungsphase volle KV/PV-Beiträge." },
          { t: "Nachgelagerte Besteuerung", d: "Rente voll steuerpflichtig." },
          { t: "Geringere gesetzl. Rente", d: "Brutto für RV sinkt → weniger Einzahlung in gesetzl. RV." },
        ],
      },
    ],
  },
  {
    id: "gehaltsrechnung",
    cat: "Versicherung",
    title: "Gehaltsrechnung mit/ohne EU",
    color: "green",
    sections: [
      {
        h: "Schema",
        items: [
          { t: "Reihenfolge", d: "Brutto − EU = steuer-/sv-pflichtiges Entgelt − Lohnsteuer (+Soli/KiSt) − SV-Beiträge AN-Anteil = Netto." },
        ],
      },
      {
        h: "SV-Sätze AN-Anteil 2026 (~21,05 %)",
        items: [
          { t: "KV + PV", d: "~10,55% AN" },
          { t: "RV + ALV", d: "~10,60% AN" },
          { t: "Zusätze", d: "Kinderlos ab 23: +0,6% extra. 2–5 Kinder: −0,25%/Kind, max −1,0%." },
          { t: "Hinweis", d: "Immer den Wert vom Aufgabenblatt nehmen." },
        ],
      },
      {
        h: "Beispiel Meike (3.300 € Brutto, 150 € EU)",
        items: [
          { t: "OHNE EU", d: "3.300 − LSt 359,75 − SV (21,05%) 694,65 = **Netto 2.245,60 €**" },
          { t: "MIT EU (150 €)", d: "Brutto-EU 3.150 − LSt 325,41 − SV 662,96 = **Netto 2.161,63 €**" },
          { t: "Ergebnis", d: "Netto-Verzicht: 83,97 €. Einzahlung: 150 + 22,50 (15% AG) = 172,50 €. → Für 83,97 € Verzicht → 172,50 € Altersvorsorge." },
        ],
      },
    ],
  },

  // ============= KAPITAL-LV =============
  {
    id: "klv",
    cat: "Versicherung",
    title: "Kapitallebensversicherung (KLV)",
    color: "amber",
    sections: [
      {
        h: "Was ist das?",
        items: [
          { t: "Definition", d: "Lebensversicherung mit Spar- und Risikoanteil. Zahlt bei Tod (Hinterbliebene) oder bei Erleben des Vertragsendes (an den Versicherten)." },
          { t: "Doppelfunktion", d: "1. Todesfallabsicherung. 2. Kapitalaufbau / Altersvorsorge." },
        ],
      },
      {
        h: "Beitragszusammensetzung",
        items: [
          { t: "Sparanteil", d: "Wird angelegt → bildet das Kapital + Überschussbeteiligung." },
          { t: "Risikoanteil", d: "Deckt das Todesfallrisiko ab." },
          { t: "Kostenanteil", d: "Verwaltung, Abschlusskosten." },
        ],
      },
      {
        h: "Steuerliche Behandlung (Neu-Verträge ab 2005)",
        items: [
          { t: "Halbeinkünfteverfahren", d: "Wenn Vertrag mind. 12 Jahre läuft UND Auszahlung frühestens mit 62: Nur die HÄLFTE der Erträge ist steuerpflichtig (mit persönlichem Steuersatz)." },
          { t: "Volle Steuerpflicht", d: "Wenn die o.g. Bedingungen NICHT erfüllt → komplette Erträge unterliegen der Abgeltungsteuer (25% + Soli + ggf. KiSt)." },
          { t: "Alt-Verträge (vor 2005)", d: "Bei Erfüllung der Voraussetzungen meist vollständig steuerfrei." },
        ],
      },
      {
        h: "KLV vs. RLV",
        items: [
          { t: "RLV", d: "Reine Risikoabsicherung. Zahlt NUR bei Tod. Kein Sparanteil. Sehr günstig." },
          { t: "KLV", d: "Risiko + Sparanteil. Zahlt bei Tod ODER bei Erleben. Deutlich teurer." },
          { t: "Tipp im Bankgespräch", d: "Trennung empfohlen: RLV für Risiko + ETF/Fonds für Sparen → meist mehr Rendite." },
        ],
      },
    ],
  },
  {
    id: "rlv",
    cat: "Versicherung",
    title: "Risikolebensversicherung (RLV)",
    color: "red",
    sections: [
      {
        h: "Zweck",
        items: [
          { t: "Reine Todesfallabsicherung", d: "KEIN Sparanteil. Zahlt vereinbarte VS an Hinterbliebene." },
        ],
      },
      {
        h: "4 Formen",
        items: [
          { t: "Konstant", d: "Gleichbleibende VS. Einsatz: Familie, Lebenshaltung." },
          { t: "Fallend", d: "VS sinkt über Zeit. Einsatz: Immobilienkredit (Restschuld sinkt)." },
          { t: "Verbunden", d: "2 Personen, 1 Vertrag, Auszahlung beim ERSTEN Tod. Bei Unverheirateten → Erbschaftsteuer-Problem!" },
          { t: "Überkreuz", d: "2 getrennte Verträge, jeder versichert den anderen. Unverheiratete → KEINE Erbschaftsteuer." },
        ],
      },
      {
        h: "Beitragsfaktoren",
        items: [
          { t: "Liste", d: "Alter · Gesundheit · Raucher · Beruf · Laufzeit · Versicherungssumme." },
        ],
      },
    ],
  },

  // ============= EM / BU =============
  {
    id: "em-rente",
    cat: "Versicherung",
    title: "Erwerbsminderung (staatlich)",
    color: "amber",
    sections: [
      {
        h: "Wichtig",
        items: [
          { t: "Kein Berufsschutz", d: "Schützt NICHT den ausgeübten Beruf — sondern die Fähigkeit, überhaupt zu arbeiten. Wer noch irgendeinen Job ≥6h/Tag machen kann → bekommt **NICHTS**." },
        ],
      },
      {
        h: "2 Stufen",
        items: [
          { t: "Teilweise EM", d: "3–<6 h/Tag auf allg. Arbeitsmarkt → halbe EM-Rente." },
          { t: "Volle EM", d: "<3 h/Tag auf allg. Arbeitsmarkt → volle EM-Rente." },
        ],
      },
      {
        h: "Versicherungsrechtliche Voraussetzungen",
        items: [
          { t: "Wartezeiten", d: "5 Jahre Wartezeit + 3 Jahre Pflichtbeiträge in den letzten 5 Jahren." },
          { t: "Träger", d: "Deutsche Rentenversicherung (DRV)." },
        ],
      },
    ],
  },
  {
    id: "bu",
    cat: "Versicherung",
    title: "Berufsunfähigkeit (privat)",
    color: "purple",
    sections: [
      {
        h: "Definition",
        items: [
          { t: "BU-Voraussetzung", d: "Ärztlich nachgewiesen dauerhaft (≥6 Monate) zu mind. 50% außerstande, den zuletzt ausgeübten Beruf auszuüben." },
          { t: "Leistung", d: "Monatliche BU-Rente. Träger: private Versicherung." },
        ],
      },
      {
        h: "4+ Beitragsfaktoren",
        items: [
          { t: "Beruf / Berufsgruppe", d: "Bürojob billig, Dachdecker teuer." },
          { t: "Alter bei Abschluss", d: "Je jünger, desto günstiger." },
          { t: "Gesundheitszustand", d: "Vorerkrankungen erhöhen Beitrag." },
          { t: "Hobbys", d: "Risikosportarten teurer." },
          { t: "Weitere", d: "Laufzeit, BU-Rente-Höhe, Raucher/Nichtraucher." },
        ],
      },
      {
        h: "Wechselwirkung mit EM",
        items: [
          { t: "Parallel zahlbar", d: "Staatliche EM-Rente fällt NICHT weg, wenn private BU bezogen wird." },
        ],
      },
      {
        h: "BU vs. Unfall",
        items: [
          { t: "Aussage \"Unfall ersetzt BU\" = FALSCH", d: "Unfall zahlt nur bei Unfall. ~90% der BU-Fälle = Krankheit (Psyche, Rücken, Krebs, Herz-Kreislauf)." },
        ],
      },
    ],
  },
  {
    id: "unfall",
    cat: "Versicherung",
    title: "Private Unfallversicherung",
    color: "amber",
    sections: [
      {
        h: "Wann zahlt sie?",
        items: [
          { t: "Nur bei Unfall", d: "Plötzliches, äußeres Ereignis. Krankheit nicht abgedeckt." },
          { t: "Berechnung", d: "Leistung = VS × Invaliditätsgrad (Gliedertaxe) × ggf. Progression." },
        ],
      },
      {
        h: "Gliedertaxe",
        items: [
          { t: "Arme & Beine", d: "Arm 70% · Hand 55% · Bein (oberhalb Mitte Oberschenkel) 70% · Fuß 40%" },
          { t: "Sinne", d: "Auge 50% · Ohr 30% · Geruch 10% · Geschmack 5%" },
          { t: "Finger", d: "Daumen 20% · Zeigefinger 10% · andere Finger 5%" },
        ],
      },
      {
        h: "Progression",
        items: [
          { t: "Wann?", d: "Ab >25% Invalidität steigt Leistung überproportional." },
          { t: "P500", d: "Bei 100% Invalidität = 5-fache VS. VS 100.000 €, Auge (50%), P500 → ca. 100.000 € Auszahlung." },
        ],
      },
    ],
  },
];
