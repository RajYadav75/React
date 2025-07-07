const initialData = {
    name:"",
    city:"",
}
const myReducer = (state = initialData,action) => {
    // alert("Reducer Triggered");
    if (action.type==="NAME"){
        state={
            ...state,
            name:action.nameComponent,
        }
    }else if(action.type==="CITY"){
        state={
            ...state,
            city:action.cityName,
        }
    }
    return state;
}
export default myReducer;