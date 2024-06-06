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
import React, {useState, useContext} from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Formulario, ContenedorInputs, Input, ContenedorBoton, ContenedorFiltros} from '../elementos/ElementosDeFormulario';
import Boton from "../elementos/Boton";

// Componentes
import Mensaje from "./Mensaje";
import SelectRoles from "./SelectRoles";

// Contexto
import {ContextoMensaje} from '../contextos/contextoMensaje';

// Authentificaion de firebase
import {auth} from './../firebase/firebaseConfig';
import {createUserWithEmailAndPassword} from "firebase/auth";

// Firestore de firebase
import {db} from './../firebase/firebaseConfig'
import { collection, addDoc } from "firebase/firestore";


// El Componente
const CrearUsuario = () => {

  // Estados
  const [idRol, establecerIdRol] = useState('Seleccione rol');
  const [nombreUsuario, establecerNombre] = useState('');  
  const [email,   establecerEmail] = useState('');
  const [password, establecerPassword] = useState('');
  const [password2, establecerPassword2] = useState('');
  const {mensajeAMostrar, rdoValidacion , cambiarMensaje, reiniciarMensaje} = useContext(ContextoMensaje);  

  // Funciones
  const validacionCorrecta = () => {
    
    // 1.- Que no tengo ningún campo vacío
    if(nombreUsuario ==='' || email==='' || password==='' || password2==='') {
      cambiarMensaje('Debe rellenar todos los datos', 'incorrecta');
      return false;
    }

    // 2.- Que halla seleccionado un rol
    if(idRol === 'Seleccione rol') {
      cambiarMensaje('Debe seleccionar un rol', 'incorrecta');
      return false;
    }
    
    // 3.- Que sea un correo electronico segun esta expresión regular
    const expresionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if ((!expresionCorreo.test(email))) {
      cambiarMensaje('Introduzca un correo electrónico válido', 'incorrecta');
      return false;
    };

    // 4.- Que ambos passwords sean iguales
    if(password!==password2){
      cambiarMensaje('Contraseña y repetir contraseña deben ser iguales', 'incorrecta');
      return false;
    }

    return true;
  }

  const añadirUsuario = async () => {    
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const idUsuarioCreado = userCredential.user.uid;
      cambiarMensaje('Usuario creado correctamente. Puede crear más si lo desea', 'correcta');

      // Reestablezco valores
      reiniciarMensaje();
      establecerEmail('');
      establecerPassword('');
      establecerPassword2('');
      establecerNombre('');
      establecerIdRol('Seleccione rol');

      // Crear la coleccion de roles                   
      añadirRol(idUsuarioCreado);

    } catch (error) {

      // Validación en el servidor. Codigos en: https://firebase.google.com/docs/auth/admin/errors?hl=es
      console.log('error devuelto de firestore: ' + error.code);
      switch(error.code){

        case 'auth/weak-password':
          cambiarMensaje('La contraseña debe tener al menos 6 carácteres', 'incorrecta');
          break;

        case 'auth/email-already-in-use':
          cambiarMensaje('Ya existe una cuenta con el correo electrónico proporcionado', 'incorrecta');
          break;

        case 'auth/invalid-email':
          cambiarMensaje('El correo electrónico no es válido', 'incorrecta');
          break;

        default:
          cambiarMensaje('Hubo un error al intentar crear la cuenta', 'incorrecta');
          break;
      }
    }

  }

  const añadirRol = async (idUsuarioCreado) => {
    
    try {
        await addDoc(collection(db, 'roles'), {
          idUsuario: idUsuarioCreado,
          nombre: nombreUsuario,
          idRol: idRol
        });        

    } catch (error) {
      console.log('Error al añadir en la coleccion roles');
      console.log(error);
    }

  }

  const handleChange = (e) => {    
    
    // Dependidendo del nombre del input ejecutaré la funcion que cambia su respectivo estado
    switch(e.target.name){
      case 'nombre':
        establecerNombre(e.target.value);
        break;

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validacionCorrecta()) {
      añadirUsuario();      
    }
  }

  return (
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Crear cuenta</title>
        </Helmet>
                    
        {/* Formulario */}
        <Formulario onSubmit={handleSubmit}>  

          <ContenedorFiltros>
            <SelectRoles
              idRol={idRol}
              establecerIdRol={establecerIdRol}
            />
          </ContenedorFiltros>

          <ContenedorInputs>

            <Input 
              type="nombre"
              name="nombre"
              placeholder="Nombre completo"
              value={nombreUsuario}
              onChange={handleChange}
            />      

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

          </ContenedorInputs>

          <ContenedorBoton>
            <Boton $primario $grande as="button" type="submit">Crear usuario</Boton>
          </ContenedorBoton>
          
        </Formulario>
        <Mensaje $validacion={rdoValidacion} mensaje={mensajeAMostrar}/>        

      </HelmetProvider>
    </>
  );
}
 
export default CrearUsuario;