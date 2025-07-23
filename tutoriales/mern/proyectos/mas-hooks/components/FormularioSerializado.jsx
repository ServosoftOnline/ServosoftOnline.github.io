/*
    FORMULARIO USANDO EL HOOK PERSONALIZADO useForm:

        - Permite ahorrar tener que hacer un e.target por cada campo
        - Para ello utilizo un custom hook que hace una serialización de los campos del formulario
        - Que puedo reutilizar en mi proyecto        

*/

import React from 'react';
import { useForm } from '../hooks/useForm';

export const FormularioSerializado = () => {

    // Obtento desde el hook personalizado el estado y las funciones
    const {formulario, handleSubmit,handleChange} = useForm({});
    
    // Renderizo
    return (
        <>
            <div>
                <h2>Formulario para añadir datos de un curso mediante el custom hook useForm</h2>
                <h2>que obtiene toda la información de los campos al mismo tiempo</h2>
                <pre>Datos obtenidos del formulario: {JSON.stringify(formulario)}</pre>
            </div>
            
            {/* Formulario */}
            <form className='formulario' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='titulo'>Titulo del curso: </label>
                    <input type='text' name='titulo' id='titulo' onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor='anio'>Año de publicación: </label>
                    <input type='number' name='anio' id='anio' onChange={handleChange}/>
                </div>

                <div className='descripcion'>
                    <label htmlFor='descripcion'>Descripción: </label>
                    <textarea name='descripcion' id='descripcion' onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor='autor'>Autor: </label>
                    <input type='text' name='autor' id='autor' onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' name='email' id='email' onChange={handleChange}/>
                </div>

                <div>
                    <label></label>
                    <input type='submit' value='Enviar'/>
                </div>

            </form>
        </>
    )
}
