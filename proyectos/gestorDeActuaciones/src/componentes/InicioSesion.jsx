/*
  COMPONENTE PARA INICAR SESION EN AUTHENTIFICATION DE FIRE BASE

*/

// React y react router
import React, {useContext, useEffect, useState} from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {useNavigate} from "react-router-dom";

// Componentes
import Mensaje from './Mensaje';

// Elementos
import {Formulario, ContenedorInputs, Input, ContenedorBoton, SvgIniciarSesion} from '../elementos/ElementosDeFormulario';
import Boton from "../elementos/Boton";

// Importar Contextos
import {useAuth} from '../contextos/AuthContext';
import {useRol} from '../contextos/RolContext';
import {ContextoMensaje} from "../contextos/contextoMensaje";

// Authentification de firebase
import {auth} from '../firebase/firebaseConfig';
import {signInWithEmailAndPassword } from "firebase/auth";

// Componente
const InicioSesion = () => {  

  // Estados
  const [email, establecerEmail] = useState('');
  const [password, establecerPassword] = useState('');  

  // Obtener contextos
  const {sesion} = useAuth();	 
  let {rol} = useRol();  
  const {mensajeAMostrar, rdoValidacion , cambiarMensaje, eliminarMensaje} = useContext(ContextoMensaje);

  // React router
  const navigate = useNavigate();

  // Efecto para que elimine si hubiera algun mensaje de errores o advertencias anteriores
  useEffect(() => {
    eliminarMensaje();
  },[]);

  // Efecto IMPORTANTISIMO. Cuando halla sesion y rol navega a la ruta asociada a su rol. Rol contiene justo el nombre de la ruta
  // En la primera pasada no hay sesion, el rol tarda en actualizarse. Si hay un cambio de rol se aprecia levemente el cambio de la ruta
  useEffect(() => {

    if(sesion && rol) {

      eliminarMensaje();      

      // Redirijo dependiendo de la posicion 0 del array rol
      setTimeout(() => {
        switch (rol[0]){

          case 'administrador':              
              navigate('/administrador/crear-usuario'); 
              break;

          case 'coordinador':              
              navigate('coordinador/sin-asignar'); 
              break;

          case 'tecnico':              
              navigate('tecnico/agenda-tecnico'); 
              break;

          default:
              null;
        }        
      }, 1000);
    } 
    
  },[sesion, rol]);

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

      // Iniciar sesion. Si hubiera sesion abierta navego a la ruta de su rol
      await signInWithEmailAndPassword(auth, email, password);
      cambiarMensaje('Inicio de sesión correcto', 'correcta');
      console.log('sesion abierta');
      
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

  // Si hay valicacion en cliente inicia sesion.
  const handleSubmit = (e) => {    
    e.preventDefault();   

    if(validacionEnCliente()) {
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

          <ContenedorInputs>
          
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

          </ContenedorInputs>

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