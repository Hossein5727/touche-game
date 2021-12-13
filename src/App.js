import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Congratulation from './components/Congratulation'
import HomeGame from './components/HomeGame'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeGame />} />
        <Route path="/congratulation" element={<Congratulation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
