import React from 'react';
import E from "./E.jsx";

function D({info}) {
    return (
        <div>
            <h2>D Component</h2>
            <hr/>
            <E info={info} />
        </div>
    );
}

export default D;