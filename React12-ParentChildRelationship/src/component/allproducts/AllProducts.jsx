import axios from "axios";
import "./Allproduct.css";
import {useState} from "react";
import Card from "./card/Card.jsx";
function AllProducts(){
    let [products, setProducts] = useState([]);
    const getProducts=()=>{
        let promiseObject = axios.get("https://fakestoreapi.com/products");
        promiseObject.then((response) => {
            console.log("then");
            console.log(response);
            setProducts(response.data); //[{},{},{},{}]
            setProducts(response.data);//[{rating:{rate:4.3,count:233}},{},{},{},{},{}]
        }).catch((error) => {
            console.log("error");
            console.log(error);
        })
    };
    return <div style={{padding:"50px"}}>
        <h2 style={{marginBottom:"20px"}}>All Products </h2>
        <p style={{marginBottom:"20px"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid asperiores atque cumque delectus dicta doloremque eos eveniet fugiat fugit, hic in magni natus nemo neque officia praesentium quae quaerat quam quis quos recusandae reprehenderit saepe sed sint temporibus vel! Ab adipisci alias aliquid architecto asperiores blanditiis cum cupiditate delectus distinctio doloremque, ducimus expedita id libero magnam maiores mollitia nulla optio perferendis possimus quibusdam quod tempora tempore temporibus velit, veniam! A aliquam atque cumque deserunt dolor enim eum exercitationem fuga ipsa laboriosam magnam, nemo neque nisi nostrum obcaecati officia officiis omnis porro provident quas quos sequi sit sunt totam voluptates.
        </p>
        <button onClick={getProducts}>Get Product</button>
        <div className="allProductsData">
           {/* <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>*/}
            {
                products.map(function (element,index){ //{id:"",title:"",price:""}
                    return <Card image={element.image} title={element.title} price={element.price} rating={element.rating.rate}/>
                })
            }
        </div>
    </div>
}
export default AllProducts;