import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [text, setText] = useState('')
  const [length, setLength] = useState(0)
  useEffect(() => {
    setLength(text.length)
    if (length >= 100) {
      alert("Word Limit reached")
    }
  }, [text])
  return (
    <>
      <input type="text" onChange={(e) => { setText(e.target.value) }} />
      <p>{text.length}</p>
    </>
  )
}

export default App
