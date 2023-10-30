/*
MODIFICAR LOS INPUTS DE LA TRANSFERENCIA ANTES DE REALIZARLA
    
    - Obtengo la linea de pasos entera
    - Añado un evento de click a toda la linea
        - Si hago click en la linea y no en un paso, salgo de la funcion y no hago nada
        - Si no he salido, continuo haciendo lo siguiente:
            - Obtengo el paso actual
            - Valido en cada caso. Si hay algo no valido salgo de la funcion
            - Si valido todo y no he salido, hago efectivo el paso
                - Pero solo si el paso al que quiero ir fue chequeado
                    - Quito la marca de activo al paso actual
                    - Añado la marca de activo al paso deseado
                    - Traslado al formulario deseado
                    - Cambio texto y el icono de transferir a siugiente
                    - Elimino el efecto del botón

*/

import validarCantidad from './validaciones/validarCantidad';
import validarCorreo from './validaciones/validarCorreo';
import validarNombre from './validaciones/validarNombre';

const lineaPasos = document.getElementById('linea-pasos');
lineaPasos.addEventListener('click', (e) => {
    
    if(!e.target.closest('.linea-pasos__paso')) return false;

    // Valido el paso actual antes de ir al paso deseado
    const pasoActual = document.querySelector('.linea-pasos__paso-check--active')
        .closest('.linea-pasos__paso').dataset.paso;
    
    if (pasoActual === 'cantidad') {
        if (!validarCantidad()) return false;
    };

    if (pasoActual === 'datos') {
        if (!validarNombre() || !validarCorreo()) return false;
    };

    // Cambio de paso si tiene la marca de checked
    const pasoDeseado = e.target.closest('.linea-pasos__paso');
    if(pasoDeseado.querySelector('.linea-pasos__paso-check--checked')){
        const pasoActual = lineaPasos.querySelector('.linea-pasos__paso-check--active');
        const id = pasoDeseado.dataset.paso;
        pasoActual.classList.remove('linea-pasos__paso-check--active');
        lineaPasos.querySelector(`[data-paso = ${id}] span`)
            .classList.add('linea-pasos__paso-check--active');
        
        // Cambio el botón
        const btnFormulario = document.querySelector('.formulario__btn');
        btnFormulario.querySelector('span').textContent = 'Siguiente';
        btnFormulario.querySelector('[data-icono = "banco"]')
            .classList.remove('formulario__btn-contenedor-icono--active');
        btnFormulario.querySelector('[data-icono = "siguiente"]')
            .classList.add('formulario__btn-contenedor-icono--active');
        btnFormulario.classList.remove('formulario__btn--disabled');

        // Desplazo hacia el paso deseado
        document.querySelector(`.formulario__body [data-paso="${id}"]`).scrollIntoView({
            inline: 'start',
            behavior: 'smooth'
        });

    };
});
