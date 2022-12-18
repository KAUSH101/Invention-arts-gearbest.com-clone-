import "./Signup.css"

import {Link,Navigate,useNavigate} from "react-router-dom"
import {Button} from '@chakra-ui/react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
export default function Login() {
    const navigate = useNavigate();
    
function signup(){
    alert("Account Created Successful!");
    navigate('/login');
   
        
}

  return (
    <div id="main" >
        <Navbar/>
    <div id="login" >
      <form id="form" >
    <h1>Sign Up</h1>
    <input type="text"  placeholder="First Name" />
    <input type="text"  placeholder="Last Name" />
        <input type="email"  placeholder="Enter your email" />
        <br />
        <input type="Password"   placeholder="Enter your password"  />
        <br />
           <button
      onClick={signup}>
      Sign Up
    </button  >
    
        <p>Already a user <Link to={"/login" } >Log In</Link> </p>
      </form>

    </div>
    <Footer/>
    </div>
  );
}