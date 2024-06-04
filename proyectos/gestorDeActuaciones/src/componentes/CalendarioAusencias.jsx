/*
  COMPONENTE QUE MUESTRE EL CALENDARIO DE AUSENCIAS
*/

// React y react router
import React from "react";

// Elementos
import { ContenedorSubtitulo,Subtitulo } from './../elementos/ElementosDeCalendarioAusencias';

// El Componente
const CalendarioAusencias = () => {

  return (
    <>
      <ContenedorSubtitulo>
        <Subtitulo>Disponible en la versión premium</Subtitulo>                
      </ContenedorSubtitulo>
    </>
  );
}
 
export default CalendarioAusencias;