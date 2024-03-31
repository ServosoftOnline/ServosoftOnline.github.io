import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const funcionImportar = (e) => {    
    console.log('Importando ...');
    const [data, setData] = useState([]);

    const handleFileUpload = (e) => {
        
        console.log('Entro en handlefileUpload');
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsBinaryString(file);

        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const parseData = XLSX.utils.sheet_to_json(sheet);
          setData(parseData);
        }; 
      };

    return (
    <div>
        <input type="file" onChange={handleFileUpload} />
    </div>
    );
}
 
export default funcionImportar;