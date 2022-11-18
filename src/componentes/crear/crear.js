import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import BotonPrimario from "../../util/botones/botonPrimario";
import axios from "axios";

export default function Crear() {
  const [publi, setPubli] = useState({
    texto: "",
    foto: {},
    author: "",
  });
  const [state, setState] = useState()

  const data = useSelector((state) => state.data);

  const enviarDatos = async (e, id) => {
    console.log("enviado datos pues");
    e.preventDefault();
    await axios.post("https://backend-reactjsocial.herokuapp.com/api/fotos", {
      texto: publi.texto,
      imagen: publi.foto,
      author: publi.author,
    });


    setPubli({
      texto: "",
      foto: [],
      author: "",
    });
  };
  
  const onChangeFile = (event) => {
    const archivo = event.target.files[0];
    const img_pre = document.getElementById("img-pre");
    const reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.addEventListener("load", (e) => {
      let url = URL.createObjectURL(archivo);
      img_pre.setAttribute("src", url);
    });
    setState(true)

    setPubli({
      ...publi,
      [event.target.name]: archivo,
    });

  };
  const onChangeHandler = async (event) => {
    await setPubli({
      ...publi,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    setPubli({
      ...publi,
      author: data[0]._id,
    });
  }, []);


  const clickarFile = ()=>{
    document.getElementById("foto").click()
  }
  return (
    <>
      {data.map((eve) => (
        <div className="publicacion">
          <h5 className="publicacion__titulo">Crear publicación</h5>
          <img
            className="publicacion__foto"
            width="35"
            widht="35"
            alt="foto"
            src="https://source.unsplash.com/random"
          />
          <p className="publicacion__nombre">
            {eve.nombre} {eve.apellidos}
          </p>

          <form className="publicacion__form" onSubmit={enviarDatos}>
            <textarea
              sentences
              placeholder={`¿Qué estas pensando ${eve.nombre}?`}
              className="publicacion__form__texto"
              rows="5"
              cols="43"
              name="texto"
              onChange={onChangeHandler}
              value={publi.texto}
            />
            {state? <img width="150" height="2" name="foto" id="img-pre" /> : null}
            <div className="publicacion__form__container">
              {/* <div className="publicacion__form__container__background"></div> */}
              <p onClick={clickarFile}>
                <div className="publicacion__form__container__background"> 
                  <p>Agregar a tu publicación</p>
                </div>
              </p>
              <input
                placeholder="Agregar a tu publicación"
                className="publicacion__form__container__file"
                type="file"
                id="foto"
                name="foto"
                onChange={onChangeFile}
                style={{"display": "none"}}
              />
            </div>
            <BotonPrimario textoBoton="Publicar" type="submit" />
            <BotonPrimario textoBoton="Cancelar" />
          </form>
          
        </div>
      ))}
    </>
  );
}
