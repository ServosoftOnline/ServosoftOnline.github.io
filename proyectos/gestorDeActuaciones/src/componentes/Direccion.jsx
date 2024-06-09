/*
  MODULO DIRECCION

    - IMPORTANTE: EMPEZE A USAR EL PAQUETE XLSX PERO ESTABA EN DESUSO. LO CAMBIÉ POR EXCELJS  
    - Permite seleccionar un archivo excel, mostrarlo en una tabla y añadirlo a la base de datos si valida bien.

      - Uso el paquete exceljs para obtener un archivo excel y guardo el resultado en lo que llamo data
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

// React
import React, { useContext, useEffect, useState } from "react";

// Libreria exceljs
import ExcelJS from 'exceljs';

// Componentes
import Mensaje from "./Mensaje";

// Elementos
import { ContenedorArchivoExcel } from '../elementos/ElementosDeHeader';
import { Formulario, ResultadosImportacion, ContenedorBoton } from '../elementos/ElementosDeFormulario';
import Boton from '../elementos/Boton';

// Hooks
import useObtenerTodosLosCodigosDeIncidencias from "../hooks/useObtenerTodosLosCodigosDeIncidencias";

// Contextos
import { ContextoMensaje } from "../contextos/contextoMensaje";

// Funcion firebase
import agregaActuacion from "../firebase/agregaActuacion";

// Mi componente
const Direccion = () => {

  // Estados
  const [data, setData] = useState([]);

  // Obtengo todos los códigos de incidencias porque debo comprobar que no se encuentran ya en la base de datos
  const [todosLosCodigosdeIncidenciaDeLaBBDD] = useObtenerTodosLosCodigosDeIncidencias();

  // Importo del contexto los mensajes de erro que pueda mostrar en pantalla
  const { mensajeAMostrar, rdoValidacion, cambiarMensaje, reiniciarMensaje, eliminarMensaje } = useContext(ContextoMensaje);

  // Efecto para que si existiera un mensaje de error anterior que venga de otro componente, lo borre
  useEffect(() => {
    eliminarMensaje();
  }, []);

  // FUNCIONES LOCALES

  // Valida la cabecera importada
  // const validaCabecera = ([data]) => {

  //   const cabeceraCorrecta = [
  //     "Cod Incidencia",
  //     "Nombre",
  //     "Descripción"
  //   ];
    
  //   const cabeceraObtenida = Object.keys(data);    

  //   const esCorrecta = cabeceraCorrecta.every(propiedad =>
  //     cabeceraObtenida.includes(propiedad)
  //   );

  //   return esCorrecta;
  // }

  const validaCabecera = ([data]) => {
    
    // Almaceno la cabecera en la cte y defino la cabecera correcta
    const cabeceraObtenida = Object.keys(data);
    const cabeceraCorrecta = [ "Cod Incidencia", "Nombre", "Descripción"];

    // 1.- Que exista cabecera
    if (cabeceraObtenida.length == 0) {
      cambiarMensaje('El archivo excel a insertar no tiene cabecera', 'incorrecta');
      return false;
    }

    // 2.- Que la cabecera sea la correcta    
    const esCorrecta = cabeceraCorrecta.every(propiedad =>
      cabeceraObtenida.includes(propiedad)
    );    
    !esCorrecta && cambiarMensaje('Cabecera incorrecta. Debe ser: ' + cabeceraCorrecta, 'incorrecta');
    return esCorrecta ;
    
  };

  // Valida si existiera alguna incidencia ya en la BBDD
  const validaIncidenciasDuplicadas = () => {

    const incidenciasDuplicadasEncontradas = [];

    data.forEach((incidencia) => {
      if (todosLosCodigosdeIncidenciaDeLaBBDD.includes(incidencia['Cod Incidencia']))
        incidenciasDuplicadasEncontradas.push(incidencia['Cod Incidencia']);
    });

    return incidenciasDuplicadasEncontradas;
  }

  // Funcion handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validaCabecera(data)) {   

      const incidenciasDuplicadas = validaIncidenciasDuplicadas();

      if (incidenciasDuplicadas.length === 0) {
        cambiarMensaje('Agregando la informacion a la base de datos', 'correcta');
        agregaActuacion(data);
      } else {
        cambiarMensaje('Incidencias duplicadas: ' + incidenciasDuplicadas, 'incorrecta');
      }

    } else {
      // cambiarMensaje('Archivo excel a importar incorrecto', 'incorrecta');
      null;

    }

    reiniciarMensaje();

  }

  // Funcion que muestra en pantalla el archivo importado para comprobarlo antes de importar
  const mostrarArchivoImportado = () => {
    return (

      <table>

        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} className="cabecera">{key}</th>
            ))}
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
    )
  }

  // Funcion de la libreria ExcelJS para importar el archivo
  const handleFileUpload = async (e) => {

    console.log(e.target.files[0]);

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {

      const buffer = e.target.result;
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(buffer);

      const worksheet = workbook.worksheets[0];
      const parseData = [];

      worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) {
          parseData.push(row.values.slice(1)); // Salta el primer elemento, ya que es un índice
        } else {
          const rowData = {};
          row.eachCell((cell, colNumber) => {
            rowData[parseData[0][colNumber - 1]] = cell.value;
          });
          parseData.push(rowData);
        }
      });

      parseData.shift();
      setData(parseData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <>
      <ContenedorArchivoExcel>

        <h3>Archivo excel a importar: </h3>
        <input
          type="file"
          accept='.xlsx, .xls'
          onChange={handleFileUpload}
        />

      </ContenedorArchivoExcel>

      <Formulario onSubmit={handleSubmit}>

        <ResultadosImportacion>
          {data.length > 0 && mostrarArchivoImportado()}
        </ResultadosImportacion>

        <ContenedorBoton>
          {data.length > 0 ?
            <Boton
              $primario
              $grande
              as="button"
            >Añadir datos
            </Boton>
            :
            null
          }
        </ContenedorBoton>

        <Mensaje $validacion={rdoValidacion} mensaje={mensajeAMostrar} />

      </Formulario>
    </>
  );
}

export default Direccion;
