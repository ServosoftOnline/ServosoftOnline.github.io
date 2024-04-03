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
import {Header, ContenedorHeader, Titulo, ContenedorBotones} from '../elementos/ElementosDeHeader';
import {Formulario, ContenedorArchivoExcel, ResultadosImportacion} from './../elementos/ElementosDeFormulario';
import Boton from "../elementos/Boton";
import BtnRegresar from "../elementos/BtnRegresar";

// El Componente
const Direccion = () => {

  // Estado
  const [data, setData] = useState([]);

  // Función
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
        
                 
        <ContenedorHeader>
            <Titulo>Direccion</Titulo>
            <ContenedorBotones>
              <BtnRegresar ruta='/coordinador' />
            </ContenedorBotones>
          </ContenedorHeader>
       
        

        <Formulario>

          <ContenedorArchivoExcel>
            <>
            <h3>Archivo excel a importar: </h3>
            <input
              type="file"
              accept='.xlsx, xls'
              onChange={handleFileUpload} 
            />
            </>
          </ContenedorArchivoExcel>

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


          

        </Formulario>

        

      </HelmetProvider>
    </>
  );
}
 
export default Direccion;