// MUESTRA LA GALERIA Y OCULTA EL RESTO

export const cargaGaleria = () => {

    const showcase = document.querySelector('.showcase');
    const galeria = document.querySelector('.galeria');
    const contacto = document.querySelector('.contactanos');
    const repertorio = document.querySelector('.repertorio');

    const miembros = document.querySelector('.miembros');    
    const bannerBolos = document.querySelector('.cards-banner-one');
    const bolos = document.querySelector('.bolos');

    showcase.classList.remove('activa');
    contacto.classList.remove('activa');
    galeria.classList.add('activa');
    repertorio.classList.remove('activa');

    miembros.classList.remove('activa');    
    bannerBolos.classList.add('activa');
    bolos.classList.add('activa');
}
