export const actionLogged = {
    type: '@Looged'
}

export const actionUnLogged ={
    type: '@unLogged'
}

export const saveUserData  = (token)=>{
    
    return {
        type: '@saveUserData',
        token: token
    }
}

export const resetUserData ={
    type: '@resetUserData',
}

export const actionRegister ={
    type: '@isRegister'
}
export const actionUnRegister ={
    type: '@unRegister'
}

export const actionValidadorTrue ={
    type: "@devolverTrue"
}

export const actionValidadorFalse ={
    type: "@devolverFalse"
}

export const actionSaveDataPubli =(token)=>{
    
    return {
        type: "@saveDataPubli",
        token: token
    }
}
export const resetDataPubli ={
    type: '@resetDataPubli'
}