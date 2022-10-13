import React, { useState } from 'react'
import ModalForm from '../../util/Modales/modalformlogin'
import Box from '../../util/cajas/box'



export default function Login() {

  

    const [inputs ,setInputs] = useState([{ "type":"email",
                                            "name": "email"
                                            },
                                            { "type":"password",
                                            "name": "password"}])

    
  return (
    
    <>
        {<ModalForm 
          title="Login" 
          textoBoton="Enviar" 
          inputs={inputs}
          />  
            }
    </>
   
  )
}
