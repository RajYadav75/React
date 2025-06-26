import {useState} from "react";

function UserName() {
    let [names, setNames] = useState(["Raj", "Ankita", "Pallavi", "Riya", "Sneha"]);
    return (
        <div style={{padding: "50px"}}>
            <h2>User Names</h2>
            <ul>
                {/*<li>Raj</li>
                <li>Ankita</li>
                <li>Pallavi</li>
                <li>Riya</li>
                <li>Sneha</li>*/}
                {
                    names.map(function (name) {
                        return <li>{name}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default UserName;