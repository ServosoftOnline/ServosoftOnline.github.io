/*
  FUNCIONALIDAD PARA EL BOTON RESPONSIVE DE LA BARRA DE NAVEGACION
    - Creo el evento para el click que hará el toggle para mostrar u ocultar el boton
*/

document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});