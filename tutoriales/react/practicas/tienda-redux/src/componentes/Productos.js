/*
    PAGINA DE PRODUCTOS:
        - Para usar redux y obtener el estado global
            - importo connect desde react-redux

            - Defino la función mapStateToProps
                - recibe como parámetro un objeto con el estado global.
                - devuelve un objeto que contiene:
                    - Las propiedades que queremos inyectar al componente Productos
                    - cuyo contenido lo obtengo del parámetro recibido con el objeto estado global

            - antes de exportar el componente Productos:
                - Lo Mapeo al estado global a propiedades. (función mapStateToProps)
                - Y lo conectamos con el estado global (connect)

            - Ahora la propiedad productos ya está accesible desde el estado global
                - Puedo usar la propiedad productos dentro del componente Productos
            
        

*/

// Elementos
import ContenedorProductos from './../elementos/ContenedorProductos';
import Producto from './../elementos/Producto';
import Boton from './../elementos/Boton';

// Redux
import { connect } from 'react-redux';

//La propiedad productos ya está accesible sin haberla pasado mediante prop driling
const Productos = ({productos, agregarProductoAlCarrito}) => {

    return (
        <ContenedorProductos>
            {productos.map((producto, index) => {
                return(
                    <Producto key= {index} >
                        <p>{producto.nombre}</p>
                        <Boton onClick={()=>agregarProductoAlCarrito(producto.id, producto.nombre)}
                            >Agregar al carrito
                        </Boton>
                    </Producto>
                );
            })}
        </ContenedorProductos>
    );        
    
}

// Devuelvo la propiedad productos con el contenido de productos procedente del estado global
const mapStateToProps = (estado) => {
    return {
        productos: estado.productos
    }
}
    
// La propiedad productos la conecto al estado global 
export default connect(mapStateToProps)(Productos);