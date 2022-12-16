import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
// import Cart from "./Cart";
function AllRoutes() {
  return <div>

    <Routes>
    <Route path="/" element={<Home />}/> 
    {/* <Route path="/login" element={<Login />}/> */}
    <Route path="/phones" element={<Product/>} />
    <Route path="/phones/:id" element={<ProductDetails/>} />
    {/* <Route path="/cart/:id" element={<Cart/>} /> */}
     
   

      
    
    </Routes>
  </div>;
}

export default AllRoutes;
