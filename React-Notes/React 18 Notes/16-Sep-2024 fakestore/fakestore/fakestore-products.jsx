import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";


export function FakestoreProducts()
{
    let params = useParams();

    const [products, setProducts] = useState([{id:0, title:'', image:'', price:0, description:'', category:'', rating:{rate:0, count:0}}]);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[])

    return(
        <div>
            <h3>Products</h3>
            <div className="row">
                <div className="col-4">
                        <div className="d-flex flex-wrap">
                        {
                            products.map(product=>
                                <div className="card p-2 m-2" style={{width:'100px'}}>
                                    <img src={product.image} height="100" className="card-img-top" />
                                    <div className="card-header">
                                        <Link to={`details/${product.id}`} className="btn btn-warning"> View </Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <Link to="/">Back to Home</Link>
                    </div>
                    </div>
                <div className="col-8">
                        <Outlet />
                </div>  
            </div>
        </div>
    )
}