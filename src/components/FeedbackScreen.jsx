export default function FeedbackScreen({ decisions, setStage, dilemmata, showModal, setShowModal, currentDilemma }) {
  const lastDecision = decisions[decisions.length - 1];
  
  // Finde die gewählte Option mit Konsequenz
  const chosenOption = currentDilemma.options.find(opt => opt.text === lastDecision.choice);
  const otherOptions = currentDilemma.options.filter(opt => opt.text !== lastDecision.choice);
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-12">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 fade-in">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Deine Entscheidung: {lastDecision.choice}
          </h2>
        </div>

        <div className="space-y-6">
          {/* Konsequenz der gewählten Option */}
          {chosenOption?.consequence && (
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Konsequenz deiner Entscheidung
              </h3>
              <p className="text-gray-800 leading-relaxed text-base">
                {chosenOption.consequence}
              </p>
            </div>
          )}

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
              Philosophisches Prinzip
            </h3>
            <p className="text-2xl font-bold text-blue-600 mb-2">
              {lastDecision.principle}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Philosoph(en):</strong> {lastDecision.philosopher}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {lastDecision.explanation}
            </p>
          </div>

          {/* Vergleich mit anderen Optionen */}
          {otherOptions.length > 0 && (
            <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg flex items-center gap-2">
                <span className="text-2xl">🔄</span>
                Was wäre bei anderen Entscheidungen passiert?
              </h3>
              <div className="space-y-4">
                {otherOptions.map((option, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        {String.fromCharCode(65 + currentDilemma.options.indexOf(option))}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 mb-2">{option.text}</p>
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>{option.principle}</strong> ({option.philosopher})
                        </p>
                        {option.consequence && (
                          <p className="text-sm text-gray-700 italic">
                            → {option.consequence}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 mt-2">
                          {option.percentage}% der Menschen wählen diese Option
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <h3 className="font-semibold text-gray-900 mb-2">
              📊 Statistische Einordnung
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-gray-700">
                  <strong>{lastDecision.percentage}%</strong> der Menschen entscheiden wie du
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${lastDecision.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => setStage('dilemmaList')}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
          >
            Weiteres Dilemma wählen
          </button>
          {decisions.length === dilemmata.length && (
            <button
              onClick={() => setStage('result')}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
            >
              Zur Auswertung
            </button>
          )}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setShowModal('selectedTheory')}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            📚 Mehr über {lastDecision.principle} erfahren
          </button>
        </div>

        {/* Modal für gewählte Theorie */}
        {showModal === 'selectedTheory' && lastDecision.theory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-8 max-w-2xl max-h-[85vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4">{lastDecision.theory.title}</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Hauptvertreter:</strong> {lastDecision.theory.philosophers}
                  </p>
                  <p className="mb-3">
                    <strong>Kernidee:</strong> {lastDecision.theory.core}
                  </p>
                  <p className="text-sm mb-3">{lastDecision.theory.details}</p>
                  <p className="text-sm text-green-700 mb-2">
                    <strong>✓ Stärke:</strong> {lastDecision.theory.strength}
                  </p>
                  <p className="text-sm text-red-700">
                    <strong>✗ Schwäche:</strong> {lastDecision.theory.weakness}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(null)}
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
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
