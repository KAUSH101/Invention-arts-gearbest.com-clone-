import axios from "axios"
import { useEffect,useState } from "react"
export  const getData=()=>{
   return axios.get(`https://json-fev1.onrender.com/posts`)
    
}
export  const removeData=(id)=>{
   axios.delete(`https://json-fev1.onrender.com/posts/${id}`)
    
}


