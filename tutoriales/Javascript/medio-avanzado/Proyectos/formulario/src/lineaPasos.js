/*
    MODIFICAR LOS INPUTS DE LA TRANSFERENCIA ANTES DE REALIZARLA
        - Obtengo la linea de pasos entera
        - Añado un evento de click a toda la linea
            - Si hago click en la linea y no en un paso, salgo directamente y no hago nada
            - Si no he salido, continuo haciendo lo siguiente:
                - Obtengo el paso actual
                - Valido en cada caso. Si hay algo no valido salgo directamente
                - Si valido todo y no he salido, hago efectivo el paso
        


*/

import validarCantidad from './validaciones/validarCantidad';
import validarCorreo from './validaciones/validarCorreo';
import validarNombre from './validaciones/validarNombre';

const lineaPasos = document.getElementById('linea-pasos');
lineaPasos.addEventListener('click', (e) => {

    if(!e.target.closest('.linea-pasos__paso')) return false;
    const pasoActual = document.querySelector('.linea-pasos__paso-check--active')
        .closest('.linea-pasos__paso').dataset.paso;
    
    if (pasoActual === 'cantidad') {
        if (!validarCantidad()) return false;
    };

    if (pasoActual === 'datos') {
        if (!validarNombre() || !validarCorreo()) return false;
    };

    
    console.log('Cambiando de paso ...');

});
