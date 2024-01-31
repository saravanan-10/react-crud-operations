import { useState } from 'react';

function Home(){
    return (
        <div>
            <div ><button>Add New</button></div>
            <div ></div>
            <table>
                <tr><th>Name</th><th>Age</th><th>Action</th></tr>
                <tr><td>Sara</td><td>23</td><td><button>Edit</button> <button>Delete</button></td></tr>
            </table>
        </div>
    )
}

export default Home;