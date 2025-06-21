import "./ImageComp.css";
import {useState} from "react";
function ImageCom() {
    let [url,setUrl] = useState("https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png");
    const changeToAngular = () => {
      setUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrjkPeRkL_Q3RThOD5F8Kow8fEKHJMcnwuA&s");
    };
    const changeTOReact = ()=>{
        setUrl("https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png");
    }
    return (
        <div id="ImageComp">
            <h2>Image Component</h2>
            <img src={url} alt="" width="500" height="300" />
            <br/><br/>
            <button onClick={changeToAngular}>Angular</button>
            <button onClick={changeTOReact}>React</button>
        </div>
    );
}
export default ImageCom;