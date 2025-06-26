import "./Product.css";
import {Link, Outlet} from "react-router-dom";
function Product() {
    return (
        <div>
            <h2 style={{textAlign:"center",marginTop:"20px",color:"green"}}>Product Component</h2>
            <div className="ProductContainer">
                <div className="linkContainer" >
                    <Link to="electronics" style={{color:"white",textDecoration:"none",fontSize:"21px"}}>Electronics</Link>
                    <Link to="jewellery" style={{color:"white",textDecoration:"none",fontSize:"21px"}}>Jewelery</Link>
                    <Link to="mens" style={{color:"white",textDecoration:"none",fontSize:"21px"}}>Men's Clothing</Link>
                    <Link to="womens" style={{color:"white",textDecoration:"none",fontSize:"21px"}}>Women's Clothing</Link>
                </div>
                <div className="componentContainer">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
export default Product;