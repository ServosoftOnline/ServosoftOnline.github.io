import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Elementos
import {Formulario, ContenedorFiltros, Input, ContenedorBoton} from '../elementos/ElementosDeFormulario';
import {ContenedorSelect, OpcionSeleccionada, Opciones, Opcion} from '../elementos/ElementosDeSelect';
import SelectZonasDeInstalacion from "./SelectZonasDeInstalacion";
import SelectTiposDeTrabajo from "./SelectTiposDeTrabajo";
import SelectStb from "./SelectStb";


const EditarActuacion = () => {

    const {codigoIncidencia} = useParams();

    // Estados
    const [linkDorus, asignarLinkDorus] = useState();
    
    const [stb, asignarStb] = useState();
    const [zonaInstalacion, asignarZonaInstalacion] = useState();
    const [tipoDeTrabajo, asignarTipoDeTrabajo] = useState();
    const [dificultad, asignarDificultad] = useState();
    const [comentariosNs, asignarComentariosNs] = useState();

    // BORRAR
    console.log('zona de instalacion: ' + zonaInstalacion);
    console.log('tipo de trabajo: ' + tipoDeTrabajo);
    console.log('STB:' + stb);


    
    return( 
        <>
            <h3>Detalles de la incidencia: {codigoIncidencia} y modificar el estado</h3>

            {/* Formulario */}
            <Formulario>

                <SelectStb                 
                    stb={stb}
                    asignarStb={asignarStb}
                />

                <SelectZonasDeInstalacion
                    zonaInstalacion={zonaInstalacion}
                    asignarZonaInstalacion={asignarZonaInstalacion}
                />

                <SelectTiposDeTrabajo               
                    tipoDeTrabajo={tipoDeTrabajo}
                    asignarTipoDeTrabajo={asignarTipoDeTrabajo}
                />

               

            </Formulario>
        </>       
    );
}
 
export default EditarActuacion;