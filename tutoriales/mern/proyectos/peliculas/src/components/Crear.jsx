/*
  COMPONENTE QUE PERMITE CREAR PELICULAS
    - uso el paquete uuid para generar id únicos
    - Obtengo el estado peliculas del componente ppal para que al actualizar refresque el listado de peliculas
    - Importo el helper que guarda la informacion en local storage
*/

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { guardarEnStorage } from '../helpers/GuardarEnStorage';

// Componente
export const Crear = ({peliculas, setPeliculas}) => {  

  // Funcion que se ejecuta tras el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Objeto que almacenará la pelicula nueva introducida que proviene del formulario. Le añado un id
    let nuevaPelicula = {
      id: uuidv4(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value
    }

    // Almaceno los datos de la nueva pelicula. Actualizo el estado peliculas y guardo en localstorage
    const peliculasActualizadas = [...peliculas, nuevaPelicula];
    setPeliculas(peliculasActualizadas);
    guardarEnStorage('peliculas', peliculasActualizadas);

    // 🔄 Reseteo del formulario
    e.target.reset();
    
  }

  // Renderizo
  return (
    <div className="add">

        <h3 className="title">Añadir pelicula</h3>
        <form onSubmit={handleSubmit}>

            <input
              type="text"
              id="titulo"
              placeholder="Titulo" 
              name='titulo'
            />

            <textarea
              id="description"
              placeholder="Descripción"
              name='descripcion'
            >
              
            </textarea>

            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}
