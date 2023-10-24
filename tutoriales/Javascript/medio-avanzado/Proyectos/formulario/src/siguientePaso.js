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
    };
};

export default siguientePaso;