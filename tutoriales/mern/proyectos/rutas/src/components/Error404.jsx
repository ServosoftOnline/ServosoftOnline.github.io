import React from 'react'
import { Link } from 'react-router-dom'

export const Error404 = () => {
  return (
    <div>
        <h2>La página no existe</h2>
        <Link to='/inicio'>Pulse aquí para volver a la página de inicio</Link>
    </div>
  )
}
