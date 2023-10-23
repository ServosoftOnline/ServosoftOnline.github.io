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

export default marcarPasoComoCompletado;