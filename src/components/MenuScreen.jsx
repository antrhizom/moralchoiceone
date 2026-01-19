export default function MenuScreen({ userName, setStage, decisions, dilemmata, setShowModal, showModal, philosophicalTheories }) {
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

        {/* Theory Modal */}
        {showModal === 'theory' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-8 max-w-4xl max-h-[85vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6">Philosophische Grundlagen der Ethik</h2>
              
              <div className="space-y-6">
                {Object.entries(philosophicalTheories).map(([key, theory]) => (
                  <div key={key} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{theory.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Hauptvertreter:</strong> {theory.philosophers}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Kernidee:</strong> {theory.core}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">{theory.details}</p>
                    <p className="text-green-700 text-sm">
                      <strong>✓ Stärke:</strong> {theory.strength}
                    </p>
                    <p className="text-red-700 text-sm">
                      <strong>✗ Schwäche:</strong> {theory.weakness}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>💡 Wichtig:</strong> Diese Theorien schliessen sich nicht gegenseitig aus. 
                  Viele Philosophen kombinieren Elemente verschiedener Ansätze.
                </p>
              </div>

              <button
                onClick={() => setShowModal(null)}
                className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
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
