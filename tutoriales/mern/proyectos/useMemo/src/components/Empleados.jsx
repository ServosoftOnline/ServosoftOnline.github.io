/*
  Usar React.memo() hace que:
    - Se renderize la primera vez con la pagina 1, que es el valor por defecto en el estado pagina
    - Y despues se renderizará solo si existe un cambio en la pagina a mostrar

*/

import React, { useEffect, useState } from 'react';

export const Empleados = React.memo(
  ({pagina, muestraMensajeRenderizacion}) => {
  
    // Estados
    const [empleados, setEmpleados] = useState([]);
  
    // Funcion para obtener los empleados. Añado la api key gratuita y controlo los errores
    const obtenerEmpleados = async () => {

      try {      
        const url = 'https://reqres.in/api/users?page=' + pagina;
        const peticion = await fetch(url,{
          headers: {
            'x-api-key': 'reqres-free-v1'
          }
        });
        const respuesta = await peticion.json();        
        setEmpleados(respuesta.data);
      } catch (error) {
        console.error('Error al obtener empleados:', error);
      }

    };
  
    // Efecto que obteniene los empleados y lance la prueba del useCallback cuando se cambie la pagina    
    useEffect(() => {
      obtenerEmpleados();      
      muestraMensajeRenderizacion(pagina);      
    }, [pagina]);
  
    // Renderizo el componente
    return (
      <div className='contenido'>        
        <ol>
          {empleados.length > 0
            ? empleados.map((empleado) => (
                <li key={empleado.id}>
                  {empleado.first_name} {empleado.last_name} / {empleado.email}
                </li>
              ))
            : <p>Cargando empleados...</p>}
        </ol>
      </div>
    );
  }
)