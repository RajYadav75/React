import React from 'react';
import C from "./C.jsx";

function B({info}) {
    return (
        <div>
            <h2>B component</h2>
            <br/>
            <hr/>
            <C info={info}/>
        </div>
    );
}

export default B;