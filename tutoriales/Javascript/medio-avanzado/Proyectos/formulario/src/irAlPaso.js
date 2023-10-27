/*
    FUNCION DESPLAZARSE POR EL FORMULARIO
        - Se desplaza al paso indicado como argumento
        - Vuelve a transformar el boton a siguiente
        

*/
import validarCantidad from "./validaciones/validarCantidad";
const irAlPaso = (paso) => {
    
    document.querySelector(`.formulario__body [data-paso="${paso}"]`).scrollIntoView({
        inline: 'start',
        behavior: 'smooth'
    });

    if(paso === 'cantidad') {
        validarCantidad();
        console.log()
    }; 
    
}

export default irAlPaso;