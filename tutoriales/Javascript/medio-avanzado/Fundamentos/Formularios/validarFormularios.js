/*
    VALIDAR FORMULARIOS
    
        - Guardo todos los datos del formulario en el objeto datos
        - Valido los datos.
            - Cuando encuentro uno no válido salgo de la función.
            - la validación del correo es muy simple. 
                - En el archivo expresionesRegulares.js lo valido como debería hacerse          
        - Si acaba el proceso y no he salido de ninguna función los datos estan validados       

*/


const formulario = document.getElementById('formulario-donacion');
formulario.addEventListener('submit', (e) => {

    e.preventDefault();
    const datos = {
        correo : formulario.correo.value,
        pais : formulario.pais.value,
        donacion: formulario.donacion.value,
        fecha : formulario.fecha.value,
        aceptaTerminos: formulario['terminos-y-condiciones'].checked
    }

    // VALIDACIONES
    
    // El correo debe tener al menos dos caracteres
    if(datos.correo.length <= 2) {
        console.log('Correo no valido');
        return;
    }

    // El pais deber ser seleccionado
    if(datos.pais === ''){
        console.log('Pais no seleccionado');
        return;
    }

    // Hay que indicar una donacion
    if(datos.donacion === ''){
        console.log('No indicó su donación');
        return;
    }

    // Hay que seleccionar una fecha
    if(datos.fecha === ''){
        console.log('Debe indicar una fecha');
        return;
    }

    // Deben aceptarse los terminos y condiciones
    if(!datos.aceptaTerminos){
        console.log('No acepto términos y condiciones');
        return;
    }

    console.log('Enviando datos ...');

});