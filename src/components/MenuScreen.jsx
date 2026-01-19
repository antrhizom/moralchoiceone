import { useState } from 'react'

export default function MenuScreen({ userName, setStage, decisions, dilemmata, setShowModal, showModal, philosophicalTheories }) {
  const [expandedTheory, setExpandedTheory] = useState(null)

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 fade-in">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Willkommen, {userName}!
          </h1>
          <p className="text-gray-600">
            Wähle eine der folgenden Optionen
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <button
            onClick={() => setShowModal('about')}
            className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 hover:border-blue-500 rounded-xl p-8 transition-all hover:shadow-lg"
          >
            <div className="text-blue-600 text-5xl mb-4">ℹ️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Über diese Seite
            </h3>
            <p className="text-gray-600 text-sm">
              Erfahre mehr über Ziel und Aufbau dieser interaktiven Lernseite
            </p>
          </button>

          <button
            onClick={() => setShowModal('theory')}
            className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 hover:border-purple-500 rounded-xl p-8 transition-all hover:shadow-lg"
          >
            <div className="text-purple-600 text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Theoretische Grundlagen
            </h3>
            <p className="text-gray-600 text-sm">
              Die fünf grossen philosophischen Ethik-Traditionen
            </p>
          </button>

          <button
            onClick={() => setStage('dilemmaList')}
            className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 hover:border-green-500 rounded-xl p-8 transition-all hover:shadow-lg"
          >
            <div className="text-green-600 text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Zu den Dilemmata
            </h3>
            <p className="text-gray-600 text-sm">
              Beginne mit den moralischen Dilemmata
            </p>
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Bereits bearbeitet: {decisions.length} von {dilemmata.length} Dilemmata
          </p>
          {decisions.length > 0 && (
            <button
              onClick={() => setStage('result')}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Zur Auswertung →
            </button>
          )}
        </div>

        {/* About Modal */}
        {showModal === 'about' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-8 max-w-2xl max-h-[80vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4">Über diese interaktive Lernseite</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Diese Lernseite hilft dir, dein <strong>moralisches Verständnis</strong> in 
                  schwierigen Situationen zu schärfen und verschiedene <strong>philosophische 
                  Perspektiven</strong> kennenzulernen.
                </p>
                
                <h3 className="font-semibold text-lg mt-6">Was dich erwartet:</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>8 klassische moralische Dilemmata</strong> ohne einfache Antworten</li>
                  <li><strong>Mehrere Entscheidungsmöglichkeiten</strong> pro Dilemma</li>
                  <li><strong>Direktes Feedback</strong> mit Erklärungen zum philosophischen Prinzip</li>
                  <li><strong>Statistische Vergleiche:</strong> Wie haben andere Menschen entschieden?</li>
                  <li><strong>PDF-Dokumentation</strong> deiner Entscheidungen am Ende</li>
                </ul>

                <h3 className="font-semibold text-lg mt-6">Ziel:</h3>
                <p>
                  Es gibt keine "richtigen" Antworten bei moralischen Dilemmata. Das Ziel ist, 
                  verschiedene ethische Perspektiven kennenzulernen und die eigenen moralischen 
                  Intuitionen bewusst zu reflektieren.
                </p>
              </div>
              <button
                onClick={() => setShowModal(null)}
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schliessen
              </button>
            </div>
          </div>
        )}

        {/* Theory Modal - INTERAKTIV mit Kacheln */}
        {showModal === 'theory' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-8 max-w-6xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-3xl font-bold mb-2 text-center">Philosophische Grundlagen der Ethik</h2>
              <p className="text-center text-gray-600 mb-8">
                Klicke auf eine Kachel, um mehr über die philosophische Tradition zu erfahren
              </p>
              
              {/* Interaktive Kacheln */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {Object.entries(philosophicalTheories).map(([key, theory], index) => {
                  const colors = [
                    'from-blue-500 to-blue-600',
                    'from-purple-500 to-purple-600', 
                    'from-green-500 to-green-600',
                    'from-pink-500 to-pink-600',
                    'from-orange-500 to-orange-600'
                  ];
                  const bgColors = [
                    'bg-blue-50 border-blue-300',
                    'bg-purple-50 border-purple-300',
                    'bg-green-50 border-green-300',
                    'bg-pink-50 border-pink-300',
                    'bg-orange-50 border-orange-300'
                  ];
                  const isExpanded = expandedTheory === key;

                  return (
                    <div key={key} className="relative">
                      <button
                        onClick={() => setExpandedTheory(isExpanded ? null : key)}
                        className={`w-full text-left p-6 rounded-xl border-2 transition-all hover:shadow-lg ${
                          isExpanded ? bgColors[index % colors.length] + ' ring-4 ring-opacity-50' : 'bg-gray-50 border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 bg-gradient-to-r ${colors[index % colors.length]}`}>
                              {index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {theory.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              <strong>🎓 Hauptvertreter:</strong> {theory.philosophers}
                            </p>
                            <p className="text-gray-700 font-medium">
                              💡 {theory.core}
                            </p>
                          </div>
                          <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>

                        {/* Erweiterte Info beim Klick */}
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-gray-300 space-y-3 animate-in fade-in">
                            <div>
                              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                                {theory.details}
                              </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                                <p className="text-xs font-bold text-green-800 mb-1">✓ STÄRKE</p>
                                <p className="text-sm text-green-700">{theory.strength}</p>
                              </div>
                              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                                <p className="text-xs font-bold text-red-800 mb-1">✗ SCHWÄCHE</p>
                                <p className="text-sm text-red-700">{theory.weakness}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <strong>💡 Wichtig:</strong> Diese Theorien schliessen sich nicht gegenseitig aus. 
                  Viele Philosophen kombinieren Elemente verschiedener Ansätze. Deine Entscheidungen 
                  werden dir zeigen, welche Tradition du in bestimmten Situationen bevorzugst.
                </p>
              </div>

              <button
                onClick={() => setShowModal(null)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors font-semibold"
              >
                Schliessen
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
