import { useState } from 'react';
import Nav from '../components/nav'
import { useNavigate } from "react-router-dom";

function Add(){
    const navigate  = useNavigate();
 
    const goBack = ()=>{ 
        navigate ("/Home")
    }

    return(
        <div>
            <Nav /> 
            <input type="text" name='name' placeholder='name' />
            <input type="text" name='age' placeholder='age' />
            <button>Save</button>
            <div><button onClick={()=>goBack()}>Go Back</button></div>
        </div> 
    )
}

export default Add;