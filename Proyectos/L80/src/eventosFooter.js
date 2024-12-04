import { cargaNosotros } from "./cargaNosotros";
import { cargaGaleria } from "./cargaGaleria";
import { cargaContactanos } from "./cargaContactanos";
import { cargaRepertorio } from "./cargaRepertorio";

// click en la barra de navegacion
const footer = document.querySelector ('.footer-container');
footer.addEventListener('click', (e) => {
    const paginaSeleccionada = e.target.text;
    console.log(paginaSeleccionada);
    if (paginaSeleccionada === 'Nosotros') cargaNosotros();
    if (paginaSeleccionada === 'Repertorio') cargaRepertorio();
    if (paginaSeleccionada === 'Actuaciones') cargaGaleria();
    if (paginaSeleccionada === 'Contáctanos') cargaContactanos();
})
