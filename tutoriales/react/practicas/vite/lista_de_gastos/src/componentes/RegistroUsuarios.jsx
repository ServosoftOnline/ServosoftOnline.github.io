/*
  PAGINA DE REGISTRO DE USUARIOS
    - Importo react y Helmet, los elementos necesarios y las funciones necesarias para autentificación de usarios de firebase
    
    - Creo el componente
      - Creo los estados.
        - Los estados serán los valores de los values del formulario
        - Las funciones serán llamadas en la funcion handleChange

      - Creo las funciones:
        - handleChange.
          - Recoge los cambios que se vallan producinedo en los inputs del formulario a través de su nombre
          - Llamará a las funciones que cambian cada unos de los estados y los modificará
          
        - handleSubmit
          - Se ejecutará cuando se haga el onSubmit del formulario
          - Valido en cliente
          - Si pasa la validación del cliente tratará de insertar de forma asíncrona el usuario en Authentification de firebase
          - Si lo consigue redirecciona la app a la carpeta raiz donde se podrán ya insertar gastos
          - Si no lo consigue recogo el error devuelto por authentification de firebase y muestro el error

      - Devuelvo
        - Usando los elementos ...
        - La definición del helmet
        - La cabecera que contiene el titulo y el botón como un enlace
        - El formulario
          - Tendrá el la imagen svg
          - Los inputs
          - El botón que actuará como boton, alterando su función inicial que era como enlace

*/

// React y react router
import React, {useState} from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import { useNavigate } from "react-router-dom";

// Elementos
import {Header, Titulo, ContenedorHeader} from '../elementos/ElementosDeHeader';
import {Formulario, Input, ContenedorBoton, SvgCrearCuenta} from './../elementos/ElementosDeFormulario';
import Boton from "../elementos/Boton";


// Authentificaion de firebase
import {auth} from './../firebase/firebaseConfig';
import {createUserWithEmailAndPassword} from "firebase/auth";

// Componentes
import Alerta from "./Alerta";
import Mensaje from './Mensaje';


// Componente
const RegistroUsuarios = () => {

  // Estados
  const [email, establecerEmail] = useState('');
  const [password, establecerPassword] = useState('');
  const [password2, establecerPassword2] = useState('');
  const [mensaje, cambiarMensaje] = useState('Probando');
  const navigate = useNavigate();

  // Funciones
  const handleChange = (e) => {
    
    // Dependidendo del nombre del input ejecutaré la funcion que cambia su respectivo estado
    switch(e.target.name){
      case 'email':
        establecerEmail(e.target.value);
        break;

      case 'password':
        establecerPassword(e.target.value);
        break;

      case 'password2':
        establecerPassword2(e.target.value);
        break;

      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación en el cliente
    // 1.- Que no tengo ningún campo vacío
    if(email==='' || password==='' || password2==='') {
      console.log('Debe rellenar todos los datos');
      cambiarMensaje('Debe rellenar todos los datos');
      return;
    }
    
    // 2.- Que sea un correo electronico segun esta expresión regular
    const expresionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if ((!expresionCorreo.test(email))) {
      console.log('Introduzca un correo electrónico válido');
      cambiarMensaje('Introduzca un correo electrónico válido');
      return;
    };

    // 3.- Que ambos passwords sean iguales
    if(password!==password2){
      console.log('Las constraseñas introducidas en contraseña y repetir contraeña deben ser iguales');
      cambiarMensaje('Las constraseñas introducidas en contraseña y repetir contraeña deben ser iguales');
      return;
    }

    // Si no se produjo ningun return anterior, creo el usuario en authentification de firebase.
    try {
        // Si se añade bien el usuario redirijo hacia la raiz donde se pueden ya añadir gastos
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('Usuario creado correctamente');
        cambiarMensaje('Usuario creado correctamente');
        navigate('/');

    } catch (error) {

      // Validación en el servidor. Codigos en: https://firebase.google.com/docs/auth/admin/errors?hl=es
      let mensajeDeError;
      console.log('error devuelto: ' + error.code);
      switch(error.code){

        case 'auth/weak-password':
          mensajeDeError = 'La contraseña tiene que ser de al menos 6 caracteres.';
          cambiarMensaje('La contraseña tiene que ser de al menos 6 caracteres.');
          break;

        case 'auth/email-already-in-use':
          mensajeDeError = 'Ya existe una cuenta con el correo electrónico proporcionado.';
          cambiarMensaje('Ya existe una cuenta con el correo electrónico proporcionado.');
          break;

        case 'auth/invalid-email':
          mensajeDeError = 'El correo electrónico no es válido.';
          cambiarMensaje('El correo electrónico no es válido.');
          break;

        default:
          mensajeDeError = 'Hubo un error al intentar crear la cuenta.';
          cambiarMensaje('Hubo un error al intentar crear la cuenta.');
          break;

      }

    }
  }

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Crear cuenta</title>
        </Helmet>

        {/* Cabecera */}
        <Header>
          <ContenedorHeader>
            <Titulo>Crear cuenta</Titulo>
            <div>
              <Boton to = '/iniciar-sesion'>Iniciar sesión</Boton>
            </div>
          </ContenedorHeader>
        </Header>            
                    
        {/* Formulario */}
        <Formulario onSubmit={handleSubmit}>
          <SvgCrearCuenta/>

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

          <Input 
            type="password"
            name="password2"
            placeholder="Repetir contraseña"
            value={password2}
            onChange={handleChange}              
          />

          <ContenedorBoton>
            <Boton $primario as="button" type="submit">Crear cuenta</Boton>
          </ContenedorBoton>
          
        </Formulario>
        {/* <Alerta $tipo="error" mensaje="Hola Oscar"/> */}
        <Mensaje $tipo="error" mensaje={mensaje}/>
        

      </HelmetProvider>
    </>
  );
}
 
export default RegistroUsuarios;