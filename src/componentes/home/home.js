import React,{useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import Main from '../../util/cajas/tagmain'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css';
import axios from 'axios'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TagMainGrid from '../../util/cajas/tagmaingrid';
import imagenes from '../../util/img/imagenes'
import './home.css'
import {actionRegister,actionUnRegister,actionValidadorTrue, actionValidadorFalse  } from '../../util/redux/actions/actions'
import Crear from '../crear/crear'
import Chat from '../../util/chat/chat'
import '../perfil/perfil.css'

export default function Home() {

  const [histories, setHistories] = useState([])

  const validadorState = useSelector(state=>
    state.validador
    )

  const dispatch = useDispatch()

  const loginState = useSelector(state=>
    state.login
  )

  const getHistorias= async()=>{
    const res = await axios.get("https://backend-reactjsocial.herokuapp.com/api/fotos")
    
    setHistories(res.data)
    console.log(histories)
  }

  

  

  useEffect(()=>{
    getHistorias()
},[])
  
  
  return (
    <div>
    
    {loginState ? 
    
        <Main className="tagMainGri-grid-70">{histories.map(historie =>
        <div className="grid-perfil-titulo-card-publi">
          <h5>{historie.author}</h5>
          <h2 className="grid-perfil-titulo">{historie.titulo}</h2>
          <p className="grid-perfil-p">{historie.texto}</p>
          <div className="grid-perfil-box">
            <b className="grid-perfil-box-boton">Me gusta</b>
            <b className="grid-perfil-box-boton">Comentar</b> 
            <b className="grid-perfil-box-boton">Compartir</b>
          </div>
          <input className="grid-perfil-input" placeholder="Comenta"/>
        </div>
          
          )}</Main>
        
       :
      <TagMainGrid >
        <Main>
         <h1> Porque compartir es vivir</h1>
         <h4> ¡Únete ya y empieza a hacerlo!</h4>
        <Swiper
          modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
          
          onAutoplayStart
          spaceBetween={10}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          { imagenes.map(e=>
            <SwiperSlide>
              <img 
                height="500" 
                width="500" 
                alt= {e} 
                src={e}/>
            </SwiperSlide>)} 
        </Swiper>
        </Main>
        <Main >
          <div class="register-login">
            <h2> <Link to='/login' onClick={()=>dispatch(actionRegister)}>Registrate</Link></h2>
            <h2> <Link to='/login' onClick={()=>dispatch(actionUnRegister)}>Login</Link></h2>
          </div>
        </Main>
      </TagMainGrid>}
      
    </div>
    
  )
}
