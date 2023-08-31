/*
    - FUNCION QUE CONSIGUE TODA LA INFORMACIÓN NECESARIA PARA PODER CARGAR LA IMAGEN COMO IMAGEN PPAL EN LA GALERIA
    
        - Necesito: id, nombre, descripcion y ruta.
            - el id lo obtengo a partir del evento que pasé como parámetro.
                - Debo pasarlo a número para compararlo con el id de la fotografia de los datos
            - el nombre, la descripción y la ruta los obtengo de la siguiente forma:
                - Importo las fotos
                - Obtengo la categoría activa a partir del atributo personalizado categoria
                - Recorro el array que contiene todas las fotos que corresponden con la categoría activa
                - Si el id que pasé por el evento es igual al id de la foto, he encontrado la fotografia
        - En el momento que encuentro toda la información llamo a la función cargarImagen y le paso todos los datos

           
*/

import datos from "../datos/fotos";
import { cargarImagen } from "./cargarImagen";

const fotoInfo = (e) => {
    const id = parseInt(e.target.dataset.id);
    const galeria = document.getElementById('galeria');
    const categoriaActiva = galeria.dataset.categoria;
    
    datos.fotos[categoriaActiva].forEach((foto) => {
        if(foto.id === id) cargarImagen(id,foto.nombre,foto.descripcion,foto.ruta);   
    })
}

export default fotoInfo;