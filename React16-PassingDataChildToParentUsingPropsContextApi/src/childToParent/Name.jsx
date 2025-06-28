import React, {useState} from 'react';
import Display from "./Display.jsx";

function Name() {
    let [value,setValue] = useState("");
    return (
        <div>
            <h2>Name Component (Parent Component)</h2>
            <p>Data :: {value}</p>
            <hr/>
            <Display setData={setValue} />
        </div>
    );
}

export default Name;