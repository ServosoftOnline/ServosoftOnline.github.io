// CUSTOM HOOK PARA REALIZAR PETICIONES AJAX AL SERVICIO EXTERNO: https://reqres.in/

import React, { useEffect, useState } from 'react'

export const useAjax = (url) => {

    // Estado donde almacenaré los datos que devuelve request.in y los inicio a null
    const [estado, setEstado] = useState({
        datos: null,
        cargando: true
    });

    // Funcion asincrona que hace la peticion ajax
    const getData = async() => {        
        try {

            // Indico que está cargando
            setEstado({
                ...estado,
                cargando: true
            })

            // Hago la petición ajax con mi key gratuita
            const peticion = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-api-key': 'reqres-free-v1'
                }
            });

            // Extraigo la data de los datos obtenidos
            const {data} = await peticion.json();
            
            // Añado los datos al estado e indico que acabo de cargar
            setEstado({
                datos: data,
                cargando: false
            });

        } catch (error) {
            console.error("Error al obtener usuario:", error);
        }
    }

    // Efecto para obtener los datos del primer usuario
    useEffect(() => {
        getData();
    },[url]);

    return {
        datos: estado.datos,
        cargando: estado.cargando            
    }
        
}
