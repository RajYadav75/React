import React from 'react';
const cStyles = {
    width: '200px',
    boxShadow:"0 0 10px blue",
    textAlign: "center",
    padding: "50px",
    margin: "30px auto"
}
/*function C(data) {
    return (
        <div style={cStyles}>
            <h2>C Component</h2>
            <h5>Data: {data.rajKey}</h5>
        </div>
    );
}*/
function C({data}) {
    return (
        <div style={cStyles}>
            <h2>C Component</h2>
            <br/>
            <h5>Data: {data}</h5>
        </div>
    );
}

export default C;