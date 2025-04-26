/* 
  EJERCICIO 1 DE USO DEL HOOK USESTATE: 
    - Da la bienvenida al nombre por defecto almacenado en el estado nombre
    - Mediante un formulario se puede cambiar el nombre mediante el estado nuevo nombre
    - Importo el componente HookUseEffect que contiene un ejemplo de uso del mismo
*/

import React, { useState } from 'react';
import { HookUseEffect } from './HookUseEffect';

// Componente
export const HookUseState = () => {

  // Estados
  const [nombre, setNombre] = useState('Oscar');
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [privilegio, setPrivilegio] = useState('Usuario');
  const [nuevoPrivilegio, setNuevoPrivilegio] = useState(privilegio);
  const [mensajeError, setMensajeError]= useState('');

  // Función que recoge los datos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Nombre no puede estar vacio
    if (nuevoNombre.trim() === '') {
      setMensajeError('El nombre no puede estar vacío');            
    } else {
      console.log(`Desde handleSubmit: ${nuevoNombre} y ${nuevoPrivilegio}`);    
      setNombre(nuevoNombre);
      setNuevoNombre(''); 
      setPrivilegio(nuevoPrivilegio);
      setMensajeError('');
    }

  };

  // Renderizo
  return (
    <div>
      
      <h2>Ejercicio 1: Cambia el nombre a quien dar la bienvenida (Hooks useState y useEffect)</h2>

      {/* Muestra el mensaje de error o ejecuta el componente useEffect que dará la bienvenida */}
      {mensajeError!='' ?
        <h2>{mensajeError}</h2> : 
        <HookUseEffect
          nombre={nombre}
          privilegio= {privilegio}
        />
      }

      {/* Formulario */}
      <form onSubmit={handleSubmit}>
        <input
          className="form_ejercicio1"
          type="text"
          placeholder="Introduzca nuevo nombre"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}          
        />

        <select
          className="form_ejercicio1"
          value={nuevoPrivilegio}
          onChange={(e) => setNuevoPrivilegio(e.target.value)}
        >
          <option value="Usuario">Usuario</option>
          <option value="Administrador">Administrador</option>
        </select>

        <button type="submit">Cambiar datos</button>        
      </form>

    </div>
  );
};
