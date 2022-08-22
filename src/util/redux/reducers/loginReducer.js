
// reducer para logear y deslogear 
export const loginReducer = (state = false, action)=>{
    switch (action.type){
        case '@Looged':
            return true
        case '@unLogged':
            return false
        default:
            return state
    }
}

// reducer para guardar datos del usuario logeado

export const keepUserData = (state =[], action)=>{
    switch (action.type){
        case '@saveUserData':
            return [action.token]
        case '@resetUserData':
            return []
        default:
            return state
    }   
}
// reducer que devuelve true o false para determinar que renderizar.
// el registro o logearse
export const registerReducer = (state = false, action)=>{
    switch (action.type){
        case '@isRegister':
            return true
        case '@unRegister':
            return false
        default:
            return state
    }
}

// reducer para devolver true o falsa de diferentes items del programa.

export const validadorTrueOrFalse = (state = false, action)=>{
    switch(action.type){
        case '@devolverTrue':
            return true
        case '@devolverFalse':
            return false
        default:
            return state
    }
}

export const saveDataPubli =(state=[], action)=>{
    switch (action.type){
        case '@saveDataPubli':
            return action.token
        case '@resetDataPubli':
            return []
        default:
            return state
    }   
}