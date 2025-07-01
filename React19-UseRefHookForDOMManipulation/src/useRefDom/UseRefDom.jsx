import {useRef} from 'react';
function UseRefDom() {
    let h2Ref = useRef(null); //h2ref={current:null}
    let buttonRef = useRef(null);
    const changeContentStyle = () => {
        h2Ref.current.innerText = "Dom Manipulated using Ref Concept";
        h2Ref.current.style.color = "red";

        buttonRef.current.style.color = "yellow";
        buttonRef.current.style.backgroundColor = "black";
    }
    return (
        <div style={{padding:"50px", boxShadow:"0 0 10px black",width:"450px"}}>
            <h2 ref={h2Ref}>DOM Manipulation using useRef() hook</h2>
            <br/>
            <button ref={buttonRef} onClick={changeContentStyle}>Change Content and Style</button>
        </div>
    );
}

export default UseRefDom;