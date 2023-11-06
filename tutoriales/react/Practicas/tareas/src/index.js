/*
  APP: LISTA DE TAREAS

    - Aplicaré estilos de la primera forma:  Creando un archivo css por cada componente
      - LLamare a las clases siguiente la metodología BEM

    - Agrego iconos mediante fontawesome (NO PUDE. REVISAR MAS ADELANTE)
      - Usaré un plan para react
      

*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componentes/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

