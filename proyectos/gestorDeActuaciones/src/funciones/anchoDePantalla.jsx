/*
    FUNCION QUE DEVUELVE EL ANCHO DE UNA PANTALLA:

      - Dependiendo de esta resolución modificaré el funcionamiento de la app cuando se encuentre en resoluciones bajas
      - Obtendré la resolucion de la pantalla y establezco los pixeles maximos para aplicar o no la programación correspondiente
        en el componente donde la aplique
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
  // const anchoMaximoMovilVertical = 430;
  const anchoMaximo = 430;
  const anchoMaximoMovilHorizontal = 860;

  // Devuelvo los anchos
  return {anchoActual, anchoMaximo, anchoMaximoMovilHorizontal};

};

export default anchoDePantalla;
