import {useState} from 'react';
import {cityActionCreator} from "../actions/CityAction.js";
import {useDispatch} from "react-redux";

function City() {
    let [city, setCity] = useState("");
    var dispatch = useDispatch();
    const getCity = () => {
        // alert(city);
        /*let cityAction = cityActionCreator(city);
        dispatch(cityAction);*/
        dispatch(cityActionCreator(city));
    };
    return (
        <div style={{padding: '50px'}}>
            <h2>City Component</h2>
            <br/>
            <select onChange={(event) => {
                setCity(event.target.value);
            }}>
                <option>Gorakhpur</option>
                <option>Deoria</option>
                <option>Bansgaon</option>
                <option>Kauriram</option>
                <option>Nausad</option>
            </select>
            <button onClick={getCity}>Submit</button>
        </div>
    );
}

export default City;