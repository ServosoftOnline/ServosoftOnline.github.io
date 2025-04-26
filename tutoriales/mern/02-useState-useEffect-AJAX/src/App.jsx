/*
  Ejercicios prácticos para el uso de useState, useEffect y peticiones AJAX
    - Cada componente utilizado contiene ejemplos de sus usos
    - El componente HookUseState a su vez llama al componente HookUseEfect
    - El componente HookUseEffect llama a su vez a los componentes BienvenidaAdministrador y BienvenidaUsuario
    - El componente Ano es otro ejemplo de uso del hook useState

    
*/

import React from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Componentes
import { HookUseState } from './components/HookUseState';
import { Ano } from './components/Ano';
import { ArrayObjetos } from './components/ArrayObjetos';
import { AjaxPrm } from './components/AjaxPrm'
import { AjaxAsyncAwait } from './components/AjaxAsyncAwait';


// Componente ppal
const App = () => {

  return (
    <>
      <div>        
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />        
      </div>

      <ul className='lista_stack'>
        <li> <h1>Stack Mern:    </h1> </li>
        <li> <h2>Hook useState  </h2> </li>
        <li> <h2>Hook useEffect </h2> </li>
        <li> <h2>Peticiones AJAX</h2> </li>
      </ul>

      <div> 
        <hr/>       
        <HookUseState />        
        <hr/>
        <Ano/>          
        <hr/>
        <ArrayObjetos/>        
        <hr/>
        <AjaxPrm/>
        <hr/>
        <AjaxAsyncAwait/>
      </div>
      
      
    </>
  )
}

export default App