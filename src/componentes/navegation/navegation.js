import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import {
  actionUnLogged,
  resetUserData,
  actionValidadorTrue,
  resetDataPubli
} from "../../util/redux/actions/actions";
import BotonPrimario from "../../util/botones/botonPrimario";
import logo from '../../util/img/recursosimagen/letra-r.png'
import { Icon } from 'react-icons-kit'
import {home} from 'react-icons-kit/icomoon/home'
import {enter} from 'react-icons-kit/icomoon/enter'
import {plus} from 'react-icons-kit/icomoon/plus'
import {bubble} from 'react-icons-kit/icomoon/bubble'
import {user} from 'react-icons-kit/icomoon/user'
import {exit} from 'react-icons-kit/icomoon/exit'

export default function Navegation() {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);

  const crearPubli= ()=>{
    dispatch(actionValidadorTrue)
  }

  const Data = useSelector((state) => state.data);
  const userData = [...Data];

  const logOut = () => {
    dispatch(actionUnLogged);
    dispatch(resetUserData);
    dispatch(resetDataPubli)
    window.localStorage.removeItem('loggedUserApp')
    window.location.replace("https://reactjsocial.herokuapp.com")
  };

  
  return (
    <div className="contain">
      <Link to ='/'>
        <svg className= "contain__logo" fill="white"viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M228.7 309.7C282 288.6 320 236.8 320 176c0-79.41-64.59-144-144-144H32c-17.67 0-32 14.33-32 32v384c0 17.67 14.33 32 32 32s32-14.33 32-32v-128h93.43l104.5 146.6c6.25 8.75 16.09 13.42 26.09 13.42c6.422 0 12.91-1.922 18.55-5.938c14.39-10.27 17.73-30.25 7.484-44.64L228.7 309.7zM64 96.01h112c44.11 0 80 35.89 80 80s-35.89 79.1-80 79.1H64V96.01z"/></svg>
      </Link>   
      <div className="contain__nav">
          <li className="contain__nav__search">
            <input className="contain__nav__search__input"type="text" />
          </li>
          <li className="contain__nav__enlace">
            <Link className="contain__nav__enlace__icon" to="/">
              <Icon icon={home}/>
            </Link>
          </li>
          {loginState ?
          <li className="contain__nav__enlace">
            <Link className="contain__nav__enlace__icon" to="/perfil">
              <Icon icon={user}/>
            </Link>
          </li>: null}
            {loginState ? 
          <li className="contain__nav__enlace">
              <Link className="contain__nav__enlace__icon" to="/chat">
                <Icon icon={bubble}/>
              </Link>
            </li>: null}
            {loginState ?
            <li className="contain__nav__enlace">
            <Link className="contain__nav__enlace__icon" to="/crear">
              <Icon 
              icon={plus}
              />
            </Link>
          </li>: null}
        {loginState ? (
          <>
            <li className="contain__nav__enlace">
              <Icon
                icon={exit}
                onClick={logOut}
                textoBoton="Salir"
              /> 
            </li>
            <li className="contain__nav__nologed">
              {userData.map((user) => (
                <Link className="contain__nav__nologed__icon" to="/login">
                  <img alt={user.name} src=".png"/>
                </Link>
              ))}
            </li>
            </>
        ) : (
            <li className="contain__nav__nologed">
              <Link className="contain__nav__nologed" to="/login">
                <Icon icon={enter}/>
              </Link>
            </li>
        
        )}
      </div>
    </div>
  );
}
