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
        consequence: "Du stellst die Weiche um. Die Strassenbahn wechselt auf das Nebengleis. Der einzelne Arbeiter wird von der Bahn erfasst und stirbt sofort. Die fünf Arbeiter auf dem Hauptgleis überleben. Ergebnis: 1 Toter, 5 Überlebende.",
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
        consequence: "Du greifst nicht ein. Die Strassenbahn rast weiter auf dem Hauptgleis. Alle fünf Gleisarbeiter werden von der Bahn erfasst und sterben. Der Arbeiter auf dem Nebengleis überlebt. Ergebnis: 5 Tote, 1 Überlebender.",
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
        consequence: "Du wägst besonnen ab und stellst die Weiche um, da dies die vernünftigste Handlung erscheint. Ein Arbeiter stirbt, fünf überleben. Du lebst mit der Entscheidung, aber haderst mit der moralischen Verantwortung. Ergebnis: 1 Toter, 5 Überlebende.",
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
        consequence: "Du analysierst die einzigartigen Umstände: Wer sind diese Menschen? Welche Verantwortung trägst du? Nach langer Überlegung entscheidest du dich für oder gegen die Weiche - aber deine Begründung ist kontextspezifisch, nicht verallgemeinerbar. Ergebnis: Variabel je nach Kontext.",
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
        consequence: "Du stösst den Mann. Er fällt von der Brücke und wird von der Lore erfasst. Sein Körper stoppt die Lore. Die fünf Arbeiter überleben. Du hast aktiv getötet. Ergebnis: 1 Toter (durch deine Hand), 5 Überlebende.",
        percentage: 8,
        theory: {
          title: "Utilitarismus",
          philosophers: "Peter Singer",
          core: "Konsequenzen zählen, nicht Intuitionen.",
          details: "Radikaler Konsequenzialismus ignoriert moralische Intuitionen zugunsten reiner Zahlenlogik.",
          strength: "Logisch konsistent.",
          weakness: "Verstösst gegen moralische Intuitionen."
        }
      },
      {
        text: "Nicht stossen",
        principle: "Kantsche Würde-Ethik",
        philosopher: "Immanuel Kant",
        explanation: "Den Mann zu stossen bedeutet, ihn als blosses Mittel zum Zweck zu instrumentalisieren. Dies verletzt die Menschenwürde fundamental.",
        consequence: "Du greifst nicht ein. Die Lore rast weiter und tötet alle fünf Arbeiter auf den Gleisen. Der Mann neben dir überlebt. Du hast niemanden aktiv getötet, aber fünf Menschen starben. Ergebnis: 5 Tote, 1 Überlebender.",
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
        consequence: "Du erkennst den Unterschied zwischen aktivem Töten und Zulassen. Du stösst den Mann nicht. Die fünf Arbeiter sterben, aber du trägst keine direkte Verantwortung. Ergebnis: 5 Tote, 1 Überlebender.",
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
        explanation: "Das Recht auf Leben ist ein fundamentales Naturrecht. Es überwiegt das Eigentumsrecht. In extremen Notlagen darf Eigentum verletzt werden.",
        consequence: "Heinz bricht nachts in die Apotheke ein und stiehlt das Medikament. Seine Frau erhält die Behandlung und überlebt. Heinz wird verhaftet und zu einer Geldstrafe verurteilt. Ergebnis: Leben gerettet, aber strafrechtliche Konsequenzen.",
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
        explanation: "Ohne Respekt vor Gesetzen herrscht Chaos. Wenn jeder nach eigenem Ermessen Gesetze bricht, kollabiert die soziale Ordnung.",
        consequence: "Heinz stiehlt nicht. Er findet keine legale Lösung rechtzeitig. Seine Frau stirbt. Heinz hat das Gesetz respektiert, aber seine Frau verloren. Er hadert lebenslang mit dieser Entscheidung. Ergebnis: Tod der Ehefrau, aber Gesetzestreue bewahrt.",
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
        explanation: "Heinz sollte den rationalen Diskurs suchen: öffentliche Kampagnen, rechtliche Wege, Spenden sammeln.",
        consequence: "Heinz startet eine Kampagne, sammelt Spenden, kontaktiert Medien. Nach zwei Wochen hat er das Geld zusammen - aber seine Frau stirbt drei Tage vor der Behandlung. Der demokratische Weg war zu langsam. Ergebnis: Tod trotz Bemühungen.",
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
        explanation: "Heinz hat eine besondere Verantwortung für seine Frau. Die Care-Ethik betont: Moralische Urteile entstehen aus Beziehungen.",
        consequence: "Heinz stiehlt das Medikament aus Liebe zu seiner Frau. Sie überlebt. Er wird verhaftet, aber die Richterin zeigt Milde. Seine Beziehung zu seiner Frau ist gestärkt. Ergebnis: Leben gerettet, milde Strafe, starke Beziehung.",
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
        consequence: "Du lügst: 'Nein, er ist nicht hier.' Der Verfolger verlässt dein Haus. Dein Freund entkommt und überlebt. Du hast gelogen, aber ein Leben gerettet. Dein Freund ist dir ewig dankbar. Ergebnis: Leben gerettet durch Lüge.",
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
        consequence: "Du sagst die Wahrheit: 'Ja, er ist hier.' Der Verfolger betritt dein Haus und tötet deinen Freund vor deinen Augen. Du hast die Wahrheit gesagt, aber dein Freund ist tot. Du lebst mit dieser Entscheidung. Ergebnis: Freund tot, aber Wahrhaftigkeit bewahrt.",
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
        consequence: "Du sagst: 'Ich kann diese Frage nicht beantworten.' Der Verfolger wird misstrauisch, durchsucht dein Haus nicht vollständig und verlässt es. Dein Freund entkommt später. Ergebnis: Leben gerettet durch kluge Ausweichung.",
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
        consequence: "Du handelst aus Liebe und lügst. Der Verfolger wird abgewimmelt, dein Freund überlebt. Du hast die Situation als einzigartig behandelt und nach dem Prinzip der Nächstenliebe gehandelt. Ergebnis: Leben gerettet, Regeln temporär ausgesetzt.",
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
    description: "Ein Schiff ist gesunken. Ein Rettungsboot mit Kapazität für 60 Personen schwimmt im Meer mit bereits 50 Geretteten. Im Wasser schwimmen noch 100 Menschen. Wenn du alle ins Boot holst, wird es wahrscheinlich kentern.",
    question: "Wie entscheidest du?",
    options: [
      {
        text: "Alle aufnehmen (Risiko: alle sterben)",
        principle: "Kantsche Gleichbehandlung",
        philosopher: "Immanuel Kant",
        explanation: "Jeder Mensch hat die gleiche Würde. Eine Selektion würde bedeuten, manche Menschen als weniger wertvoll zu behandeln.",
        consequence: "Du nimmst alle 100 Menschen ins Boot auf. Das Boot ist massiv überladen und kentert binnen Minuten. Alle 150 Menschen (50 bereits im Boot + 100 aus dem Wasser) ertrinken. Niemand überlebt. Ergebnis: 150 Tote - alle.",
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
        explanation: "Rationale Selektion nach Überlebenschancen maximiert die Anzahl geretteter Leben.",
        consequence: "Du wählst 10 Menschen nach Überlebenschancen: Jüngere, Gesündere, Eltern mit Kindern. 60 Menschen überleben. 90 ertrinken. Du hast Leben maximiert, aber diskriminiert. Ergebnis: 60 Überlebende, 90 Tote.",
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
        explanation: "Hinter dem 'Schleier des Nichtwissens' würden alle einem fairen Zufallsverfahren zustimmen.",
        consequence: "Du ziehst 10 Namen zufällig. Darunter sind alte Menschen, Kranke - aber auch Kinder. 60 Menschen überleben. 90 ertrinken. Die Auswahl war maximal fair. Ergebnis: 60 Überlebende, 90 Tote - aber ohne Diskriminierung.",
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
        explanation: "Verantwortung für die bereits Anvertrauten hat Vorrang. Die 50 im Boot haben dir bereits ihr Leben anvertraut.",
        consequence: "Die 50 im Boot bleiben alleine. Das Boot bleibt stabil und sicher. Alle 100 Menschen im Wasser ertrinken vor den Augen der Geretteten. Ergebnis: 50 Überlebende, 100 Tote. Die Geretteten tragen psychische Narben.",
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
    description: "Ein autonomes Fahrzeug fährt mit fünf Passagieren. Plötzlich erscheinen drei Fussgänger auf der Fahrbahn. Die einzige Alternative: Gegen eine Mauer fahren, wodurch die fünf Insassen sterben würden.",
    question: "Wie sollte das Fahrzeug programmiert sein?",
    options: [
      {
        text: "Anzahl der Toten minimieren",
        principle: "Quantitativer Utilitarismus",
        philosopher: "Jeremy Bentham",
        explanation: "Bentham: 'Jeder zählt als einer, niemand mehr als einer.' Das Auto sollte mathematisch optimieren: 3 Tote sind besser als 5.",
        consequence: "Das Auto berechnet: 3 < 5. Es entscheidet sich für die Fussgänger und tötet sie. Die 5 Insassen überleben. Ergebnis: 3 Fussgänger tot, 5 Insassen überleben - aber niemand würde so ein Auto kaufen.",
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
        explanation: "Die Insassen haben durch Kauf einen Vertrag mit dem Hersteller geschlossen. Niemand würde ein Auto kaufen, das ihn opfert.",
        consequence: "Das Auto schützt seine Passagiere. Es fährt weiter und tötet die 3 Fussgänger. Die 5 Insassen überleben. Der Hersteller kann seine Schutzpflicht nachweisen. Ergebnis: 3 Fussgänger tot, 5 Insassen überleben.",
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
        explanation: "Das Auto darf niemanden gezielt töten. Gegen die Mauer zu fahren wäre aktive Tötung der Insassen.",
        consequence: "Das Auto bremst maximal, aber wählt keine aktive Richtung. Die 3 Fussgänger werden getötet - als tragischer Nebeneffekt, nicht als gezielte Entscheidung. Ergebnis: 3 Fussgänger tot, 5 Insassen überleben.",
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
        explanation: "Jede Qualifizierung nach Alter, Geschlecht ist unzulässig. Die Menschenwürde verbietet Aufrechnung.",
        consequence: "Das Auto entscheidet rein numerisch ohne Berücksichtigung von Alter, Geschlecht etc. Es wählt die Gruppe mit weniger Menschen. Ergebnis: 3 Fussgänger sterben - aber ohne Diskriminierung nach persönlichen Merkmalen.",
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
    description: "Ein Transplantations-Chirurg hat fünf Patienten, die ohne sofortige Organtransplantationen sterben werden. Ein gesunder Tourist kommt wegen einer kleineren Verletzung zur Behandlung. Seine Gewebemerkmale passen perfekt.",
    question: "Darf der Chirurg den Touristen opfern?",
    options: [
      {
        text: "Nein, das ist Mord",
        principle: "Kategorischer Imperativ",
        philosopher: "Immanuel Kant",
        explanation: "Dies wäre extremste Instrumentalisierung: Ein Mensch wird zur reinen Ersatzteilquelle degradiert. Die Menschenwürde ist nicht abwägbar.",
        consequence: "Der Chirurg lässt den Touristen leben. Die 5 Patienten sterben an Organversagen. Die Menschenwürde wurde absolut geschützt. Das Gesundheitssystem bleibt vertrauenswürdig. Ergebnis: 5 Tote, 1 Überlebender, System intakt.",
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
        explanation: "Wenn wir wirklich nur Konsequenzen zählen, dann sind 5 > 1. Diese Position zeigt die Grenzen des reinen Utilitarismus.",
        consequence: "Der Chirurg tötet den Touristen und entnimmt seine Organe. 5 Patienten überleben. Der Chirurg wird verhaftet und des Mordes angeklagt. Das Vertrauen in Krankenhäuser kollabiert. Menschen vermeiden aus Angst Behandlungen. Langfristig sterben mehr Menschen. Ergebnis: 5 Überlebende kurzfristig, aber Systemkollaps und viele Tote langfristig.",
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
        explanation: "Wenn Menschen Krankenhäusern nicht vertrauen können, kollabiert das Gesundheitssystem. Die Regel 'Ärzte töten nicht' maximiert langfristig das Gesamtwohl.",
        consequence: "Der Tourist lebt. Die 5 Patienten sterben. Aber: Krankenhäuser bleiben vertrauenswürdig. Menschen suchen weiterhin medizinische Hilfe. Langfristig werden dadurch mehr Leben gerettet. Ergebnis: 5 Tote jetzt, aber System funktioniert weiter.",
        percentage: 3,
        theory: {
          title: "Regel-Utilitarismus",
          philosophers: "John Stuart Mill",
          core: "Regeln maximieren langfristig Nutzen.",
          details: "Handlungs- vs. Regel-Utilitarismus.",
          strength: "Berücksichtigt systemische Effekte.",
          weakness: "Wann Regeln, wann Handlungen?"
        }
      }
    ],
    background: "Judith Jarvis Thomson entwickelte dieses Extrembeispiel, um zu zeigen: Die reine Zahlen-Logik funktioniert nicht überall."
  },
  {
    id: 8,
    title: "Sophies Entscheidung",
    shortDesc: "Im KZ Auschwitz muss Sophie wählen, welches ihrer zwei Kinder leben darf.",
    description: "Sophie Zawistowska kommt 1943 mit ihren zwei Kindern im KZ Auschwitz an. Ein SS-Arzt zwingt sie: Sie darf eines ihrer Kinder behalten und muss entscheiden, welches. Lehnt sie ab, werden beide sofort in die Gaskammer geschickt.",
    question: "Sollte Sophie wählen?",
    options: [
      {
        text: "Wählen, um zumindest ein Kind zu retten",
        principle: "Tragischer Pragmatismus",
        philosopher: "Bernard Williams",
        explanation: "Williams' Konzept des 'moralischen Rests': Manchmal sind alle Optionen falsch, aber Handeln ist weniger falsch. Ein Kind zu retten ist besser als beide zu verlieren. Die moralische Schuld liegt beim Täter.",
        consequence: "Sophie wählt ihr jüngeres Kind (historisch: ihren Sohn). Das andere wird sofort in die Gaskammer gebracht und ermordet. Das gerettete Kind überlebt zunächst das Lager. Sophie wird von Schuld und Trauma zerfressen. Sie nahm sich Jahre später das Leben. Ergebnis: 1 Kind überlebt, 1 Kind tot, Sophie später Suizid.",
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
        explanation: "Levinas: Die Verantwortung für den Anderen ist absolut und nicht vergleichbar. Man kann nicht zwischen zwei unendlichen Verantwortungen wählen.",
        consequence: "Sophie sagt: 'Ich kann nicht wählen.' Beide Kinder werden sofort in die Gaskammer geschickt und ermordet. Sophie hat ihre moralische Integrität bewahrt - sie hat kein Kind für weniger wertvoll erklärt. Die Schuld liegt allein beim SS-Arzt. Ergebnis: Beide Kinder tot, aber Sophie hat nicht gewählt.",
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
        consequence: "Dies ist keine Handlungsoption, sondern eine Erkenntnis: Es gibt keine 'richtige' Antwort. Jede Konsequenz ist tragisch. Die moralische Last liegt beim Täter. Ergebnis: Keine praktische Lösung - zeigt nur die Grenzen von Moral unter extremem Bösen.",
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
        explanation: "Wenn beide Kinder gleicher massen geliebt werden, wäre ein Zufallsverfahren die einzige nicht-willkürliche Methode.",
        consequence: "Sophie würde eine Münze werfen. Ein Kind überlebt per Zufall, eines stirbt. Sophie hat nicht 'entschieden', welches Kind weniger wertvoll ist - der Zufall hat entschieden. Emotional macht das kaum einen Unterschied. Ergebnis: 1 Kind überlebt, 1 stirbt - aber durch Zufall, nicht Wahl.",
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
