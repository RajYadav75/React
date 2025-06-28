import React, {useState} from 'react';
import Details from "./Details.jsx";
import {myHomeContext} from "./MyHomeContext.js";

function Home() {
    let [state,setState] = useState("");
    let [data,setData] = useState("");
    const submitData = () => {
        // console.log(state);
        setData(state);
    }
    return (
        <div style={{ padding: "50px" }}>
            <h2>Home Component</h2>
            <input type="text" placeholder="Enter Your Data" onChange={(event)=>{
                setState(event.target.value);
            }}/>
            <button onClick={submitData}>Submit</button>
            <br/>

            <myHomeContext.Provider value={data}>
                <Details/>
            </myHomeContext.Provider>

        </div>
    );
}

export default Home;