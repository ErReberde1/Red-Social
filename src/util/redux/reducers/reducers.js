
import {combineReducers} from 'redux'
import {loginReducer, 
    keepUserData, 
    registerReducer, 
    validadorTrueOrFalse, 
    saveDataPubli} 
from './loginReducer'

export const reducers = combineReducers({
    login: loginReducer,
    data: keepUserData,
    register: registerReducer, 
    validador: validadorTrueOrFalse, 
    dataPubli: saveDataPubli
}) 
