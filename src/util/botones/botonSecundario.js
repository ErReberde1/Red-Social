import React from 'react'
import './botonSecundario.css'

export default function BotonSecundario({textoBoton, onclick}) {
  return (
    
        <button onClick={onclick} className="btn-secondary">
            {textoBoton}
        </button>
    
  )
}
