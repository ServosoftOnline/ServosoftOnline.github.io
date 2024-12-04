/*
    MOSTRARÁ LA SECCION DEL REPERTORIO, OCULTA EL RESTO
*/

export const cargaRepertorio = () => {
    
    // Muestro solo el contenido de la pestaña repertorio
    const showcase = document.querySelector('.showcase');
    const galeria = document.querySelector('.galeria');
    const contacto = document.querySelector('.contactanos');
    const repertorio = document.querySelector('.repertorio');

    const miembros = document.querySelector('.miembros');    
    const bannerBolos = document.querySelector('.cards-banner-one');
    const bolos = document.querySelector('.bolos');

    showcase.classList.remove('activa');
    contacto.classList.remove('activa');
    galeria.classList.remove('activa');
    repertorio.classList.add('activa');

    miembros.classList.remove('activa');    
    bannerBolos.classList.remove('activa');
    bolos.classList.remove('activa');

}
