/*
  APP: LISTA DE TAREAS
    - css usado de la primera forma:  Creando un archivo css por cada componente
      - Usare la metodologia BEM
    - Usa local storage
    
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

