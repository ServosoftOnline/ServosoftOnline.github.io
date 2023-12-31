/*
  FIREBASE:

    - Permite ahorrar el aprender un lenguaje en el lado del servidor
    - su web: https://firebase.google.com

    - Proporciona varios servicios
      - Usare cloud Firestore para las bases de datos
      - Usaré Authentification para auntentificar usuarios
      - cloud funtions proporciona funciones que podemos ejecutar en el lado del servidor
      - hosting para publicar nuestro sitio en internet
      - cloud storage para subir archivos
    
    - Tiene un plan gratuito y otro de pago por uso

  EN ESTA APLICACION:
    - Usaré vite, styled components, firebase, context api para los resultados de las operaciones
    


*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Contexto
import { ProveedorMensaje } from './contextos/contextoMensaje.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProveedorMensaje>
      <App />
    </ProveedorMensaje>
  </React.StrictMode>,
)
