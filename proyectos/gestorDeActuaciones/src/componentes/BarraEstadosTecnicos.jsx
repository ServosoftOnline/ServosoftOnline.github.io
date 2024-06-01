/*
    COMPONENTE DE LA BARRA DONDE SE INDICAN LOS ESTADOS DE LOS TECNICOS
        - Se mostrará de forma diferente para pantallas moviles
*/

// React
import React from "react";

// Elementos
import  {Barra, ParrafoDeLaBarra, Cabecera, Tecnicos, Nombres,
        ContenedorEstadosTecnicosEnMoviles} from "../elementos/ElementosDeBarra";

// Hooks
import useTecnicosIniciaronJornada from "../hooks/useTecnicosIniciaronJornada";
import useTecnicosFinalizaronJornada from "../hooks/useTecnicosFinalizaronJornada";
import useTecnicosEnCamino from "../hooks/useTecnicosEnCamino";
import useTecnicosEnCliente from "../hooks/useTecnicosEnCliente";
import useTecnicosCitados from "../hooks/useTecnicosCitados";

// funciones
import anchoDePantalla from "../funciones/anchoDePantalla";

// Componente
const BarraEstadosTecnicos = () => {

    // Obtengo desde los hooks
    const [tecnicosIniciaronJornada] = useTecnicosIniciaronJornada();
    const [tecnicosEnCamino] = useTecnicosEnCamino();
    const [tecnicosEnCliente] = useTecnicosEnCliente();
    const [tecnicosCitados] = useTecnicosCitados();       
    const [tecnicosFinalizaronJornada] = useTecnicosFinalizaronJornada();

    // Separon los nombres con comas y un espacio en blanco
    const nombresIniciaronJornadaSeparados = tecnicosIniciaronJornada.join(', ');
    const nombresTecnicosEnCaminoSeparados = tecnicosEnCamino.join(', ');
    const nombresTecnicosEnClienteSeparados = tecnicosEnCliente.join(', ');
    const nombresTecnicosCitadosSeparados = tecnicosCitados.join(', ');
    const nombresFinalizaronJornadaSeparados = tecnicosFinalizaronJornada.join(', ');

    // Obtengo la resolucion de la pantalla para ver si aplico diseño responsive para moviles
    const {anchoActual, anchoMaximo} = anchoDePantalla();

    return (
        
        // La barra y el parafo de la barra los muestro siempre
        // El resto lo muestro dependiendo de la resolucion de la pantalla

        <Barra>

            <ParrafoDeLaBarra>Estados de los tecnicos: </ParrafoDeLaBarra>

            {/* Muestro la barra para dispositivos con mayor resolución que un movil */}            
            {anchoActual > anchoMaximo &&
                <>

                    <Cabecera>            
                        <p> Iniciaron jornada: </p>
                        <p> En camino: </p>
                        <p> En cliente: </p>
                        <p> Otras gestiones: </p>
                        <p> Finalizaron jornada: </p>                
                    </Cabecera> 

                    <Tecnicos>
                        <Nombres>{nombresIniciaronJornadaSeparados}</Nombres>
                        <Nombres>{nombresTecnicosEnCaminoSeparados}</Nombres>
                        <Nombres>{nombresTecnicosEnClienteSeparados}</Nombres>
                        <Nombres>{nombresTecnicosCitadosSeparados}</Nombres>
                        <Nombres>{nombresFinalizaronJornadaSeparados}</Nombres>                
                    </Tecnicos> 
                </>            
            }

            {/* Muestro la barra para moviles */}
            {anchoActual <= anchoMaximo &&

                <ContenedorEstadosTecnicosEnMoviles>
                    <div>
                        <label htmlFor="iniciaronJornada">Iniciaron jornada:</label>
                        <p>{nombresIniciaronJornadaSeparados.length > 0 ? nombresIniciaronJornadaSeparados : 'Nadie' }</p> 
                    </div>

                    <div>
                        <label htmlFor="enCamino">En camino:</label>
                        <p>{nombresTecnicosEnCaminoSeparados.length > 0 ? nombresTecnicosEnCaminoSeparados: 'Nadie' }</p> 
                    </div>

                    <div>
                        <label htmlFor="enCliente">En cliente:</label>
                        <p>{nombresTecnicosEnClienteSeparados.length > 0 ? nombresTecnicosEnClienteSeparados : 'Nadie' }</p> 
                    </div>

                    <div>
                        <label htmlFor="otrasGestiones">Otras gestiones:</label>
                        <p>{nombresTecnicosCitadosSeparados.length > 0 ? nombresTecnicosCitadosSeparados : 'Nadie'}</p> 
                    </div>

                    <div>
                        <label htmlFor="finalizaronJornada">Finalizaron jornada:</label>
                        <p>{nombresFinalizaronJornadaSeparados.length > 0 ? nombresFinalizaronJornadaSeparados : 'Nadie' }</p> 
                    </div>
                    
                </ContenedorEstadosTecnicosEnMoviles>
            }

        </Barra>        
        
     );
}
 
export default BarraEstadosTecnicos;