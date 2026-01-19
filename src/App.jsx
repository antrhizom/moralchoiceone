import { useState } from 'react'
import { dilemmata, philosophicalTheories } from './data/dilemmata'
import WelcomeScreen from './components/WelcomeScreen'
import MenuScreen from './components/MenuScreen'
import DilemmaList from './components/DilemmaList'
import DilemmaDetail from './components/DilemmaDetail'
import FeedbackScreen from './components/FeedbackScreen'
import ResultScreen from './components/ResultScreen'

function App() {
  const [stage, setStage] = useState('welcome')
  const [userName, setUserName] = useState('')
  const [currentDilemma, setCurrentDilemma] = useState(null)
  const [decisions, setDecisions] = useState([])
  const [showModal, setShowModal] = useState(null)

  const handleNameSubmit = () => {
    if (userName.trim()) {
      setStage('menu')
    }
  }

  const handleDilemmaSelect = (dilemma) => {
    setCurrentDilemma(dilemma)
    setStage('dilemmaDetail')
  }

  const handleDecision = (optionIndex) => {
    const choice = currentDilemma.options[optionIndex]
    setDecisions([...decisions, {
      dilemma: currentDilemma.title,
      choice: choice.text,
      principle: choice.principle,
      philosopher: choice.philosopher,
      explanation: choice.explanation,
      percentage: choice.percentage,
      theory: choice.theory
    }])
    setStage('feedback')
  }

  const props = {
    userName,
    setUserName,
    handleNameSubmit,
    setStage,
    dilemmata,
    philosophicalTheories,
    decisions,
    currentDilemma,
    handleDilemmaSelect,
    handleDecision,
    showModal,
    setShowModal
  }

  return (
    <>
      {stage === 'welcome' && <WelcomeScreen {...props} />}
      {stage === 'menu' && <MenuScreen {...props} />}
      {stage === 'dilemmaList' && <DilemmaList {...props} />}
      {stage === 'dilemmaDetail' && <DilemmaDetail {...props} />}
      {stage === 'feedback' && <FeedbackScreen {...props} />}
      {stage === 'result' && <ResultScreen {...props} />}
    </>
  )
}

export default App
