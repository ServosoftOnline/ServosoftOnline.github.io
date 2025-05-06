import React, {useState} from 'react';
import { useNavigate, useParams} from 'react-router-dom';

// Componente
export const Inicio = ({setNombre, setApellido} ) => {

  // Estado para tener control de los errores
  const [error,setError] = useState('');
  
  // Obtengo los parámetros y si no existieran le asigno estos valores por defecto
  const {nombre='Usuario', apellido='sin registrar'} = useParams();   

  // Creo la constante que me permite navegar
  const navegar = useNavigate();

  // Función que recoge la información del formulario y redirige hacia esta propia pagina
  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtiene el nombre y apellido desde el formulario
    const nombre = e.target.nombre.value;
    const apellido = e.target.apellido.value;    

    // Redirige o modifica los estados error, nombre y apellido
    if(nombre.length>0 && apellido.length>0) {
      navegar(`/inicio/${nombre}/${apellido}`);
      setNombre(nombre);
      setApellido(apellido);
      setError('');
    } else {
      setError('Falta informacion');
    }
  }

  // Renderizo usuario sin registrar o la bienvenida y el formulario
  return (
    <div className='pagina-web'>

      <div className='pagina-inicio'>
        <h2>Introduca datos de usuario:</h2>

        {/* Formulario para introducir nombre del usuario */}        
        <form className='formulario' onSubmit={handleSubmit}>

          <div className='input'>
            <label htmlFor="nombre">Nombre</label>
            <input type='text' name='nombre'/>
          </div>

          <div className='input'>
            <label htmlFor="apellido">Apellido</label>
            <input type='text' name='apellido'/>            
          </div>
          
          <button className='boton' type='submit' name ='enviar'>Inicie sesión</button>
        </form>

        {/* Muestra el error */}
        <div className='error'>
          {error}
        </div>

      </div>

    </div>      
  )
}
