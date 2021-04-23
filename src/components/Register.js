import React from 'react'; 
import {useDispatch, useSelector} from 'react-redux'; 
import {useHistory} from 'react-router-dom'; 
import {email,name, password} from '../actions';


function Register(){
  const readEmail= useSelector(state => state.email)
  const readName= useSelector(state => state.name)
  const readPassword= useSelector(state => state.password)

  const history = useHistory(); 
  const dispatch= useDispatch(); 

  function handleSubmit (e){
  history.push ('/account'); 

}

return(
    <section>
      <h4> /registration </h4>
      <div className='title'>
      <h4 >Välkommen! </h4>
      </div>
      <div className='container'>
    
<h2>Registera dig för ett konto</h2>

<form className='form'>

<label className='label' htmlFor='name'>Name: </label>
<input className= 'input' type='name' id='name' placeholder='Jane Goodall ' value ={readName} onChange ={(event)=> dispatch (name(event.target.value))}/>

<label className='label' htmlFor='email'>Email: </label>
<input className= 'input' type='email'id='email' placeholder='Jane Goodall@gamil ' value={readEmail} onChange= {(event) => dispatch(email(event.target.value))}/>

<label className='label' htmlFor='query'>Password: </label>
<input className= 'input' type='password' id='password' placeholder=' ........ 'value={readPassword} onChange= {(event)=> dispatch(password(event.target.value))}/>
  
<button className='button' type ='button' onClick= {handleSubmit} > Sign Me Up ! </button>
</form>
    </div>

    </section>

)
}

export default Register; 