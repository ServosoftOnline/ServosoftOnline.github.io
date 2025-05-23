import React, { useEffect, useReducer } from 'react';
import { JuegoReducer } from '../reducers/JuegoReducer';

// funcion inicializadora que declaro fuera del componente.
// Obtiene la información existente en local storage en el elemento juegos. Si llega vacio lo devolvemos vacio
const init = () => {
    return JSON.parse(localStorage.getItem('juegos')) || [];
}

// Componente funcional para mostrar y agregar videojuegos
const MisJuegos = () => {

    // Estado creado con useReducer
    const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

    // Efecto que inicializa o actualiza los valores de local storage con dependencia al estado juegos
    useEffect(() => {
        localStorage.setItem('juegos', JSON.stringify(juegos));
    },[juegos]);

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Creo el objeto juego con los datos obtenidos desde el formulario
        const juego = {            
            id: new Date().getTime(), 
            nombre: e.target.nombre.value,
            descripcion: e.target.descripcion.value
        }

        // Creo la acción a realizar, la lanzo al reducer y actualizo el estado.
        // type y payload provienen de JuegoReducer
        const action = {
            type: 'crear',
            payload: juego
        }

        dispatch(action);
       
    }

    // Función que lanza al reducer la eliminación de un juego
    const eliminarJuego = (id) => {        
        const action = {
            type: 'eliminar',
            payload: id
        };

        dispatch(action);
    }

    // Funcion que lanza el reducer la edición de un juego
    const editarJuego = (e, id) => {
        e.preventDefault();        
        
        
        // Creo el objeto juego con los datos obtenidos desde el formulario
        const juegoAEditar = {            
            id: id, 
            nombre: e.target.nombre.value,
            descripcion: e.target.descripcion.value
        }
        
        
        const action = {
            type: 'editar',
            payload: juegoAEditar
        }

        dispatch(action);

    }

    // Renderizo
    return (
        <div>
            {/* Lista ordenada de videojuegos */}
            <h2>Mis videojuegos ({juegos.length})</h2>        
            <ol>
                {juegos.map((juego) => {
                    return (
                        <li
                            key={juego.id}>
                            <form onSubmit={(e) => editarJuego(e, juego.id)}>
                                <input type='text' name='nombre' defaultValue={juego.nombre} />
                                <input type='text' name='descripcion' defaultValue={juego.descripcion} />
                                <input type='submit' value='Editar'/>
                                <button onClick={() => eliminarJuego(juego.id)}>Eliminar</button>
                            </form>
                        </li>
                    )})
                }
            </ol>

            {/* Formulario para agregar un nuevo videojuego */}        
            <form className='formulario' onSubmit={handleSubmit}>
                <div className='campo'>
                    <label htmlFor="nombre">Nombre del videojuego:</label>
                    <input type="text" name="nombre" id="nombre" />
                </div>
                <div className='campo'>
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea name="descripcion" id="descripcion"></textarea>
                </div>
                <input type="submit" value="Agregar" />
            </form>
        </div>
    )
}

export default MisJuegos
