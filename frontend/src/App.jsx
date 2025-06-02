import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, About, Contact } from './pages'
import MobileNav from './components/MobileNav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <MobileNav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  )
}

export default App
