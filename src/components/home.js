import { useState } from 'react';
import Nav from '../components/nav'
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate  = useNavigate();
 
    const addNew = ()=>{ 
        navigate ("/Add")
    }

    return (
        <div>
            <Nav /> 
            {/* <div ><button onClick={()=>addNew()}>Add New</button></div> */}
            <div ></div>
            <table>
                <tr><th>Name</th><th>Age</th><th>Action</th></tr>
                <tr><td>Sara</td><td>23</td><td><button>Edit</button> <button>Delete</button></td></tr>
            </table> 
        </div>
    )
}

export default Home;