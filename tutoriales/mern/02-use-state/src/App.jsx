/*
  Ejercicios prácticos para el uso de useState
    - Ambos componentes son dos ejercicios diferentes
    - En el interior de cada componente se indica que hace cada uno
*/

import React from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Componentes
import { HookUseState } from './components/HookUseState';
import { Ano } from './components/Ano';

// Componente ppal
const App = () => {

  return (
    <>
      <div>        
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />        
      </div>
      
      <h1>Stack Mern: Hook useState</h1>
      <hr/>
      <HookUseState />
      <Ano/>            
    </>
  )
}

export default App