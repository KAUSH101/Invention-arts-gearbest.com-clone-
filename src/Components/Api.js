import axios from "axios"
import { useEffect,useState } from "react"
const getData=()=>{
   
axios.get(`https://json-fev1.onrender.com/phones`)
    
}
export default getData

