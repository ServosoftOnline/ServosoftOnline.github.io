/*
    COMPONENTE QUE OBTIENE UN USUARIO MEDIANTE UNA PETICION AJAX A UN SERVICIO EXTERNO
    - El servicio externo sera: https://reqres.in/ en la opcion single user



*/

import React, { useEffect, useState } from 'react'
import { useAjax } from './../hooks/useAjax';

export const MiUsuario = () => {

    const [url, setUrl]= useState('https://reqres.in/api/users/1');
    const {datos, cargando} = useAjax(url);

    // Funcion que obtiene el id que se deseo obtener de request.in y crea la url de la peticion
    const getId = (e) => {
        const id = parseInt(e.target.value);
        setUrl('https://reqres.in/api/users/' + id);        
    }

    // Renderizo
    return (
        <div>

            <h2>Usuarios del servicio de regres.in obtenidos mediante el custom hook useAjax</h2>

            {/* Mostrará cargando datos o los datos del usuario */}
            <h2>
                {cargando
                    ? 'Cargando datos ...'
                    : `Datos del usuario: ${datos?.first_name} ${datos?.last_name}`
                }
            </h2>
          
            {/* A medida que cambie el id que quiero obtener me hará las peticiones AJAX */}
            <input type='number' name='id' onChange={getId} defaultValue={1}/>
            
        </div>
    )
}
