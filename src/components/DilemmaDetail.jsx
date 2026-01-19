export default function DilemmaDetail({ setStage, currentDilemma, handleDecision }) {
  if (!currentDilemma) return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-12">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 fade-in">
        <button
          onClick={() => setStage('dilemmaList')}
          className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2 mb-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Übersicht
        </button>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {currentDilemma.title}
        </h2>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-6 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed text-lg">
            {currentDilemma.description}
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm text-gray-700">
            <strong>Hintergrund:</strong> {currentDilemma.background}
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {currentDilemma.question}
        </h3>

        {/* WICHTIG: Nur Text anzeigen, KEINE Prinzipien/Philosophen */}
        <div className="space-y-4">
          {currentDilemma.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleDecision(index)}
              className="w-full text-left bg-white hover:bg-blue-50 border-2 border-gray-300 hover:border-blue-500 rounded-xl p-6 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {String.fromCharCode(65 + index)}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-semibold text-lg">
                    {option.text}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
