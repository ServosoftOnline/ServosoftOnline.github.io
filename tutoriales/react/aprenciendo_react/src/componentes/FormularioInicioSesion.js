/*
    FORMULARIO:
        - Tendra en cuenta dos estado.
            - Estado usuario. Por defecto vacio
            - Estado password. igual valor por defecto que el anterior
            - Cuando introduzcamos el usuario por cualquier input cambiará el estado y mostrará lo introducido
*/
import React, {useState} from 'react';
// CSS
import './FormularioInicioSesion.css';


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
        if (usuario === 'Oscar' && password === '1234') {
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
                
        <form className='formulario' action = '' onSubmit={onSubmit}>
            
            <div>
                <h2>No ha iniciado sesión.</h2>
                <label className = 'label' htmlFor='usuario'>Usuario</label>
                <input
                    className='input'
                    type = "text"
                    name = "usuario"
                    id = "usuario"
                    value = {usuario}
                    onChange={(e) => {onChange(e)}}
                />
            </div>
            <div>
                <label className = 'label' htmlFor='password'>Contraseña</label>
                <input
                    className='input'
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

            <button className = 'boton' type = "submit">Iniciar sesión</button>
            <div>
                <p>Usuario: Oscar</p>
                <p>Contraseña: 1234</p>
            </div>
        </form>
        
    );
}
 
export default FormularioInicioSesion;
