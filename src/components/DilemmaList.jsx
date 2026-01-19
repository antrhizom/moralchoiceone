export default function DilemmaList({ setStage, dilemmata, decisions, handleDilemmaSelect }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-12">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl p-8 fade-in">
        <div className="mb-8">
          <button
            onClick={() => setStage('menu')}
            className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2 mb-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zum Menü
          </button>
          <h2 className="text-3xl font-bold text-gray-900">
            Wähle ein Dilemma
          </h2>
          <p className="text-gray-600 mt-2">
            {decisions.length} von {dilemmata.length} bereits bearbeitet
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {dilemmata.map((dilemma) => {
            const completed = decisions.some(d => d.dilemma === dilemma.title);
            return (
              <button
                key={dilemma.id}
                onClick={() => handleDilemmaSelect(dilemma)}
                className={`text-left p-6 rounded-xl border-2 transition-all hover:scale-[1.02] ${
                  completed 
                    ? 'bg-green-50 border-green-300 hover:border-green-500' 
                    : 'bg-gray-50 border-gray-200 hover:border-blue-500'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                    completed ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                  }`}>
                    {completed ? '✓' : dilemma.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {dilemma.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {dilemma.shortDesc}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {decisions.length > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setStage('result')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Zur Auswertung ({decisions.length}/{dilemmata.length})
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
