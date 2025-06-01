import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, About, Contact } from './pages'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  )
}

export default App
