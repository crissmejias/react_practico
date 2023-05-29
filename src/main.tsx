import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/index.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ShopeeCartProvider } from './Context/index.tsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ShopeeCartProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ShopeeCartProvider>
  </React.StrictMode>,
)
