import React, { useEffect, useState }  from 'react'

export const ArrayObjetos = () => {
    const [usuariosEstaticos, setUsuariosEstaticos] = useState([]);

    // Funcion que añade el objeto con los usuarios estáticos
    const getUsuariosEstaticos = () => {
        setUsuariosEstaticos ([
            {
            "id": 1,
            "email": "erbaranda@gmail.com",
            "first_name": "Oscar",
            "last_name": "Fernández Santiago",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 2,
                "email": "servosoft2016@gmail.com",
                "first_name": "Oscar",
                "last_name": "Fernandez Santiago",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 3,
                "email": "oscarfernandezsantiago@gmail.com",
                "first_name": "Oscar",
                "last_name": "Fernandez Santiago",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            }
        ])
    }

    // Efecto para cargar los usuario al inicio
      useEffect(() =>  {
        getUsuariosEstaticos();        
      },[]);

    // Renderizo
    return (
        <>
            <h2>Ejercicio 3: Muestra los usuarios almacenados en un array de objetos (Previo entender AJAX)</h2>
            <ol className='lista_ejercicios'>
                {usuariosEstaticos.map((usuario) => {
                return (
                    <li key={usuario.id}>
                    {usuario.first_name} {usuario.last_name} / {usuario.email} / {usuario.avatar}
                    </li>
                )
                })}
            </ol>
        </>
      
    )
}
