/*
  COMPONENTE QUE REALIZA UNA BUSQUEDA DE PELICULAS A PARTIR DEL TITULO:

    - El estado peliculaABuscar contendrá el titulo de la pelicula a buscar
    - Mientras que se escribe en el campo del buscador se hace una busqueda a tiempo real
      - Para ello le aplico a ese campo el evento onChange y la funcion handleChange hace la busqueda

    - La funcion handleChange a tiempo real:
      - Actualiza el estado de la pelicula a buscar mientras se escribe
      - Va almacenando las peliculas encontradas recorriendo el estado peliculas
        - Y en cada iteracción ve si la pelicula de la iteraccion tiene incluida la pelicula a buscar
    
*/
import React, {useState} from 'react'

export const Buscador = ({peliculas, setPeliculas}) => {

  // Estado
  const [peliculaABuscar, setPeliculaABuscar] = useState('');
  const [noEncuentro, setNoEncuentro] = useState(false);

  // Funcion que se ejecuta mientras se produce el evento onChange.
  const handleChange = (e) => {
    
    // Actualiza el estado de la pelicula a buscar de forma dinámica
    setPeliculaABuscar(e.target.value);

    // Localiza las coincidencias filtrando el estado peliculas con los caracteres introducidos
    let peliculas_encontradas = peliculas.filter(pelicula => {
      return pelicula.titulo.toLowerCase().includes(peliculaABuscar.toLowerCase());
    });

    // Si no encontrara peliculas obtenemos todas las peliculas de local storage y actualizamos estado
    if(peliculaABuscar.length <= 1 || peliculas_encontradas <=0) {
      peliculas_encontradas = JSON.parse(localStorage.getItem('peliculas'));
      setNoEncuentro(true);
    } else {
      setNoEncuentro(false);
    }

    // Voy actutalizando el estado de las peliculas para que valla refrescando
    setPeliculas(peliculas_encontradas);
  }

  // Renderizo el componente  
  return (
    <div className="search">

        <h3 className="title">Buscador</h3>

        {/* Mensaje de no encuentra peliculas si no se encuentran y ademas escribí al menos 2 caracteres */}
        {(noEncuentro && peliculaABuscar.length>1) &&
          <span className='not_found'>
            No se encontraron coincidencias
          </span>}

        {/* Formulario */}
        <form>

            <input
              type="text"
              id="search_field" 
              name='find'
              autoComplete='off'
              value={peliculaABuscar}
              onChange={handleChange}
            />
            <button id="search">Buscar</button>
        </form>

    </div>
  )
}
