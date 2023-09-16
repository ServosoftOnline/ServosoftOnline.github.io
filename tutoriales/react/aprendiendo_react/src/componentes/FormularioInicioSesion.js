/*
    FORMULARIO:
        - Tendra en cuenta dos estado.
            - Estado usuario. Por defecto vacio
            - Estado password. igual valor por defecto que el anterior
            - Cuando introduzcamos el usuario por cualquier input cambiará el estado y mostrará lo introducido
*/
import React, {useState} from 'react';

// Contiene como propiedad la funcion cambiarEstadoSesion
const FormularioInicioSesion = (props) => {
    
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');
    
    // Cambiará el estado dependiendo del nombre del formulario
    const onChange = (e) => {
        if(e.target.name === "usuario"){
            cambiarUsuario(e.target.value);
        } else if(e.target.name === "password"){
            cambiarPassword(e.target.value);
        }
    }

    // Cuando se haga el submit
    const onSubmit = (e) => {
        // Altero el funcionamiento del formulario para que no envie datos
        e.preventDefault();
        // valido
        if (usuario === 'oscar' && password === '1234') {
            // cambio el estado de la sesion a correcto
            props.cambiarEstadoSesion(true);
        } else {
            //Reinicamos los datos del formulario
            alert('Datos incorrectos');
            cambiarUsuario('');
            cambiarPassword('');
        }
    }

    
    return (
        
        <form action='' onSubmit={onSubmit}>
            
            <div>
                <label htmlFor='usuario'>Usuario</label>
                <input
                    type = "text"
                    name = "usuario"
                    id = "usuario"
                    value = {usuario}
                    onChange={(e) => {onChange(e)}}
                />
            </div>
            <div>
                <label htmlFor='password'>Contraseña</label>
                <input
                    type = "password"
                    name = "password"
                    id = "password"
                    value = {password}
                    onChange={(e) => {onChange(e)}}
                />
            </div>

            {/* 
            Así trabajaríamos con otros tipos de elementos del formulario
            <div>
                <input type="checkbox" name = "" id = "" checked = "true" onChange={onChange} />
            </div> 
            */}

            <button type = "submit">Iniciar sesión</button>
        </form>

    );
}
 
export default FormularioInicioSesion;
