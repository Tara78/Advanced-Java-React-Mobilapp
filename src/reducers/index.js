import email from './email'; 
import name from './name'; 
import password from './password'; 
import{combineReducers} from 'redux'; 

const allReducers=combineReducers({
    email:email, 
    name:name, 
    password:password
})

export default allReducers; 