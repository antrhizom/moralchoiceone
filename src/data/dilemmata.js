export const dilemmata = [
  {
    id: 1,
    title: "Das Trolley-Problem",
    shortDesc: "Eine ausser Kontrolle geratene Strassenbahn rast auf fünf Arbeiter zu. Du kannst die Weiche umstellen.",
    description: "Du befindest dich an einer Weiche einer Strassenbahnlinie. Eine ausser Kontrolle geratene Bahn rast auf eine Gruppe von fünf Gleisarbeitern zu, die auf dem Hauptgleis arbeiten. Wenn die Bahn ihren Kurs beibehält, werden alle fünf sterben. Du kannst die Weiche umlegen und die Bahn auf ein Nebengleis umleiten. Dort arbeitet jedoch ein einzelner Gleisarbeiter. Wenn du die Weiche umstellst, wird dieser eine Arbeiter getötet, aber die fünf anderen werden gerettet.",
    question: "Was tust du?",
    options: [
      {
        text: "Weiche umstellen",
        principle: "Utilitarismus",
        philosopher: "Jeremy Bentham & John Stuart Mill",
        explanation: "Du folgst dem utilitaristischen Prinzip des grössten Glücks für die grösste Anzahl. Die Konsequenz (5 gerettete Leben) rechtfertigt die Handlung. Bentham: 'Die richtige Handlung maximiert das Gesamtwohl.'",
        percentage: 82,
        theory: {
          title: "Utilitarismus (Konsequenzialismus)",
          philosophers: "Jeremy Bentham (1748-1832), John Stuart Mill (1806-1873), Peter Singer (*1946)",
          core: "Das grösste Glück für die grösste Anzahl ist das Kriterium für moralisch richtiges Handeln.",
          details: "Bentham entwickelte das 'Prinzip des Nutzens': Eine Handlung ist richtig, wenn sie mehr Glück erzeugt als Leid. Mill verfeinerte dies durch qualitative Unterschiede. Singer wendet es radikal auf Tierethik an.",
          strength: "Bietet klare Entscheidungskriterien: Berechne Konsequenzen und maximiere Gesamtnutzen.",
          weakness: "Kann zu absurden Ergebnissen führen (z.B. Organentnahme). Ignoriert Rechte und Gerechtigkeit."
        }
      },
      {
        text: "Nichts tun",
        principle: "Deontologie",
        philosopher: "Immanuel Kant",
        explanation: "Du befolgst Kants kategorischen Imperativ: 'Handle so, dass du die Menschheit niemals bloss als Mittel brauchst.' Aktiv zu töten unterscheidet sich moralisch fundamental vom Zulassen eines Todes.",
        percentage: 12,
        theory: {
          title: "Deontologische Ethik (Pflichtethik)",
          philosophers: "Immanuel Kant (1724-1804)",
          core: "Handlungen sind intrinsisch richtig oder falsch, unabhängig von ihren Konsequenzen.",
          details: "Kants kategorischer Imperativ als absolutes Prinzip der Moral. Menschen dürfen nie bloss als Mittel behandelt werden.",
          strength: "Schützt individuelle Rechte und Würde absolut.",
          weakness: "Kann in Extremsituationen zu kontraintuitiven Forderungen führen."
        }
      },
      {
        text: "Nach Tugend entscheiden",
        principle: "Tugendethik",
        philosopher: "Aristoteles",
        explanation: "Du fragst: Was würde ein tugendhafter, besonnener Mensch tun? Die Tugend der praktischen Klugheit (Phronesis) bestimmt die Handlung im konkreten Kontext.",
        percentage: 4,
        theory: {
          title: "Tugendethik",
          philosophers: "Aristoteles",
          core: "Moralisch richtig ist, was der tugendhafte Mensch tun würde.",
          details: "Tugenden sind habituelle Charaktereigenschaften. Zentral ist Phronesis (praktische Klugheit).",
          strength: "Betont Charakter und Entwicklung statt einzelner Handlungen.",
          weakness: "Gibt keine klaren Handlungsanweisungen."
        }
      },
      {
        text: "Jede Situation ist einzigartig",
        principle: "Moralischer Partikularismus",
        philosopher: "Jonathan Dancy",
        explanation: "Du lehnst universelle Regeln ab. Jede Situation erfordert eine individuelle moralische Beurteilung basierend auf ihren spezifischen Merkmalen.",
        percentage: 2,
        theory: {
          title: "Moralischer Partikularismus",
          philosophers: "Jonathan Dancy",
          core: "Es gibt keine universellen moralischen Prinzipien.",
          details: "Jede Situation ist einzigartig und muss individuell beurteilt werden.",
          strength: "Sehr kontextsensibel.",
          weakness: "Bietet keine Orientierung."
        }
      }
    ],
    background: "Entwickelt 1967 von Philippa Foot, um die Doktrin der Doppelwirkung und die Unterscheidung zwischen Handeln und Unterlassen zu untersuchen."
  },
  {
    id: 2,
    title: "Das Brücken-Dilemma",
    shortDesc: "Eine Lore rast auf fünf Arbeiter zu. Du stehst auf einer Brücke neben einem Mann.",
    description: "Eine führerlose Lore rast auf eine Gruppe von fünf Gleisarbeitern zu. Du stehst auf einer Fussgängerbrücke über den Gleisen, neben einem korpulenten Mann. Die einzige Möglichkeit, die fünf Arbeiter zu retten, besteht darin, den Mann von der Brücke zu stossen. Sein Körper würde die Lore stoppen und die fünf Menschen retten. Er würde jedoch sterben.",
    question: "Stösst du den Mann?",
    options: [
      {
        text: "Mann stossen, um 5 zu retten",
        principle: "Konsequenzieller Utilitarismus",
        philosopher: "Peter Singer",
        explanation: "Die Zahlen sind identisch zum Trolley-Problem: 5 > 1. Singer argumentiert: Wenn die Konsequenzen gleich sind, sollte die Handlung gleich sein.",
        percentage: 8,
        theory: {
          title: "Utilitarismus",
          philosophers: "Peter Singer",
          core: "Konsequenzen zählen, nicht Intuitionen.",
          details: "Radikaler Konsequenzialismus.",
          strength: "Logisch konsistent.",
          weakness: "Verstösst gegen moralische Intuitionen."
        }
      },
      {
        text: "Nicht stossen",
        principle: "Kantsche Würde-Ethik",
        philosopher: "Immanuel Kant",
        explanation: "Den Mann zu stossen bedeutet, ihn als blosses Mittel zum Zweck zu instrumentalisieren. Dies verletzt die Menschenwürde fundamental.",
        percentage: 89,
        theory: {
          title: "Deontologie",
          philosophers: "Kant",
          core: "Menschenwürde ist unantastbar.",
          details: "Kategorischer Imperativ verbietet Instrumentalisierung absolut.",
          strength: "Schützt Würde.",
          weakness: "Ignoriert Konsequenzen."
        }
      },
      {
        text: "Zwischen Handeln und Zulassen unterscheiden",
        principle: "Doktrin der Doppelwirkung",
        philosopher: "Thomas von Aquin",
        explanation: "Es gibt einen moralischen Unterschied zwischen beabsichtigtem Schaden und in Kauf genommenem Schaden. Den Mann zu stossen bedeutet, seinen Tod direkt zu beabsichtigen.",
        percentage: 3,
        theory: {
          title: "Doktrin der Doppelwirkung",
          philosophers: "Thomas von Aquin",
          core: "Beabsichtigter vs. in Kauf genommener Schaden.",
          details: "Direkte Tötung ist moralisch anders als Nebeneffekt.",
          strength: "Erklärt moralische Intuitionen.",
          weakness: "Schwer abzugrenzen."
        }
      }
    ],
    background: "Judith Jarvis Thomson entwickelte diese Variante 1985, um zu zeigen, dass unsere moralischen Intuitionen nicht nur von Zahlen abhängen."
  }
];

export const philosophicalTheories = {
  utilitarismus: {
    title: "Utilitarismus (Konsequenzialismus)",
    philosophers: "Jeremy Bentham (1748-1832), John Stuart Mill (1806-1873), Peter Singer (*1946)",
    core: "Das grösste Glück für die grösste Anzahl ist das Kriterium für moralisch richtiges Handeln.",
    details: "Bentham entwickelte das 'Prinzip des Nutzens': Eine Handlung ist richtig, wenn sie mehr Glück erzeugt als Leid.",
    strength: "Bietet klare Entscheidungskriterien.",
    weakness: "Kann zu absurden Ergebnissen führen."
  },
  deontologie: {
    title: "Deontologische Ethik (Pflichtethik)",
    philosophers: "Immanuel Kant (1724-1804)",
    core: "Handlungen sind intrinsisch richtig oder falsch, unabhängig von ihren Konsequenzen.",
    details: "Kants kategorischer Imperativ als Grundprinzip der Moral.",
    strength: "Schützt individuelle Rechte absolut.",
    weakness: "Kann zu kontraintuitiven Forderungen führen."
  },
  tugendethik: {
    title: "Tugendethik",
    philosophers: "Aristoteles (384-322 v.Chr.)",
    core: "Moralisch richtig ist, was der tugendhafte Mensch tun würde.",
    details: "Tugenden sind habituelle Charaktereigenschaften.",
    strength: "Betont Charakter und Entwicklung.",
    weakness: "Gibt keine klaren Handlungsanweisungen."
  },
  careEthik: {
    title: "Care-Ethik",
    philosophers: "Carol Gilligan (*1936)",
    core: "Moralisches Handeln entsteht aus Beziehungen und Fürsorge.",
    details: "Betont emotionale und relationale Dimensionen von Moral.",
    strength: "Praxisnah und beziehungsorientiert.",
    weakness: "Schwer zu verallgemeinern."
  },
  kontraktualismus: {
    title: "Kontraktualismus",
    philosophers: "John Rawls (1921-2002)",
    core: "Moralische Regeln sind das Ergebnis eines hypothetischen Gesellschaftsvertrags.",
    details: "Schleier des Nichtwissens als Gedankenexperiment.",
    strength: "Fairness als Kern.",
    weakness: "Warum hypothetischen Verträgen folgen?"
  }
};
