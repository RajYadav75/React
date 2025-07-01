import {useReducer} from 'react';
const rajfn= ()=>{
    return "I am coder boy";
}
function AnotherExample() {
    let [name,dispatcher] = useReducer(rajfn,"Raj");
    const changeName =() =>{
        dispatcher();
    }
    return (
        <div>
            <p>My name is {name}</p>
            <button onClick={changeName}>Change Name</button>
        </div>
    );
}

export default AnotherExample;