import {useState} from 'react';
import B from "./B.jsx";
function A() {
    let [state, setState] = useState("----------");
    return (
        <div>
            <h2>A component</h2>
            <br/>
            <button onClick={()=>{setState("Raj")}}>Pass Data to child</button>
            <hr/>
            <B info={state}/>
        </div>
    );
}

export default A;