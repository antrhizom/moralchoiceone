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
  },
  {
    id: 3,
    title: "Das Heinz-Dilemma",
    shortDesc: "Ein Medikament kostet 2000€, die Herstellung 200€. Heinz hat nur 1000€.",
    description: "In Europa liegt Heinzens Frau im Sterben an einer besonderen Krebsform. Ein Apotheker hat ein Medikament entwickelt, das helfen könnte. Die Herstellung kostet 200€, aber er verlangt 2000€. Heinz kann nur 1000€ auftreiben. Der Apotheker lehnt Ratenzahlung ab.",
    question: "Sollte Heinz das Medikament stehlen?",
    options: [
      {
        text: "Ja, stehlen ist gerechtfertigt",
        principle: "Naturrecht",
        philosopher: "John Locke",
        explanation: "Das Recht auf Leben ist ein fundamentales Naturrecht, das allen Menschen von Natur aus zusteht. Es überwiegt das Eigentumsrecht. In extremen Notlagen darf Eigentum verletzt werden.",
        percentage: 65,
        theory: {
          title: "Naturrecht",
          philosophers: "John Locke",
          core: "Leben, Freiheit und Eigentum - aber Leben steht an erster Stelle.",
          details: "Fundamentale Rechte sind naturgegeben und universell.",
          strength: "Priorisiert Leben über Besitz.",
          weakness: "Wo sind die Grenzen?"
        }
      },
      {
        text: "Nein, Gesetze gelten für alle",
        principle: "Rechtspositivismus",
        philosopher: "Thomas Hobbes",
        explanation: "Ohne Respekt vor Gesetzen und Eigentum herrscht Chaos. Wenn jeder nach eigenem Ermessen Gesetze bricht, kollabiert die soziale Ordnung.",
        percentage: 15,
        theory: {
          title: "Rechtspositivismus",
          philosophers: "Thomas Hobbes",
          core: "Ohne absolute Rechtssicherheit: Chaos.",
          details: "Der Leviathan sichert Ordnung durch Gesetze.",
          strength: "Stabilität und Ordnung.",
          weakness: "Ungerechte Gesetze?"
        }
      },
      {
        text: "Andere Lösungen suchen",
        principle: "Diskursethik",
        philosopher: "Jürgen Habermas",
        explanation: "Heinz sollte den rationalen Diskurs suchen: öffentliche Kampagnen, rechtliche Wege, Spenden sammeln. Legitime Lösungen entstehen durch kommunikatives Handeln.",
        percentage: 18,
        theory: {
          title: "Diskursethik",
          philosophers: "Jürgen Habermas",
          core: "Legitime Normen durch rationalen Diskurs.",
          details: "Alle Betroffenen müssen zustimmen können.",
          strength: "Demokratisch und inklusiv.",
          weakness: "Zu langsam für Notfälle?"
        }
      },
      {
        text: "Fürsorge für Nahestehende hat Vorrang",
        principle: "Care-Ethik",
        philosopher: "Carol Gilligan",
        explanation: "Heinz hat eine besondere Verantwortung für seine Frau. Die Care-Ethik betont: Moralische Urteile entstehen aus Beziehungen und konkreter Fürsorge.",
        percentage: 2,
        theory: {
          title: "Care-Ethik",
          philosophers: "Carol Gilligan",
          core: "Beziehungen und Fürsorge zählen.",
          details: "Abstrakte Prinzipien ignorieren konkrete Verantwortung.",
          strength: "Beziehungsorientiert.",
          weakness: "Bevorzugt Nahestehende."
        }
      }
    ],
    background: "Lawrence Kohlberg entwickelte dieses Dilemma 1958 zur Messung moralischer Entwicklung."
  },
  {
    id: 4,
    title: "Das Lügen-Dilemma",
    shortDesc: "Ein Mörder sucht sein Opfer, das sich bei dir versteckt hat.",
    description: "Ein bewaffneter Verfolger klopft an deine Tür. Er sucht einen Freund von dir, den er offensichtlich töten will. Dieser Freund hat sich tatsächlich in deinem Haus versteckt. Der Verfolger fragt dich direkt: 'Ist X hier?'",
    question: "Sagst du die Wahrheit?",
    options: [
      {
        text: "Lügen, um das Leben zu retten",
        principle: "Konsequenzialistischer Pragmatismus",
        philosopher: "John Stuart Mill",
        explanation: "Ein Menschenleben ist mehr wert als abstrakte Wahrhaftigkeit. Mills Prinzip: Wenn Regeln zu absurden Konsequenzen führen, müssen wir sie brechen.",
        percentage: 89,
        theory: {
          title: "Utilitarismus",
          philosophers: "John Stuart Mill",
          core: "Das grössere Gut zählt.",
          details: "Regeln haben Ausnahmen bei extremen Konsequenzen.",
          strength: "Pragmatisch und lebensrettend.",
          weakness: "Wann sind Ausnahmen erlaubt?"
        }
      },
      {
        text: "Wahrheit sagen",
        principle: "Absoluter Kategorischer Imperativ",
        philosopher: "Immanuel Kant",
        explanation: "Kant argumentierte: Selbst hier ist Lügen verboten. Wahrhaftigkeit ist die Basis aller Verträge. Jede Ausnahme untergräbt die Regel vollständig.",
        percentage: 1,
        theory: {
          title: "Deontologie",
          philosophers: "Immanuel Kant",
          core: "Absolute Wahrhaftigkeit ohne Ausnahme.",
          details: "Moral wird 'schwankend und unnütz' bei Ausnahmen.",
          strength: "Prinzipientreu.",
          weakness: "Kontraintuitiv in Extremfällen."
        }
      },
      {
        text: "Schweigen oder ausweichen",
        principle: "Praktische Klugheit",
        philosopher: "Aristoteles",
        explanation: "Der tugendhafte Mensch findet die goldene Mitte: 'Ich kann diese Frage nicht beantworten.' Die Tugend der Phronesis erlaubt kreative Lösungen.",
        percentage: 8,
        theory: {
          title: "Tugendethik",
          philosophers: "Aristoteles",
          core: "Die goldene Mitte zwischen Extremen.",
          details: "Phronesis (praktische Klugheit) leitet.",
          strength: "Flexible, situationsangepasste Lösung.",
          weakness: "Was genau ist die Mitte?"
        }
      },
      {
        text: "Situation ist zu aussergewöhnlich für Regeln",
        principle: "Situationsethik",
        philosopher: "Joseph Fletcher",
        explanation: "Fletcher: 'Nur die Liebe zählt.' In dieser extremen Situation ist die liebende Fürsorge für den Freund das einzige Prinzip.",
        percentage: 2,
        theory: {
          title: "Situationsethik",
          philosophers: "Joseph Fletcher",
          core: "Nur Agape (Nächstenliebe) zählt.",
          details: "Universelle Regeln können in Extremfällen ausgesetzt werden.",
          strength: "Extrem kontextsensibel.",
          weakness: "Keine Orientierung durch Regeln."
        }
      }
    ],
    background: "Kant benutzte dieses Beispiel 1797, um sein absolutes Lügenverbot zu verteidigen - sehr kontrovers!"
  },
  {
    id: 5,
    title: "Das Rettungsboot-Dilemma",
    shortDesc: "Ein Rettungsboot mit 50 Personen kann 10 weitere aufnehmen. 100 Menschen schwimmen im Wasser.",
    description: "Ein Schiff ist gesunken. Ein Rettungsboot mit Kapazität für 60 Personen schwimmt im Meer mit bereits 50 Geretteten. Im Wasser schwimmen noch 100 Menschen, die alle ertrinken werden. Wenn du alle ins Boot holst, wird es wahrscheinlich kentern.",
    question: "Wie entscheidest du?",
    options: [
      {
        text: "Alle aufnehmen (Risiko: alle sterben)",
        principle: "Kantsche Gleichbehandlung",
        philosopher: "Immanuel Kant",
        explanation: "Jeder Mensch hat die gleiche Würde. Eine Selektion würde bedeuten, manche Menschen als weniger wertvoll zu behandeln. Selbst wenn es zum Tod aller führt, ist Gleichbehandlung das höhere Prinzip.",
        percentage: 5,
        theory: {
          title: "Deontologie",
          philosophers: "Immanuel Kant",
          core: "Gleiche Würde für alle Menschen.",
          details: "Niemand darf als Mittel geopfert werden.",
          strength: "Absolute Fairness.",
          weakness: "Alle sterben möglicherweise."
        }
      },
      {
        text: "10 nach objektiven Kriterien auswählen",
        principle: "Utilitaristischer Triage-Ansatz",
        philosopher: "Peter Singer",
        explanation: "Rationale Selektion nach Überlebenschancen maximiert die Anzahl geretteter Leben. Kriterien könnten sein: Alter, Gesundheitszustand, Verantwortung für Abhängige.",
        percentage: 45,
        theory: {
          title: "Utilitarismus",
          philosophers: "Peter Singer",
          core: "Maximiere gerettete Leben.",
          details: "Alle Interessen gleich gewichten, aber Gesamtwohl wählen.",
          strength: "Rettet die meisten Leben.",
          weakness: "Wer entscheidet die Kriterien?"
        }
      },
      {
        text: "Losverfahren für 10 Plätze",
        principle: "Rawls' Fairness-Prinzip",
        philosopher: "John Rawls",
        explanation: "Hinter dem 'Schleier des Nichtwissens' würden alle einem fairen Zufallsverfahren zustimmen. Ein Losverfahren behandelt alle fair und vermeidet diskriminierende Kriterien.",
        percentage: 38,
        theory: {
          title: "Kontraktualismus",
          philosophers: "John Rawls",
          core: "Faire Verfahren für alle.",
          details: "Schleier des Nichtwissens als Gedankenexperiment.",
          strength: "Maximal fair.",
          weakness: "Ignoriert nützliche Kriterien."
        }
      },
      {
        text: "Niemanden mehr aufnehmen",
        principle: "Verantwortungsethik",
        philosopher: "Hans Jonas",
        explanation: "Verantwortung für die bereits Anvertrauten hat Vorrang. Die 50 im Boot haben dir bereits ihr Leben anvertraut. Diese Verantwortung darfst du nicht aufs Spiel setzen.",
        percentage: 12,
        theory: {
          title: "Verantwortungsethik",
          philosophers: "Hans Jonas",
          core: "Prinzip Verantwortung.",
          details: "Gewissheiten über Möglichkeiten stellen.",
          strength: "Schutz der Anvertrauten.",
          weakness: "Andere sterben sicher."
        }
      }
    ],
    background: "Garrett Hardin entwickelte diese 'Lifeboat Ethics' 1974 als Metapher für globale Ressourcenverteilung."
  },
  {
    id: 6,
    title: "Das Autonome Fahrzeug-Dilemma",
    shortDesc: "Ein selbstfahrendes Auto gerät in eine unvermeidbare Unfallsituation.",
    description: "Ein autonomes Fahrzeug fährt mit fünf Passagieren durch eine schmale Strasse. Plötzlich erscheinen drei Fussgänger auf der Fahrbahn. Die einzige Alternative: Gegen eine Mauer fahren, wodurch die fünf Insassen sterben würden.",
    question: "Wie sollte das Fahrzeug programmiert sein?",
    options: [
      {
        text: "Anzahl der Toten minimieren",
        principle: "Quantitativer Utilitarismus",
        philosopher: "Jeremy Bentham",
        explanation: "Bentham: 'Jeder zählt als einer, niemand mehr als einer.' Das Auto sollte mathematisch optimieren: 3 Tote sind besser als 5.",
        percentage: 34,
        theory: {
          title: "Utilitarismus",
          philosophers: "Jeremy Bentham",
          core: "Mathematische Optimierung von Leben.",
          details: "Die höhere Zahl geretteter Leben ist relevant.",
          strength: "Klar und berechenbar.",
          weakness: "Menschen als Zahlen?"
        }
      },
      {
        text: "Insassen schützen",
        principle: "Vertragstheorie",
        philosopher: "Thomas Hobbes",
        explanation: "Die Insassen haben durch Kauf einen Vertrag mit dem Hersteller geschlossen. Hobbes: Verträge sind die Basis der Gesellschaft. Niemand würde ein Auto kaufen, das ihn opfert.",
        percentage: 41,
        theory: {
          title: "Kontraktualismus",
          philosophers: "Thomas Hobbes",
          core: "Verträge sind heilig.",
          details: "Gesellschaftsvertrag als Grundlage.",
          strength: "Vertrauen in Technologie.",
          weakness: "Egoistisch?"
        }
      },
      {
        text: "Niemanden aktiv opfern",
        principle: "Doppelwirkungslehre",
        philosopher: "Thomas von Aquin",
        explanation: "Das Auto darf niemanden gezielt töten. Gegen die Mauer zu fahren wäre aktive Tötung der Insassen. Das Auto sollte nur reagieren auf die existierende Gefahr.",
        percentage: 15,
        theory: {
          title: "Doktrin der Doppelwirkung",
          philosophers: "Thomas von Aquin",
          core: "Keine gezielte Tötung erlaubt.",
          details: "Unterscheidung zwischen beabsichtigt und in Kauf genommen.",
          strength: "Respektiert Intention.",
          weakness: "Ergebnis ist identisch."
        }
      },
      {
        text: "Keine Qualifizierung nach Merkmalen",
        principle: "Deutsche Ethik-Kommission",
        philosopher: "Grundgesetz Art. 1",
        explanation: "Die deutsche Ethik-Kommission (2017): Jede Qualifizierung nach Alter, Geschlecht oder anderen Merkmalen ist unzulässig. Die Menschenwürde verbietet Aufrechnung.",
        percentage: 10,
        theory: {
          title: "Menschenwürde (GG)",
          philosophers: "Grundgesetz",
          core: "Würde ist unantastbar.",
          details: "Keine Aufrechnung von Menschenleben.",
          strength: "Schützt Würde absolut.",
          weakness: "Keine Lösung möglich?"
        }
      }
    ],
    background: "Das MIT 'Moral Machine' Experiment (2018) sammelte 40 Millionen Entscheidungen aus 233 Ländern."
  },
  {
    id: 7,
    title: "Das Chirurgen-Dilemma",
    shortDesc: "Ein Chirurg hat fünf todkranke Patienten und einen gesunden Touristen.",
    description: "Ein Transplantations-Chirurg hat fünf Patienten, die ohne sofortige Organtransplantationen sterben werden. Ein junger, gesunder Tourist kommt wegen einer kleineren Verletzung zur Behandlung. Seine Gewebemerkmale passen perfekt zu allen fünf Patienten.",
    question: "Darf der Chirurg den Touristen opfern?",
    options: [
      {
        text: "Nein, das ist Mord",
        principle: "Kategorischer Imperativ",
        philosopher: "Immanuel Kant",
        explanation: "Dies wäre die extremste Form der Instrumentalisierung: Ein Mensch wird zur reinen Ersatzteilquelle degradiert. Kant: 'Der Mensch ist Zweck an sich selbst.' Die Menschenwürde ist nicht abwägbar.",
        percentage: 96,
        theory: {
          title: "Deontologie",
          philosophers: "Immanuel Kant",
          core: "Der Mensch ist Zweck an sich.",
          details: "Nie bloss als Mittel behandeln.",
          strength: "Würde absolut geschützt.",
          weakness: "Fünf sterben trotzdem."
        }
      },
      {
        text: "Fünf Leben sind mehr wert als eines",
        principle: "Radikaler Konsequenzialismus",
        philosopher: "Hypothetischer Extremfall",
        explanation: "Wenn wir wirklich nur Konsequenzen zählen, dann sind 5 > 1. Diese Position zeigt die Grenzen des reinen Utilitarismus. Fast niemand würde sie vertreten.",
        percentage: 0.5,
        theory: {
          title: "Extremer Utilitarismus",
          philosophers: "Hypothetisch",
          core: "Nur Zahlen zählen.",
          details: "Konsequenzen ohne andere Überlegungen.",
          strength: "Logisch konsistent?",
          weakness: "Zeigt Grenzen des Utilitarismus."
        }
      },
      {
        text: "Vertrauen in medizinische Versorgung bewahren",
        principle: "Regel-Utilitarismus",
        philosopher: "John Stuart Mill",
        explanation: "Selbst für Utilitaristen ist dies falsch: Wenn Menschen Krankenhäusern nicht vertrauen können, kollabiert das Gesundheitssystem. Die Regel 'Ärzte töten nicht' maximiert langfristig das Gesamtwohl.",
        percentage: 3,
        theory: {
          title: "Regel-Utilitarismus",
          philosophers: "John Stuart Mill",
          core: "Regeln maximieren langfristig Nutzen.",
          details: "Handlungs- vs. Regel-Utilitarismus.",
          strength: "Berücksichtigt systemische Effekte.",
          weakness: "Wann Regeln, wann Handlungen?"
        }
      },
      {
        text: "Die Frage ist absurd",
        principle: "Wittgensteins Sprachkritik",
        philosopher: "Ludwig Wittgenstein",
        explanation: "Diese Situation ist so weit von der Realität entfernt, dass unser moralisches Vokabular versagt. Wittgenstein: 'Worüber man nicht sprechen kann, darüber muss man schweigen.'",
        percentage: 0.5,
        theory: {
          title: "Sprachphilosophie",
          philosophers: "Ludwig Wittgenstein",
          core: "Grenzen der Sprache sind Grenzen der Welt.",
          details: "Gedankenexperimente können irreführend sein.",
          strength: "Warnt vor unrealistischen Szenarien.",
          weakness: "Verweigert die Diskussion."
        }
      }
    ],
    background: "Judith Jarvis Thomson entwickelte dieses Extrembeispiel, um zu zeigen: Die reine Zahlen-Logik funktioniert nicht überall."
  },
  {
    id: 8,
    title: "Sophies Entscheidung",
    shortDesc: "Im KZ Auschwitz muss Sophie wählen, welches ihrer zwei Kinder leben darf.",
    description: "Sophie Zawistowska kommt 1943 mit ihren zwei Kindern im Konzentrationslager Auschwitz an. Ein SS-Arzt zwingt sie: Sie darf eines ihrer Kinder behalten und muss entscheiden, welches. Lehnt sie die Entscheidung ab, werden beide sofort in die Gaskammer geschickt.",
    question: "Sollte Sophie wählen?",
    options: [
      {
        text: "Wählen, um zumindest ein Kind zu retten",
        principle: "Tragischer Pragmatismus",
        philosopher: "Bernard Williams",
        explanation: "Williams' Konzept des 'moralischen Rests': Manchmal sind alle Optionen falsch, aber Handeln ist weniger falsch als Nicht-Handeln. Ein Kind zu retten ist besser als beide zu verlieren. Die moralische Schuld liegt beim Täter.",
        percentage: 60,
        theory: {
          title: "Moralischer Rest",
          philosophers: "Bernard Williams",
          core: "Manchmal sind alle Optionen falsch.",
          details: "Tragische Situationen hinterlassen 'moralischen Schmutz'.",
          strength: "Erkennt Tragik an.",
          weakness: "Sophie nahm sich später das Leben."
        }
      },
      {
        text: "Sich weigern zu wählen",
        principle: "Moralische Integrität",
        philosopher: "Emmanuel Levinas",
        explanation: "Levinas: Die Verantwortung für den Anderen ist absolut und nicht vergleichbar. Man kann nicht zwischen zwei unendlichen Verantwortungen wählen. Sich zu weigern bewahrt Sophies moralische Integrität.",
        percentage: 25,
        theory: {
          title: "Verantwortung für den Anderen",
          philosophers: "Emmanuel Levinas",
          core: "Absolute, nicht vergleichbare Verantwortung.",
          details: "Das Antlitz des Anderen gebietet absolute Verantwortung.",
          strength: "Bewahrt Integrität.",
          weakness: "Beide Kinder sterben."
        }
      },
      {
        text: "Die Wahl ist eine unmögliche Zumutung",
        principle: "Grenzen der Moral",
        philosopher: "Hannah Arendt",
        explanation: "Arendt über die 'Banalität des Bösen': Dieses Dilemma zeigt die Grenzen moralischer Theorien. Wenn das Böse radikal genug ist, versagen alle moralischen Kategorien.",
        percentage: 13,
        theory: {
          title: "Grenzen der Ethik",
          philosophers: "Hannah Arendt",
          core: "Es gibt Situationen ohne 'richtige' Antwort.",
          details: "Radikales Böse sprengt moralische Kategorien.",
          strength: "Ehrlich über Grenzen.",
          weakness: "Bietet keine Antwort."
        }
      },
      {
        text: "Losverfahren wäre am gerechtesten",
        principle: "Rawls' Fairness unter extremen Bedingungen",
        philosopher: "John Rawls",
        explanation: "Wenn beide Kinder gleicher massen geliebt werden, wäre ein Zufallsverfahren die einzige nicht-willkürliche Methode. Ein Los würde bedeuten, dass Sophie nicht eines ihrer Kinder für 'weniger wertvoll' erklären muss.",
        percentage: 2,
        theory: {
          title: "Kontraktualismus",
          philosophers: "John Rawls",
          core: "Fairness durch Zufall.",
          details: "Schleier des Nichtwissens auch in Extremfällen?",
          strength: "Maximal fair.",
          weakness: "Kann man in diesem Moment rational sein?"
        }
      }
    ],
    background: "William Styron beschrieb dieses Dilemma 1979 im Roman 'Sophie's Choice'. Sophie wählte - und nahm sich später das Leben."
  },
  {
    id: 3,
    title: "Das Heinz-Dilemma",
    shortDesc: "Ein Medikament kostet 2000€, Herstellung 200€. Heinz hat nur 1000€.",
    description: "In Europa liegt Heinzens Frau im Sterben an einer besonderen Krebsform. Es gibt ein Medikament, das sie retten könnte. Ein Apotheker verlangt 2000€ für eine kleine Dosis (Herstellung: 200€). Heinz kann nur 1000€ auftreiben. Der Apotheker lehnt Ratenzahlung ab.",
    question: "Soll Heinz das Medikament stehlen?",
    options: [
      {
        text: "Ja, stehlen ist gerechtfertigt",
        principle: "Naturrecht",
        philosopher: "John Locke",
        explanation: "Das Recht auf Leben ist ein fundamentales Naturrecht, das allen Menschen von Natur aus zusteht. Es überwiegt das Eigentumsrecht. In extremen Notlagen darf Eigentum verletzt werden.",
        percentage: 65,
        theory: {
          title: "Naturrecht",
          philosophers: "John Locke",
          core: "Leben, Freiheit, Eigentum - aber Leben steht an erster Stelle.",
          details: "Naturrechte sind unveräusserlich und universal.",
          strength: "Priorisiert fundamentale Rechte.",
          weakness: "Konflikte zwischen Rechten schwer aufzulösen."
        }
      },
      {
        text: "Nein, Gesetze gelten für alle",
        principle: "Rechtspositivismus",
        philosopher: "Thomas Hobbes",
        explanation: "Ohne Respekt vor Gesetzen und Eigentum herrscht Chaos. Wenn jeder nach eigenem Ermessen Gesetze bricht, kollabiert die soziale Ordnung.",
        percentage: 15,
        theory: {
          title: "Rechtspositivismus",
          philosophers: "Thomas Hobbes",
          core: "Gesetze müssen absolut gelten.",
          details: "Ohne Rechtssicherheit: Krieg aller gegen alle.",
          strength: "Garantiert Ordnung.",
          weakness: "Kann ungerechte Gesetze stützen."
        }
      },
      {
        text: "Andere Lösungen suchen",
        principle: "Diskursethik",
        philosopher: "Jürgen Habermas",
        explanation: "Heinz sollte den rationalen Diskurs suchen: öffentliche Kampagnen, rechtliche Wege, Spenden sammeln. Legitime Lösungen entstehen durch kommunikatives Handeln.",
        percentage: 18,
        theory: {
          title: "Diskursethik",
          philosophers: "Jürgen Habermas",
          core: "Normen sind nur legitim durch rationalen Diskurs.",
          details: "Kommunikatives Handeln statt einseitiger Gewalt.",
          strength: "Demokratisch und inklusiv.",
          weakness: "In Notlagen oft zu langsam."
        }
      },
      {
        text: "Fürsorge für Nahestehende hat Vorrang",
        principle: "Care-Ethik",
        philosopher: "Carol Gilligan",
        explanation: "Heinz hat eine besondere Verantwortung für seine Frau. Abstrakte Prinzipien ignorieren die konkreten Beziehungen. Moralische Urteile entstehen aus Fürsorge.",
        percentage: 2,
        theory: {
          title: "Care-Ethik",
          philosophers: "Carol Gilligan",
          core: "Beziehungen und konkrete Verantwortung.",
          details: "Fürsorge statt abstrakter Regeln.",
          strength: "Praxisnah und beziehungsorientiert.",
          weakness: "Bevorzugt Nahestehende."
        }
      }
    ],
    background: "Lawrence Kohlberg entwickelte dieses Dilemma 1958. Nicht die Entscheidung, sondern die Begründung offenbart die moralische Reife."
  },
  {
    id: 4,
    title: "Das Lügen-Dilemma",
    shortDesc: "Ein Mörder sucht sein Opfer, das sich bei dir versteckt hat.",
    description: "Ein bewaffneter Verfolger klopft an deine Tür. Er sucht einen Freund von dir, den er offensichtlich töten will. Dieser Freund hat sich tatsächlich in deinem Haus versteckt. Der Verfolger fragt dich direkt: 'Ist X hier?'",
    question: "Sagst du die Wahrheit?",
    options: [
      {
        text: "Lügen, um das Leben zu retten",
        principle: "Konsequenzialistischer Pragmatismus",
        philosopher: "John Stuart Mill",
        explanation: "In dieser Situation überwiegt der Nutzen (gerettetes Leben) bei Weitem den Schaden (eine Lüge). Ein Menschenleben ist mehr wert als abstrakte Wahrhaftigkeit.",
        percentage: 89,
        theory: {
          title: "Utilitarismus",
          philosophers: "John Stuart Mill",
          core: "Konsequenzen bestimmen Moral.",
          details: "In Extremfällen müssen Regeln gebrochen werden.",
          strength: "Pragmatisch und flexibel.",
          weakness: "Untergräbt Vertrauen."
        }
      },
      {
        text: "Wahrheit sagen",
        principle: "Absoluter Kategorischer Imperativ",
        philosopher: "Immanuel Kant",
        explanation: "Kant argumentierte tatsächlich: Selbst hier ist Lügen verboten. Wahrhaftigkeit ist die Basis aller Verträge. Jede Ausnahme untergräbt die Regel vollständig.",
        percentage: 1,
        theory: {
          title: "Deontologie",
          philosophers: "Immanuel Kant",
          core: "Absolute Wahrhaftigkeit - ohne Ausnahme.",
          details: "Konsequenzen sind irrelevant.",
          strength: "Prinzipientreu.",
          weakness: "Führt zu absurden Forderungen."
        }
      },
      {
        text: "Schweigen oder ausweichen",
        principle: "Praktische Klugheit",
        philosopher: "Aristoteles",
        explanation: "Der tugendhafte Mensch findet die goldene Mitte: 'Ich kann diese Frage nicht beantworten.' Die Tugend der Phronesis erlaubt kreative Lösungen.",
        percentage: 8,
        theory: {
          title: "Tugendethik",
          philosophers: "Aristoteles",
          core: "Praktische Klugheit (Phronesis).",
          details: "Die goldene Mitte zwischen Extremen.",
          strength: "Flexibel und kontextsensibel.",
          weakness: "Keine klaren Regeln."
        }
      },
      {
        text: "Situation ist zu aussergewöhnlich",
        principle: "Situationsethik",
        philosopher: "Joseph Fletcher",
        explanation: "Fletcher: 'Nur die Liebe zählt.' In dieser extremen Situation ist die liebende Fürsorge für den Freund das einzige Prinzip. Universelle Regeln können ausgesetzt werden.",
        percentage: 2,
        theory: {
          title: "Situationsethik",
          philosophers: "Joseph Fletcher",
          core: "Agape (christliche Nächstenliebe) über Regeln.",
          details: "Kontext bestimmt alles.",
          strength: "Sehr flexibel.",
          weakness: "Keine Orientierung."
        }
      }
    ],
    background: "Kant benutzte dieses Beispiel 1797 in 'Über ein vermeintes Recht, aus Menschenliebe zu lügen' - sehr kontrovers!"
  },
  {
    id: 5,
    title: "Das Rettungsboot-Dilemma",
    shortDesc: "50 Personen im Boot, Platz für 10 mehr, 100 schwimmen im Wasser.",
    description: "Ein Schiff ist gesunken. Ein Rettungsboot mit Kapazität für 60 Personen schwimmt im Meer mit bereits 50 Geretteten. Im Wasser schwimmen noch 100 Menschen, die alle ertrinken werden, wenn niemand sie rettet.",
    question: "Wie entscheidest du?",
    options: [
      {
        text: "Alle aufnehmen (Risiko: Boot kentert)",
        principle: "Kantsche Gleichbehandlung",
        philosopher: "Immanuel Kant",
        explanation: "Jeder Mensch hat die gleiche Würde. Eine Selektion würde bedeuten, manche Menschen als weniger wertvoll zu behandeln. Selbst wenn es zum Tod aller führt, ist Gleichbehandlung das höhere Prinzip.",
        percentage: 5,
        theory: {
          title: "Deontologie",
          philosophers: "Kant",
          core: "Gleiche Würde für alle.",
          details: "Keine Person darf diskriminiert werden.",
          strength: "Absolut fair.",
          weakness: "Katastrophale Konsequenzen."
        }
      },
      {
        text: "10 nach objektiven Kriterien auswählen",
        principle: "Utilitaristischer Triage-Ansatz",
        philosopher: "Peter Singer",
        explanation: "Rationale Selektion nach Überlebenschancen maximiert die Anzahl geretteter Leben. Kriterien könnten sein: Alter, Gesundheitszustand, Verantwortung für Abhängige.",
        percentage: 45,
        theory: {
          title: "Utilitarismus",
          philosophers: "Peter Singer",
          core: "Maximiere gerettete Leben.",
          details: "Alle Interessen gleich gewichten, grösstes Gesamtwohl wählen.",
          strength: "Rettet die meisten.",
          weakness: "Diskriminierend."
        }
      },
      {
        text: "Losverfahren für 10 Plätze",
        principle: "Rawls' Fairness-Prinzip",
        philosopher: "John Rawls",
        explanation: "Hinter dem 'Schleier des Nichtwissens' würden alle einem fairen Zufallsverfahren zustimmen. Ein Losverfahren behandelt alle fair und vermeidet diskriminierende Kriterien.",
        percentage: 38,
        theory: {
          title: "Kontraktualismus",
          philosophers: "John Rawls",
          core: "Fairness durch Schleier des Nichtwissens.",
          details: "Gerechte Regeln, denen alle zustimmen würden.",
          strength: "Maximal fair.",
          weakness: "Ignoriert Fähigkeiten."
        }
      },
      {
        text: "Niemanden mehr aufnehmen",
        principle: "Verantwortungsethik",
        philosopher: "Hans Jonas",
        explanation: "Verantwortung für die bereits Anvertrauten hat Vorrang. Die 50 im Boot haben dir bereits ihr Leben anvertraut. Diese Verantwortung darfst du nicht aufs Spiel setzen.",
        percentage: 12,
        theory: {
          title: "Verantwortungsethik",
          philosophers: "Hans Jonas",
          core: "Verantwortung für Anvertraute.",
          details: "Gewissheiten über Möglichkeiten stellen.",
          strength: "Schützt Vertrauen.",
          weakness: "Ignoriert andere."
        }
      }
    ],
    background: "Garrett Hardin entwickelte 'Lifeboat Ethics' 1974 als Metapher für globale Ressourcenverteilung und Migration."
  },
  {
    id: 6,
    title: "Das Autonome Fahrzeug-Dilemma",
    shortDesc: "Ein selbstfahrendes Auto gerät in eine unvermeidbare Unfallsituation.",
    description: "Ein autonomes Fahrzeug fährt mit fünf Passagieren durch eine schmale Strasse. Plötzlich erscheinen drei Fussgänger auf der Fahrbahn. Die einzige Alternative: Gegen eine Mauer fahren, wodurch die fünf Insassen sterben würden.",
    question: "Wie sollte das Fahrzeug programmiert sein?",
    options: [
      {
        text: "Anzahl der Toten minimieren",
        principle: "Quantitativer Utilitarismus",
        philosopher: "Jeremy Bentham",
        explanation: "Bentham: 'Jeder zählt als einer, niemand mehr als einer.' Das Auto sollte mathematisch optimieren: 3 Tote sind besser als 5. Die höhere Zahl geretteter Leben ist das einzige relevante Kriterium.",
        percentage: 34,
        theory: {
          title: "Utilitarismus",
          philosophers: "Jeremy Bentham",
          core: "Maximiere Gesamtwohl quantitativ.",
          details: "Mathematische Optimierung von Leben.",
          strength: "Klar und berechenbar.",
          weakness: "Kalt und technokratisch."
        }
      },
      {
        text: "Insassen schützen",
        principle: "Vertragstheorie",
        philosopher: "Thomas Hobbes",
        explanation: "Die Insassen haben durch Kauf/Nutzung einen Vertrag mit dem Hersteller geschlossen. Der Hersteller hat eine besondere Schutzpflicht. Niemand würde ein Auto kaufen, das ihn opfert.",
        percentage: 41,
        theory: {
          title: "Vertragstheorie",
          philosophers: "Thomas Hobbes",
          core: "Verträge sind die Basis der Gesellschaft.",
          details: "Besondere Pflicht gegenüber Vertragspartnern.",
          strength: "Schützt Vertrauen.",
          weakness: "Egoistisch."
        }
      },
      {
        text: "Niemanden aktiv opfern",
        principle: "Doppelwirkungslehre",
        philosopher: "Thomas von Aquin",
        explanation: "Das Auto darf niemanden gezielt töten. Gegen die Mauer zu fahren wäre aktive Tötung der Insassen. Das Auto sollte bremsen - die Fussgänger sind dann tragischer Nebeneffekt.",
        percentage: 15,
        theory: {
          title: "Doppelwirkung",
          philosophers: "Thomas von Aquin",
          core: "Beabsichtigt vs. in Kauf genommen.",
          details: "Direkte Tötung ist moralisch anders.",
          strength: "Erklärt Intuitionen.",
          weakness: "Schwer abzugrenzen."
        }
      },
      {
        text: "Keine Qualifizierung nach Merkmalen",
        principle: "Deutsche Ethik-Kommission",
        philosopher: "Grundgesetz Art. 1",
        explanation: "Die deutsche Ethik-Kommission (2017): Jede Qualifizierung nach Alter, Geschlecht ist unzulässig. Die Menschenwürde verbietet Aufrechnung. Das Auto sollte nur zwischen Personengruppen unterscheiden.",
        percentage: 10,
        theory: {
          title: "Würde-Ethik",
          philosophers: "Grundgesetz",
          core: "Menschenwürde ist unantastbar.",
          details: "Keine Aufrechnung von Menschenleben.",
          strength: "Absoluter Würdeschutz.",
          weakness: "Keine Lösung in Dilemmata."
        }
      }
    ],
    background: "Das MIT 'Moral Machine' Experiment (2018) sammelte 40 Millionen Entscheidungen aus 233 Ländern."
  },
  {
    id: 7,
    title: "Das Chirurgen-Dilemma",
    shortDesc: "5 Patienten brauchen Organe. 1 gesunder Tourist passt perfekt.",
    description: "Ein Transplantations-Chirurg hat fünf Patienten, die alle sterben werden, wenn sie nicht sofort Organtransplantationen bekommen. Ein junger, gesunder Tourist kommt wegen einer kleineren Verletzung in dieselbe Klinik. Seine Gewebemerkmale passen perfekt zu allen fünf Patienten.",
    question: "Darf der Chirurg den Touristen opfern?",
    options: [
      {
        text: "Nein, das ist Mord",
        principle: "Kategorischer Imperativ",
        philosopher: "Immanuel Kant",
        explanation: "Dies wäre die extremste Form der Instrumentalisierung: Ein Mensch wird zur reinen Ersatzteilquelle degradiert. Selbst wenn 1000 Menschen gerettet würden, bliebe es unzulässig. Die Menschenwürde ist nicht abwägbar.",
        percentage: 96,
        theory: {
          title: "Deontologie",
          philosophers: "Immanuel Kant",
          core: "Der Mensch ist Zweck an sich selbst.",
          details: "Niemals bloss als Mittel behandeln.",
          strength: "Absoluter Würdeschutz.",
          weakness: "Keine - hier eindeutig."
        }
      },
      {
        text: "Fünf Leben sind mehr wert als eines",
        principle: "Radikaler Konsequenzialismus",
        philosopher: "Hypothetischer Extremfall",
        explanation: "Wenn wir wirklich nur Konsequenzen zählen, dann sind 5 > 1. Diese Position zeigt die Grenzen des reinen Utilitarismus. Fast niemand würde sie vertreten - vielleicht ist Utilitarismus unvollständig.",
        percentage: 0.5,
        theory: {
          title: "Extremutilitarismus",
          philosophers: "Hypothetisch",
          core: "Pure Zahlenlogik.",
          details: "Zeigt Grenzen des Utilitarismus.",
          strength: "Logisch konsistent.",
          weakness: "Völlig absurd."
        }
      },
      {
        text: "Vertrauen in medizinische Versorgung bewahren",
        principle: "Regel-Utilitarismus",
        philosopher: "John Stuart Mill",
        explanation: "Selbst für Utilitaristen ist dies falsch: Wenn Menschen Krankenhäusern nicht vertrauen können, kollabiert das Gesundheitssystem. Die Regel 'Ärzte töten nicht' maximiert langfristig das Gesamtwohl.",
        percentage: 3,
        theory: {
          title: "Regel-Utilitarismus",
          philosophers: "John Stuart Mill",
          core: "Regeln maximieren langfristig Wohl.",
          details: "Nicht einzelne Handlung, sondern Regel zählt.",
          strength: "Vermeidet Absurditäten.",
          weakness: "Wann Regeln, wann Handlungen?"
        }
      },
      {
        text: "Die Frage ist absurd",
        principle: "Sprachkritik",
        philosopher: "Ludwig Wittgenstein",
        explanation: "Diese hypothetische Situation ist so weit von der Realität entfernt, dass unser moralisches Vokabular versagt. Wittgenstein: 'Worüber man nicht sprechen kann, darüber muss man schweigen.'",
        percentage: 0.5,
        theory: {
          title: "Sprachkritik",
          philosophers: "Ludwig Wittgenstein",
          core: "Grenzen der Sprache = Grenzen der Moral.",
          details: "Unrealistische Gedankenexperimente sind irreführend.",
          strength: "Methodenkritik.",
          weakness: "Vermeidet schwierige Fragen."
        }
      }
    ],
    background: "Judith Jarvis Thomson entwickelte dieses Extrembeispiel, um zu zeigen: Reine Zahlenlogik funktioniert nicht überall."
  },
  {
    id: 8,
    title: "Sophies Entscheidung",
    shortDesc: "Im KZ Auschwitz muss Sophie wählen, welches Kind leben darf.",
    description: "Sophie Zawistowska kommt 1943 mit ihren zwei Kindern im Konzentrationslager Auschwitz an. Ein SS-Arzt zwingt sie zu einer unmöglichen Wahl: Sie darf eines ihrer Kinder behalten und muss entscheiden, welches. Lehnt sie die Entscheidung ab, werden beide sofort in die Gaskammer geschickt.",
    question: "Sollte Sophie wählen?",
    options: [
      {
        text: "Wählen, um zumindest ein Kind zu retten",
        principle: "Tragischer Pragmatismus",
        philosopher: "Bernard Williams",
        explanation: "Williams' Konzept des 'moralischen Rests': Manchmal sind alle Optionen falsch, aber Handeln ist weniger falsch als Nicht-Handeln. Ein Kind zu retten ist besser als beide zu verlieren. Die moralische Schuld liegt beim Täter.",
        percentage: 60,
        theory: {
          title: "Moralischer Rest",
          philosophers: "Bernard Williams",
          core: "Manchmal ist alles falsch.",
          details: "Tragische Situationen hinterlassen 'moralischen Schmutz'.",
          strength: "Realistisch.",
          weakness: "Lebenslange Traumatisierung."
        }
      },
      {
        text: "Sich weigern zu wählen",
        principle: "Moralische Integrität",
        philosopher: "Emmanuel Levinas",
        explanation: "Levinas: Die Verantwortung für den Anderen ist absolut und nicht vergleichbar. Man kann nicht zwischen zwei unendlichen Verantwortungen wählen. Sich zu weigern bewahrt Sophies moralische Integrität.",
        percentage: 25,
        theory: {
          title: "Absolute Verantwortung",
          philosophers: "Emmanuel Levinas",
          core: "Verantwortung ist absolut, nicht vergleichbar.",
          details: "Nicht zum Werkzeug des Bösen werden.",
          strength: "Bewahrt Integrität.",
          weakness: "Beide Kinder sterben."
        }
      },
      {
        text: "Die Wahl ist eine unmögliche Zumutung",
        principle: "Grenzen der Moral",
        philosopher: "Hannah Arendt",
        explanation: "Arendt über die 'Banalität des Bösen': Dieses Dilemma zeigt die Grenzen moralischer Theorien. Wenn das Böse radikal genug ist, versagen alle moralischen Kategorien. Es gibt keine 'richtige' Entscheidung.",
        percentage: 13,
        theory: {
          title: "Grenzen der Moral",
          philosophers: "Hannah Arendt",
          core: "Radikales Böse sprengt moralische Kategorien.",
          details: "Keine Theorie kann hier helfen.",
          strength: "Ehrlich.",
          weakness: "Bietet keine Orientierung."
        }
      },
      {
        text: "Losverfahren wäre am gerechtesten",
        principle: "Rawls unter extremen Bedingungen",
        philosopher: "John Rawls",
        explanation: "Wenn beide Kinder gleicherweise geliebt werden, wäre ein Zufallsverfahren die einzige nicht-willkürliche Methode. Ein Los würde bedeuten, dass Sophie nicht eines ihrer Kinder für 'weniger wertvoll' erklären muss.",
        percentage: 2,
        theory: {
          title: "Fairness unter Zwang",
          philosophers: "John Rawls",
          core: "Zufall als fairste Methode.",
          details: "Vermeidet willkürliche Bewertung.",
          strength: "Formal fair.",
          weakness: "Kann man in diesem Moment rational sein?"
        }
      }
    ],
    background: "William Styron beschrieb dies 1979 in 'Sophie's Choice'. Sophie wählte - und nahm sich später das Leben. Es zeigt: Manche Zwangslagen haben keine 'Lösung'."
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
