import React from 'react'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignUpPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App