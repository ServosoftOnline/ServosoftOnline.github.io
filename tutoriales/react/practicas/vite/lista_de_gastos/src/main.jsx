/*
  APLICACION DE GASTOS;

    - Aplicación mas completa del curso.
    - Empiezo su desarrollo el dia 8 de enero de 2024
    - Ha sido creada en vite
    - Usa react router, styled components, webfontloader, descarga la fuente que queremos usar y poder trabajar con google fonts
*/


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'


// WebFontLoader
import WebFont from 'webfontloader';
WebFont.load({
  google: {
  families: ['Work Sans:400,500,700', 'sans-serif']
}
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
