import "./Login.css"
import {Link} from "react-router-dom"
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
export default function Login() {
  return (
    <div id="main" >
      <Navbar/>
    <div id="login" >
      <form id="form" >
    <h1>Login</h1>
        <input type="email"  placeholder="Enter your email" />
        <br />
        <input type="Password"   placeholder="Enter your password"  />
        <br />
        <Link to={"/checkout"} ><button>Login</button></Link>
        
        <p>Not Have An Account?  <Link to={"/signup" }  >Sign Up</Link> </p>
      </form>

    </div>
    <Footer/>
    </div>
  );
}