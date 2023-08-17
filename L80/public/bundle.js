'use strict';

/*
  FUNCIONALIDAD PARA EL BOTON RESPONSIVE DE LA BARRA DE NAVEGACION
    - Creo el evento para el click que hará el toggle para mostrar u ocultar el boton
*/

document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

/*
  FUNCIONALIDAD PARA LA MUESTRA DE IMAGENES POCO A POCO
    - La imagen del showcase aparece al inicio. prueba
    - El resto aparecen con un retardo (delay) de medio segundo
*/

ScrollReveal().reveal('.showcase.activa');
ScrollReveal().reveal('.miembros.activa', { delay: 500});
ScrollReveal().reveal('.galeria.activa', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one.activa', { delay: 800 });
ScrollReveal().reveal('.bolos.activa', { delay: 800 });

ScrollReveal().reveal('.cards-banner-two', { delay: 800 });
ScrollReveal().reveal('.noticias', { delay: 800 });
ScrollReveal().reveal('.social', { delay: 800 });
ScrollReveal().reveal('.footer-links', { delay: 800 });

// MUESTRA SHOWCASE Y MIEMBROS Y OCULTA EL RESTO

const cargaNosotros = () => {
    
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
};

// MUESTRA LA GALERIA Y OCULTA EL RESTO

const cargaGaleria = () => {

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
};

// MUESTRA LA FORMAS DE CONTACTO

const cargaContactanos = () => {

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

};

// MUESTRA EL REPERTORIO Y OCULTA EL RESTO

const cargaRepertorio = () => {
  
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
};

// click en la barra de navegacion
const navegacion = document.querySelector ('.nav-menu');
navegacion.addEventListener('click', (e) => {
    const paginaSeleccionada = e.target.text;
    if (paginaSeleccionada === 'Nosotros') cargaNosotros();
    if (paginaSeleccionada === 'Repertorio') cargaRepertorio();
    if (paginaSeleccionada === 'Actuaciones') cargaGaleria();
    if (paginaSeleccionada === 'Contáctanos') cargaContactanos();
});

// click en la barra de navegacion
const footer = document.querySelector ('.footer-container');
footer.addEventListener('click', (e) => {
    const paginaSeleccionada = e.target.text;
    console.log(paginaSeleccionada);
    if (paginaSeleccionada === 'Nosotros') cargaNosotros();
    if (paginaSeleccionada === 'Repertorio') cargaRepertorio();
    if (paginaSeleccionada === 'Actuaciones') cargaGaleria();
    if (paginaSeleccionada === 'Contáctanos') cargaContactanos();
});

cargaNosotros();
