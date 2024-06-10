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
  const [data, setData] = useState([]);
  const [todosLosCodigosdeIncidenciaDeLaBBDD] = useObtenerTodosLosCodigosDeIncidencias();
  const { mensajeAMostrar, rdoValidacion, cambiarMensaje, reiniciarMensaje, eliminarMensaje } = useContext(ContextoMensaje);

  useEffect(() => {
    eliminarMensaje();
  }, []);

  const validaCabecera = ([data]) => {
    const cabeceraObtenida = Object.keys(data);
    const cabeceraCorrecta = ["Cod Incidencia", "Nombre", "Descripción"];

    if (cabeceraObtenida.length === 0) {
      cambiarMensaje('El archivo excel a insertar no tiene cabecera', 'incorrecta');
      return false;
    }

    const esCorrecta = cabeceraCorrecta.every(propiedad => cabeceraObtenida.includes(propiedad));
    if (!esCorrecta) {
      cambiarMensaje('Cabecera incorrecta. Debe ser: ' + cabeceraCorrecta, 'incorrecta');
    }
    return esCorrecta;
  };

  const validaIncidenciasDuplicadas = () => {
    const incidenciasDuplicadasEncontradas = [];
    data.forEach((incidencia) => {
      if (todosLosCodigosdeIncidenciaDeLaBBDD.includes(incidencia['Cod Incidencia'])) {
        incidenciasDuplicadasEncontradas.push(incidencia['Cod Incidencia']);
      }
    });
    return incidenciasDuplicadasEncontradas;
  }

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
    }
    reiniciarMensaje();
  }

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

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const buffer = e.target.result;
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(buffer);

      const worksheet = workbook.worksheets[0];
      const parseData = [];

      const headers = [];
      worksheet.getRow(1).eachCell((cell, colNumber) => {
        headers[colNumber - 1] = cell.value;
      });

      worksheet.eachRow((row, rowNumber) => {
        if (rowNumber > 1) {
          const rowData = {};
          row.eachCell((cell, colNumber) => {
            rowData[headers[colNumber - 1]] = cell.value;
          });
          parseData.push(rowData);
        }
      });

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
