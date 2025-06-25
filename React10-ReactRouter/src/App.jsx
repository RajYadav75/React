import './App.css'
import Counter from "./component/counter/Counter.jsx";
import Home from "./component/home/Home.jsx";
import ImageTask from "./component/imageTask/ImageTask.jsx";
import Nav from "./component/nav/Nav.jsx";
import Product from "./component/product/Product.jsx";
import {Route, Routes} from "react-router-dom";
import Electronics from "./component/product/Categories/electronics/Electronics.jsx";
import Jewellery from "./component/product/Categories/jewellery/Jewellery.jsx";
import Mens from "./component/product/Categories/men's/Mens.jsx";
import Womens from "./component/product/Categories/women's/Womens.jsx";


function App() {
  return(
      <div>
          <Nav/>
          <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/product"} element={<Product/>}>
                  <Route path={"electronics"} element={<Electronics/>}/>
                  <Route path={"jewellery"} element={<Jewellery/>}/>
                  <Route path={"mens"} element={<Mens/>}/>
                  <Route path={"womens"} element={<Womens/>}/>
              </Route>
              <Route path={"/counter"} element={<Counter/>}/>
              <Route path={"/imagecomp"} element={<ImageTask/>}/>

          </Routes>
      </div>
  );
}

export default App
