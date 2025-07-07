const  counterReducer = (state,action) =>{
    if (action.type === "INC"){
        state ={
            count: state.count + 1
        }
    }else if(action.type === "DEC"){
        state ={
            count:state.count - 1
        }
    }else{
        state ={
            count:state.count - state.count
        }
    }
    return state;
}
export default counterReducer;