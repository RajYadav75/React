import {useRef} from 'react';
import {useDispatch} from "react-redux";

function Name() {
    let inputRef = useRef(null);
    let dispatch = useDispatch();
    const getData = () => {
        // Create A Action Object
        var actionObj ={
            type:"NAME",
            nameComponent:inputRef.current.value,
        }
        dispatch(actionObj);
    }
    return (
        <div style={{padding:"50px"}}>
            <h2>Name Component</h2>
            <br/>
            <input ref={inputRef} type="text" placeholder="Enter Your Name" />
            <button onClick={getData}>Submit</button>
        </div>
    );
}

export default Name;
