import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export function FakestoreHome(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{

        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            setCategories(response.data);
        })

    },[])

    return(
        <div>
            <h2>Fakestore Home</h2>
            <ul className="list-unstyled">
                {
                    categories.map(category=>
                        <li key={category}> <Link className="btn btn-dark w-25 my-2" to={`/products/${category}`}>{category.toUpperCase()}</Link> </li>
                    )
                }
            </ul>
        </div>
    )
}