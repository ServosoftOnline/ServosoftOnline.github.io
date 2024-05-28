/*
    COMPONENTE QUE SIRVE PARA OBTENER LA RESOLUCION DEL DISPOSITIVO QUE ESTA ACCEDIENDO A LA APP
        - Dependiendo de esta resolución modificaré el funcionamiento de la app cuando se encuentre en resoluciones bajas
*/

import React, { useState, useEffect } from 'react';

const ResolutionChecker = () => {

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
      <h1>Resolución de la pantalla</h1>
      <p>Anchura: {resolution.width}px</p>
      <p>Altura: {resolution.height}px</p>
    </div>
  );
};

export default ResolutionChecker;
