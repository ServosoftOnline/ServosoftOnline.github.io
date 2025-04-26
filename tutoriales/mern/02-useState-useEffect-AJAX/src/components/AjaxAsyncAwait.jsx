/*
  EJERCICIO DE EJEMPLO SOBRE COMO HACER PETICIONES AJAX mediante async / await:

    - Uso API REST de pruebas llamada regres in: https://reqres.in/
    - Tengo tres estados donde almaceno los usuarios, si se está o no cargando y los errores que puedan producirse

    - Creo la función asincrona que se encargará de obtener los usuarios
      - Uso try / catch para obtener los errores
      - Hago la petición usando await y fetch añadiendo el endpoint
      - Recojo los datos desestructurando la data. La peticion la paso a json tambien mediante await
      - Introduzco los datos en el estado
      - Retraso la petición mediante un setTimeOut para que se aprecie el mensaje de cargando
      - El catch recoge los errores que puedan producirse y los introduce en el estado de los errores
      - Es importante controlar el estado cargando para que funcione bien

    - Creo el efecto para que se llame a la funcion cuando se cargue el componente    

    - Renderizaré:
      - El loading mientras se esté cargando
      - Si se obtiene un error renderizo el contenido del estado error
      - Si no se está cargando o se han producido errores cargo la lista de usuarios

*/

import React, { useEffect, useState }  from 'react'

export const AjaxAsyncAwait = () => {
  
  // Estados
  const [usuariosDesdeLaApi, setUsuariosDesdeLaApi] = useState([]);
  const [cargando, setCargando] = useState(true);  
  const [error, setError] = useState('');

  // Funcion que hace la petición ajax a la API REST
  const getUsuariosAjaxAsyncAwait = async () => {
    try {

      // Hago la petición. Comento un ejemplo de petición erronea
      // const peticion = await fetch("https://reqres345.in/api/users123?page=2");      
      const peticion = await fetch("https://reqres.in/api/users?page=2");      
      const {data} = await peticion.json();

      // Lo retardo 3 segundos para que se aprecie mejor el loading y obtengo los errores si se produjesen
      setTimeout(() => {            
        setUsuariosDesdeLaApi(data);        
        setCargando(false);   
        setError('');
      }, 3000)

    } catch (error) {
      console.log(error.message);      
      setError(error.message);
      setCargando(false);  
    }   
  }

  // Efecto para cargar los usuario al inicio
  useEffect(() =>  {   
    getUsuariosAjaxAsyncAwait();
  },[]);

  // Renderizo el loading, el error o la lista de usuarios
  if(cargando == true) {
    return (
      <h3>Cargando ...</h3>
    )
  }

  if (error!='') {
    return(
      <>
        <h2>
          Ejercicio 5: Usuarios proporcionados por la API REST https://reqres.in/ (Petición AJAX mediante async/await)
        </h2>
        <p>{error}</p>
      </>
    )
  }

  // Si llegado aquí no ha retornado nada, renderizo la lista
  return (
    <>

      <h2>
        Ejercicio 5: Usuarios proporcionados por la API REST https://reqres.in/ (Petición AJAX mediante async/await)
      </h2>

      <ol className='lista_ejercicios'>
        {usuariosDesdeLaApi.map((usuario) => {
          return (
            <li key = {usuario.id}>
              <img src={usuario.avatar} />
              <div>{usuario.first_name} {usuario.last_name} {usuario.email} </div>
            </li>
          )

        })}
      </ol>
      
    </>
  )
  
}
