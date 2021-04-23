export function email(email){
    return{
        type:'SET_EMAIL', 
        payload: email

    }
}


export function name(name){
    return{
        type:'SET_NAME', 
        payload: name

    }
}


export function password(password){
    return{
        type:'SET_PASSWORD', 
        payload: password

    }
}

