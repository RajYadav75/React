import React from 'react';
import C from "./C.jsx";
const bStyles = {
    width: '300px',
    boxShadow:"0 0 10px red",
    textAlign: "center",
    padding: "50px",
    margin: "20px auto"
}
/*function B(props) {
    return (
        <div style={bStyles}>
            <h2>B Component</h2>
            <br/>
            <p>Data : {props.info}</p>
            <C rajKey={props.info}/>
        </div>
    );
}*/
function B({info}) {
    return (
        <div style={bStyles}>
            <h2>B Component</h2>
            <br/>
            <p>Data : {info}</p>
            <C data={info}/>
        </div>
    );
}

export default B;
