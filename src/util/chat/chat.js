import React,{useEffect, useState} from 'react'
import BotonPrimario from '../../util/botones/botonPrimario'
import io from 'socket.io-client'
import {useSelector, useDispatch } from 'react-redux'
import {saveUserData} from '../../util/redux/actions/actions'
import axios from 'axios'
import './chat.css'



const socket = io('https://backend-reactjsocial.herokuapp.com') 

export default function Chat() {

    

    const dispatch = useDispatch()

    const dataUser = useSelector(state => 
        state.data
        )
    
    const id = dataUser[0]._id

    
    

    socket.on("newconnection", (id)=>{
        
    })
    
   
    const [message, setMessage] = useState("")
    const[users, setUsers] = useState([])
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
        setMessages([newMessage,...messages])
        setMessage("")
    }

    const onChangeHandler= async(event) =>{
        event.preventDefault()
        await setMessage(event.target.value)
    }
   
     useEffect(

       ()=>{ 
        /* const receiveMessage =(message)=>{
            console.log(message)
            setMessages([...messages, message]
            ) 
        } */
        
        socket.on("message",(message)=> {
            console.log(message)
            setMessages([message, ...messages])
            console.log(messages)
        });
        socket.off("message",(message)=> {
            console.log(message)
            setMessages([message, ...messages])
            console.log(messages)
        });
        
        
        }, [messages])

    
    /* const getAmigos = async()=>{

        const res = await axios.get("http://localhost:3001/api/user/"+id)
        
        const user = res.data

        await dispatch(saveUserData(user)) 
        
        
        
      } 
    
     useEffect(()=>{
        
        getAmigos()
    },[])  */
     
   

  return (
    <div>
        <div className="scream">
             {messages.map(message=> 
                
                    <p className= "scream-message"
                    style={{"background-color": message.from == "Me" ? "#1877F2" : "#828282",
                            "float": message.from =="Me" ? "right" : "left",
                            "visibility": message.body ? "visible" : "hidden"}}>{message.body}</p> 
               
            )} 
        </div>
       
       <div >
        <form onSubmit={chatear} className="form-enviar">
            <input required size="20" type="text" onChange={onChangeHandler} value = {message}/>
            <BotonPrimario textoBoton="Send" type="submit"/>
        </form>
        </div>
        

    </div>
  )

}

