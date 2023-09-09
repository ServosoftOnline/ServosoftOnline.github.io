/*
  APRENDIENDO React
    - Es recomendable trabajar siempre con la consola abierta para mostrar posibles errores.
    
    - Instrucciones JSX. Son instrucciones javascript que queremos ejecutar
      - Dentro puedo usar instrucciones javascript entre llaves
      - Para definir clases debemos usar className en lugar de class
      - Podemos añadir estilos de forma dinámica usando variables
      
    - Renderizar. Añadir al dom instrucciones JSX
    - Existe un div con el id llamado root que lo engloba todas las instrucciones JSX
      - Puedo añadir más div dentro del root
    
    - Formas de añadir condicionales:
      - Forma 1: Usando sentencias if de javascript en funciones fuera de JSX
      - Forma 2: Insertando condicionales en el interior de las instrucciones JSX de la siguiente manera:
        - {condicion ? Instrucciones si se cumple la condicion : Instrucciones si no se cumple} 
          - Si quiero poner mas de una instruccion debo separarlos por una etiqueta div o similar
    
    

*/



import React from 'react';
import ReactDOM from 'react-dom/client';

const nombre = 'Oscar';
let color = 'blue';
let sesion = true;

/* 
// FORMA 1: CONDICIONALES EN JAVASCRIPT
const JSX = (
  <>
    <h1 className = "titulo" style = {{color: color}}> Hola {nombre}</h1>
  </>
);

const verificarSesion = (sesion) => {
  if (sesion === true) {
    return JSX;
  } else {
    return <h1>No has iniciado sesion</h1>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {verificarSesion(sesion)}    
  </React.StrictMode>
);
*/



// FORMA2: CONDICIONALES EN INSTRUCCIONES JSX
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {sesion === true ?
      <div>
        <p style = {{color: color}}>Bienvenido {nombre}</p>
        <p>Que tengas un buen día</p>
      </div>        
      :
      <p>No ha iniciado sesión</p>}
  </React.StrictMode>
);


