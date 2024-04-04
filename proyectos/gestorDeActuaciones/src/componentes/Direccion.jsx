/*
  MODULO DIRECCION
    - Permite seleccionar un archivo excel, mostrarlo en una tabla y al confirmar los datos añadirlo en la coleccion de incidencias
  
*/

// React y react router
import React, {useState} from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// libreria xlsx
import * as XLSX from 'xlsx';

// Elementos
import {Header, Titulo} from '../elementos/ElementosDeHeader';
import {Formulario, ContenedorArchivoExcel, ResultadosImportacion, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import BtnRegresar from "../elementos/BtnRegresar";
import Boton from './../elementos/Boton';

// Hook
import useObtenerNombreDeUnUsuario from "../hooks/useObtenerNombreDeUnUsuario";

// Funcion para añadir en la base de datos
import agregarIncidencias from "../firebase/agregarIncidencias";

// El Componente
const Direccion = () => {

  // Estado
  const [data, setData] = useState([]);
  const [nombre] = useObtenerNombreDeUnUsuario();

  // Funciones
  // Valido que el fichero contiene los campos que necesito.
  // Para hacer pruebas lo devuelvo true. Despues validaré
  const validacionCorrecta = () => {
    console.log('Validando');
    // Validar que las cabeceras del archivo excel sean las correctas
    // Validar que no exista ya en la base de datos una incidencia con ese código
    return true;
  }

  // Obtengo los datos del formulario. Si valida llamo a la funcion que agrega la incidencia en la bbdd y le paso la data entera
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Obtengo los datos del formulario');
    if (validacionCorrecta()) agregarIncidencias(data);
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
    <>      
      <HelmetProvider>

        {/* Helmet */}
        <Helmet>
          <title>Dirección</title>
        </Helmet>

        {/* Cabecera */}
        <Header>
          <Titulo>Usuario: {nombre} (Dirección)</Titulo>
          <ContenedorArchivoExcel>
            <h3>Archivo excel a importar: </h3>
            <input
              type="file"
              accept='.xlsx, xls'
              onChange={handleFileUpload} 
            />
          </ContenedorArchivoExcel>
          <BtnRegresar ruta='/coordinador' />
        </Header>

        <Formulario onSubmit={handleSubmit}>

          {/* Si hay datos muestro los resultados en una tabla */}
          <ResultadosImportacion>
            {data.length > 0 && (              
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
            )}
          </ResultadosImportacion>

          {/* Si hay datos muestro el botón de añadir datos */}
          <ContenedorBoton>
          {data.length > 0 && (
                  <Boton 
                    $primario
                    as="button"              
                    >Añadir datos
                  </Boton>
          )}
          </ContenedorBoton>

        </Formulario>
        
      </HelmetProvider>
    </>
  );
}
 
export default Direccion;