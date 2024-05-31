/*
    FUNCION QUE DEVUELVE EL ANCHO DE UNA PANTALLA
      - Dependiendo de esta resolución modificaré el funcionamiento de la app cuando se encuentre en resoluciones bajas
*/

import { useState, useEffect } from 'react';

const anchoDePantalla = () => {
  
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

  // Establezco los anchos actuales y el maximo que debe tener para aplicarle la programacion en pantallas moviles
  const anchoActual = resolution.width
  const anchoMaximo = 430;

  // Devuelvo los anchos
  return {anchoActual, anchoMaximo};

};

export default anchoDePantalla;
