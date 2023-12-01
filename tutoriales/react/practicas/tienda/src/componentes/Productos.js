/*
    PAGINA DE PRODUCTOS:

        - La llama la pagina de la tienda
        - Importo los elementos que usaré que contienen los estilos definidos mediante styled components
        - Obtengo los productos que pasé desde App.js
        
        - Devuelvo:
            - El elemento contenedor productos con los estilos aplicados mediante styled components
            - Recorro el array productos y en cada pasa muestro su nombre y su botón para añadirlo al carrito

*/

// Elementos
import ContenedorProductos from './../elementos/ContenedorProductos';
import Producto from './../elementos/Producto';
import Boton from './../elementos/Boton';


const Productos = ({productos}) => {   

    return (
        <div>
                     
            <ContenedorProductos>
                {productos.map((producto, index) => {
                    return(
                        <Producto key= {index} >
                            <p>{producto.nombre}</p>
                            <Boton>Agregar al carrito</Boton>
                        </Producto>
                    );
                })}
            </ContenedorProductos>
        </div>
    );
}
 
export default Productos;