import React from 'react';
import B from "./B.jsx";
import myFirstContext from "./ContextApi.js";
function A() {
    return (
        <div style={{ padding:"50px" }}>
            <h2>A Component</h2>
            <br/>
            <button>Submit</button>
            <br/>
            <br/>
            <hr/>
            <myFirstContext.Provider value={"Raj"}>
                <B/>
            </myFirstContext.Provider>
        </div>
    );
}

export default A;