import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import theme from './theme'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter as Router } from "react-router-dom"
import { CssBaseline } from '@mui/material'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
