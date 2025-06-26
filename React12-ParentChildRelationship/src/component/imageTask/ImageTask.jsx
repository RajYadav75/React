import {useState} from "react";
import "./ImageTask.css";
function ImageTask() {
    let [title, setTitle] = useState("React");
    let [url, setUrl] = useState('https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png');
    const changeToAngular=()=>{
        setUrl('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrjkPeRkL_Q3RThOD5F8Kow8fEKHJMcnwuA&s');
        setTitle("Angular");
    }
    const changeToReact=()=>{
        setUrl('https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png');
        setTitle("React");
    }
    return (
        <div id="imageComp">
            <h2 style={{textAlign:"center"}}>Image Component</h2>
            <h4 style={{color:"red",textAlign:"center"}}>Raj Made {title} Card</h4>
            <img src={url} width="500" height="300"/>
            <br/>
            <br/>
            <button onClick={changeToReact}>React</button>
            <button onClick={changeToAngular}>Angular</button>
        </div>
    );
}
export default ImageTask;