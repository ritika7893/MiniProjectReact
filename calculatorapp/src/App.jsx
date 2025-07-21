import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [result, setResult] = useState(0)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const val1 = (e) => {
    setNum1(Number(e.target.value))
  }
  const val2 = (e) => {
    setNum2(Number(e.target.value))
  }
  return (
    <>
      <input type="number" onChange={val1} />
      <br />
      <input type="number" onChange={val2} /><br /> <br />
      <button onClick={add => { setResult(num1 + num2) }}>Add</button>
      <button onClick={sub => { setResult(num1 - num2) }}>Sub</button>
      <button onClick={mul => { setResult(num1 * num2) }}>Mul</button>
      <button onClick={div => { setResult(num1 / num2) }}>Divide</button>
      <p>{num1}</p>
      <p>{num2}</p>
      <p>{result}</p>
    </>
  )
}

export default App
