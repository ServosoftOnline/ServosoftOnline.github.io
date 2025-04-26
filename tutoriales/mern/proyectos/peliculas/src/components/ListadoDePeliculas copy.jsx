/*
    Renderiza en pantalla el listado con las peliculas almacenadas en local storage:

        - El componente ppal obtendŕa las peliculas de localstorage y las almacena en el estado peliculas
        - Se las pasa como parámetro junto con la funcion asociada a este componente que las renderiza

        - Cada vez que borre o edite una pelicula debo modificar el estado y actualizar el localstorage
            - Para eso usaré el helper guardarEnStorage
*/

import React, {useState} from 'react';
import { guardarEnStorage } from '../helpers/GuardarEnStorage';
import { Editar } from './Editar';

// Componente
export const ListadoDePeliculas = ({peliculas, setPeliculas}) => {

    // Estados
    const [peliculaAEditar, setPeliculaAEditar] = useState(0);

    // Funciones para borrar y editar peliculas
    const borrarPelicula = (id) => {

        // Actualizamos el estado y luego sincronizamos con localStorage
        const nuevasPeliculas = peliculas.filter((pelicula) => pelicula.id !== id);
        setPeliculas(nuevasPeliculas);
        guardarEnStorage('peliculas', nuevasPeliculas);
    }
    
    // Renderizo que no hay peliculas o las peliculas almacenadas en el estado peliculas   
    return (
        <>            
            {Array.isArray(peliculas) && peliculas.length!= 0 ?                
                peliculas.map((pelicula) => {                   
                    return (
                        <article className="peli-item" key={pelicula.id}>
                            {peliculaAEditar !== pelicula.id && (
                                <>
                                    <h3 className="title">{pelicula.titulo}</h3>
                                    <p className="description">{pelicula.descripcion}</p>

                                    <button
                                        className="edit"
                                        onClick={() => { setPeliculaAEditar(pelicula.id) }}
                                    >
                                        Editar
                                    </button>

                                    <button
                                        className="delete"
                                        onClick={() => borrarPelicula(pelicula.id)}
                                    >
                                        Borrar
                                    </button>
                                </>
                            )}

                            {peliculaAEditar === pelicula.id && (
                                <Editar
                                    pelicula={pelicula}
                                    peliculas={peliculas}
                                    setPeliculas={setPeliculas}
                                    setPeliculaAEditar = {setPeliculaAEditar}
                                />
                            )}
                        </article>

                    )
                })
                :
                <h2 className='peli-item'>No existen peliculas</h2>
            }
        </>
    )

}

