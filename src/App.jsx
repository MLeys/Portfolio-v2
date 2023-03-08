import * as React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import HomePage from './Pages/HomePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={ <HomePage />} />
      <Route path="/*" element={ <Navigate to='/' />} />
    </Routes>

  )
}

export default App
