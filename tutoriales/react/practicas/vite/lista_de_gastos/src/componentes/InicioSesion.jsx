/*

*/

// React
import React from "react";
import { Helmet } from "react-helmet";

// Elementos
import {Header, Titulo, ContenedorHeader} from '../elementos/ElementosDeHeader';
import {Formulario, Input, ContenedorBoton, SvgCrearCuenta} from './../elementos/ElementosDeFormulario';
import Boton from "../elementos/Boton";

// Componente
const InicioSesion = () => {
    return (
      <>
          
        {/* Helmet */}
        <Helmet>
          <title>Iniciar sesión</title>
        </Helmet>

        {/* Cabecera */}
        <Header>
          <ContenedorHeader>
            <Titulo>Iniciar sesión</Titulo>
            <div>
              <Boton to = '/crear-cuenta'>Crear una cuenta</Boton>
            </div>
          </ContenedorHeader>
        </Header>

        
        {/* Formulario */}
        <Formulario>

          <SvgCrearCuenta/>

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

          <ContenedorBoton>
            {/* <Boton $primario={true} as="button" type="submit">Iniciar sesión</Boton>
              FALLA: NO MUESTRA EL ERROR EN CONSOLA Y NO ASIGNA LA PROPIEDAD DE PRIMARIO AL BOTON*/}

            <Boton primario as="button" type="submit">Iniciar sesión</Boton>
            {/* ASIGNA EL BOTON DE PRIMARIO Y MUESTRA ADVERTENCIA EN CONSOLA */}
          </ContenedorBoton>
         
        </Formulario>
      </>
    );
}
 
export default InicioSesion;
