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
      <div className="container-nav">
          <li>
            <Link className="enlace" to ='/'>
              Logo
            </Link>
          </li>
          <li>
            <input type="text" />
          </li>
          <li>
            <Link className="enlace" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="enlace" to="/perfil">
              Perfil
            </Link>
          </li>
          <li>
          <Link className="enlace" to="/crear">
              Crear
            </Link>
          </li>
        
        {loginState ? (
          
            <li>
              <BotonPrimario
                onclick={logOut}
                textoBoton="Salir"
              ></BotonPrimario>{" "}
              {userData.map((user) => (
                <Link className="enlace" to="/login">
                  {user.username}
                </Link>
              ))}
            </li>
         
        ) : (
          
            <li>
              <Link className="enlace" to="/login">
                Login
              </Link>
            </li>
        
        )}
      </div>
    </div>
  );
}
