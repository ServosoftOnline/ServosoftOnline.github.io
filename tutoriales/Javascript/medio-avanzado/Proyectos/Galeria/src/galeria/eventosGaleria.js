/*
    - CONTIENE LOS EVENTOS QUE SE PRODUCIRAN EN LA GALERIA DE IMAGENES
        
        - Usaré propagacion de eventos
        - Obtengo el botón pulsado
            - Este contiene un atributo personalizado llamado acción con las diferentes acciones: 
                - cerrar-galeria, anterior-imagen, siguiente-imagen, siguiente-slide o anterior-slide
            - Obtengo la galeria.
            - Tengo la referencia de la galeria. Uso el metodo closest para obtener el botón mas cercano
            - Me aseguro que pulso un boton usando la sentencia if y el operador ? sobre objetos
                - El botón tiene un dataset?, ese dataset se llama accion?. 
                - Daría error si no lo usase
            - Dependiendo del contenido del atributo accion llamaré a una u otra funcion
        
   
        - Cargar imagen principal a traves de la funcion fotoInfo()
            - e.target contiene el elemento imagen que contiene el id de la fotografía
            - e.target.dataset contiene el id
            - Le paso el evento completo a la función fotoInfo() para que extraiga la información y la cargue

    
        
*/
import cerrarGaleria from "./cerrarGaleria";
import { cargarAnteriorSiguiente } from "./cargarImagen";
import fotoInfo from "./fotoInfo";
import { carousel } from "./carousel";

const galeria = document.getElementById('galeria');
galeria.addEventListener('click', (e) => {
    const boton = e.target.closest('button');
    
    // contenido de los botones
    if (boton?.dataset?.accion === 'cerrar-galeria') {
        cerrarGaleria(boton?.dataset?.accion === 'cerrar-galeria');
    } else if (boton?.dataset?.accion === 'anterior-imagen') {
        cargarAnteriorSiguiente('anterior');
    } else if (boton?.dataset?.accion === 'siguiente-imagen') {
        cargarAnteriorSiguiente('siguiente');
    } else if (boton?.dataset?.accion === 'siguiente-slide') {
       carousel('derecha');
    } else if (boton?.dataset?.accion === 'anterior-slide') {
        carousel('izquierda');       
    } 

    // cambiar imagen ppal
    if(e.target.dataset.id) fotoInfo(e);       
    
});

