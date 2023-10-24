/*

    VALIDA TODOS LOS FORMULARIOS POR LO QUE IRÁ PASANDO EL PROYECTO
        
        - Formularios:
            - Cantidad
                - Para corregir un BUG de siguientePaso.js debo mostrar este formulario cada vez que inicie
            - Nombre y correo electronico del receptor

        - Valido dos veces
            - En la primera valido mientras escribo y en la segunda aumento el paso por el que voy
            - Si no lo hiciera dos veces y el usuario no escribiera nada, no validaría nunca
            
            - Mientras escribo.
                - Localizo el input en el que estoy
                - Dependiendo en que input sabré que tengo que validar
                - Haré funciones para validar porque despues validaré de nuevo
                    - La función devolverá true o false dependiendo si es válido o no con respecto a una expresion regular
    
            - Al darle al botón de siguiente
                - Localizaré el paso por el que voy
                    - Tendrá la clase linea-pasos__paso-check--active
                    - Su div padre tiene un atributo personalizado llamado "paso" con el paso por el que voy

                - Mediante condicionales y dependiendo del paso haré lo siguiente:
                    - Si se cumple la segunda validación
                        - Marco ese paso como completado
                        - Paso al siguiente
                            - Implica cambiar el icono circular que indica el paso actual al siguiente paso
                            - Marcar el paso validado con la marca de chequeado
                    
                    - El paso de metodo de pago no tiene validación
                        - Son dos radio bottoms y por defecto en index.html ya marco el primero 

                

*/

import validarCantidad from "./validaciones/validarCantidad";
import validarNombre from "./validaciones/validarNombre";
import validarCorreo from "./validaciones/validarCorreo";
import marcarPasoComoCompletado from "./marcarPasoComoCompletado";
import siguientePaso from "./siguientePaso";

const formulario = document.getElementById('formulario');

// BUG: Desplazo el scroll hasta el primer formulario. El mas situado a la izquierda. El de cantidad
//document.querySelector('.formulario__body').scrollLeft = 0;
document.querySelector('.formulario__body [data-paso="cantidad"]').scrollIntoView({
    inline: 'start',
    behavior: 'smooth'
});

// Primera validación: Mientras el usuario escribe
formulario.addEventListener('keyup', (e) => {
    
    // Si esa tecla fuera un input
    if(e.target.tagName === 'INPUT'){

        // Si ese input tiene el id cantidad. Valido cantidad. Le paso el formulario y las teclas pulsadas y levantadas
        if(e.target.id === 'cantidad'){
            validarCantidad();
        }

        // Si ese input tiene el id nombre-receptor. Valido el nombre del receptor
        if(e.target.id === 'nombre-receptor'){
            validarNombre();
        }

        // Si ese input tiene el id correo-receptor. Valido el email del receptor
        if(e.target.id === 'correo-receptor'){
            validarCorreo();
        }        
    }

});

// Segunda validación: Cuando pulse el boton de siguiente
const btnSiguiente = document.getElementById('formulario__btn');
btnSiguiente.addEventListener('click', (e) => {

    e.preventDefault();
    const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('div').dataset.paso;

    if (pasoActual === 'cantidad') {
        if (validarCantidad()){
            marcarPasoComoCompletado('cantidad');
            siguientePaso();
        };        
    };

    if (pasoActual === 'datos') {
        if (validarNombre() && validarCorreo()){
            marcarPasoComoCompletado('datos');
            siguientePaso();
        };        
    };

    if (pasoActual === 'metodo') {
        marcarPasoComoCompletado('metodo');
        siguientePaso();        
    };

});

