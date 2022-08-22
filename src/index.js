import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from './util/redux/store/store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Conocenos from './componentes/conocenos';
import Subirimagen from './componentes/subirimagen';
import Home from './componentes/home/home.js';
import Login from './componentes/login/login.js';
import Crear from './componentes/crear/crear';
import Perfil from './componentes/perfil/perfil';
import Salachat
 from './componentes/salachat/salachat';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/conocenos" element={<Conocenos/>} />
      <Route path="/perfil" element={<Perfil/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/crear" element={<Crear/>}/> 
      <Route path="/chat" element={<Salachat/>}/> 
    </Routes>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

