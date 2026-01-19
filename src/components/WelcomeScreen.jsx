export default function WelcomeScreen({ userName, setUserName, handleNameSubmit }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Moralische Dilemmata
          </h1>
          <p className="text-xl text-gray-600">
            Eine philosophische Lernreise durch ethische Entscheidungen
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-3 text-lg">
            📄 Deine Entscheidungsdokumentation
          </h2>
          <p className="text-gray-700">
            Nach Bearbeitung der Dilemmata erhältst du eine persönliche <strong>PDF-Dokumentation</strong>, 
            die deine Entscheidungen, die zugrundeliegenden philosophischen Prinzipien und dein 
            moralisches Profil zusammenfasst.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dein Name für die Dokumentation
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="z.B. Max Mustermann oder ein Pseudonym"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
            />
            <p className="mt-2 text-sm text-gray-500">
              💡 <strong>Hinweis:</strong> Du kannst einen Klarnamen verwenden, wenn du mit diesem 
              Namen auf der PDF-Dokumentation erscheinen möchtest, oder ein Pseudonym wählen.
            </p>
          </div>

          <button
            onClick={handleNameSubmit}
            disabled={!userName.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
          >
            Weiter zum Menü
          </button>
        </div>
      </div>
    </div>
  )
}
