import { jsPDF } from 'jspdf'

export default function ResultScreen({ userName, decisions, dilemmata, setStage }) {
  const principleCount = {}
  decisions.forEach(d => {
    principleCount[d.principle] = (principleCount[d.principle] || 0) + 1
  })

  const sorted = Object.entries(principleCount).sort((a, b) => b[1] - a[1])
  const dominantPrinciple = sorted[0]

  const downloadPDF = () => {
    const doc = new jsPDF()
    const margin = 20
    let y = 20

    doc.setFontSize(20)
    doc.setFont(undefined, 'bold')
    doc.text('Entscheidungsdokumentation', margin, y)
    y += 10
    doc.setFontSize(16)
    doc.text('Moralische Dilemmata', margin, y)
    y += 15

    doc.setFontSize(11)
    doc.setFont(undefined, 'normal')
    doc.text(`Name: ${userName}`, margin, y)
    y += 7
    doc.text(`Datum: ${new Date().toLocaleDateString('de-DE')}`, margin, y)
    y += 7
    doc.text(`Bearbeitete Dilemmata: ${decisions.length} von ${dilemmata.length}`, margin, y)
    y += 15

    doc.setFontSize(14)
    doc.setFont(undefined, 'bold')
    doc.text('Dein dominantes Prinzip', margin, y)
    y += 10
    doc.setFontSize(12)
    doc.setFont(undefined, 'normal')
    doc.text(`${dominantPrinciple[0]} (${Math.round((dominantPrinciple[1] / decisions.length) * 100)}%)`, margin, y)
    y += 15

    doc.save(`Entscheidungsdokumentation_${userName.replace(/\s+/g, '_')}.pdf`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-12">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 fade-in">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Dein moralisches Profil
          </h2>
          <p className="text-gray-600">
            {userName}, du hast {decisions.length} von {dilemmata.length} Dilemmata bearbeitet
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-300 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            🏆 Dein dominantes philosophisches Prinzip
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {dominantPrinciple[0]}
          </p>
          <p className="text-gray-700">
            In {dominantPrinciple[1]} von {decisions.length} Entscheidungen 
            ({Math.round((dominantPrinciple[1] / decisions.length) * 100)}%) 
            hast du nach diesem Prinzip gehandelt.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            📊 Verteilung deiner philosophischen Prinzipien
          </h3>
          <div className="space-y-4">
            {sorted.map(([principle, count]) => {
              const percentage = (count / decisions.length) * 100
              return (
                <div key={principle} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-900">{principle}</span>
                    <span className="font-bold text-gray-700">
                      {count}× ({Math.round(percentage)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 h-4 rounded-full transition-all duration-1000"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            📋 Deine Entscheidungen im Detail
          </h3>
          <div className="space-y-3">
            {decisions.map((decision, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2 bg-white rounded-r">
                <p className="font-semibold text-gray-900">{decision.dilemma}</p>
                <p className="text-sm text-gray-600 mt-1">
                  {decision.principle} • {decision.philosopher}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {decision.percentage}% der Menschen entscheiden gleich
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-2">
            💭 Reflexion
          </h3>
          <p className="text-gray-700 text-sm">
            Es gibt keine "richtigen" Antworten bei moralischen Dilemmata. Grosse Philosophen 
            waren sich über Jahrtausende uneinig. Deine Entscheidungen zeigen, welche ethischen 
            Traditionen dich leiten.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={downloadPDF}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            PDF-Dokumentation herunterladen
          </button>

          <div className="flex gap-4">
            {decisions.length < dilemmata.length && (
              <button
                onClick={() => setStage('dilemmaList')}
                className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Weitere Dilemmata ({dilemmata.length - decisions.length} verbleibend)
              </button>
            )}
            <button
              onClick={() => setStage('menu')}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Zurück zum Menü
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
