// COMPONENTE QUE MUESTRA UNA PELICULA

import React from 'react'
import { guardarEnStorage } from '../helpers/GuardarEnStorage';

export const MostrarPelicula = ({pelicula, setIdPeliculaAEditar, peliculas, setPeliculas}) => {

    // Funcion
    const borrarPelicula = (id) => {

        // Actualizamos el estado y luego sincronizamos con localStorage
        const nuevasPeliculas = peliculas.filter((pelicula) => pelicula.id !== id);
        setPeliculas(nuevasPeliculas);
        guardarEnStorage('peliculas', nuevasPeliculas);
    }

    return (
        <>
            <h3 className="title">{pelicula.titulo}</h3>
            <p className="description">{pelicula.descripcion}</p>

            <button
                className="edit"
                onClick={() => { setIdPeliculaAEditar(pelicula.id) }}
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
    )
}
