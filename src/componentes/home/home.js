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
import { Icon } from 'react-icons-kit'
import {thumbsup} from 'react-icons-kit/oct/thumbsup'
import {redo2} from 'react-icons-kit/icomoon/redo2'
import ModalForm from "../../util/Modales/modalformlogin";

export default function Home() {
  
  const [inputs ,setInputs] = useState([{ "type":"email",
                                            "name": "Correo electrónico"
                                            },
                                            { "type":"password",
                                            "name": "Contraseña"}])

  const [histories, setHistories] = useState([]);

  const validadorState = useSelector((state) => state.validador);

  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.login);

  const getHistorias = async () => {
    const res = await axios.get(
      "https://backend-express-production-dff3.up.railway.app/api/fotos"
    );

    setHistories(res.data);
    
  };

  useEffect(() => {
    getHistorias();
  }, []);

  return (
    <main className="home">
      {loginState ? (
        <div className="home__container">
          
          {histories.map((historie) => (
            <article className="home__container__post">
              <img className="home__container__post__foto" width="50" height="50" src="https://source.unsplash.com/random"/>
              <h5 className="home__container__post__author">{historie.author}</h5>
              <h2 className="home__container__post__titulo">{historie.titulo}</h2>
              <p className="home__container__post__texto">{historie.texto}</p>
              <div className="home__container__post__menu">
                <hr/>
                  <b className="home__container__post__menu__megusta">
                    {/* <Icon icon={thumbsup}></Icon> */} Me gusta
                  </b>
                  
                  <b className="home__container__post__menu__comparte">
                    {/* <Icon icon={redo2}></Icon> */} Compartir
                  </b>
                <hr/>
              </div>
              <input className="home__container__post__comenta" placeholder="Comenta" />
            </article>
          ))}
          <aside>
            <section>Publicidad</section>
            <section>Páginas </section>
            <section>Contactos</section>
          </aside>
        </div>
      ) : (
        <div className="home__loged">
          <div className="home__loged__left">
            
            <h1 className="home__loged__left__h1"> ReactJSocial</h1>
            <p className="home__loged__left__h4"> Porque compartir es vivir <br/>¡Únete ya y empieza a hacerlo!</p>
          </div>
          <ModalForm 
            title="Login" 
            textoBoton="Enviar" 
            inputs={inputs}
            /> 
        </div>
      )}
    </main>
  );
}
