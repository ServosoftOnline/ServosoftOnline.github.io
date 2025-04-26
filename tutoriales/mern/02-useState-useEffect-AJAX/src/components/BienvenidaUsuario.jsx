import React from 'react'

export const BievenidaUsuario = ({nombre, privilegio}) => {
  return (
    <div>
        <p>Bienvenido {nombre} eres {privilegio}</p> 
    </div>
  )
}
