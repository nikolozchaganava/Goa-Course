import React from 'react'

import Login from './pages/Login.jsx'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}
