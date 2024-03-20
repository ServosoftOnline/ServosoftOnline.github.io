/*
  COMPONENTE PARA INICAR SESION EN AUTHENTIFICATION DE FIRE BASE

*/

// React y react router
import React, {useState} from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import { useNavigate } from "react-router-dom";


// Elementos
import {Formulario, Input, ContenedorBoton, SvgIniciarSesion} from './../elementos/ElementosDeFormulario';
import Boton from "../elementos/Boton";

// Authentification de firebase
// import {auth} from './../firebase/firebaseConfig';
// import {signInWithEmailAndPassword } from "firebase/auth";


// Componente
const InicioSesion = () => {

  // Estados
  const [email, establecerEmail] = useState('');
  const [password, establecerPassword] = useState('');    

  // React router
  const navigate = useNavigate();

  // Funciones
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

  const handleSubmit = async (e) => {    
    e.preventDefault();
    
    // VALIDACION EN CLIENTE
    // 1.- Que no tengo ningún campo vacío
    if(email==='' || password==='') {
      cambiarMensaje('Debe rellenar todos los datos', 'incorrecta');
      return;
    }
    
    // 2.- Que sea un correo electronico segun esta expresión regular
    const expresionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if ((!expresionCorreo.test(email))) {
      cambiarMensaje('Introduzca correo electrónico válido', 'incorrecta'); 
      return;
    };

    /* 
    // Si no se produjo ningun return anterior, inicio sesión en authentification de firebase.
    try {
      // Si se añade bien el usuario redirijo hacia la raiz donde se pueden ya añadir gastos
      await signInWithEmailAndPassword(auth, email, password);
      cambiarMensaje('Inicio de sesión correcto', 'correcta');
      console.log('sesion abierta');
      reiniciarMensaje();
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
    */
    
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
            <Boton $primario as="button" type="submit">Iniciar sesión</Boton>
          </ContenedorBoton>
        
        </Formulario>

        
      </HelmetProvider>
    </>
  );
}

export default InicioSesion;