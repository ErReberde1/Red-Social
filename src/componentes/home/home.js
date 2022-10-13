import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "swiper/css";
import axios from "axios";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  actionRegister,
  actionUnRegister,
  actionValidadorTrue,
  actionValidadorFalse,
} from "../../util/redux/actions/actions";
import "../perfil/perfil.css";
import "./style.scss";
import BotonPrimario from '../../util/botones/botonPrimario'

export default function Home() {
  const [histories, setHistories] = useState([]);

  const validadorState = useSelector((state) => state.validador);

  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.login);

  const getHistorias = async () => {
    const res = await axios.get(
      "https://backend-reactjsocial.herokuapp.com/api/fotos"
    );

    setHistories(res.data);
    
  };

  useEffect(() => {
    getHistorias();
  }, []);

  return (
    <div className="home">
      {loginState ? (
        <div className="home__container">
          {histories.map((historie) => (
            <div className="home__container__post">
              <img className="home__container__post__foto" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Fvector-premium%2Ficono-perfil-avatar_20315456.htm&psig=AOvVaw2HS2uG0xo04QvWVNFp-CHS&ust=1665605470171000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIjbqof-2PoCFQAAAAAdAAAAABAD"/>
              <h5 className="home__container__post__author">{historie.author}</h5>
              <h2 className="home__container__post__titulo">{historie.titulo}</h2>
              <p className="home__container__post__texto">{historie.texto}</p>
              <div className="home__container__post__menu">
                <b className="home__container__post__menu__megusta">Me gusta</b>
                <b className="home__container__post__menu__comparte">Compartir</b>
              </div>
              <input className="home__container__post__comenta" placeholder="Comenta" />
            </div>
          ))}
        </div>
      ) : (
        <div className="home__loged">
          <div className="home__loged__left">
            
            <h1 className="home__loged__left__h1"> ReactJSocial</h1>
        
            <h4 className="home__loged__left__h4"> Porque compartir es vivir <br/>¡Únete ya y empieza a hacerlo!</h4>
            
          </div>
          <div className="home__loged__right">
            <h3 className="home__loged__right__h3">
              <Link className="home__loged__right__h3__link" to="/login" onClick={() => dispatch(actionRegister)}>
                <BotonPrimario textoBoton="Regístrate"></BotonPrimario>
              </Link>
            </h3>
            <h3 className="home__loged__right__h3">
              <Link className="home__loged__right__h3__link" to="/login" onClick={() => dispatch(actionUnRegister)}>
              <BotonPrimario textoBoton="Login"></BotonPrimario>
              </Link>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
