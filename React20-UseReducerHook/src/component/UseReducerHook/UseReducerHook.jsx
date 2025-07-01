import {useReducer} from 'react';
const reducerFn = (action) =>{
    return "Ankita";
};

function UseReducerHook() {

    //let [state,dispatch] = useReducer(reducerFn,initialValue);
    // let [state,dispatch] = useReducer(reducerFn,100);
    let [state,dispatch] = useReducer(reducerFn,"Raj");
    // let [state,dispatch] = useReducer(reducerFn,["Ankita"]);
    // let [state,dispatch] = useReducer(reducerFn,{love:"Ankita"});
    const modifyState = () => {
        dispatch({type:"Dummy"});
    }
    return (
        <div>
            <h2>UseReducer() Hook :: {state}</h2>
            {/*<h2>UseReducer() Hook :: {state[0]}</h2>*/}
            {/*<h2>UseReducer() Hook :: {state.love}</h2>*/}
            <button onClick={modifyState}> Update State</button>
        </div>
    );
}

export default UseReducerHook;
