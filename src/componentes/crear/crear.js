import React, {useEffect, useState} from 'react'
import Modal from '../../util/Modales/modal'
import {useSelector}  from 'react-redux'
import './crear.css'
import BotonPrimario from '../../util/botones/botonPrimario'
import axios from 'axios'

export default function Crear() {
    const [publi, setPubli] = useState({
      titulo: "",
      texto: "",
      foto: {},
      author:""
    })

    const data = useSelector(state=>
      state.data
      )

    
      const enviarDatos = async (e, id)=>{
        console.log("enviado datos pues")
        e.preventDefault()
        await axios.post('https://backend-reactjsocial.herokuapp.com/api/fotos', {
          titulo: publi.titulo, 
          texto: publi.texto,
          imagen:publi.foto,
          author: publi.author,

        })

        setPubli({
          titulo: "",
          texto: "",
          foto: {},
          author:""
        })
        
      }

    const onChangeHandler =async(event)=>{
        await setPubli({ 
        ...publi, 
        [event.target.name] : event.target.value
      })

    }
     useEffect(()=>{
      setPubli({
        ...publi, author: data[0]._id
      })
    }, []) 
     

  return (
     
        <Modal>
            {data.map(eve=> 
            <div className="form-publicacion">
              <h1>{eve.nombre}</h1>
              
              <form onSubmit={enviarDatos}>
                <label for="titulo">Título de publicación</label>
                <input id="titulo" name="titulo" onChange={onChangeHandler} value={publi.titulo}/>
                <textarea rows="18" cols="50" name="texto" onChange={onChangeHandler} value={publi.texto}/>
                <label for="foto">Subir foto</label>
                <input type="file" id="foto" name="foto" onChange={onChangeHandler} />
                
                <BotonPrimario textoBoton="Publicar" type="submit"/>
                
              </form>
                <BotonPrimario textoBoton="Cancelar"/>
            </div>
            )}
            
        </Modal>
       
  )
}
