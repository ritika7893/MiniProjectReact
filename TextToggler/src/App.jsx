import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("Hello There")
  const handler = () => {
    if (text === "Welcome Back") {
      setText("Hello There")
    }
    else {
      setText("Welcome Back")
    }
  }
  return (
    <>
      <button onClick={handler}>Text Toggler</button>
      <p>{text}</p>
    </>
  )
}

export default App
