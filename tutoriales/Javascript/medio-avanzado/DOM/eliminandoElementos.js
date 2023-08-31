/*

DOM: ELIMINANDO ELEMENTOS DEL DOCUMENTO HTML
    - Pasos:
        1.- Obtener su elemento padre
        2.- Obtener el elemento a eliminar
        3.- Usar padre.removeChild(elementoAEliminar) para eliminar el elemento hijo.
            - Si no quedaran hijos daría un error

*/

// Obtengo el elemento padre y elemento a eliminar. Si existe el objeto a eliminar lo elimino
const eliminarCaja = () => {
    const padre = document.getElementById('contenedor1');
    const elementoAEliminar = padre.querySelector('.caja');
    if (elementoAEliminar) padre.removeChild(elementoAEliminar);
}