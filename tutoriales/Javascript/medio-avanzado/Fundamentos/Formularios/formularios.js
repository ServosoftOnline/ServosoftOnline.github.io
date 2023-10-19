/*
    FORMULARIOS:
        - Creamos un formulario en html con ids y names
            - Debe contener un botón
                - Este botón por defecto tratará de enviar la información y refrescar la página
                    - Esta información se enviará como se indica en action
                - Para evitar esta acción por defecto usamos el metodo preventDefault


        - Accedemos a la información que hay en los campos de ese formulario
            - Formas de acceder:

                - Primer forma: Mediante el objeto forms
                    - document.forms contiene una coleccion html con los formularios de toda la pagina
                    - Mediante corchetes y su id accedo al formulario
                    - Puedo seguir usando corchetes para acceder al interior del formulario
                    - Y finalmente acceder a su valor
                        - Si no tiene nada obtendría cadena vacia
                    - Si el id tiene caracteres extraños o espacios es mejor usar esta forma

                - Segunda forma: Mediante métodos del DOM
                    - El id correo que esta dentro del id formulario-donacion
                    - El atributo name llamado correo que esta dentro del id formulario-donacion
                
                - Tercera forma: Mediante sus id
                    - Obtengo el formulario entero
                    - Me muevo mediante .idDefuera.idMasAdentro.value

        - Antes de enviar esta información debemos validarla
            - Usamos eventos para formularios




*/

// PRIMERA FORMA:
// console.log(document.forms['formulario-donacion']['correo'].value);

// SEGUNDA FORMA:
// console.log(document.querySelector('#formulario-donacion #correo'));
// console.log(document.querySelector('#formulario-donacion [name="correo"]'));

// TERCERA FORMA
// const formulario = document.forms['formulario-donacion'];
// console.log(formulario.fecha.value);

console.log('Obtengo la información del formulario');

document.getElementById('btnEnviar').addEventListener('click', (e) => {

    e.preventDefault();
    const correo = document.querySelector('#formulario-donacion #correo');
    const pais = document.forms['formulario-donacion']['pais'].value;
    const cantidadDonada = document.forms['formulario-donacion']['donacion'].value;
    const formulario = document.forms['formulario-donacion'];
    const fecha = formulario.fecha.value;
    const aceptaTerminos = document.forms['formulario-donacion']['terminos-y-condiciones'].checked;

    // Muestro los resultados antes de validad
    console.log(correo.value);
    console.log(pais);
    console.log(cantidadDonada);
    console.log(fecha);
    console.log(aceptaTerminos);

});