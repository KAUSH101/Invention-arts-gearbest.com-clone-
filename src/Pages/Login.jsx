import React from "react"
// import {AuthContext} from "../Context/Authcontext";
// import {Link,Navigate,useNavigate} from "react-router-dom"
function Login() {
const[email,setEmail] = React.useState("")
const[password,setPassword] = React.useState("")
// const navigate = useNavigate()
const{authState,loginUser} = React.useContext(AuthContext)

// const handleSubmit=async(e)=>{
//   e.preventDefault()
//   try {
//     let res = await fetch(`https://reqres.in/api/login`,{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify({
//         email,
//         password
//       })
//     });
//     res = await res.json()
//     loginUser(
//       res.token
//     )
//   } catch (error) {
//    console.log(error)
//   }

// }
// if(authState.isAuth){
//   return<Navigate to="/dashboard" />
// }


  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="login-form">
        <div>
          <label>
            Email
            <input onChange={(e)=>setEmail(e.target.value)} 
            value={email}
            data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
            onChange={(e)=>setPassword(e.target.value)}
              data-testid="password-input"
              type="password"
              value={password}
              placeholder="password"
            />
          </label>
        </div>
        <div> 
          <input 
        
           data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        {/* <Link to="/">Go Back</Link> */}
      </div>
    </div>
  );
}
export default Login;
