/*
    FUNCION QUE OBTIENE UNA CANTIDAD Y LA DEVUELVE EN EUROS
        - Devuelve una nueva instancia internacional aplicandole un formato español
        - Formate la cantidad pasada como parámetro
*/
const convertirAMoneda = (cantidad) => {
    return new Intl.NumberFormat(
        'es-ES',
        {style: 'currency' , currency: 'EUR', minimumFractionDigits: 2}
    ).format(cantidad);
}
 
export default convertirAMoneda;