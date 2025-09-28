import { useState } from 'react'
import StudentLogin from './components/loginpage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StudentLogin/>
    </>
  )
}

export default App
