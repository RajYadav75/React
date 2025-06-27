import React from 'react';
import D from "./D.jsx";

function C({info}) {
    return (
        <div>
            <h2>C component</h2>
            <hr/>
            <D info={info} />
        </div>
    );
}

export default C;