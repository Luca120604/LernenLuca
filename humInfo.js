// src/data/humInfo.js
// HUM Info — Frau HOL — LF 13 Finanzierungen für Geschäfts- und Firmenkunden
// Fall: Bäckerei Zeiler GmbH (1.400.000 € Investitionskredit + 150.000 € Betriebsmittel)

export const HUMINFO_TOPICS = [
  {
    id: "hol-hints",
    cat: "Hints",
    title: "⚠️ Frau-HOL-Hints (was wahrscheinlich drankommt)",
    color: "amber",
    sections: [
      {
        h: "Aus Audio + Klassenchat",
        items: [
          { t: "Soft Skills bei Kreditwürdigkeit", d: "Frau HOL hat das im Audio extra betont." },
          { t: "Kreditüberwachung NACH Auszahlung", d: "Frau HOL Audio — wird gerne abgefragt." },
          { t: "MaRisk + Markt/Marktfolge-Trennung", d: "Frau HOL Audio." },
          { t: "Alle 3 Darlehensformen INKL. Festdarlehen", d: "Frau HOL Audio — Festdarlehen NICHT vergessen!" },
          { t: "Formeln auswendig", d: "Tim im Klassenchat." },
          { t: "Baufi NICHT mehr dran", d: "Tim im Klassenchat." },
        ],
      },
    ],
  },
  {
    id: "uf-grundlagen",
    cat: "Grundlagen",
    title: "Unternehmensfinanzierung — Außen/Innen + EK/FK",
    color: "blue",
    sections: [
      {
        h: "Außen vs. Innen",
        items: [
          { t: "Außenfinanzierung", d: "Geld kommt von **draußen**. Beispiele: Bankkredit, neue Gesellschafter." },
          { t: "Innenfinanzierung", d: "Geld kommt **aus dem Unternehmen selbst**. Beispiele: einbehaltene Gewinne, Abschreibungen." },
          { t: "Zeiler-Fall", d: "1,55 Mio. € braucht er → kann er nicht intern aufbringen → **Außenfinanzierung über Kredit (FK)**." },
        ],
      },
      {
        h: "EK vs. FK — Bilanz",
        items: [
          { t: "Eigenkapital (EK)", d: "Eigentümer · Passivseite oben · Stammkapital, Rücklagen, Bilanzgewinn." },
          { t: "Fremdkapital (FK)", d: "Gläubiger (z.B. Bank) · Passivseite unten · Verbindlichkeiten, **Rückstellungen**, Bankdarlehen." },
        ],
      },
      {
        h: "⚠️ KLAUSUR-FALLE: Rückstellung vs. Rücklage",
        items: [
          { t: "Rückstellung = FK", d: "Schuld die noch kommt — Pensionszusagen, drohende Steuernachzahlung. **IMMER FK!**" },
          { t: "Rücklage = EK", d: "Einbehaltener Gewinn der Eigentümer." },
          { t: "Merken", d: "Frau HOL fragt das gerne als Fangfrage. **Rückstellung = FK. Immer.**" },
        ],
      },
    ],
  },
  {
    id: "kontokorrent",
    cat: "Kreditarten",
    title: "Kontokorrentkredit (Dispo)",
    color: "green",
    sections: [
      {
        h: "Eigenschaften",
        items: [
          { t: "Laufzeit", d: "Kurzfristig, variabler Zins (teuer, z.B. 9,25 %)." },
          { t: "Zweck", d: "Kreditlinie auf dem Geschäftskonto, für Betriebsmittel (Rohstoffe, Löhne, Überbrückung)." },
          { t: "Zeiler-Fall", d: "150.000 € Betriebsmittellinie." },
        ],
      },
      {
        h: "Genehmigt vs. Geduldet",
        items: [
          { t: "Genehmigte Überziehung", d: "Vereinbart, niedrigerer Zins (z.B. 6,50 %). Bis Kreditlinie." },
          { t: "Geduldete Überziehung", d: "Bank toleriert nur, höherer Zins (z.B. 11 %). Über Kreditlinie." },
        ],
      },
    ],
  },
  {
    id: "investitionskredit",
    cat: "Kreditarten",
    title: "Investitionskredit",
    color: "blue",
    sections: [
      {
        h: "Eigenschaften",
        items: [
          { t: "Laufzeit + Zins", d: "Langfristig, Festzins (z.B. 4,0–4,25 %)." },
          { t: "Zweck", d: "Maschinen, Hallen, Fahrzeuge." },
          { t: "Form", d: "Wird als Annuitäten- oder Tilgungsdarlehen ausgezahlt." },
          { t: "Zeiler-Fall", d: "1.400.000 €." },
        ],
      },
    ],
  },
  {
    id: "darlehensformen",
    cat: "Kreditarten",
    title: "3 Darlehensformen (alle drei!)",
    color: "red",
    sections: [
      {
        h: "Vergleichstabelle",
        items: [
          { t: "Annuitätendarlehen", d: "Annuität (Rate) **gleich** · Tilgung **steigt** · Zinsen **sinken**." },
          { t: "Tilgungsdarlehen", d: "Annuität (Rate) **sinkt** · Tilgung **gleich** · Zinsen **sinken**." },
          { t: "Festdarlehen (endfällig)", d: "Rate = nur Zinsen · Tilgung **0** während Laufzeit (am Ende alles in einer Summe) · Zinsen **gleich**." },
        ],
      },
      {
        h: "⚠️ FALLE",
        items: [
          { t: "Festdarlehen-Risiko", d: "Am Ende muss die volle Summe da sein. Sonst Anschlussfinanzierung nötig. **Tilgung ist NICHT 0 in der Rate** — sie kommt nur am ENDE in einer Summe." },
        ],
      },
    ],
  },
  {
    id: "aval-leasing-factoring",
    cat: "Kreditarten",
    title: "Avalkredit · Leasing · Factoring",
    color: "purple",
    sections: [
      {
        h: "Avalkredit",
        items: [
          { t: "Was", d: "Bank gibt **kein Geld**, sondern eine **Bürgschaft/Garantie**." },
          { t: "Verdienst", d: "Bank verdient Avalprovision — muss aber zahlen, wenn Kunde nicht leistet." },
        ],
      },
      {
        h: "Leasing",
        items: [
          { t: "Funktion", d: "Nutzung auf Zeit. Monatliche Leasingrate." },
          { t: "⚠️ FALLE", d: "**Leasingnehmer = Besitzer** | **Leasinggeber = Eigentümer**. Klausurfalle!" },
        ],
      },
      {
        h: "Factoring",
        items: [
          { t: "Funktion", d: "Forderungsverkauf an einen Factor. Statt 30 Tage warten → sofort Geld." },
          { t: "3 Funktionen", d: "**Finanzierung** · **Delkredere** (Ausfallrisiko) · **Dienstleistung**." },
        ],
      },
    ],
  },
  {
    id: "avalarten",
    cat: "Kreditarten",
    title: "Avalarten + Bürgschaft vs. Garantie",
    color: "purple",
    sections: [
      {
        h: "Avalarten",
        items: [
          { t: "Mietaval", d: "Mietkaution Gewerbeimmobilie." },
          { t: "Zollaval", d: "Zollgebühren bei Import/Export." },
          { t: "Bietungsgarantie", d: "Bei Ausschreibungen (Bewerbung um Auftrag)." },
          { t: "Anzahlungsgarantie", d: "Sicherung der Anzahlung des Käufers." },
          { t: "Zahlungsgarantie", d: "Bank garantiert Zahlung an Lieferant." },
          { t: "Gewährleistungsgarantie", d: "Sicherung der Gewährleistung nach Fertigstellung." },
        ],
      },
      {
        h: "Bürgschaft vs. Garantie",
        items: [
          { t: "Bürgschaft = AKZESSORISCH", d: "An Hauptforderung gebunden. Wenn Hauptschuld weg → Bürgschaft auch weg. Riskanter für Bank." },
          { t: "Garantie = ABSTRAKT", d: "Unabhängig. Steht für sich, immer fällig wenn ausgelöst. Sicher für Bank." },
        ],
      },
    ],
  },
  {
    id: "kreditpruefung",
    cat: "Kreditprüfung",
    title: "Kreditfähigkeit + Kreditwürdigkeit",
    color: "green",
    sections: [
      {
        h: "Kreditfähigkeit (rechtlich)",
        items: [
          { t: "Frage", d: "Darf der Kunde rechtlich überhaupt einen Kredit aufnehmen?" },
          { t: "Voraussetzungen", d: "Volljährig · unbeschränkt geschäftsfähig · bei GmbH: vertretungsberechtigte Person (GF / Prokurist mit Vollmacht)." },
        ],
      },
      {
        h: "Wirtschaftliche Kreditwürdigkeit (Zahlen)",
        items: [
          { t: "Was zählt", d: "Bilanzanalyse + Kennziffern · Ertragslage (GuV) · Cashflow · Branchenrating." },
        ],
      },
      {
        h: "⚠️ Persönliche Kreditwürdigkeit (Soft Skills) — Frau HOL betont!",
        items: [
          { t: "Aufgeschlossenheit / Kooperationsbereitschaft", d: "Liefert der Kunde Unterlagen pünktlich? Ist er offen für Rückfragen?" },
          { t: "Reputation in Branche und Region", d: "Wie ist der Ruf?" },
          { t: "Wichtigkeit / Bedeutung für die Bank", d: "Wie wichtig ist der Kunde für uns?" },
          { t: "Geschäftliche Erfahrung des Inhabers", d: "Branchenerfahrung, Erfolge in der Vergangenheit." },
          { t: "Persönliche Lebensführung", d: "Solides Privatleben, keine Skandale." },
        ],
      },
      {
        h: "Erforderliche Unterlagen",
        items: [
          { t: "Liste", d: "Letzte **3 Jahresabschlüsse** (Bilanz + GuV) · aktuelle BWA · Selbstauskunft / Vermögensübersicht · Handelsregisterauszug · Gesellschaftsvertrag · Investitionsplan + Kostenvoranschläge · Schufa-Selbstauskunft." },
        ],
      },
    ],
  },
  {
    id: "kwg",
    cat: "Recht",
    title: "KWG-Paragraphen + MaRisk",
    color: "red",
    sections: [
      {
        h: "Wichtige KWG §§",
        items: [
          { t: "§ 13 KWG — Großkredit", d: "Kredit > 10 % des haftenden EK der Bank → Anzeige an BaFin + Bundesbank." },
          { t: "§ 14 KWG — Millionenkredit", d: "Kredit ≥ 1 Mio. € → Meldung an Evidenzzentrale." },
          { t: "§ 15 KWG — Organkredit", d: "Kredit an Vorstand/AR → einstimmiger Beschluss aller Geschäftsleiter." },
          { t: "§ 18 KWG — Offenlegung", d: "Kredit > **750.000 €** → **Offenlegung der wirtschaftlichen Verhältnisse — PFLICHT!**" },
        ],
      },
      {
        h: "Zeiler-Fall",
        items: [
          { t: "1,55 Mio. €", d: "Klar über 750k → § 18 greift IMMER." },
        ],
      },
      {
        h: "MaRisk — Markt/Marktfolge-Trennung",
        items: [
          { t: "Markt", d: "Vertrieb / Kundenbetreuer (will den Kredit)." },
          { t: "Marktfolge", d: "Kreditprüfung / Risiko (entscheidet ob's geht)." },
          { t: "Trennung", d: "Beide Bereiche **bis zur Vorstandsebene strikt getrennt** — schützt vor Interessenkonflikten. 4-Augen-Prinzip." },
        ],
      },
    ],
  },
  {
    id: "bilanz",
    cat: "Bilanz",
    title: "Bilanz lesen — Zeiler GmbH",
    color: "blue",
    sections: [
      {
        h: "Bilanz-Aufbau",
        items: [
          { t: "Aktiva (Mittelverwendung)", d: "**Anlagevermögen** (langfristig): Grundstücke, Gebäude, Maschinen, BGA, Fuhrpark · **Umlaufvermögen** (kurzfristig): Vorräte, Forderungen, liquide Mittel." },
          { t: "Passiva (Mittelherkunft)", d: "**Eigenkapital**: Stammkapital, Rücklagen, Bilanzgewinn · **Fremdkapital**: Rückstellungen, langfr. Verb., kurzfr. Verb." },
        ],
      },
      {
        h: "Zeiler-Werte (Jahr 3, in Tsd. €) — auswendig!",
        items: [
          { t: "Eigenkapital", d: "Stammkapital 354 + Rücklagen 2 + Bilanzgewinn 48 = **EK 404**." },
          { t: "Gesamtkapital", d: "**GK = 2.390**." },
          { t: "Anlagevermögen", d: "927 + 901 + 163 + 15 = **AV 2.006**." },
          { t: "Liquide Mittel", d: "44 + 8 = **52**." },
          { t: "Langfr. FK", d: "**1.452**." },
          { t: "Umsatz Jahr 3", d: "**3.085**." },
        ],
      },
    ],
  },
  {
    id: "kennziffern-bilanz",
    cat: "Kennziffern",
    title: "Bilanzkennziffern (alle Formeln!)",
    color: "amber",
    sections: [
      {
        h: "EK-Quote",
        items: [
          { t: "Frage", d: "Wie viel % gehört den Eigentümern?" },
          { t: "Formel", d: "**EK × 100 / GK**" },
          { t: "Zeiler", d: "404 × 100 / 2.390 = **16,9 %**." },
          { t: "Branchenwert", d: "Sollte > 20 % → **Zeiler drunter, Risiko**." },
        ],
      },
      {
        h: "Verschuldungsgrad",
        items: [
          { t: "Frage", d: "Wie viel % sind Schulden?" },
          { t: "Formel", d: "**FK × 100 / GK**" },
          { t: "Trick", d: "Gegenstück zur EK-Quote → 100 % − 16,9 % = 83,1 %." },
        ],
      },
      {
        h: "Anlagendeckung I — Goldene Bilanzregel",
        items: [
          { t: "Frage", d: "Deckt EK das gesamte AV?" },
          { t: "Formel", d: "**EK × 100 / AV**" },
          { t: "Soll", d: "≥ 100 %." },
        ],
      },
      {
        h: "Anlagendeckung II — Silberne Bilanzregel",
        items: [
          { t: "Frage", d: "Decken EK + langfr. FK das AV?" },
          { t: "Formel", d: "**(EK + langfr. FK) × 100 / AV**" },
          { t: "Soll", d: "≥ 100 %." },
          { t: "Zeiler", d: "(404 + 1.452) × 100 / 2.006 = 1.856 × 100 / 2.006 = **92,5 % → silberne Regel NICHT erfüllt**." },
          { t: "Warum wichtig", d: "Langfristiges Vermögen MUSS langfristig finanziert sein. Sonst finanzierst du eine 10-Jahre-Maschine mit einem 1-Jahres-Kredit → Katastrophe." },
        ],
      },
      {
        h: "Liquidität 1./2./3. Grades",
        items: [
          { t: "Allgemein", d: "Alle Formeln: **... × 100 / kurzfr. Verbindlichkeiten**" },
          { t: "1. Grad — Barliquidität", d: "Liquide Mittel × 100 / kurzfr. Verb. · Soll: > 20 %." },
          { t: "2. Grad — Quick Ratio", d: "(Liq. Mittel + Forderungen) × 100 / kurzfr. Verb. · Soll: > 100 %." },
          { t: "3. Grad — Current Ratio", d: "(Liq. Mittel + Forderungen + Vorräte) × 100 / kurzfr. Verb. · Soll: > 200 % (mind. 120 %)." },
        ],
      },
    ],
  },
  {
    id: "kennziffern-ertrag",
    cat: "Kennziffern",
    title: "Ertragskennziffern (aus GuV)",
    color: "green",
    sections: [
      {
        h: "EK-Rentabilität",
        items: [
          { t: "Frage", d: "Lohnt sich's für die Eigentümer?" },
          { t: "Formel", d: "**Jahresüberschuss × 100 / EK**" },
        ],
      },
      {
        h: "GK-Rentabilität",
        items: [
          { t: "Frage", d: "Wie effizient arbeitet das gesamte Kapital?" },
          { t: "Formel", d: "**(JÜ + FK-Zinsen) × 100 / GK**" },
        ],
      },
      {
        h: "Umsatzrentabilität",
        items: [
          { t: "Frage", d: "Wie viel bleibt pro Euro Umsatz?" },
          { t: "Formel", d: "**JÜ × 100 / Umsatz**" },
        ],
      },
      {
        h: "ROI",
        items: [
          { t: "Formel 1", d: "**Umsatzrentabilität × Kapitalumschlag**" },
          { t: "Formel 2", d: "**(JÜ × 100) / GK**" },
        ],
      },
      {
        h: "Cashflow",
        items: [
          { t: "Frage", d: "Wie viel Geld fließt WIRKLICH?" },
          { t: "Formel", d: "**JÜ + Abschreibungen + langfr. Rückstellungen**" },
          { t: "Warum +Abschreibungen?", d: "Buchungstrick — kein echtes Geld fließt raus." },
        ],
      },
      {
        h: "Debitoren- / Kreditorenziel (Bonus)",
        items: [
          { t: "Debitorenziel", d: "Wie lange brauchen Kunden? **Forderungsbestand × 360 / Umsatz**" },
          { t: "Kreditorenziel", d: "Wie lange brauchen WIR? **Verb. a.LuL × 360 / Materialeinsatz**" },
        ],
      },
    ],
  },
  {
    id: "rating",
    cat: "Kreditprüfung",
    title: "Rating (Quantitativ + Qualitativ)",
    color: "purple",
    sections: [
      {
        h: "Quantitativ (Zahlen, ~70 %)",
        items: [
          { t: "Bilanzkennziffern", d: "EK-Quote, Verschuldungsgrad, Anlagendeckung." },
          { t: "Ertragskennziffern", d: "EK-Rent., Umsatzrent., Cashflow." },
          { t: "Liquiditätskennziffern", d: "1./2./3. Grades." },
        ],
      },
      {
        h: "Qualitativ (Soft Facts, ~30 %)",
        items: [
          { t: "Kriterien", d: "Management-Qualität / Geschäftsführung · Marktposition · Branchenentwicklung · Strategie · Kontoführung beim Kreditinstitut." },
        ],
      },
      {
        h: "Ergebnis",
        items: [
          { t: "Ratingnote", d: "z.B. AAA bis D bei externen, oder bankinterne Skala." },
          { t: "Auswirkung", d: "Bestimmt **Zinssatz** und **Sicherheitenanforderungen**." },
        ],
      },
    ],
  },
  {
    id: "annuitaet-rechnung",
    cat: "Rechnen",
    title: "Annuitätendarlehen — Schritt für Schritt",
    color: "red",
    sections: [
      {
        h: "Beispiel: 1.400.000 € · 4,25 % p.a. · 2,0 % anfängliche Tilgung",
        items: [
          { t: "1. Annuitätensatz", d: "Zinssatz + Tilgungssatz = **4,25 % + 2,0 % = 6,25 %**." },
          { t: "2. Annuität pro Monat", d: "1.400.000 × 6,25 % ÷ 12 = **7.291,67 €** → bleibt IMMER gleich." },
          { t: "3. Zinsen Monat 1", d: "1.400.000 × 4,25 % ÷ 12 = **4.958,33 €**." },
          { t: "4. Tilgung Monat 1", d: "7.291,67 − 4.958,33 = **2.333,33 €**." },
          { t: "5. Restdarlehen für Monat 2", d: "1.400.000 − 2.333,33 = **1.397.666,67 €**." },
          { t: "6. Zinsen Monat 2", d: "1.397.666,67 × 4,25 % ÷ 12 = **4.950,07 €** (weniger!)." },
          { t: "7. Tilgung Monat 2", d: "7.291,67 − 4.950,07 = **2.341,60 €** (mehr!)." },
        ],
      },
      {
        h: "Regel + Tipp",
        items: [
          { t: "Merksatz", d: "**Annuität gleich · Zinsen sinken · Tilgung steigt.**" },
          { t: "Frau-HOL-Tipp", d: "Im Taschenrechner einfach `× 4.25 %` tippen — keine 0,0425 nötig." },
        ],
      },
    ],
  },
  {
    id: "tilgung-rechnung",
    cat: "Rechnen",
    title: "Tilgungsdarlehen — Schritt für Schritt",
    color: "amber",
    sections: [
      {
        h: "Beispiel: 1.400.000 € · 4,0 % p.a. · 5,0 % Tilgung",
        items: [
          { t: "1. Tilgung pro Monat (gleich!)", d: "1.400.000 × 5 % ÷ 12 = **5.833,33 €**." },
          { t: "2. Zinsen Monat 1", d: "1.400.000 × 4 % ÷ 12 = **4.666,67 €**." },
          { t: "3. Rate Monat 1", d: "5.833,33 + 4.666,67 = **10.500,00 €**." },
          { t: "4. Restdarlehen", d: "1.400.000 − 5.833,33 = **1.394.166,67 €**." },
          { t: "5. Zinsen Monat 2", d: "1.394.166,67 × 4 % ÷ 12 = **4.647,22 €**." },
          { t: "6. Rate Monat 2", d: "5.833,33 + 4.647,22 = **10.480,55 €** (weniger!)." },
        ],
      },
      {
        h: "Regel",
        items: [
          { t: "Merksatz", d: "**Tilgung gleich · Zinsen sinken · Rate sinkt.**" },
        ],
      },
    ],
  },
  {
    id: "festdarlehen-rechnung",
    cat: "Rechnen",
    title: "Festdarlehen (endfällig)",
    color: "purple",
    sections: [
      {
        h: "Beispiel: 1.400.000 € · 4,5 % p.a. · 5 Jahre",
        items: [
          { t: "Während Laufzeit", d: "Nur Zinsen: 1.400.000 × 4,5 % = **63.000 € pro Jahr**." },
          { t: "Am Ende Jahr 5", d: "Zinsen + komplette Tilgung **1.400.000 €**." },
        ],
      },
      {
        h: "⚠️ FALLE",
        items: [
          { t: "Tilgung in der Rate", d: "Tilgung ist NICHT 0 in der Rate. Sie kommt am ENDE in einer Summe." },
          { t: "Risiko", d: "Tilgungsersatz (Lebensvers., Bausparvertrag) muss am Ende 1,4 Mio. € her geben — sonst Anschlussfinanzierung." },
        ],
      },
    ],
  },
  {
    id: "skonto",
    cat: "Rechnen",
    title: "Skonto-Effektivzins",
    color: "green",
    sections: [
      {
        h: "Beispiel: 3 % Skonto bei 10 Tagen, sonst 30 Tage",
        items: [
          { t: "Skontofrist", d: "30 − 10 = **20 Tage**." },
          { t: "Formel", d: "**Skonto-% × 360 / Skontofrist**" },
          { t: "Rechnung", d: "3 × 360 ÷ 20 = **54 % p.a.**" },
          { t: "Erkenntnis", d: "Bankkredit (z.B. 9 %) ist VIEL billiger → **Skonto immer ziehen!**" },
        ],
      },
    ],
  },
  {
    id: "kk-zinszahlen",
    cat: "Rechnen",
    title: "Kontokorrentkredit — Zinszahlenmethode",
    color: "blue",
    sections: [
      {
        h: "1. Zinszahl pro Zeitraum",
        items: [
          { t: "Formel", d: "**Betrag × Tage ÷ 100**" },
          { t: "Beispiel", d: "92.210 € für 7 Tage → 92.210 × 7 ÷ 100 = **6.454,70**." },
        ],
      },
      {
        h: "2. Sollzinsen aus Summe",
        items: [
          { t: "Formel", d: "**Summe Zinszahlen × Zinssatz % ÷ 360**" },
          { t: "Beispiel", d: "Summe 18.530, Satz 6,5 % → 18.530 × 6,5 % ÷ 360 = **3,35**." },
        ],
      },
      {
        h: "3. Kreditprovision",
        items: [
          { t: "Worauf?", d: "Auf den NICHT genutzten Teil." },
          { t: "Beispiel", d: "Kreditlinie 140.000, genutzt 92.210 → nicht genutzt 47.790 → Zinszahl × 2 % ÷ 360." },
        ],
      },
      {
        h: "Wichtig",
        items: [
          { t: "Zwei-Spalten-Logik", d: "Bis Kreditlinie = genehmigte ÜZ (6,5 %). Über Kreditlinie = geduldete ÜZ (11 %). **Zwei Spalten in der Tabelle!**" },
        ],
      },
    ],
  },
  {
    id: "sicherheiten",
    cat: "Sicherheiten",
    title: "Beleihungsgrenzen + SÜ + Grundschuld",
    color: "amber",
    sections: [
      {
        h: "Beleihungsgrenzen — auswendig!",
        items: [
          { t: "Sparbuch", d: "Beleihungswert 100 % · Beleihungsgrenze 100 %." },
          { t: "Bundesanleihen", d: "100 % · 90–100 %." },
          { t: "Aktien (DAX)", d: "Kurswert · ~50–60 %." },
          { t: "Wohnimmobilie", d: "Verkehrs-/Ertragswert · 60 % (1. Rang) / 80 % (2. Rang)." },
          { t: "Gewerbeimmobilie", d: "Ertragswert · 50–60 %." },
          { t: "Maschinen", d: "Zeitwert · ~40–50 %." },
          { t: "Warenlager", d: "Gängige Ware · ~30–50 %." },
        ],
      },
      {
        h: "Sicherungsübereignung (SÜ)",
        items: [
          { t: "Trennung", d: "**Eigentum** geht an die Bank über · **Besitz** bleibt beim Kunden (er nutzt es weiter)." },
          { t: "Beispiele", d: "Maschinen, Kfz, Warenlager." },
          { t: "Vorteil", d: "Bank ist abgesichert, Kunde kann weiterarbeiten." },
        ],
      },
      {
        h: "Grundschuld",
        items: [
          { t: "Was", d: "Pfandrecht an einer Immobilie." },
          { t: "Eintragung", d: "Im Grundbuch (**Abteilung III**)." },
          { t: "Eigenschaft", d: "**Abstrakt** — nicht an einen konkreten Kredit gebunden (im Gegensatz zur Hypothek)." },
        ],
      },
      {
        h: "Ertragswertverfahren (Gewerbeimmobilien)",
        items: [
          { t: "Formel grob", d: "**Jahresnettomiete × Vervielfältiger**" },
          { t: "Logik", d: "Kapitalisiert die zukünftigen Mieteinnahmen. Bei Gewerbe wichtiger als bei Wohn (da Sachwertverfahren)." },
        ],
      },
    ],
  },
  {
    id: "zession",
    cat: "Sicherheiten",
    title: "Forderungsabtretung (Zession)",
    color: "red",
    sections: [
      {
        h: "Globalzession vs. Mantelzession",
        items: [
          { t: "Globalzession", d: "**ALLE** Forderungen, automatisch auch zukünftige. Einmalig, dann automatisch. Bestimmtheitsgrundsatz schwieriger." },
          { t: "Mantelzession", d: "Bestimmte Forderungen, nur die in einer Liste. Laufend Listen einreichen. Klare Liste = einfache Bestimmtheit." },
        ],
      },
      {
        h: "Stille vs. Offene Zession",
        items: [
          { t: "Stille Zession", d: "Schuldner erfährt nichts → er zahlt weiter an den Kunden, der leitet weiter." },
          { t: "Offene Zession", d: "Schuldner wird informiert → zahlt direkt an die Bank." },
        ],
      },
      {
        h: "Bewertung & Risiken",
        items: [
          { t: "Beleihung", d: "Faustregel: ~50–80 % des Forderungsbestands. Abzüge für: Mahnungen, alte Forderungen, Konzentration." },
          { t: "Gefahren", d: "Doppelabtretung an mehrere Banken · Forderungen schon factoring-belegt · Bestimmtheitsgrundsatz nicht eingehalten · Drittschuldner-Insolvenz." },
        ],
      },
    ],
  },
  {
    id: "kreditueberwachung",
    cat: "Überwachung",
    title: "⚠️ Kreditüberwachung NACH Auszahlung",
    color: "red",
    sections: [
      {
        h: "Frau HOL betont das EXTRA!",
        items: [
          { t: "Hinweis", d: "Kreditprüfung passiert VOR Auszahlung. Aber die Bank überwacht auch DANACH laufend!" },
        ],
      },
      {
        h: "Was prüft die Bank laufend?",
        items: [
          { t: "Quartalsweise", d: "BWA (Betriebswirtschaftliche Auswertung)." },
          { t: "Jährlich", d: "Jahresabschluss (Bilanz + GuV)." },
          { t: "Bei Investitionen", d: "Kostenvoranschläge prüfen — wird das Geld wirklich für den vereinbarten Zweck genutzt?" },
          { t: "Laufend", d: "Kontoführung (KK-Linie eingehalten? Ausschöpfung?)." },
          { t: "Anlassbezogen", d: "Branchen-News, persönliche Veränderungen, Rating-Updates." },
        ],
      },
      {
        h: "Frühwarnsignale",
        items: [
          { t: "Liste", d: "Kreditlinie wird ständig voll ausgeschöpft · Lastschriften zurückgegeben · BWA verschlechtert sich · Kunde reicht Unterlagen nicht mehr ein · Branche kippt." },
        ],
      },
      {
        h: "Reaktionen der Bank",
        items: [
          { t: "Stufenfolge", d: "1. Gespräch suchen → 2. Unterlagen nachfordern → 3. Sicherheiten verstärken → 4. Linie reduzieren → 5. Im Extremfall: **Kündigung des Kredits**." },
        ],
      },
    ],
  },
  {
    id: "checkliste",
    cat: "Checkliste",
    title: "Last-Minute-Checkliste",
    color: "amber",
    sections: [
      {
        h: "Auswendig sitzen MÜSSEN",
        items: [
          { t: "Kennziffern", d: "EK-Quote · Verschuldungsgrad · Anlagendeckung I + II · Liquidität 1./2./3. · EK-Rent. · GK-Rent. · Umsatzrent. · ROI · Cashflow." },
          { t: "Annuitätenformel", d: "Annuität = Restdarlehen × Zinssatz % ÷ 12 + Tilgung." },
          { t: "Skonto-Effektivzins", d: "Skonto% × 360 / Skontofrist." },
          { t: "Zinszahl", d: "Betrag × Tage ÷ 100." },
          { t: "§ 18 KWG", d: "Schwelle 750.000 €." },
          { t: "Rückstellung vs. Rücklage", d: "Rückstellung = FK | Rücklage = EK." },
        ],
      },
      {
        h: "Konzept-Klassiker",
        items: [
          { t: "Liste", d: "Soft Skills · Markt/Marktfolge · Kreditüberwachung post-Auszahlung · Festdarlehen-Risiko · Bürgschaft akzessorisch vs. Garantie abstrakt · Globalzession vs. Mantelzession · Leasing: Besitzer ≠ Eigentümer." },
        ],
      },
      {
        h: "Top-3-Fallen",
        items: [
          { t: "Falle 1 — Rückstellung vs. Rücklage", d: "Rückstellung = FK!" },
          { t: "Falle 2 — Anlagendeckung II", d: "Bei Zeiler 92,5 % → NICHT erfüllt. Soll: ≥ 100 %." },
          { t: "Falle 3 — Festdarlehen", d: "Tilgung ist NICHT 0 in der Rate. Tilgung kommt erst am ENDE in einer Summe." },
        ],
      },
    ],
  },
];
