import React, {useState}  from 'react'
import Main from '../cajas/tagmain'
import BotonPrimario from '../botones/botonPrimario'
import axios from 'axios'
import './modalformregister.css'

export default function ModalFormRegister() {

  const enviarDatos = async(e)=>{
    e.preventDefault()
    const res = await axios.post('https://backend-express-production-dff3.up.railway.app/api/user', {
      nombre: datos.nombre, 
      apellidos: datos.apellidos,
      cumpleaños:datos.cumpleaños,
      username:datos.username,
      email: datos.email,
      contraseña: datos.contraseña
    })
    console.log(res)
  }

  const [datos, setDatos] = useState({
    nombre: "", 
    apellidos: "",
    cumpleaños:"",
    username:"",
    email: "",
    contraseña: "",

  })

  const handleInputChange = async (event)=>{
    await setDatos({
     ...datos,
     [event.target.name] : event.target.value
   })
   
 }
  return (
    <div className="container-register">
        <h1 className="container-register_form_h1">Registro</h1>
        <form className="container-register_form"onSubmit={enviarDatos}>
            <input
              className="container-register_form_input"
              type="text" 
              placeholder="Nombre"
              name= "nombre"
              required
              onChange={handleInputChange}/>
            <input
              className="container-register_form_input" 
              type="text" 
              placeholder="Apellidos"
              name= "apellidos"
              required
              onChange={handleInputChange}/>
            <input
              className="container-register_form_input" 
              type="date"
              placeholder="Fecha de nacimiento"
              name= "cumpleaños"
              required
              onChange={handleInputChange}/>
            <input 
              className="container-register_form_input"
              type="text" 
              placeholder="Username"
              name= "username"
              required
              onChange={handleInputChange}/>
            <input
              className="container-register_form_input"
              type="email" 
              placeholder="email"
              name= "email"
              required
              onChange={handleInputChange}/>
            <input
              className="container-register_form_input" 
              type="password" 
              placeholder="Contraseña"
              name= "contraseña"
              required
              onChange={handleInputChange}/>
            <BotonPrimario textoBoton="Registrarme" type="submit"/>
        </form>
      </div>
  )
}

