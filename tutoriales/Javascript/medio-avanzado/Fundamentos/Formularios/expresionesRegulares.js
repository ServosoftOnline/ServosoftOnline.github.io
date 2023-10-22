/*
EXPRESIONES REGULARES
    1.- Como se definen

        - Puede aplicarse en Javascript y otros lenguajes.
        - He seguido la guia situada en https://www.youtube.com/watch?v=wfogZfIS03U
        - Pueden hacerse pruebas en https://regexr.com
        - Son pequeñas fórmulas que aplicadas sobre un texto se obtendrían sus coincidencias
            - Formula: /texto/Banderas
                - Ejemplo: /oscar/gi buscaría oscar en todo el documento sin distinguir mayúsculas de minúsculas
        
            - Banderas:
                g       - Global. Busqueda en todo el documento. Si no la usamos buscaría la primera coincidencia
                i       - Case insensitive. No hace distinción entre mayusculas de minúsculas
                m       - Multiline. No lo he entendio muy bien. Si no pongo a veces no cumplo la formula


        - Coincidencias Basicas:
            - Cuando usamos carácteres en mayusculas obtenemos el efecto contrario
            - A veces será necesario "escapar" un caracter. Le añadimos el caracter \
                - Si queremos localizar caracteres reservados como \ . 
                    Ej: para buscar el punto usaremos \. o para buscar el \ usaremos \\
                    
            .       - Cualquier Caracter, excepto nueva linea
                    - /./g  
                    - Obtiene todo el texto excepto las líneas que separan un párrafo de otro

            \d      - Cualquier Digitos (0-9)
                    - /\d/g
                    - Obtiene todos los números

            \D      - No es un Digito (0-9)
                    - /\D/g
                    - Obtiene todo lo que no sea un número

            \w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
                    - /\w/g
                    - Obtiene todas las palabras mayúsculas y minúsculas, los números y el guion bajo

            \W      - No es un Caracter de Palabra.
                    - /\W/g
                    - Obtendría: @, -, :, /, etc

            \s      - Espacios de cualquier tipo. (espacio, tabulaciones, nueva linea)
                    - /\s/g
                    - Obtiene espacios, tabulaciones y nuevas líneas

            \S      - No es un Espacio, Tabulaciones o nueva linea.
                    - /\S/g
                    - Obtiene todas las letras, símbolos, números

            - Mas ejemplos:

                - /\d\d\d \d\d\d \d\d \d\d/g
                - Obtendría un numero de telefono de esta forma 952 456 21 36

                - /\d\d\d.\d\d\d.\d\d.\d\d/g
                - Obtendría los telefonos anteriores y estos 952-456-21-36
                - Y tambien estos 952@456-21'´36
                - Los conjuntos de carácter podrían corregir esto

        - Limites:
            \b      - Limite de Palabra
            \B      - No es un Limite de Palabra
            ^       - Inicio de una cadena de texto
            $       - Final de una cadena de texto

        - Cuantificadores:
            *       - 0 o Más
            +       - 1 o Más
            ?       - 0 o Uno
            {3}     - Numero Exacto
            {3,4}   - Rango de Numeros (Minimo, Maximo)

        - Ejemplo de expresión regular que usa condiciones básicas, límites y cuantificadores:

            - /^\w+\s/w+\s?$/gim
                - Todos los caracteres de palabra
                - Que tenga uno o mas caracteres
                - que tenga un espacio en medio que sea obligatorio
                - Que tenga despues otra serie de caracteres de palabra que tenga uno o mas caracteres
                - Que tenga despues un espacio opcional
                - Usamos límites:
                    - Que inicie con una cadena de texto
                    - Que acabe con una cadena de texto
                - Las banderas global, no sensible a mayusculas y multiline
            - Obtendría un nombre del tipo. Oscar Fernández

        - Conjuntos de Caracteres:
            []  - Caracteres dentro de los brackets
                - Estarán separados por guiones
                - En este caso no seria necesario escapar los caracteres reservados
                    - He tenido que escapar el guión
    
            [^ ]    - Caracteres que NO ESTAN dentro de los brackets
        
            - Ejemplos de expresiones regulares que usan ademas conjuntos de caracteres:

                - /\d{3}[\s-.]\d{3}[\s-.]\d{2}[\s-.]\d{2}/gm
                    - Obtendría un numero de telefono de los tipos:
                        - 952 456 25 34
                        - 952-548-85-34
                        - 952.548.45.87

                - /[a-zA-Z]+/gm
                    - Obtendría los rangos de letras minúsculas y mayúsculas que van desde la a hasta la z

                - /[0-9]+/gm
                    - Obtendría todos los números que vallan desde el 0 al 9

                - /[^0-5]+/gm
                    - Obtendría los numeros del 6 al 9 y todos los caracteres

        - Grupos:
            ( )     - Permite encerrar pedazos de nuestra expresion regular y separarlos
            |       - Un pedazo u otro pedazo
    
            - Ejemplo que usa grupos
                - /(952|951)[\s-]\d{3}[\s-]\d{3}/g
                    - Obtendría los números de telefono:
                        952 580 000
                        951-311-299

                /(952|951)([\s-]\d{3}){2}/g
                    - Haría lo mismo
        
        - Ejemplo de expresión regular que obtiene una pagina web:
            - /^(https?:\/\/)?(www\.)?[a-zA-z0-9.\-_]+\.(com|mx|net)$/gim
            - Obtendría páginas webs como estas:
                - www.carlos.com
                - https://www.manuel.alejandro.com.mx
                - http://alejandro.com.mx
                - cesar.net

        - La validación del correo la trato como una expresión regular
                - Ver más detalles de que es una expresión regular en el anexo de más abajo
                - La expresión regular: /[a-zA-Z0-9.\-_]+\@[a-zA-Z0-9.\-_]+\.[a-zA-Z0-9.\-_]+/g contendría los siguientes correos:
                    - carlos_@hotmail.com
                    - alejandro@outlook.com
                    - cesar@hotmail.com
                    - cesar.ero@hotmail.com
                    - Cesar-eo@hotmail.com
                    - cesar_eo@hotmail.com
                    - cesareo-1975@hotmail.com
                    - cesar@hotmail.eu.com
                    - cesar@hotmail.eu.es
                    - cesar@hotmail.eu.org
                    - .....

    2.- Como se aplican en Javascript
        - Guardo la expresión en una constante
            - Debo ponerla entre //
            - No es necesario poner banderas

        - La introduzco en el condicional
            - Le añado el método test
            - Paso como parámetro el objeto.propiedad
            - Si no pasa el test no es un correo valido


*/        


const formulario = document.getElementById('formulario-donacion');
formulario.addEventListener('submit', (e) => {

    e.preventDefault();
    const expresionRegular = /[a-zA-Z0-9.\-_]+\@[a-zA-Z0-9.\-_]+\.[a-zA-Z0-9.\-_]+/;
    const datos = {
        correo : formulario.correo.value,
        pais : formulario.pais.value,
        donacion: formulario.donacion.value,
        fecha : formulario.fecha.value,
        aceptaTerminos: formulario['terminos-y-condiciones'].checked
    }

    // VALIDACIONES
  
    // Aplicamos la expresión regular
    if(!expresionRegular.test(datos.correo)) {
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