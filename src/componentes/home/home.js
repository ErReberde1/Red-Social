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


export default function Home() {

  const validadorState = useSelector(state=>
    state.validador
    )

  const dispatch = useDispatch()

  const loginState = useSelector(state=>
    state.login
  )

  

  const windowSize =()=>{
    const pantalla = window.screen.width
    console.log(pantalla)
  }

  

  useEffect(()=>{
    windowSize()
})
  
  
  return (
    <div>
    
    {loginState ? 
    
      <TagMainGrid>
        <Main className="tagMainGri-grid-70"><Chat/></Main>
        <Main className="tagMainGri-grid-30"></Main>
      </TagMainGrid> :
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
