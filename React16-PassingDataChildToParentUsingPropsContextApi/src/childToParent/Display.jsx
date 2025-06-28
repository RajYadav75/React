import React, {useState} from 'react';

function Display({setData}) {
    let [childData,setChildData] = useState("My name is Raj Yadav");
    return (
        <div>
            <h2>Display Component (Child Component)</h2>
            <br/>
            <button onClick={()=>{
                setData(childData);
            }}>Pass Data to Parent</button>
        </div>
    );
}

export default Display;