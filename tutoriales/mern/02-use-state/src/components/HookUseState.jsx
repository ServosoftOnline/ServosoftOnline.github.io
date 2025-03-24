/* 
  EJERCICIO 1 DE USO DEL HOOK USESTATE: 
    - Da la bienvenida al nombre por defecto almacenado en el estado nombre
    - Mediante un formulario se puede cambiar el nombre mediante el estado nuevo nombre
*/

import React, { useState } from 'react';

// Componente
export const HookUseState = () => {

  // Estados
  const [nombre, setNombre] = useState('Oscar');
  const [nuevoNombre, setNuevoNombre] = useState('');

  // Función que recoge los datos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setNombre(nuevoNombre);
    setNuevoNombre(''); 
  };

  // Renderizo
  return (
    <div>
      <h2>Bienvenido {nombre}</h2>
      <h2>Ejercicio 1: Cambia el nombre a quien dar la bienvenida</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Introduzca nuevo nombre"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
        />
        <button type="submit">Cambiar nombre</button>
      </form>

      <hr/>

    </div>
  );
};
