/*
    COMPONENTES QUE USARÉ PARA REALIZAR PRUEBAS Y VER QUE RESOLUCION TIENE LA PANTALLA DONDE ESTOY PROBANDO
      - Lo ire insertando en aquellos interfaces donde lo vea necesario

*/
import React, { useState, useEffect } from 'react';

const MuestraResolucion = () => {

  // Estado para almacenar la resolución de la pantalla
  const [resolution, setResolution] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Función para actualizar la resolución
  const updateResolution = () => {
    setResolution({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  // useEffect para agregar un event listener al redimensionar la ventana
  useEffect(() => {
    window.addEventListener('resize', updateResolution);

    // Cleanup para remover el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', updateResolution);
    };
  }, []);

  return (
    <div>
      <h1>Resolución de la pantalla:</h1>
      <p>Anchura: {resolution.width}px</p>
      <p>Altura: {resolution.height}px</p>
    </div>
  );
};

export default MuestraResolucion;
