import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setcounter] = useState(0);

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={function () {
        setcounter(counter +1);
      }}>
        Value ++
      </button>
      <button onClick={function () {
        setcounter(counter -1);
      }}>
        Value --
      </button>
    </>
  )
}

export default App
