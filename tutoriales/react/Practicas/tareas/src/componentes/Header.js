// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEyesSlash } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__titulo">Lista de tareas</h1>
            <button className="header__boton">
                No mostrar completadas
                {/*
                    Adjuntar aquí el icono de fontawesome cuando lo tenga resuelto 
                    <FontAwesomeIcon icon={faEyesSlash} classname ='header__icono-boton/>
                    
                */}
            </button>

        </header>        
    );
}
 
export default Header;