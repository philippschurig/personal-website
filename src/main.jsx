import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Maintenance from './components/Maintenance'

const IsMaintenance = () => {
  if (import.meta.env.VITE_NODE_ENV === "maintenance") {
    return <Maintenance />
  }

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsMaintenance />
  </React.StrictMode>,
)
