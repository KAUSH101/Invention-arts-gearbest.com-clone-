import "./checkout.css"
import {Link} from "react-router-dom"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
export default function Checkout() {

    function payment(){
        alert("Payment Successful! you will get your delievery in 3 to 7 days");
       
        <Link to={"/"} ></Link>
    }
  return (
    <div id="main" >
        <Navbar/>
    <div id="login" >
      <form id="form" >
    <h1>Fill your Details</h1>
        <input type="text"  placeholder="Enter your address" />
        <br />
        <input type="number" placeholder="zip code" />
        <br />
        <input type="text"   placeholder="name on the card"  />
        <br />
        <input type="number" placeholder="Card Number" />
        <br />
        <input class="authInputs" id="expDate" type="text" placeholder="MMYY" minlength="4" maxlength="4"/>
        <input type="cvv" placeholder="cvv" />
        <br />
        <Link to={"/"} ><button onClick={payment}>Pay Now</button></Link>
        
        
      </form>

    </div>
    <Footer/>
    </div>
  );
}