import Navegation from './componentes/navegation/navegation.js';
import './App.css';
import {useDispatch} from 'react-redux';
import {actionLogged, saveUserData} from './util/redux/actions/actions.js'
import {useSelector} from 'react-redux';
import Crear from './componentes/crear/crear'

const BackGround = ()=>{

  return (
    <>
      <div className="App__background">

      </div>
    </>)
}

function App() {

   const validadorState = useSelector(state=>
    state.validador
    )
  const loginState = useSelector(state=>
      state.login
      )
  const userData = useSelector(state=>
    state.data
    )

  
  const dispatch = useDispatch()
  const loginStorageJSON = window.localStorage.getItem('loggedUserApp')
    
  if (loginStorageJSON){
    const user = JSON.parse(loginStorageJSON)
    dispatch(actionLogged)
    if (Object.entries(userData).length === 0){
      dispatch(saveUserData(user.user))
      
    }
  }
   

  return (
   
      <div className="App" >
        {validadorState ? <BackGround/>: null}
        <Navegation/>
        {/* <div className="crear" style={{"visibility": validadorState ? "visibility" : "hidden"}}>
          <Crear/>
        </div> */}
        
        {validadorState ? <Crear/> : null}
      </div>
    
  );
}

export default App;
