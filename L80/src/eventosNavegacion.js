import { cargaNosotros } from "./cargaNosotros";
import { cargaGaleria } from "./cargaGaleria";
import { cargaContactanos } from "./cargaContactanos";
import { cargaRepertorio } from "./cargaRepertorio";

// click en la barra de navegacion
const navegacion = document.querySelector ('.nav-menu');
navegacion.addEventListener('click', (e) => {
    const paginaSeleccionada = e.target.text;
    if (paginaSeleccionada === 'Nosotros') cargaNosotros();
    if (paginaSeleccionada === 'Repertorio') cargaRepertorio();
    if (paginaSeleccionada === 'Actuaciones') cargaGaleria();
    if (paginaSeleccionada === 'Contáctanos') cargaContactanos();
})


