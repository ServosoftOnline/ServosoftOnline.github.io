/*
    CABECERA DE LA APP
        - Contiene la cabecera de color azul
            - A la izda el titulo 
            - A la derecha un boton que hará que no se muestren las tareas completadas
*/

import React from "react";
const Header = () => {
    return (
        <header className="header">
            <h1 className="header__titulo">Lista de tareas</h1>
            <button className="header__boton">
                No mostrar tareas completadas
                {/* Aqui insertaría el icono */}
            </button>
        </header>
      );
}
 
export default Header;