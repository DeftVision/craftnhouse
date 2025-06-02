import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, About, Contact } from './pages'
import MobileNav from './components/MobileNav';
import {Box} from "@mui/material";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <MobileNav />
        <Box sx={{ mt: '64px', px: 2 }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Box>
    </>
  )
}

export default App
