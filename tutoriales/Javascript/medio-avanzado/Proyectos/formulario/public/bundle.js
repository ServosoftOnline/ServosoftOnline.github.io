'use strict';

/*
    VALIDAR CANTIDAD
    
        - Obtengo el formulario y su input con el id cantidad
        - Defino la expresion regular que valida un número entero con decimales opcionales
        - Si no cumple la expresion regular. Le añado la clase para que muestre el mensaje de error y aplique las css correspondientes
            - Si la cumple le quito la clase para que deje de mostrar el error



*/

const formulario$1 = document.getElementById('formulario');
const inputCantidad = formulario$1.cantidad;

const validarCantidad = () => {
    const enteroConDecimalesOpcionales = /^\d+(\.\d+)?$/;
        
    if(!enteroConDecimalesOpcionales.test(inputCantidad.value)){
        inputCantidad.classList.add('formulario__input--error');
        return false;

    } else {
        inputCantidad.classList.remove('formulario__input--error');
        return true;    
    }
    
};

/*
    PASO DEL FORMULARIO COMPLETADO
        - Añado el icono de check
            - Está en la etiqueta <span>
                - tiene la clase class="linea-pasos__paso-check linea-pasos__paso-check--active"
                - Debemos cambiar el --active por un --checked para aplicar reglas de css

            - Obtengo el div que tiene la clase linea-pasos
                - Me adentro y localizo el div que tenga un atributo personalizado como el argumento paso
                    - Uso templates strings para acceder a su span y modificarle el --active por el --checked
                    - Debo eliminar de la clase "linea-pasos__paso-check--active" para poder añadir la marca de finalizado

*/

const marcarPasoComoCompletado = (paso) => {
    
    document
        .querySelector(`.linea-pasos [data-paso = "${paso}"] span`)
        .classList.add('linea-pasos__paso-check--checked');

};

/*
    SIGUIENTE PASO
        
        - Los pasos son cuatro y los meteré en un array
            - 0 sería la cantidad
            - 1 serian los datos
            - 2 sería el metodo de pago
            - 3 sería la confirmación

        - Detectamos el indice de la posición actual
            - Es el único que tiene la clase "linea-pasos__paso-check--active"
            - Su elemento padre tiene el atributo personalizado con el paso
            - Mediante el metodo para arrays indexOf obtenemos su indice dentro de todos los pasos

        - Si el indice actual es 0,1 u 2 movemos las marcas chequeado y activo de la línea de pasos
            - Significa que el indice actual sea menor que la cantidad de elementos del array -1

            - El paso actual ya está chequeado
                - En marcarPasoComoCompletado ya le puse la clase linea-pasos__paso-check--checked
                - Debo quitarle la clase linea-pasos__paso-check--active a su span correspondiente
                - Apareciendo la marca de chequeado que estaba detras.

            - El paso siguiente debo marcarlo como paso activo
                - Añadiendole la clase linea-pasos__paso-check--active

            - Debo mostrar el siguiente formulario
                - 
        
        - Si no se cumple estaré en el paso de confirmación y debo mostrar los valores


        


*/

const siguientePaso = () => {
    const todosLosPasos = [...document.querySelectorAll('.linea-pasos__paso')];
    console.log(todosLosPasos);
    const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso');
    console.log(pasoActual);
    const indexPasoActual = todosLosPasos.indexOf(pasoActual);
    console.log(indexPasoActual);

    if(indexPasoActual < todosLosPasos.length -1){
        pasoActual.querySelector('span').classList.remove('linea-pasos__paso-check--active');
        todosLosPasos[indexPasoActual+1].querySelector('span').classList.add('linea-pasos__paso-check--active');    
    }
    

    

};

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

                

*/

const formulario = document.getElementById('formulario');


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
        if (validarCantidad()){
            marcarPasoComoCompletado('cantidad');
            siguientePaso();
        }
        
        
    }});
//# sourceMappingURL=bundle.js.map
