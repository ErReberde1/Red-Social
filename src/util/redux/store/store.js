import { createStore } from 'redux'
import { reducers} from '../reducers/reducers'

export const store = createStore(reducers)


store.subscribe(()=>{
    console.log(store.getState())
})

