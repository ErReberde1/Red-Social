import React,{useEffect, useState} from 'react'
import Main from '../../util/cajas/tagmain'
import TagMainGrid from '../../util/cajas/tagmaingrid.js'
import './perfil.css'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {actionLogged, actionSaveDataPubli} from '../../util/redux/actions/actions'


export default function Pefil() {

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

 

  const getHistorias = async()=>{

    const {data} = await axios.get("http://localhost:3001/api/fotos/"+ author)
    console.log(data)
    await dispatch(actionSaveDataPubli(data))
    console.log(dataPubli)
    
  } 
  
  useEffect(()=>{
    /* Object.keys(dataPubli).length === 0 ? getHistorias() : console.log("Ya las tenemos cargadas") */
    
    getHistorias()
    
  },[])

  
  return (

      <TagMainGrid className="grid-perfil" display="grid" grid="1fr 1fr">
        <div>
          <h2 className="grid-perfil-page"> Mi perfil</h2>
            {dataPubli.map(e=>
            
            <div className="grid-perfil-titulo-card-publi">
              <h2 className="grid-perfil-titulo">{e.titulo}</h2>
              <p className="grid-perfil-p">{e.texto}</p>
              <div className="grid-perfil-box">
                <b className="grid-perfil-box-boton">Me gusta</b>
                <b className="grid-perfil-box-boton">Comentar</b> 
                <b className="grid-perfil-box-boton">Compartir</b>
              </div>
              <input className="grid-perfil-input" placeholder="Comenta"/>
            </div>
            
          )
        
        } 
        </div>
        <Main>2</Main>
      
      </TagMainGrid>
    
  )
}
