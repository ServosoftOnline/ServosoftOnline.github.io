// MUESTRA LA FORMAS DE CONTACTO

export const cargaContactanos = () => {

    const showcase = document.querySelector('.showcase');
    const galeria = document.querySelector('.galeria');
    const repertorio = document.querySelector('.repertorio');
    const contacto = document.querySelector('.contactanos');
    
    const miembros = document.querySelector('.miembros');
    const bannerBolos = document.querySelector('.cards-banner-one');
    const bolos = document.querySelector('.bolos');

    showcase.classList.remove('activa');
    galeria.classList.remove('activa');
    repertorio.classList.remove('activa');
    contacto.classList.add('activa');

    miembros.classList.add('activa');
    bannerBolos.classList.remove('activa');
    bolos.classList.remove('activa');

}
