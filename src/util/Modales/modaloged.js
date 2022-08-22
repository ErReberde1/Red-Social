import React from 'react'
import {useSelector} from 'react-redux'
import './modaloged.css'
export default function ModaLoged() {
  const Data = useSelector(state=>state.data)
  const userData = [...Data]


  console.log(userData)
  return (
    <div className="container-loged">
      
      <h2></h2>
      <h1>Configuración de tu cuenta</h1>
        {userData.map(user => 
        <div>
          <h2> {user.username}</h2>
          <ul>
            <li key={user._id}>
              Id: {user._id}
            </li>
            <li>
              Usuario: {user.username}
              
            </li>
            <li>
              E-mail {user.email}
            </li>
            <li>
              contraseña: {user.password}
            </li>
          </ul>
          </div>
        )}
      
    </div>
  )
}
