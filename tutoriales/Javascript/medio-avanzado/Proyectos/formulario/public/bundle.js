'use strict';

/*
    VALIDAR CANTIDAD
    
        - Obtengo el formulario y su input con el id cantidad
        - Defino la expresion regular que valida un número entero con decimales opcionales
        - Si no cumple la expresion regular. Le añado la clase para que muestre el mensaje de error y aplique las css correspondientes
            - Si la cumple le quito la clase para que deje de mostrar el error



*/

const formulario$3 = document.getElementById('formulario');
const inputCantidad = formulario$3.cantidad;

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
    VALIDAR NOMBRE
    
        - Obtengo el formulario y su input con el id cantidad
        - Defino la expresion regular
            - Valida un nombre con minúsculas, mayúsculas y tildes. Maximo de 40 caracteres

        - Si no cumple la expresion regular.
            - Le añado la clase para que muestre el mensaje de error y aplique las css correspondientes

        - Si la cumple
            - Le quito la clase para que deje de mostrar el error

*/

const formulario$2 = document.getElementById('formulario');
const inputNombre = formulario$2['nombre-receptor'];

const validarNombre = () => {
    const expresionNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

    if(!expresionNombre.test(inputNombre.value)){
        inputNombre.classList.add('formulario__input--error');
        return false;

    } else {
        inputNombre.classList.remove('formulario__input--error');
        return true;    
    }
    
};

/*
    VALIDAR CORREO ELECTRONICO
    
        - Obtengo el formulario y su input con el id correo-receptor
        - Defino la expresion regular para un correo electrónico                

        - Si no cumple la expresion regular.
            - Le añado la clase para que muestre el mensaje de error y aplique las css correspondientes

        - Si la cumple
            - Le quito la clase para que deje de mostrar el error

*/

const formulario$1 = document.getElementById('formulario');
const inputCorreo = formulario$1['correo-receptor'];

const validarCorreo = () => {
    const expresionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if(!expresionCorreo.test(inputCorreo.value)){
        inputCorreo.classList.add('formulario__input--error');
        return false;

    } else {
        inputCorreo.classList.remove('formulario__input--error');
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
                - Los formularios se encuentran ocultos y a la derecha del formulario de cantidad
                - Obtengo el nombre del formulario siguiente a traves de su atributo personalizado
                
                - Lo muevo hacia la izquierda y lo muestro mediante scrollIntoView
                    - Objeto donde hay que pasarle:
                        - Como quiero la transición. En este caso al inicio (start)
                        - Y su comportamiento. En este caso que tenga una animación(smooth)

                    - 
                - BUG: Despues de aplicar scrollIntroView y actualizo el formulario debe tambien desplazarse
                    - En formulario.js debo desplazarlo al principio

        
            - Si no se cumple estaré en el paso de confirmación y debo mostrar los valores

*/

const siguientePaso = () => {
    const todosLosPasos = [...document.querySelectorAll('.linea-pasos__paso')];
    const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso');
    const indexPasoActual = todosLosPasos.indexOf(pasoActual);

    if(indexPasoActual < todosLosPasos.length -1){
        pasoActual.querySelector('span').classList.remove('linea-pasos__paso-check--active');
        todosLosPasos[indexPasoActual+1].querySelector('span').classList.add('linea-pasos__paso-check--active');    
        const idFormularioSiguiente = todosLosPasos[indexPasoActual+1].dataset.paso;
        document.querySelector(`.formulario__body [data-paso="${idFormularioSiguiente}"]`).scrollIntoView({
            inline: 'start',
            behavior: 'smooth'
        });
    }};

/*

VALIDA TODOS LOS FORMULARIOS POR LO QUE IRÁ PASANDO EL PROYECTO
    
    - Formularios:
        - Cantidad
            - Para corregir un BUG de siguientePaso.js debo mostrar este formulario cada vez que inicie
        - Nombre y correo electronico del receptor
        - Metodo de pago
        - Confirmación de los datos

    - Valido dos veces
        - En la primera valido mientras escribo y en la segunda aumento el paso por el que voy
        - Si no lo hiciera dos veces y el usuario no escribiera nada, no validaría nunca
        
        - Primera validacion: Mientras escribo.
            - Localizo el input en el que estoy
            - Dependiendo en que input sabré que tengo que validar
            - Haré funciones para validar porque despues validaré de nuevo
                - La función devolverá true o false dependiendo si es válido o no con respecto a una expresion regular

        - Segunda validación: Al darle al botón de siguiente
            - Localizaré el paso por el que voy
                - Tendrá la clase linea-pasos__paso-check--active
                - Su div padre tiene un atributo personalizado llamado "paso" con el paso por el que voy

            - Hay cuatro pasos:
                - Cantidad
                - Datos
                - Método
                - Confirmación

            - Mediante condicionales y dependiendo del paso haré lo siguiente:
                - Si se cumple la segunda validación
                    - Marco ese paso como completado
                    - Paso al siguiente
                        - Implica cambiar el icono circular que indica el paso actual al siguiente paso
                        - Marcar el paso validado con la marca de chequeado
                
            - El paso de metodo de pago no tiene validación
                - Son dos radio bottoms y por defecto en index.html ya marco el primero 
                
            - Antes de pasar al paso de confirmación muestro la información hasta el momento
                - La introduciré en los span del formulario de confirmación
                    - Tienen un atributo personalizado llamado data-valor
                    - Los obtengo uno por uno y añadiendo la información

            - Modifico el botón de "siguiente"
                - Cambio el texto "siguiente" por "transferir"

                - Deshabilito el botón
                    - Le añado la clase "formulario__btn--disabled".
                        - Activa el efecto del botón
                        - Deshabilita el enlace

                - Quito el icono de siguiente y le pongo el del banco
                - Vuelvo a habilitar el botón pasados cuatro segundos

            - El paso de confirmación
                - Solo podré transferir si se cumplen dos condiciones
                    - Estoy en el paso confirmación
                    - El boton del formulario no tiene la clase "formulario__btn--disabled"
                        - Que será durante los cuatro segundos que se encuentra deshabilitado
                    
                - Cuando haga click el texto del botón pasará a transfiriendo
                - Vuelvo a añadir la clase formulario__btn--disabled para hacer el efecto del botón
                - Haríamos la conexión al servidor, hacemos la transferencia y si va todo bien
                    - Pasados cuatro segundos
                        - Oculto el formulario
                        - Muestro la alerta de transferencia completada

    - Desplazarme por los pasos antes de confirmar la transferencia
    
    
            
*/

// API obtener monedas. Nueva instancia Internacionalización, argumentos: idioma Y estilo de formato de moneda
const formatearMoneda = new Intl.NumberFormat('es-ES', {style: 'currency' , currency: 'EUR'});
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

        // Si ese input tiene el id cantidad. Valido cantidad.
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
const btnFormulario = document.getElementById('formulario__btn');
btnFormulario.addEventListener('click', (e) => {

    e.preventDefault();
    const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('div').dataset.paso;

    if (pasoActual === 'cantidad') {
        if (validarCantidad()){
            marcarPasoComoCompletado('cantidad');
            siguientePaso();
        }    }
    if (pasoActual === 'datos') {
        if (validarNombre() && validarCorreo()){
            marcarPasoComoCompletado('datos');
            siguientePaso();
        }    }
    if (pasoActual === 'metodo') {
        marcarPasoComoCompletado('metodo');

        // Relleno la confirmación. La cantidad tendrá el formato euro
        document.querySelector('[data-valor = "cantidad"] span')
            .textContent = formatearMoneda.format(formulario.cantidad.value);
        document.querySelector('[data-valor = "nombre-receptor"] span')
            .textContent = formulario['nombre-receptor'].value;
        document.querySelector('[data-valor = "correo-receptor"] span')
            .textContent = formulario['correo-receptor'].value;
        document.querySelector('[data-valor = "metodo"] span')
            .textContent = formulario.metodo.value;

        // Modifico el botón siguiente
        btnFormulario.querySelector('span').innerHTML = "Transferir";
        btnFormulario.classList.add('formulario__btn--disabled');

        btnFormulario.querySelector('[data-icono = "siguiente"]')
            .classList.remove('formulario__btn-contenedor-icono--active');
        btnFormulario.querySelector('[data-icono = "banco"]')
            .classList.add('formulario__btn-contenedor-icono--active');

        // Paso al paso de confirmación
        siguientePaso();

        // Despues de cuatro segundos le quito la clase formulario__btn--disabled
        setTimeout(() => {
             btnFormulario.classList.remove('formulario__btn--disabled');
        }, 4000);
    }
    if (pasoActual === 'confirmacion' && !btnFormulario.matches('.formulario__btn--disabled')) {
        btnFormulario.querySelector('span').textContent = "Transfiriendo...";
        btnFormulario.classList.add('formulario__btn--disabled');

        

        // Conexion al servidor

        setTimeout(() => {
            formulario.classList.add('formulario--hidden');
            document.getElementById('alerta').classList.add('alerta--active');
       }, 4000);

    }
});

/*
MODIFICAR LOS INPUTS DE LA TRANSFERENCIA ANTES DE REALIZARLA
    
    - Obtengo la linea de pasos entera
    - Añado un evento de click a toda la linea
        - Si hago click en la linea y no en un paso, salgo de la funcion y no hago nada
        - Si no he salido, continuo haciendo lo siguiente:
            - Obtengo el paso actual
            - Valido en cada caso. Si hay algo no valido salgo de la funcion
            - Si valido todo y no he salido, hago efectivo el paso
                - Pero solo si el paso al que quiero ir fue chequeado
                    - Quito la marca de activo al paso actual
                    - Añado la marca de activo al paso deseado
                    - Traslado al formulario deseado
                    - Cambio texto y el icono de transferir a siugiente
                    - Elimino el efecto del botón

*/

const lineaPasos = document.getElementById('linea-pasos');
lineaPasos.addEventListener('click', (e) => {
    
    if(!e.target.closest('.linea-pasos__paso')) return false;

    // Valido el paso actual antes de ir al paso deseado
    const pasoActual = document.querySelector('.linea-pasos__paso-check--active')
        .closest('.linea-pasos__paso').dataset.paso;
    
    if (pasoActual === 'cantidad') {
        if (!validarCantidad()) return false;
    }
    if (pasoActual === 'datos') {
        if (!validarNombre() || !validarCorreo()) return false;
    }
    // Cambio de paso si tiene la marca de checked
    const pasoDeseado = e.target.closest('.linea-pasos__paso');
    if(pasoDeseado.querySelector('.linea-pasos__paso-check--checked')){
        const pasoActual = lineaPasos.querySelector('.linea-pasos__paso-check--active');
        const id = pasoDeseado.dataset.paso;
        pasoActual.classList.remove('linea-pasos__paso-check--active');
        lineaPasos.querySelector(`[data-paso = ${id}] span`)
            .classList.add('linea-pasos__paso-check--active');
        
        // Cambio el botón
        const btnFormulario = document.querySelector('.formulario__btn');
        btnFormulario.querySelector('span').textContent = 'Siguiente';
        btnFormulario.querySelector('[data-icono = "banco"]')
            .classList.remove('formulario__btn-contenedor-icono--active');
        btnFormulario.querySelector('[data-icono = "siguiente"]')
            .classList.add('formulario__btn-contenedor-icono--active');
        btnFormulario.classList.remove('formulario__btn--disabled');

        // Desplazo hacia el paso deseado
        document.querySelector(`.formulario__body [data-paso="${id}"]`).scrollIntoView({
            inline: 'start',
            behavior: 'smooth'
        });

    }});
//# sourceMappingURL=bundle.js.map
