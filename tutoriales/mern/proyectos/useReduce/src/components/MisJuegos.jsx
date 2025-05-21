import React from 'react'

// Componente funcional para mostrar y agregar videojuegos
const MisJuegos = () => {

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const juego = {            
            id: new Date().getTime(), 
            nombre: e.target.nombre.value,
            descripcion: e.target.descripcion.value
        }
        console.log(juego);
    }

    // Renderizo
    return (
        <div>
            {/* Lista ordenada de videojuegos */}
            <h2>Mis videojuegos (15)</h2>        
            <ol>
                <li>Gta</li>
                <li>God of war</li>
                <li>Fifa</li>
                <li>Call of duty</li>
                <li>League of legends</li>
            </ol>

            {/* Formulario para agregar un nuevo videojuego */}        
            <form className='formulario' onSubmit={handleSubmit}>
                <div className='campo'>
                    <label htmlFor="nombre">Nombre del videojuego:</label>
                    <input type="text" name="nombre" id="nombre" />
                </div>
                <div className='campo'>
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea name="descripcion" id="descripcion"></textarea>
                </div>
                <input type="submit" value="Agregar" />
            </form>
        </div>
    )
}

export default MisJuegos
