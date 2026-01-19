# Moralische Dilemmata - Interaktive Lernseite

Eine modulare React-Anwendung zur Auseinandersetzung mit moralischen Dilemmata. Die App ist mit Vite gebaut und verwendet eine saubere Komponenten-Architektur für einfache Wartung und Erweiterung.

## 🎯 Features

- **8 klassische moralische Dilemmata** (Trolley-Problem, Brücken-Dilemma, etc.)
- **Modulare React-Architektur** - Einfach zu erweitern und anzupassen
- **Separate Daten-Datei** - Dilemmata können einfach bearbeitet werden in `src/data/dilemmata.js`
- **Philosophische Grundlagen** - Basierend auf Kant, Mill, Aristoteles, etc.
- **Statistische Vergleiche** - Siehe wie andere entschieden haben
- **PDF-Dokumentation** - Herunterladbare Zusammenfassung aller Entscheidungen
- **Responsive Design** - Funktioniert auf allen Geräten

## 📁 Projekt-Struktur

```
moralische-dilemmata-app/
├── index.html              # HTML Entry Point
├── package.json            # Dependencies & Scripts
├── vite.config.js          # Vite Konfiguration
├── vercel.json             # Vercel Deploy-Einstellungen
├── src/
│   ├── main.jsx           # React Entry Point
│   ├── App.jsx            # Haupt-Komponente mit State
│   ├── data/
│   │   └── dilemmata.js   # ALLE DILEMMATA HIER! (einfach zu bearbeiten)
│   └── components/
│       ├── WelcomeScreen.jsx    # Namen-Eingabe
│       ├── MenuScreen.jsx       # 3-Button-Menü
│       ├── DilemmaList.jsx      # Dilemma-Übersicht
│       ├── DilemmaDetail.jsx    # Einzelnes Dilemma (OHNE Spoiler!)
│       ├── FeedbackScreen.jsx   # Feedback nach Entscheidung
│       └── ResultScreen.jsx     # Finale Auswertung mit PDF
```

## 🚀 Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Dev-Server starten (http://localhost:5173)
npm run dev

# Production Build erstellen
npm run build

# Production Build lokal testen
npm run preview
```

## 📝 Dilemmata bearbeiten

Alle Dilemmata befinden sich in einer einzigen Datei: `src/data/dilemmata.js`

So fügst du ein neues Dilemma hinzu:

```javascript
{
  id: 3,
  title: "Neues Dilemma",
  shortDesc: "Kurzbeschreibung...",
  description: "Lange Beschreibung...",
  question: "Was tust du?",
  options: [
    {
      text: "Option A",  // Nur Text, KEIN Prinzip hier!
      principle: "Utilitarismus",
      philosopher: "Mill",
      explanation: "Erklärung...",
      percentage: 45,
      theory: { /* Theorie-Details */ }
    }
  ],
  background: "Historischer Kontext..."
}
```

**Wichtig:** 
- ✅ Normale Umlaute verwenden (ä, ö, ü)
- ✅ Nur "ss" statt "ß"
- ✅ KEINE Prinzipien/Philosophen im `text` der Optionen (Spoiler-Vermeidung!)

## 🌐 Deployment auf Vercel

### Option 1: Via GitHub (empfohlen)

```bash
# Repository erstellen
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/moralische-dilemmata.git
git push -u origin main

# Auf vercel.com:
# - New Project
# - Import from GitHub
# - Wähle Repository
# - Deploy (Vite wird automatisch erkannt)
```

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 3: Direktes Upload

1. Erstelle Production Build: `npm run build`
2. Gehe zu [vercel.com](https://vercel.com)
3. Upload den `dist/` Ordner

## 🔧 Änderungen vornehmen

Die modulare Struktur macht Änderungen einfach:

**Dilemma hinzufügen/ändern:**
- Datei: `src/data/dilemmata.js`
- Einfach neues Objekt im Array hinzufügen

**Screen-Layout ändern:**
- Datei: `src/components/[ScreenName].jsx`
- Jeder Screen ist eine separate Komponente

**Styling anpassen:**
- Verwendet Tailwind CSS
- Farben/Layout direkt in JSX ändern

**Neue Funktionen:**
- Neue Komponente in `src/components/` erstellen
- In `App.jsx` importieren und verwenden

## 💡 Technische Details

- **Framework:** React 18 mit Vite
- **Styling:** Tailwind CSS (über CDN)
- **PDF:** jsPDF für Dokumentation
- **State Management:** React useState (einfach, keine Library nötig)
- **Deployment:** Vercel (automatischer Build)

## 🎓 Philosophische Grundlagen

Die App basiert auf klassischen philosophischen Traditionen:
- **Utilitarismus** (Bentham, Mill, Singer)
- **Deontologie** (Kant)
- **Tugendethik** (Aristoteles)
- **Care-Ethik** (Gilligan)
- **Kontraktualismus** (Rawls)

## 📄 Lizenz

MIT License - Frei verwendbar für Bildungszwecke

---

**Viel Erfolg mit der App! 🚀**

Bei Fragen zur Struktur: Die modulare Architektur macht es einfach, einzelne Teile anzupassen ohne die ganze App neu zu schreiben.
