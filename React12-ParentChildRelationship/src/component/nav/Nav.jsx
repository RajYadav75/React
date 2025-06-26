import "./Nav.css";
import {Link} from "react-router-dom";
function Nav(){
    return (
        <div id="mainNav">
            <div id="firstNav" className="flexcontainer">
                <h2>Raj Nav Bar (React Routing)</h2>
            </div>
            <div id="secondNav" className="flexcontainer">
                <Link to="/">Home</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/product">Product</Link>
                <Link to="/imagecomp">ImageTask</Link>
                <Link to="/allproduct">All Products</Link>
                <Link to="/username">UserName</Link>
                <Link to="/parentChild">ParentToChildShareData</Link>
            </div>
        </div>
    );
}
export default Nav;