/*
    FUNCION REDUCER:

        - Funciones que editan el estado global
        - Serán guardadas en una carpeta llamada reducers en archivos independientes
        - En este caso la tienda modificara el estado global añadiendo productos al carrito

        - Defino su estado inicial que será un objeto con las siguientes propiedades:
            - productos que será un arreglo que contiene un objeto por cada producto
            - carrito que será un arreglo con los ids de los productos agregados

        - Defino la función y la exporto por defecto
            - Tendrá dos argumentos:
                - Su estado inicial
                - Una acción, en este caso añadir un producto

            - Devuelve siempre un estado. Ya sea editado o no
   

*/

const estadoInicial = {

    productos: [
        {id: 1, nombre: 'Producto1'},
        {id: 2, nombre: 'Producto2'},
        {id: 3, nombre: 'Producto3'},
        {id: 4, nombre: 'Producto4'}
    ],
    
    carrito : []
}

const reducer = (estado = estadoInicial , accion) => {
    return estado;
    
}
 
export default reducer;