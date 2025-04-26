/*
    COMPONENTE QUE CONTIENE UN FORMULARIO

    Pasos a seguir:
    
        1.- Creo mi etiqueta form y en su interior añado los campos necesarios para obtener la información

        2.- Cada campo va introducido en un div
            - Le añado un classname para depues poder aplicarle estilos
            - Añado un name y un id a todos los cambos y deben coincidir
            - Le añado un label y en pantalla se mostrará la información asociada al input

        3.- Creo lo estilos asociados al formulario.
            - En este caso los declaré en App.css que se cargan al iniciar el componente ppal App.jsx

        4. Defino el evento onSubmit en la etiqueta del formulario
            - Cuando se pulse el boton "Enviar" se ejecutará la funcion handleSubmit

        5.- La funcion handleSubmit obtendŕa todos los datos del formulario
            - Añado el evento y le aplico el metodo preventDefault() evitando que se regargue el formulario
            - Obtengo la información a partir del e.target.name_correspondiente.value
            - Creo un objeto con esa información y lo añado al estado usuario

        6.- La funcion handleChange irá actualizado a tiempo real la informacion que valla introduciendo

        6.- Renderizo que introduzca los datos o los muestro y el formulario
    

*/

import React, { useState } from 'react';

// Componente
export const Formulario = () => {

    // Estado
    const [usuario, setUsuario] = useState({});

    // Funcion que introduce los datos del formulario en un objeto que despues lo añade al estado
    const handleSubmit = (e) => {        
        e.preventDefault();

        let usuario = {
            nombre: e.target.nombre.value,
            apellidos: e.target.apellidos.value,
            sexo: e.target.sexo.value,
            biografia: e.target.biografia.value        
        }        
        
        setUsuario(usuario);
    }

    // Funcion que recoge los cambios que se vallan produciendo en el formulario
    const handleChange = (e) => {

        // Obtengo el campo que se está modificando
        const campo = e.target.name;

        // Callback captura el estado previo y le cambia el campo obtenido con el valor que se está introdujendo
        setUsuario(estadoPrevio => {
            return {
                ...estadoPrevio,
                [campo]: e.target.value
            }
        });
    }

    // Renderizo
    return (
        <>
            {/* Cabecera */}
            <ul className='lista_stack'>
                <li> <h1>Stack Mern: Formularios </h1> </li>        
            </ul>

            {/* Pedirá que introduzca sus datos la primera vez */}
            <div>                
                {Object.keys(usuario).length === 0 ?
                    <p>Introduzca sus datos</p> 
                    :
                    <>
                        <p>Bienvenido {usuario.nombre} {usuario.apellidos} de sexo {usuario.sexo} </p>
                        <p>Biografia: {usuario.biografia} </p>
                    </>
                }
            </div>

            {/* Formulario */}
            <form className='formulario' onSubmit={handleSubmit}>

                <div className="form-nombre">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type='text'
                        id='nombre'
                        name='nombre'
                        placeholder='Introduzca nombre'
                        onChange={handleChange}
                    />
                </div>

                <div className="form-apellidos">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input 
                        type='text'
                        id='apellidos'
                        name='apellidos'
                        placeholder='Introduzca apellidos'
                        onChange={handleChange}
                    />
                </div>

                <div className="form-sexo">
                    <label htmlFor="sexo">Sexo</label>
                    <select id='sexo' name='sexo' onChange={handleChange}>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                    </select>
                </div>

                <div className="form-biografia">
                    <label htmlFor="biografia">Biografía</label>
                    <textarea id='biografia' name='biografia' onChange={handleChange}> </textarea>
                </div>

                <input className='form-boton' type='submit' value='Enviar'/>

            </form>
        </>
    )
}
