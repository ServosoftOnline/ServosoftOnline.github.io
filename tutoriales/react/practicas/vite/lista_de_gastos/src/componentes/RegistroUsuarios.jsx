/*
  PAGINA DE REGISTRO DE USUARIOS
    - Importo:
      - react y Helmet

      - Los elementos:
        - Todos los elementos del header
        - Todos los elementos del formulario

        - El boton
          - Por defecto es un componente Link de react router
          - Se le pueden pasar propiedades primario, conIcono e iconoGrande
          - Lo usaré como link en la cabecera hacia la ruta /iniciar-sesion
          - Lo usaré como boton de submit del formulario
            - Le indico como propiedad que es primario
            - Está definido como Link. Para cambiarle su funcionamiento por defecto debo indicarle que lo usaré como button
    
    - Creo el componente
      - Devuelvo un fragmento que contiene:
        - El helmet
        - La cabecera que contiene el titulo y el link hacia iniciar sesion

*/

// React
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorHeader} from '../elementos/ElementosDeHeader';
import {Formulario, Input, ContenedorBoton, SvgIniciarSesion} from './../elementos/ElementosDeFormulario';
import Boton from "../elementos/Boton";

// Componente
const RegistroUsuarios = () => {
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
            <Formulario>

              <SvgIniciarSesion/>

              <Input 
                type="email"
                name="email"
                placeholder="Correo electrónico"
              />

              <Input 
                type="password"
                name="password"
                placeholder="Contraseña"
              />

              <Input 
                type="password"
                name="password2"
                placeholder="Repetir contraseña"              
              />

              <ContenedorBoton>
                <Boton primario as="button" type="submit">Crear cuenta</Boton>
              </ContenedorBoton>
              
            </Formulario>
          </HelmetProvider>
        </>
      );
}
 
export default RegistroUsuarios;