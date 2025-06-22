import './App.css'
import ImageCom from "./component/imageTask/ImageCom.jsx";
import Counter from "./component/counter/Counter.jsx";
import Home from "./component/home/Home.jsx";
import Product from "./component/product/Product.jsx";
import NavBar from "./component/nav/NavBar.jsx";

function App() {
    return (
        <div>
            <NavBar/>
            <Home/>
            <Product/>
            <ImageCom/>
            <Counter/>
        </div>
    )
}

export default App
