/*
    CONTIENE Y MUESTRA LOS PRODUCTOS AL ENTRAR EN LA PAGINA DE LA TIENDA:

        - Importo los elementos que usaré que contienen los estilos definidos mediante styled components
        - Creo los productos como un array de objetos, con un objeto por cada producto
        - Devuelvo:
            - La cabecera con el titulo prode


*/

// Elementos
import ContenedorProductos from "./../elementos/productos/ContenedorProductos";
import Producto from "./../elementos/productos/Producto";
import Boton from "./../elementos/productos/Boton";



const Productos = () => {

    const productos = [
        {id: 1, nombre: 'Producto1'},
        {id: 2, nombre: 'Producto2'},
        {id: 3, nombre: 'Producto3'},
        {id: 4, nombre: 'Producto4'}
    ];

    return (
        <div>
            <h3>Productos</h3>            
            <ContenedorProductos>
                {productos.map((producto, index) => {
                    console.log(producto);

                })}
            </ContenedorProductos>
        </div>
    );
}
 
export default Productos;


 

 
