/*
    APLICACION: Peliculas
    
    - En esta aplicacion se usa lo siguiente:

        - css grid layout
        - local storage
        - React

    - Funcionalidad:

        - Mostrará las peliculas en pantalla
        - Un buscador
        - Se podrá eliminar y editar peliculas    
*/

import React, {useState, useEffect} from "react"
import { Buscador } from "./components/Buscador"
import { Cabecera } from "./components/Cabecera"
import { ListadoDePeliculas } from "./components/ListadoDePeliculas"
import { Crear } from './components/Crear'
import { Navegacion } from "./components/Navegacion"

// Componente ppal
const App = () => {

    // Estado
    const [peliculas, setPeliculas] = useState([]);

    // Obtengo las peliculas de localstorage y las almaceno en el estado
    useEffect(() => {
        const peliculasEnStorage = JSON.parse(localStorage.getItem('peliculas'));
        if (peliculasEnStorage && Array.isArray(peliculasEnStorage)) {
            setPeliculas(peliculasEnStorage);
        }        
    }, []);

    // Renderizo resto de componentes
    return (
        <div className="layout">
            
            {/* Cabecera */}
            <Cabecera/>        

            {/* Barra de navegación */}
            <Navegacion/>

            {/* Contenido principal */}
            <section id="content" className="content">            
                <ListadoDePeliculas
                    peliculas = {peliculas}  
                    setPeliculas={setPeliculas}                  
                />
                
            </section>

            {/* Barra lateral */}
            <aside className="lateral">
                <Buscador
                    peliculas = {peliculas}  
                    setPeliculas={setPeliculas}                     
                />

                <Crear
                    peliculas = {peliculas}
                    setPeliculas = {setPeliculas}
                />
            </aside>

            {/* Pie de página */}
            <footer className="footer">
                &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
            </footer>

        </div>
    )
}

export default App
