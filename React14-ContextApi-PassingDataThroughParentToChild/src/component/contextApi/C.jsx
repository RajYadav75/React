import React, {useContext} from 'react';
import myFirstContext from "./ContextApi.js";
import D from "./D.jsx";

function C() {
    let info = useContext(myFirstContext);
    return (
        <div style={{padding:"10px"}}>
            <h2>C Component: {info}</h2>

            <br />
            <hr />
            <D />
        </div>
    );
}

export default C;