import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [text, setText] = useState('')
  const hasAlerted = useRef(false)
  const [reminder, setReminder] = useState('')
  const handler = (e) => {
    const input = e.target.value;

    if (input.length > 100) {

      if (!hasAlerted.current) {
        hasAlerted.current = true
        setReminder("word limit exceeds")
      }
      return
    }
    else {
      setText(input);
      if (hasAlerted.current) {
        setReminder("")
        hasAlerted.current = false;
      }
    }
  }
  return (
    <>
      <input type="text" value={text} onChange={handler} />
      <p>{text.length}</p>
      <p style={{ color: 'red' }}>{reminder}</p >
    </>
  )
}

export default App
