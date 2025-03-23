import React from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { HookUseState } from './components/HookUseState';

// Componente ppal
const App = () => {

  return (
    <>
      <div>        
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />        
      </div>
      
      <h1>Stack Mern: Hook useState</h1>
      <HookUseState />
     
    </>
  )
}

export default App
