/*
    EVENTOS EN FORMULARIOS:

        - Existen muchos
        - Los más importantes:
            
            1.- Reaccionar cuando se pulse el boton de enviar. Evento submit
                - Debo evitar que envie los datos y refresque la pantalla

            2.- Cuando cambie el valor de un imput. Evento change
                - Este puede ser en un select, radio botoms, ...
                    - En los radio botoms debemos aplicar un evento change en cada uno de ellos
                - Puedo obtener su nuevo valor seleccionado

            3.- Cuando hagamos un focus o un blur. Eventos focus y blur
                - Significa hacer un click dentro de un campo y despues hacerlo fuera

            4.- Cuando se escriba dentro de un input
                - Si pulso la tecla. Evento keydown
                - Si dejo de pulsarla. Evento keyup

*/

const formulario = document.forms['formulario-donacion'];

// Evento1: Pulsar el botón de enviar el formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Enviando datos');
});

// Evento2: Obtener el pais encerrado en el select y la cantidad donada encerrada en los radio botoms
formulario.pais.addEventListener('change', (e) => {
    console.log('el pais cambio. Se seleccionó ' + e.target.value);
});

formulario['cantidad-5'].addEventListener('change', () => {console.log('Donará 5 pesos');});
formulario['cantidad-10'].addEventListener('change', () => {console.log('Donará 10 pesos');});

// Evento3: Introducir el correo y dejar de introducirlo
formulario.correo.addEventListener('focus', () => {console.log('El usuario está introduciendo su correo');});
formulario.correo.addEventListener('blur', () => {console.log('El usuario ya introdujo su correo');});

// Evento4: Que teclas pulsa y suelta dentro del correo
formulario.correo.addEventListener('keydown', (e) => {console.log(e)});
formulario.correo.addEventListener('keyup', (e) => {console.log(e)});