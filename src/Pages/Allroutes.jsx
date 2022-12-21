import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login";
import Signup from "./Signup"
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Newarrival from "./NewArrival";
import Newarrivalproduct from "./Newarrivalproduct";
import Cart from "./Cart";
import Checkout from "./Checkout.";
import Shoppingcart from "./Shoppingcart";
// import Cart from "./Cart";
function AllRoutes() {
  return <div>

    <Routes>
    <Route path="/" element={<Home />}/> 
    <Route path="/newarrival" element={<Newarrival />}/> 
    <Route path="/newarrival" element={<Newarrivalproduct />}/> 
    <Route path="/login" element={<Login />}/> 
    <Route path="/signup" element={<Signup/>}/> 
    <Route path="/checkout" element={<Checkout/>}/> 
    
    {/* <Route path="/login" element={<Login />}/> */}
    <Route path="/phones" element={<Product/>} />
    <Route path="/phones/:id" element={<ProductDetails/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/shoppingcart" element={<Shoppingcart/>} />
    <Route path="/cart/:id" element={<Cart/>} />
     
   

      
    
    </Routes>
  </div>;
}

export default AllRoutes;
