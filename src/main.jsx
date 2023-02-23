import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Global Styles
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
