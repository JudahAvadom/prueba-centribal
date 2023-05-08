import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ItemsState from "./context/ItemsState"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ItemsState>
      <App />
    </ItemsState>
  </React.StrictMode>,
)
