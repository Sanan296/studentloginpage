import { useState } from 'react'
import StudentLogin from './components/loginpage.jsx';
import StudentCard from './components/studentcard.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StudentCard/>  
    <StudentLogin/>
    </>
  )
}

export default App
