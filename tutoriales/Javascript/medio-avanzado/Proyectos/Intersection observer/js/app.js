/*
    - Obtengo la imagen
    - Defino la funcion que cargará la imagen llegado el momento
        - Argumentos
            - Entradas
                - Array que contiene información de los elementos que vigila
                    - isIntersecting. Detectamos si esta dentro del viewport
                    - intersectionRatio. Indica cuanto porcentaje del elemento está dentro
                    - target. Contiene el elemento html
            - Observador
    
    - Defino al observador que vigilará cuando llegue la imagen al viewport
        - Dos argumentos:
            1 - Función que se ejecutará llegado el momento en el viewport
            2 - Objeto que describe su configuracion:
                - root: . Aquí indicamos donde estaremos observando. Ej:
                    - null, haria referencia al viewport
                    - elemento html. Indicamos que elemento html observaremos
                - rootMargin. Permite añadir margenes al observador
                    - Si hago el margen mas grande que el viewport el observador lo verá antes de llegar a la pantalla
                    - Margen 0 implica que tomará todo el viewport (0 pixeles)
                    - El margen lo añadiria en pixeles y entre comillas
                    - Lo puedo indicar mediante un, dos o cuatro valores: 
                        - Un valor, lo aplica a arriba, abajo, izquierda y derecha
                        - Dos valores, aplica el primero a los margenes arriba y abajo y el segundo a izquierdo y derecho
                        - Cuatro valores, aplica arriba, derecho, abajo y izquierdo
                - threshold. Indicando que porcentaje debe ser visible para ser considerada como visible
                    - Su valor oscila entre 0.0 y 1.0. 
                    - 0.5 indica que será considerada visible cuando se vea la mitad
                    - 1.0 indica que será considerada visible cuando se vea en su totalidad

    - Uso el metodo observe del objeto observador y le indico el elemento imagen obtenido anteriormente

                    



*/

// Obtengo las imagenes que quiero observar
const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');

// Función que cargará la imagen. Si está en el viewport le añade los caracteres visible a la clase
const cargarImagen = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) entrada.target.classList.add("visible");
        else entrada.target.classList.remove("visible");
    });
}

// Observador
const observador = new IntersectionObserver(cargarImagen,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
    }
);

// Llamo a sus métodos observe para las dos imágenes
observador.observe(imagen1);
observador.observe(imagen2);

