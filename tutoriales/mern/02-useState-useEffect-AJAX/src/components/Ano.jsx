/* 
  EJERCICIO 2 DE USO DEL HOOK USESTATE: 

    - Muestra el año acual rodeado por dos botones para aumentar o disminir el estado año
    - Formulario que permite introducir un año en concreto

    - En el input:
        - type="number" fuerza a que introduzca un número y no un texto
        - min = "0" evita que se puedan introducir números negativos
        - Uso Number en lugar de parseInt para que si borro el número se muestre un cero y no de error
*/

import React, {useState} from 'react'

export const Ano = () => {

    // Estados
    let [year, setYear] = useState(new Date().getFullYear())
    let [newYear, setNewYear] = useState(year)

    // Funciones
    const aumentaAño = () => {setYear(prevYear => prevYear + 1)}
    const disminuyeAño = () => {setYear(prevYear => prevYear - 1)} 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setYear(newYear);
        setNewYear(newYear);         
    };

    // Renderizo
    return (
        <>        
            <h2>Ejercicio 2: Aumenta o disminuye años e introduce un año concreto (Hook useState)</h2>

            <div className='form_ejercicio2'>

                {/* Botones aumentar y disminuir */}
                <button onClick={aumentaAño}>+</button>
                <p>Año actual: {year}</p>
                <button onClick={disminuyeAño}>-</button>
            
                {/* Formulario para cambiar el año */}
                <form onSubmit={handleSubmit}>

                    <input
                        type="number"
                        min="0"
                        placeholder="Introduzca año concreto"
                        value={newYear}
                        onChange={(e) => setNewYear(Number(e.target.value))}
                    />

                    <button type="submit">Cambiar año</button>
                </form>
            </div>
            
        </>
    )
}
