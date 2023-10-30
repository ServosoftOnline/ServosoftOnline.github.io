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

import validarCantidad from "./validaciones/validarCantidad";
import validarNombre from "./validaciones/validarNombre";
import validarCorreo from "./validaciones/validarCorreo";
import marcarPasoComoCompletado from "./marcarPasoComoCompletado";
// import irAlPaso from "./irAlPaso";
import siguientePaso from "./siguientePaso";

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
    };

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



