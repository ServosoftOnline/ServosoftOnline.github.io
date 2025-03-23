// COMPONENTE QUE MUESTRA UNA LISTA CON LOS LIBROS DEL ARRAY. Si el array estuviese vacio mostrara "vacia"
import React from 'react'

const SegundoComponente = () => {
    const libros = ["Harry potter", "El nombre de la rosa", 'Enemigo público'];
    
    return (
        <div className='segundo-componente'>
            <h2>Esta es vuestra biblioteca </h2>
            {libros.length !== 0 ?
                <ul>
                    {libros.map((libro, index) =>(<li key={index}>{libro}</li>))}
                </ul>
                :
                <p>vacia</p>
            }
            
        </div>
    )
}

export default SegundoComponente;
