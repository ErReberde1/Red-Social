import React from 'react'
import './botonPrimario.css'

export default function BotonPrimario({textoBoton, onclick}) {
  return (
    
        <button onClick={onclick} className="btn-primary">
            {textoBoton}
        </button>
    
  )
}
