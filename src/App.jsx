import * as React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react'
import './App.css'

import HomePage from './Pages/HomePage/HomePage';
import MainLayout from './Pages/MainLayout/MainLayout';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={ <LandingPage />} />
      <Route path="/portfolio" element={<MainLayout />} >
        <Route index element={ <HomePage />} />
        
      </Route>

      <Route path="/" element={ <HomePage />} />
      <Route path="/*" element={ <Navigate to='/' />} />
    </Routes>

  )
}

export default App
