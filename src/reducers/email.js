let initialState='';
 
const emailReducer= (state= initialState, action)=>{
    switch(action.type){
        case 'SET_EMAIL':    
            return action.payload
                       
        default:
            return state; 
    }
}

export default emailReducer; 