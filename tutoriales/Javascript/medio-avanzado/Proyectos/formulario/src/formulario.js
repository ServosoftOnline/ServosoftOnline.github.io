/*

    VALIDA TODOS LOS FORMULARIOS POR LO QUE IRÁ PASANDO EL PROYECTO
        
        - Formularios:
            - Cantidad
            - Nombre y correo electronico del receptor

        - Valido dos veces
            - En la primera valido mientras escribo y en la segunda aumento el paso por el que voy
            - Si no lo hiciera dos veces y el usuario no escribiera nada, no validaría nunca
            
            - Mientras escribo.
                - Localizo el input en el que estoy
                - Dependiendo en que input sabré que tengo que validar
                - Haré funciones para validar porque despues validaré de nuevo
                    - Les paso el formulario y el valor a validar
                    - La función devolverá true o false dependiendo si es válido o no con respecto a una expresion regular
    
            - Al darle al botón de siguiente
                - Localizaré el paso por el que voy
                    - tendrá la clase linea-pasos__paso-check--active
                    - Su div padre tiene un atributo personalizado llamado paso con el paso por el que voy



        


*/

import validarCantidad from "./validarCantidad";
const formulario = document.getElementById('formulario');


// Primera validación: Mientras el usuario escribe
formulario.addEventListener('keyup', (e) => {
    
    // Si esa tecla fuera un input
    if(e.target.tagName === 'INPUT'){

        // Si ese input tiene el id cantidad. Valido cantidad. Le paso el formulario y las teclas pulsadas y levantadas
        if(e.target.id === 'cantidad'){
            validarCantidad(formulario , e.target.value);
        }

        // Si ese input tiene el id nombre-receptor. Valido el nombre del receptor
        if(e.target.id === 'nombre-receptor'){
            console.log('valido el nombre del receptor');
        }

        // Si ese input tiene el id correo-receptor. Valido el email del receptor
        if(e.target.id === 'correo-receptor'){
            console.log('valido el correo del receptor');
        }        
    }

});

// Segunda validación: Cuando pulse el boton de siguiente
const btnSiguiente = document.getElementById('formulario__btn');
btnSiguiente.addEventListener('click', (e) => {
    e.preventDefault();
    const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('div').dataset.paso;
    if (pasoActual === 'cantidad') {
        validarCantidad(formulario,  e.target.value);
    };
});

