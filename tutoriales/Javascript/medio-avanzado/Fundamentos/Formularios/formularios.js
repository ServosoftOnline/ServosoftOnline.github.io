/*
    FORMULARIOS:

        - Formas de acceder
            - Primer forma: Mediante el objeto forms
                - document.forms contiene una coleccion html con los formularios de toda la pagina
                - Mediante corchetes y su id accedo al formulario
                - Puedo seguir usando corchetes para acceder al interior del formulario
                - Y finalmente acceder a su valor
                    - Si no tiene nada obtendría cadena vacia

                



            - Segunda forma: Mediante métodos del DOM

*/

// PRIMERA FORMA: Accedo al valor que se introdujo en el campo correo
console.log(document.forms['formulario-donacion']['correo'].value);