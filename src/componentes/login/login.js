import React, { useState } from 'react'
import ModalForm from '../../util/Modales/modalformlogin'
import Box from '../../util/cajas/box'
import './login.css'


export default function Login() {

  

    const [inputs ,setInputs] = useState([{ "type":"email",
                                            "name": "email"
                                            },
                                            { "type":"password",
                                            "name": "password"}])

    
  return (
    
    <div >
        {<ModalForm 
          title="Login" 
          textoBoton="Enviar" 
          inputs={inputs}
          />  
            }
    </div>
   
  )
}
