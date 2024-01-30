import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUpForm/>
      <Authenticate/>

    </>
  )
}

export default App
