import { useState } from 'react';

function Add(){

    return(
        <div>
            <input type="text" name='name' placeholder='name' />
            <input type="text" name='age' placeholder='age' />
            <button>Save</button>
            <div><button>Go Back</button></div>
        </div> 
    )
}

export default Add;