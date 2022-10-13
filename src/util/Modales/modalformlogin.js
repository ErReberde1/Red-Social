import React,{ useState, Suspense, lazy} from 'react'
import axios from 'axios'
import BotonPrimario from '../botones/botonPrimario'
import {useSelector, useDispatch} from 'react-redux'
import {store} from '../redux/store/store.js'
import {loginReducer} from '../redux/reducers/loginReducer'
import {actionLogged, actionUnLogged, saveUserData,actionRegister, actionUnRegister} from '../redux/actions/actions'
import './modalformlogin.css'
import io from 'socket.io-client'
import './modalformlogin.scss'
import Loader from '../loader/loader.js'

const ModaLoged = lazy(()=> import('./modaloged'))
const ModalFormRegister = lazy(()=> import('./modalformregister'))

export default function ModalForm({title, textoBoton, inputs}) {

  

  // carga estado de login
  const loginState = useSelector(state=>
    state.login
  )

  const loginRegister = useSelector(state=>
    state.register
  )

  

  // carga el estado de data del usuario 
  const keepDataUser = useSelector(state =>
    state.data
    )
  const dispatch = useDispatch()
    
  //instancia las propietades pasadas por el componente padre Login
  let valueInputs = [...inputs]
  
  //Creamos el estado local para guardar los datos que se introducen en el input
  const [datos, setDatos] = useState({
    user: "", 
    password: "",
    email: "",
    nombre: ""
  })


  
  // función para enviar datos al servidor y comprobar que el usuario existe 
  const enviarDatos = async(e)=>{
    e.preventDefault() // quitamos el evento submit del boton para que no refresque la página
    const res1 = await axios.post('https://backend-reactjsocial.herokuapp.com/api/signin',{
      email: datos.email,
      contraseña: datos.password
    }) // metemos en variable "res" la respuesta del servidor
    const token = res1.data.token
    const user= res1.data.userFound
    console.log(token)
    console.log(user)
    
    
    // si dentro de la variable "res" (es un objeto) hay la propiedad data.message y es igual a "logged"
    // Esta función ayuda a saber si hay un usuario logeado y además guarda su información de manera global y en el localStorage del navegador (cookie)
    
    if (token){
      dispatch(actionLogged)  // disparamos la acción "actionLogged" que devuelve estado global "TRUE"
      dispatch(saveUserData(user)) // además disparamos la acción "saveUserData" que recibe res.data como parámetro y lo guarda en un estado global

      // Ejecutamos la función del localStorage para poder guardar los datos de forma local. 
      window.localStorage.setItem(
        'loggedUserApp', JSON.stringify({user, token})
        )
    } else{
    
      alert("Usuario o contraseña incorrecto incorrecto")
    }
    //Finalmente dejamos el estado "Datos" como un objeto con propiedades vacias como lo hemos tenido al principio.
    setDatos({
      user: "", 
    password: "",
    email: "",
    nombre: ""
    })  

    
    
  }

  const registro =()=>{
    dispatch(actionRegister)
  }
  
  // Este evento lo meteremos en el botón login para que guarde los datos en el estado "Datos"
  const handleInputChange = async (event)=>{
     await setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
    
  }
  console.log(datos)
  
  return (
    //estamos utilizando una ternaria para condicionar el renderizado. Si loginState es TRUE, se renderizará el componente <ModaLoged>
    //ModaLoged es un componente que tiene toda la información del usuario logeado. (Configuración de la cuenta)
    //si es FALSE, se rendizará un div con 2 inputs (usuario y contraseña) y el botón para logearte.
    <Suspense  fallback={<Loader/>}>
    <div className="login">
        {loginState ? <ModaLoged/> : 
        loginRegister ? <ModalFormRegister/> : 
        <div className="login__container">
          
          <form id="form" className="login__container__form">
            <h1 className="login__container__form__titulo">{title}</h1>
          
            {valueInputs.map(e => React.createElement("input", {type: e.type,
                                                              placeholder: e.name,
                                                              className: "login__container__form__input",
                                                              name: e.name,
                                                              onChange: handleInputChange,
                                                              key: e.name}))}
            <BotonPrimario textoBoton={textoBoton} onclick={enviarDatos} />
            <BotonPrimario textoBoton="Registrarme" onclick={registro} />
          <p> ¿Has olvidado tu contraseña?</p>
          </form>
        </div>}
    </div>
    </Suspense>
    
  )
  }
