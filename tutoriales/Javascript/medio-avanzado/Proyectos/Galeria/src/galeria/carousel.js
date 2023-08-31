/*
    - FUNCION CAROUSEL DESPLAZA LAS IMAGENES HACIA UN SENTIDO U OTRO
        - Usaré una API llamada intersection observer
        - Creo un observador del carrousel que observará continuamente lo siguiente:
            - Imagenes que son visibles
            - Dependiendo del parámetro sentido
                - Hacia la derecha. La primera imagen oculta de la derecha la coloca al principio 
                - Hacia la izquierda. La primera imagen oculta de la izquierda se mueve una posicion a la derecha



*/

// Obtengo la galeria
const galeria = document.getElementById('galeria');

const carousel = (sentido) => {

    /*
        Configuracion del observador: Mira el elemento html cuya clase sea galeria__carousel-slides,
        sin ningún margen y será considerada visible cuando se vea el 90% (La imagen activa tiene un borde blanco)
    */
    const configuracionObservador = {
        root: document.querySelector('.galeria__carousel-slides'),
        rootMargin: '0px',
        threshold: 0.9

    }
    // Creo el observador con su configuracion, observo y cuando acabo lo elimino
    const observador = new IntersectionObserver((entradas) => {
        // Recorro los slides y me quedo un array solo con los visibles
        const slidesVisibles = entradas.filter((entrada) => {
            if (entrada.isIntersecting === true) return entrada;
        });
        
        // Dependiendo del sentido ejecutará un código u otro
        if(sentido === 'derecha'){

            // Obtengo el último slide visible y su index
            const ultimoSlideVisible = slidesVisibles[slidesVisibles.length -1];
            const indexUltimoSlideVisible = entradas.indexOf(ultimoSlideVisible);

            // Si el ultimo index visible es menor que el número de entradas -1. El primer index es cero.
            // desplazo el scroll. Ahora el primero de los visibles será el siguiente al ultimo slide visible
            // Lo introduzco en el scroll, de forma suave y lo coloco al principio
            if(indexUltimoSlideVisible < entradas.length -1)  {
                entradas[indexUltimoSlideVisible +1].target.scrollIntoView ({
                    behavior: 'smooth',
                    inline: 'start'
                });
            }
             
                  
        } else if (sentido === 'izquierda') {
            // Obtengo el primer slide visible y su index
            const primerSlideVisible = slidesVisibles[0];
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);

            // Ejecuto el scroll siempre que no esté al principio
            if(indexPrimerSlideVisible > 0){
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView ({
                    behavior: 'smooth',
                    inline: 'start'
                });                
            }
            
        }

        // Una vez acabado el codigo anterior dejo de observar
        slides.forEach((slide) => {
            observador.unobserve(slide);
        });

    }, configuracionObservador);


    // Obtengo todos los slides de la galeria
    const slides = galeria.querySelectorAll('.galeria__carousel-slide');

    // Recorro todos los slides y los mando observar
    slides.forEach((slide) => {
        observador.observe(slide);
    });
    
}


export  {carousel};