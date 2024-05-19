/*
    COMPONENTE DE LA BARRA DONDE SE INDICAN LOS ESTADOS DE LOS TECNICOS
*/

// React
import React from "react";

// Elementos
import {Barra, ParrafoDeLaBarra, Cabecera, Tecnicos, Nombres} from "../elementos/ElementosDeBarra";

// Hooks
import useTecnicosIniciaronJornada from "../hooks/useTecnicosIniciaronJornada";
import useTecnicosFinalizaronJornada from "../hooks/useTecnicosFinalizaronJornada";
import useTecnicosEnCamino from "../hooks/useTecnicosEnCamino";
import useTecnicosEnCliente from "../hooks/useTecnicosEnCliente";
import useTecnicosCitados from "../hooks/useTecnicosCitados";


// Componente
const BarraEstadosTecnicos = () => {

    // Obtengo desde los hooks
    const [tecnicosIniciaronJornada] = useTecnicosIniciaronJornada();
    const [tecnicosFinalizaronJornada] = useTecnicosFinalizaronJornada();
    const [tecnicosEnCamino] = useTecnicosEnCamino();
    const [tecnicosEnCliente] = useTecnicosEnCliente();
    const [tecnicosCitados] = useTecnicosCitados();

    console.log(tecnicosEnCamino);

    // Separon los nombres con comas y un espacio en blanco
    const nombresIniciaronJornadaSeparados = tecnicosIniciaronJornada.join(', ');
    const nombresFinalizaronJornadaSeparados = tecnicosFinalizaronJornada.join(', ');
    const nombresTecnicosEnCaminoSeparados = tecnicosEnCamino.join(', ');
    const nombresTecnicosEnClienteSeparados = tecnicosEnCliente.join(', ');
    const nombresTecnicosCitadosSeparados = tecnicosCitados.join(', ');

    return (
        
        <Barra>

            <ParrafoDeLaBarra>Estados de los tecnicos: </ParrafoDeLaBarra>

            <Cabecera>            
                <p> Iniciaron jornada: </p>
                <p> Finalizaron jornada: </p>
                <p> Citados: </p>
                <p> En camino: </p>
                <p> En cliente: </p>
                <p> De vacaciones: </p>
            </Cabecera> 

            <Tecnicos>
                <Nombres>{nombresIniciaronJornadaSeparados}</Nombres>
                <Nombres>{nombresFinalizaronJornadaSeparados}</Nombres>
                <Nombres>{nombresTecnicosCitadosSeparados}</Nombres>
                <Nombres>{nombresTecnicosEnCaminoSeparados}</Nombres>
                <Nombres>{nombresTecnicosEnClienteSeparados}</Nombres>
                <Nombres>array tecnicos</Nombres>
            </Tecnicos> 

        </Barra>        
        
     );
}
 
export default BarraEstadosTecnicos;