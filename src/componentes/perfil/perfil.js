import React,{useEffect, useState} from 'react'
import Main from '../../util/cajas/tagmain'
import TagMainGrid from '../../util/cajas/tagmaingrid.js'
import './style.scss'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {actionLogged, actionSaveDataPubli} from '../../util/redux/actions/actions'

import BotonSecundario from '../../util/botones/botonSecundario'


export default function Pefil() {

  const [ventana, setVentana] = useState("publicaciones")

  const dispatch = useDispatch()
  const data = useSelector(state=> 
    state.data
    )
  const loginState = useSelector(state=> 
      state.login
      )
  const dataPubli = useSelector (state=> 
    state.dataPubli
    )
  const author= data.map(e=>e._id)
    console.log(data)
 

  const getHistorias = async()=>{

    const {data} = await axios.get("https://backend-express-production-dff3.up.railway.app/api/fotos/"+ author)
    console.log(data)
    await dispatch(actionSaveDataPubli(data))
    console.log(dataPubli)
    
  }

  const changeVentana = (parametro)=>{
    setVentana(parametro)
  }
  
  useEffect(()=>{
    /* Object.keys(dataPubli).length === 0 ? getHistorias() : console.log("Ya las tenemos cargadas") */
    
    getHistorias()
    
  },[])

  
  return (

      <div className="perfil">
        {ventana == "publicaciones" ? 
        <>
          <h2 className="perfil__nombre">{data[0].nombre.toUpperCase()} {data[0].apellidos.toUpperCase()} </h2>
          <BotonSecundario onclick={()=>changeVentana("publicaciones")}textoBoton="Publicaciones"/> 
          <BotonSecundario onclick={()=>changeVentana("informacion")}textoBoton="Información "/> 
          <BotonSecundario onclick={()=>changeVentana("amigos")}textoBoton="Amigos"/>
            {dataPubli.map(e=>
            
          <div className="perfil__card" key ={e.id}>
            <h2 className="perfil__card__titulo">{e.titulo}</h2>
            <p className="perfil__card__texto">{e.texto}</p>
            <div className="perfil__card__botones">
              <b className="perfil__card__botones__megusta">Me gusta</b>
              <b className="perfil__card__botones__comparte">Compartir</b>
            </div>
              <input className="grid-perfil-input" placeholder="Comenta"/>
          </div> 
            
          )} 
        </>  : ventana == "informacion" ? 
        
        <div>
          <h2 className="grid-perfil-page">{data[0].nombre} {data[0].apellidos} </h2>
            <BotonSecundario onclick={()=>changeVentana("publicaciones")}textoBoton="Publicaciones"/> 
            <BotonSecundario onclick={()=>changeVentana("informacion")}textoBoton="Información "/> 
            <BotonSecundario onclick={()=>changeVentana("amigos")}textoBoton="Amigos"/>
            {data.map(e=><div>
              <p>Nombre: {e.nombre}</p>
              <p>Apellido: {e.apellidos}</p>
              <p>Residencia: {e.direccion}</p>
              <p>De donde: {e.direccion}</p>
              <p>Género: {e.genero}</p>
              <p>Cumpleaños: {e.cumpleaños}</p>
              <p>Estado civil: {e.estado_civil}</p>
            </div>)}
        </div> : 
           <div>
          <h2 className="grid-perfil-page">{data[0].nombre} {data[0].apellidos} </h2>
            <BotonSecundario onclick={()=>changeVentana("publicaciones")}textoBoton="Publicaciones"/> 
            <BotonSecundario onclick={()=>changeVentana("informacion")}textoBoton="Información "/> 
            <BotonSecundario onclick={()=>changeVentana("amigos")}textoBoton="Amigos"/>
        </div>}
        </div>
      
     
  )
}
