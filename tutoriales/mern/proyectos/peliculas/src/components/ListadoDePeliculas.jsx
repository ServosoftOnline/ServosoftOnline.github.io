/*
    Renderiza en pantalla el listado con las peliculas almacenadas en el estado peliculas:

        - El componente ppal obtendŕa las peliculas de localstorage y las almacena en el estado peliculas
        - Se las pasa como parámetro junto con la funcion asociada a este componente que las renderiza
        - Si no hay peliculas en el estado peliculas lo muestro

        - Si hay peliculas estas se mostrarán o editarán dependiendo del contenido del estado idPeliculaAEditar
            - Si contiene 0 indica que no quiero editar ninguna pelicula
            - En caso contrario contendrá el id de la pelicula que quiero editar
                - Del control de este estado se encargan los componentes MostrarPelicula y EditarPelicula
        
*/

import React, {useState} from 'react';
import { EditarPelicula } from './EditarPelicula';
import { MostrarPelicula } from './MostrarPelicula';

// Componente
export const ListadoDePeliculas = ({peliculas, setPeliculas}) => {

    // Estado que contiene el id de la pelicula a editar
    const [idPeliculaAEditar, setIdPeliculaAEditar] = useState(0);
    
    // Renderizo que no hay peliculas, muestro o edito la pelicula
    return (
        <>            
            {Array.isArray(peliculas) && peliculas.length!= 0 ?                
                peliculas.map((pelicula) => {                   
                    return (
                        <article className="peli-item" key={pelicula.id}>

                            {idPeliculaAEditar !== pelicula.id ?

                                <MostrarPelicula
                                    pelicula={pelicula}
                                    setIdPeliculaAEditar={setIdPeliculaAEditar}
                                    peliculas={peliculas}
                                    setPeliculas={setPeliculas}
                                />
                                :
                                <EditarPelicula
                                    pelicula={pelicula}
                                    peliculas={peliculas}
                                    setPeliculas={setPeliculas}
                                    setIdPeliculaAEditar = {setIdPeliculaAEditar}
                                />
                            }

                        </article>
                    )
                })
                :
                <h2 className='peli-item'>No existen peliculas</h2>
            }
        </>
    )

}