/*
  EJERCICIO DE EJEMPLO SOBRE COMO HACER PETICIONES AJAX mediante una promesa:

    - Uso API REST de pruebas llamada regres in: https://reqres.in/
      - En concreto el endpoint list users      
      - uso fetch de javascript
        - añado el endpoint sacado de la request web https://reqres.in/
        - La respuesta la paso a json
        - Si se obtiene un resultado correcto añado la data al array de usuario dinamicos
        - Si obtengo un error lo muestro en consola

*/

import React, { useEffect, useState }  from 'react'

export const AjaxPrm = () => {
  
  // Estado que contendrá la lista de usuarios
  const [usuariosDesdeLaApi, setUsuariosDesdeLaApi] = useState([]);

  // Funcion que hace la petición ajax a la API REST regres in mediante una promesa
  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then(respuesta => respuesta.json())
      .then(
        resultados => {
          setUsuariosDesdeLaApi(resultados.data);          
        },
        error  => {
          console.log(error);
        }
      )
  }

  // Efecto para cargar los usuario al inicio
  useEffect(() =>  {   
    getUsuariosAjaxPms();
  },[]);
  
  // Renderizo la lista de usuarios obtenidos desde la peticion Ajax
  return (
    <>

      <h2>
        Ejercicio 4: Usuarios proporcionados por la API REST https://reqres.in/ (Petición AJAX en una promesa)
      </h2>

      <ol className='lista_ejercicios'>
        {usuariosDesdeLaApi.map((usuario) => {
          
          return (
            <li key = {usuario.id}>
              {usuario.first_name} {usuario.last_name} / {usuario.email} / {usuario.avatar}
            </li>
          )

        })}
      </ol>
      
    </>
  )
}
