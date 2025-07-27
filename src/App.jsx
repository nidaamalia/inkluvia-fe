import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <BrowserRouter>
      {/* Skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="App">
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}

export default App