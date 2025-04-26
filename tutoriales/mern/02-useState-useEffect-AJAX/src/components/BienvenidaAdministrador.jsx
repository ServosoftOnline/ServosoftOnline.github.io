import React from 'react'

export const BienvenidaAdministrador = ({nombre, privilegio}) => {
  return (
    <div>
        <p>Bienvenido {nombre} eres {privilegio} tienes privilegios</p>
    </div>
  )
}
