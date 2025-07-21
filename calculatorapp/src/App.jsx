import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCalculatorStore from './store'
function App() {

  const { num1, num2, setNum1, setNum2, result, calculate } = useCalculatorStore()
  return (
    <>
      <div>
        <input type="number" onChange={(e) => setNum1(Number(e.target.value))} />
        <br />
        <input type="number" onChange={(e) => setNum2(Number(e.target.value))} /><br /> <br />
        <button onClick={() => calculate('add')}>Add</button>
        <button onClick={() => calculate('sub')}>Sub</button>
        <button onClick={() => calculate('mul')}>Mul</button>
        <button onClick={() => calculate('div')}>Divide</button>
        <p>{num1}</p>
        <p>{num2}</p>
        <p>{result}</p>
      </div>
    </>
  )
}

export default App
