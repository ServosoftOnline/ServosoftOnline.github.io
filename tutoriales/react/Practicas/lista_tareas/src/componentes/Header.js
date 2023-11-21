/*
    CABECERA DE LA APP
        - Contiene la cabecera de color azul
            - A la izda el titulo 
            - A la derecha un boton que hará que no se muestren las tareas completadas
*/

import React from "react";
const Header = ({mostrarCompletadas, cambiarMostrarCompletadas}) => {
    {console.log('al entrar mostrar completadas: ' + mostrarCompletadas)}

            
    return (
        <header className="header">
            <h1 className="header__titulo">Lista de tareas</h1>
            {mostrarCompletadas ?
                <button className="header__boton">
                    No mostrar completadas
                    <i
                        className="
                            fa-regular fa-eye-slash
                            header__icono-boton
                        "
                        
                    >
                    </i>
                </button>
            :
                <button className="header__boton">
                    Mostrar completadas
                    <i
                        className="
                            fa-solid fa-eye
                            header__icono-boton
                        "
                        
                    >
                    </i>
                </button>
                
            
            } 
            
        </header>
      );
}
 
export default Header;