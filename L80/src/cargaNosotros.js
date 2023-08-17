// MUESTRA SHOWCASE Y MIEMBROS Y OCULTA EL RESTO

export const cargaNosotros = () => {
    
    const showcase = document.querySelector('.showcase');
    const contacto = document.querySelector('.contactanos');
    const galeria = document.querySelector('.galeria');
    const repertorio = document.querySelector('.repertorio');

    const miembros = document.querySelector('.miembros');    
    const bannerBolos = document.querySelector('.cards-banner-one');
    const bolos = document.querySelector('.bolos');

    showcase.classList.add('activa');
    contacto.classList.remove('activa');
    galeria.classList.remove('activa');
    repertorio.classList.remove('activa');

    miembros.classList.add('activa');    
    bannerBolos.classList.remove('activa');
    bolos.classList.remove('activa');
}
