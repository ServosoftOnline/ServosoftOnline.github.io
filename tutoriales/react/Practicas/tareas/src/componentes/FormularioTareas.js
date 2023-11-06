// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus} from '@fortawesome/free-solid-svg-icons'

const FormularioTareas = () => {
    return (
            
            <form action="" className="formulario-tareas">
                <input 
                    type = "text"
                    className="formulario-tareas__input"
                    placeholder="Escribe una tarea"
                />
                <button
                    type = "submit"
                    className="formulario-tareas__btn"
                >
                    {/* Icono fontawesome que aun no funciona */}
                    {/* <FontAwesomeIcon icon={faPlus} classname ='formulario-tareas__btn/> */}
                    
                </button>                     

                
            </form>
        
      );
}
 
export default FormularioTareas;