import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inc = () => {
    if (count == 30) {
      setCount(count)
    }
    else {
      setCount(count + 1)
    }
  }
  const dec = () => {
    if (count == 0) {
      setCount(count)
    }
    else {
      setCount(count - 1)
    }
  }
  return (
    <>
      <button onClick={inc}>Increment:{count}</button>
      <p>{count}</p>
      <button onClick={dec}>Decrement:{count}</button>
    </>
  )
}

export default App
