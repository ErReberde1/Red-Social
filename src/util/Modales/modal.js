import React from 'react'
import './modal.css'

export default function Modal({children}) {
  return (
    <div className="modal">
      {children}
    </div>
  )
}
