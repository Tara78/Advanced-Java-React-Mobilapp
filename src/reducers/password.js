let initialState='';
 
const passwordReducer= (state= initialState, action)=>{
    switch(action.type){
        case 'SET_PASSWORD':    
            return action.payload
                       
        default:
            return state; 
    }
}

export default passwordReducer; 