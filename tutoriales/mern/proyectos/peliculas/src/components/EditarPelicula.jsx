import React from 'react';
import { guardarEnStorage } from '../helpers/GuardarEnStorage';

export const EditarPelicula = ({pelicula, peliculas, setPeliculas, setIdPeliculaAEditar}) => {

    // Función que recoge la información del formulario y actualiza estado y local storage
    const handleSubmit = (e,id) => {
        e.preventDefault();

        // Obtengo los nuevos titulos y descripción que provienen del formulario
        const nuevoTitulo = e.target.titulo.value;
        const nuevaDescripcion = e.target.descripcion.value;

        // Creo un array de objetos donde almaceno todas las peliculas con la pelicula actualizada
        const peliculasActualizadas = peliculas.map(peli => {
            if (peli.id === id) {
                return {
                    ...peli,
                    titulo: nuevoTitulo,
                    descripcion: nuevaDescripcion,
                };
            }
            return peli;
        });

        // Actualizo el estado peliculas con las nuevas peliculas
        setPeliculas(peliculasActualizadas);

        // Actualizo local storage con las peliculas actualizadas
        guardarEnStorage('peliculas', peliculasActualizadas);

        // Indico que ya actualizé la pelicula reiniciando el valor inicial del estado
        setIdPeliculaAEditar(0);

    }

    return (
        <div className='edit_form'>            

            <form onSubmit={(e) => {handleSubmit(e,pelicula.id)}}>
                <input
                    className='titulo_editado'
                    type='text'
                    name='titulo'
                    defaultValue={pelicula.titulo}
                />

                <textarea
                    className='descripcion_editada'
                    name='descripcion'
                    defaultValue={pelicula.descripcion}
                />

                <input type='submit' className="update" value='Actualizar' /> 
                <button
                    className="delete"
                    onClick={() => setIdPeliculaAEditar(0)}
                    >Cancelar
                </button>
            </form>
            
        </div>
    )
}
