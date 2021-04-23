import React from 'react'; 
import {useDispatch, useSelector} from 'react-redux'; 
import {useHistory} from 'react-router-dom'; 


function Account (){
const readEmail= useSelector(state => state.email)
const readName= useSelector(state => state.name)

const history = useHistory(); 
const dispatch= useDispatch();

function handleSubmit(){
    history.push('/konto')
}

 return (

    <section>
     <h4> /konto </h4>
    <div className='title'>
     <h4 >Välkommen! </h4>
    </div>
      <div className='container'>
      <h2>Ditt Konto</h2>

<form className='form' >
 <label className='label' htmlFor='name'>Name: </label>
 <input className= 'inputA' type='text' placeholder={readName} />

<label className='labelA' htmlFor='query'>Email: </label>
<input className= 'inputA' type='text' placeholder={readEmail}/>

<label className='labelA' htmlFor='query'>Password: </label>
<input className= 'inputA' type='text' placeholder='...'/> 
   

<button className='button' type='button' onClick={handleSubmit} >Ändra </button>
</form>
    
</div>

        
 </section>
  
    )
}

export default Account;