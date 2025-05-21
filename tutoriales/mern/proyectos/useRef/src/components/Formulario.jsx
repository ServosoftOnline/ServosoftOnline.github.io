/*
  FORMULARIO QUE USA EL HOOK USEREF PARA LA OBTENCIÓN DE SUS DATOS

    - Mediante useRef:
      - Obtengo la información del formulario
      - Modifico el contenedor que muestra la bienvenida modificando la clase de CSS
      - Modifico el texto del contenedor que confirma la información enviada de forma dinámica
      
*/

import React, {useRef, useState} from 'react'

export const Formulario = () => {  

  // Referencias
  const nombreValue = useRef();
  const apellidosValue = useRef();
  const emailValue = useRef();
  const cajaBienvenida = useRef();
  const formularioEnviado = useRef();

  // Estados
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');

  // Funciones
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const nombreInput = nombreValue.current.value;
    const apellidosInput = apellidosValue.current.value;
    const emailInput = emailValue.current.value;
  
    setNombre(nombreInput);
    setApellidos(apellidosInput);
    setEmail(emailInput);
  
    // Modifico la clase del div con la referencia cajaBienvenida
    if (nombreInput.length === 0 || apellidosInput.length === 0 || emailInput.length === 0) {      
      cajaBienvenida.current.classList.remove('bienvenido'); 
      cajaBienvenida.current.classList.add('introduzcaDatos'); 
      formularioEnviado.current.innerHTML = 'Formulario con errores';
      
    } else {
      cajaBienvenida.current.classList.remove('introduzcaDatos');
      cajaBienvenida.current.classList.add('bienvenido');
      formularioEnviado.current.innerHTML = 'Datos correctos';
    }
  }

  // Renderizo
  return (

    <div> 
      <hr/>

      <div>
        <h2>Ejemplo 1 de uso de useRef :</h2>
        <p>Obtener el contenido de un formulario y modificar directamente el DOM</p>
      </div>   

      {/* Solicita introducir datos o los muestra */}
      <div ref={cajaBienvenida}>
        {nombre.length==0 || apellidos.length==0 || email.length==0 ?
          <p>Introduzca sus datos</p> :
          <p>Bienvenido: {nombre} {apellidos} </p>}
      </div>

      {/* Formulario */}
      <form className='formulario' onSubmit={handleSubmit}>
        <input type='text' name='nombre' placeholder='Nombre' ref={nombreValue}/>
        <input type='text' name='apellidos' placeholder='Apellidos' ref={apellidosValue} />
        <input type='email' name='email' placeholder='Email' ref={emailValue}/>
        <input className='form-boton' type='submit' value='Enviar'/>
      </form>

      {/* Confirmación de formulario enviado */}
      <div ref={formularioEnviado}></div>

    </div>
  )
}
