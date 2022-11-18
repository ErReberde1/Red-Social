import React,{useEffect, useState} from 'react'
import BotonPrimario from '../../util/botones/botonPrimario'
import io from 'socket.io-client'
import {useSelector, useDispatch } from 'react-redux'
import {saveUserData} from '../../util/redux/actions/actions'
import axios from 'axios'
import './style.scss'




const socket = io(/* 'https://backend-reactjsocial.herokuapp.com' */ 
     "http://localhost:3001/"  ) 


export default function Chat() {

    const dispatch = useDispatch()
    const dataUser = useSelector(state => 
        state.data
        )


    const id = dataUser[0]._id
    const [state, setState] = useState()
    const [usuarios, setUsuarios] = useState([])
    const [message, setMessage] = useState("")
    const[usersConnected, setUsersConnected] = useState([])
    const [messages, setMessages] = useState([{
       body: "",
        from: ""
    }])

    const chatear =(e)=>{
        
        e.preventDefault()
        socket.emit("message", message);
        const newMessage = {
            body: message,
            from: "Me"
        }
        setMessages([...messages,newMessage])
        setMessage("")
        console.log(messages)
    }
    
    

    const onChangeHandler= async(event) =>{
        event.preventDefault()
        await setMessage(event.target.value)
    }
    

    /* const listaUsers = async(usersConnected)=>{
        for(let i = 0 ; i< usersConnected.length; i++){
            const res = await axios.get('http://localhost:4000/api/users/'+usersConnected[i].chatId)
            setUsuarios([...usuarios, res])
            console.log("hola")
        }
        
    }
 */
    
      console.log("reportando usuario")
      socket.on("connected", (users)=>{
        console.log(users)
        setUsersConnected(users)
        });
      console.log(usersConnected)
    

    useEffect(()=>{
        socket.emit('connected', id)

        setState(true)
    }, [])

    useEffect(()=>{
      socket.on("connected", (users)=>{
        console.log(users)
        setUsersConnected(users)
        });
      console.log(usersConnected)
    }, [state])
    
     useEffect(
       ()=>{     
        socket.on("message",(message)=> {
            setMessages([...messages,message])
        });
        socket.off("message",(message)=> {
            setMessages([...messages,message])
        });
        }, [messages])
        


  return (
    <>
      <div className="chat">
        <div className="chat__scream">
          {messages.map((message) => (
            <p
              className="chat__scream__message"
              style={{
                backgroundColor: message.from == "Me" ? "#1877F2" : "#828282",
                float: message.from == "Me" ? "right" : "left",
                visibility: message.body ? "visible" : "hidden",
              }}
            >
              {message.body}
            </p>
          ))}
        </div>

        <div className="chat__send">
          <form onSubmit={chatear} className="chat__send__form">
            <input
              className="chat__send__form__boxmessage"
              required
              size="20"
              type="text"
              onChange={onChangeHandler}
              value={message}
            />
            <BotonPrimario textoBoton="Send" type="submit" />
          </form>
        </div>
      </div>
      <div className="peopleList">
              {usuarios.map(e=>e)}
      </div>
    </>
  );

}

