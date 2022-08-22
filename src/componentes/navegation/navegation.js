import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./navegation.css";
import {
  actionUnLogged,
  resetUserData,
  actionValidadorTrue,
  resetDataPubli
} from "../../util/redux/actions/actions";
import BotonPrimario from "../../util/botones/botonPrimario";
import logo from '../../util/img/recursosimagen/letra-r.png'

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
  };

  
  return (
    <div className="contain">
      <Link to ='/'>
      <svg className= "container-nav_logo" fill="white"viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M228.7 309.7C282 288.6 320 236.8 320 176c0-79.41-64.59-144-144-144H32c-17.67 0-32 14.33-32 32v384c0 17.67 14.33 32 32 32s32-14.33 32-32v-128h93.43l104.5 146.6c6.25 8.75 16.09 13.42 26.09 13.42c6.422 0 12.91-1.922 18.55-5.938c14.39-10.27 17.73-30.25 7.484-44.64L228.7 309.7zM64 96.01h112c44.11 0 80 35.89 80 80s-35.89 79.1-80 79.1H64V96.01z"/></svg>
          </Link>   
      
      <div className="container-nav">
        <li>
            <input type="text" />
        </li>
          
          <li>
            <Link className="enlace" to="/">
            <svg fill="white"height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"/></svg>
            </Link>
          </li>
          <li>
            <Link className="enlace" to="/perfil">
            <svg height="24" fill="white"viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M332.64,64.58C313.18,43.57,286,32,256,32c-30.16,0-57.43,11.5-76.8,32.38-19.58,21.11-29.12,49.8-26.88,80.78C156.76,206.28,203.27,256,256,256s99.16-49.71,103.67-110.82C361.94,114.48,352.34,85.85,332.64,64.58Z"/><path d="M432,480H80A31,31,0,0,1,55.8,468.87c-6.5-7.77-9.12-18.38-7.18-29.11C57.06,392.94,83.4,353.61,124.8,326c36.78-24.51,83.37-38,131.2-38s94.42,13.5,131.2,38c41.4,27.6,67.74,66.93,76.18,113.75,1.94,10.73-.68,21.34-7.18,29.11A31,31,0,0,1,432,480Z"/></svg>
            </Link>
          </li>
            {loginState ? <li>
              <Link className="enlace" to="/chat">
             <svg height="24" fill="white" width="24"data-name="Layer 1" id="Layer_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1</style></defs><title/><path class="cls-1" d="M64,20.5c24,0,43.5,17.76,43.5,39.59S88,99.69,64,99.69a47.6,47.6,0,0,1-11.71-1.46l-2.38-.6-2.18,1.12-9,4.63V92.44l-2.56-2C26.2,82.93,20.5,71.85,20.5,60.09,20.5,38.26,40,20.5,64,20.5M64,14C36.39,14,14,34.64,14,60.09c0,14.32,7.08,27.11,18.19,35.57V114l18.5-9.48A54,54,0,0,0,64,106.19c27.61,0,50-20.64,50-46.09S91.61,14,64,14Z"/><polygon class="cls-1" points="33.19 74.06 58.77 46.62 71.76 59.7 94.81 47.1 69.13 75.13 56.53 61.36 33.19 74.06"/></svg>
            </Link>
            </li>: ""}
            {loginState ?<li>
          <Link className="enlace" to="/crear">
           <svg fill="white" height="24" width="24" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
            </Link>
          </li>: ""}
        {loginState ? (
          
            <li>
              <BotonPrimario
                onclick={logOut}
                textoBoton="Salir"
              > 
              
              </BotonPrimario>{" "}
              {userData.map((user) => (
                <Link className="enlace" to="/login">
                  {user.username}
                </Link>
              ))}
            </li>
         
        ) : (
          
            <li>
              <Link className="enlace" to="/login">
              <svg fill="none" height="27" stroke-width="2.8" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12H19M19 12L16 15M19 12L16 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </Link>
            </li>
        
        )}
      </div>
    </div>
  );
}
