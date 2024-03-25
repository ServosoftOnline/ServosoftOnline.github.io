/*
  COMPONENTE PARA INICAR SESION EN AUTHENTIFICATION DE FIRE BASE

*/

// React y react router
import React, {useContext, useState} from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import { useNavigate } from "react-router-dom";

// Componentes
import Mensaje from './Mensaje';

// Elementos
import {Formulario, Input, ContenedorBoton, SvgIniciarSesion} from './../elementos/ElementosDeFormulario';
import Boton from "../elementos/Boton";

// Contexto
import { ContextoMensaje } from "../contextos/contextoMensaje";

// Authentification de firebase
import {auth} from './../firebase/firebaseConfig';
import {signInWithEmailAndPassword } from "firebase/auth";

// Hooks
import useObtenerRolDeUnUsuario from "../hooks/useObtenerRolDeUnUsuario";

// Componente
const InicioSesion = () => {

  // Estados
  const [email, establecerEmail] = useState('');
  const [password, establecerPassword] = useState('');
  const {mensajeAMostrar, rdoValidacion , cambiarMensaje, reiniciarMensaje} = useContext(ContextoMensaje);

  // React router
  const navigate = useNavigate();

  // Funciones
  const validacionEnCliente = () => {
    
    // 1.- Que no tengo ningún campo vacío
    if(email==='' || password==='') {
      cambiarMensaje('Debe rellenar todos los datos', 'incorrecta');
      return false;
    }
    
    // 2.- Que sea un correo electronico segun esta expresión regular
    const expresionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if ((!expresionCorreo.test(email))) {
      cambiarMensaje('Introduzca correo electrónico válido', 'incorrecta'); 
      return false;
    };

    return true;
  }

  const iniciaSesion = async () => {

    try {
      // Inicio la sesion y obtengo su id de usuario
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idUsuarioIniciado = userCredential.user.uid;
      cambiarMensaje('Inicio de sesión correcto', 'correcta');
      console.log('sesion abierta por: ' + idUsuarioIniciado);
      reiniciarMensaje();

      // Obtengo su rol desde la base de datos
      const rolObtenido = useObtenerRolDeUnUsuario(idUsuarioIniciado);
      console.log('Rol obtenido: ' + rolObtenido);

      // Redirigo dependiendo de su rol
      setTimeout(() => {
        navigate('/');
      }, 5000);      

    } catch (error) {

      // VALIDACION EN SERVIDOR.
      console.log('error devuelto de firestore: ' + error.code);
      switch(error.code){
        case 'auth/invalid-credential':
          cambiarMensaje('Correo no registrado o error en la contraseña', 'incorrecta');  
          break;
          
        default:
          cambiarMensaje('Hubo un error en el inicio de sesión', 'incorrecta');
          break;
      }
    } 
  }

  const handleChange = (e) => {    
  
    // Dependidendo del nombre del input ejecutaré la funcion que cambia su respectivo estado
    switch(e.target.name) {
      case 'email':
        establecerEmail(e.target.value);
        break;

      case 'password':
        establecerPassword(e.target.value);
        break;  
        
      default:
        break;
    }
  }

  const handleSubmit = (e) => {    
    e.preventDefault();
    if(validacionEnCliente())  {
      iniciaSesion();
    }
  }

  return (
    <>
      <HelmetProvider>
        
        {/* Helmet */}
        <Helmet>
          <title>Iniciar sesión</title>
        </Helmet>
        
        {/* Formulario */}
        <Formulario onSubmit={handleSubmit}>
          
          <SvgIniciarSesion/>
          
          <Input 
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={handleChange}
          />

          <Input 
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={handleChange}
          />

          <ContenedorBoton>
            <Boton
              $primario
              $grande
              as="button" 
              type="submit"
              >Iniciar sesión
            </Boton>
          </ContenedorBoton>
        
        </Formulario>
        <Mensaje $validacion={rdoValidacion} mensaje={mensajeAMostrar}/>

        
      </HelmetProvider>
    </>
  );
}

export default InicioSesion;