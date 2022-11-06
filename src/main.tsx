import './styles/global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './pages/home'
import { Chapiters } from './pages/Chapiters'
import { Questions } from './pages/Questions'
import { Games } from './pages/Games'

import { Overlay } from './overlays/Overlay'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Overlay></Overlay>
    <Home></Home>
  </React.StrictMode>
)
