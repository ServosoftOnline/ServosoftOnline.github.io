// CABECERA DE LA APP

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