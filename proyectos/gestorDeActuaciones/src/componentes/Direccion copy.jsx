/*
  MODULO DIRECCION

    - IMPORTANTE: ME COSTÓ MUCHÍSIMO TIEMPO FINALIZAR ESTE COMPONENTE. EL PAQUETE XLSX ESTÁ EN DESUSO. DEBO ENCONTRAR PAQUETE MAS ACTUALIZADA
  
    - Permite seleccionar un archivo excel, mostrarlo en una tabla y añadirlo a la base de datos si valida bien.
      - Uso el paquete xlsx para obtener un archivo excel y guardo el resultado en lo que llamo data
      - Al cargarlo muestro en pantalla una tabla con el contenido del archivo importado
      - Se mostrará el boton de Añadir datos

      - Cuando se pulse la funcion handleSubmit se encarga de la validación:
        - Si la cabecera es valida
        - y el array incidenciasDuplicadas que contiene las incidencias duplicadas no contiene ningun elemento
        - añado en la base de datos

    - Validaría lo siguiente:

      - Que la cabecera sea la indicada en cabecera correcta
        - Declaro en el array cabeceraCorrecta como debe ser la cabecera.
        - En cabeceraObtenida creo un array mediante la funcion keys
        - Las comparo con la funcion every
        - esCorrecta contendrá true o false dependiendo del resultado de every y lo devuelvo

      - Que la base de datos no contiene algun codigo de incidencia que se quiera añadir
        - El hook useObtenerTodosLosCodigosDeIncidencias contiene un array con todos los códigos de incidencia de la BBDD
        - Recorro la data y voy viendo mediante la funcion includes si la incidencia que estoy comprobando se encuentra en el array devuelto por el hook
    
*/

// React y react router
import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

// libreria xlsx
import * as XLSX from 'xlsx';

// Componentes
import Mensaje from "./Mensaje";

// Elementos
import {ContenedorDireccion, ContenedorArchivoExcel, Formulario, ResultadosImportacion, ContenedorBoton } from './../elementos/ElementosDeDireccion'
import Boton from '../elementos/Boton';

// Hooks
import useObtenerTodosLosCodigosDeIncidencias from "../hooks/useObtenerTodosLosCodigosDeIncidencias";

// Contextos
import { ContextoMensaje } from "../contextos/contextoMensaje";

// Funciones de firebase
import agregaActuacion from "../firebase/agregaActuacion";

// Otras funciones
import anchoDePantalla from './../funciones/anchoDePantalla';

// El Componente
const Direccion = () => {

  // Estados
  const [data, setData] = useState([]);    
  
  // Navigate
  const navigate = useNavigate();

  // LLamadas a los hooks  
  const [todosLosCodigosdeIncidenciaDeLaBBDD] = useObtenerTodosLosCodigosDeIncidencias();

  // LLamadas a los contextos
  const {mensajeAMostrar, rdoValidacion , cambiarMensaje, reiniciarMensaje, eliminarMensaje} = useContext(ContextoMensaje);

  // Obtengo el ancho de la pantalla
  const {anchoActual, anchoMaximoMovilVertical} = anchoDePantalla();

  // Efecto para eliminar un mensaje si este existirera en el contecto
  useEffect(() => {
    eliminarMensaje();    
  },[]);
  
  // Funciones
  const validaCabecera = ([data]) => { 

    // Objeto que contiene como debe ser la cabecera a insertar   
    const cabeceraCorrecta = [
      "Cod Incidencia",      
      "Nombre",
      "Descripción"      
    ];

    // Almaceno la cabecera obtenida en la cte
    const cabeceraObtenida = Object.keys(data);    

    // Comprobar si todas las propiedades de cabeceraObtenida están en cabeceraCorrecta
    const esCorrecta = cabeceraCorrecta.every(propiedad =>
      cabeceraObtenida.includes(propiedad)
    );

    // Escorrecta contendrá true o false
    return esCorrecta;
  }

  const validaIncidenciasDuplicadas= () => {    
    
    const incidenciasDuplicadasEncontradas = [];
    data.forEach((incidencia) => {      
      if(todosLosCodigosdeIncidenciaDeLaBBDD.includes(incidencia['Cod Incidencia']))
        incidenciasDuplicadasEncontradas.push(incidencia['Cod Incidencia']);
    });

    return incidenciasDuplicadasEncontradas;
  }  
  
  const handleSubmit = (e) => {
    e.preventDefault();     

    // Para agregar las incidencias la cabecera debe ser válida y que no exista ninguna incidencia duplicada
    if (validaCabecera(data)) {      
      const incidenciasDuplicadas = validaIncidenciasDuplicadas();      

      if (incidenciasDuplicadas.length === 0) {
        cambiarMensaje('Agregando la informacion a la base de datos', 'correcta');             
        agregaActuacion(data);   
        navigate('/coordinador/sin-asignar');        
        
      } else {
        cambiarMensaje ('Incidencias duplicadas: ' + incidenciasDuplicadas, 'incorrecta');        
      }

    } else {      
      cambiarMensaje('Archivo excel a importar incorrecto', 'incorrecta');      
    }

    reiniciarMensaje();    
  }
  
  // Obtengo el fichero y creo la data
  const handleFileUpload = (e) => {

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];    

      // Añadir la opción defval para incluir celdas vacías como cadenas vacías
      const parseData = XLSX.utils.sheet_to_json(sheet, { defval: '' });           
      setData(parseData);
    };

  };

  return (

    <ContenedorDireccion>  

      <ContenedorArchivoExcel>

        <h3>{anchoActual >= anchoMaximoMovilVertical ? 'Archivo excel a importar:' : 'Archivo:'} </h3>
        
        <input
          type="file"
          accept='.xlsx, xls'
          onChange={handleFileUpload} 
        />

      </ContenedorArchivoExcel>

      {/* Formulario */}
      <Formulario onSubmit={handleSubmit}>

        {/* Si hay datos muestro los resultados en una tabla */}
        <ResultadosImportacion>

          {data.length > 0 &&
            <table>

              <thead>
                <tr>
                  {
                    Object.keys(data[0]).map((key) => (
                      <th key={key} className="cabecera">{key}</th>
                    ))
                  }
                </tr>
              </thead>

              <tbody>
                {data.map((row, index) => (                    
                  <tr key={index}>
                    {Object.values(row).map((value, index) => (                        
                      <td key={index}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
          }            
          
        </ResultadosImportacion>

        {/* Si hay datos muestro el botón de añadir datos */}          
        <ContenedorBoton>
          {data.length > 0 &&
            <Boton 
              $primario
              $grande
              as="button"              
              >Añadir datos
            </Boton>            
          }
        </ContenedorBoton>

        {/* Mensaje con el resultado de la validacion. Se mostrará en verde u rojo */}
        <Mensaje $validacion={rdoValidacion} mensaje={mensajeAMostrar}/>

      </Formulario>      
              
    </ContenedorDireccion>
  );
}
 
export default Direccion;