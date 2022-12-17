// single product details
import "./ProductDetails.css"
import { useState,useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from 'axios';
  import {Link as RouterLink} from "react-router-dom"
  import { MdLocalShipping } from 'react-icons/md';
  import {useParams} from "react-router-dom"
  export default function ProductDetails() {
    const [product,setProduct] = useState({})
    const [count,setCount] = useState(1)
    const {id} = useParams()
    console.log(id)
useEffect(()=>{
    axios
    .get(`http://localhost:3004/phones/${id}`)
    .then(({data})=>{
        setProduct(data)
    })
    .catch((err)=>console.log(err))
},[id])
const {image,title,price,price2}=product
console.log(product)
    return (
   <div>
    <div id='navbar' >
        <Navbar/>
    </div>
    <div id='detail'>
      <div id='prodImage' >
<img src={image} alt={title} />
      </div>
      <div id='proDetail' >
        <h1>{title}</h1>
        <h4>{title}</h4>
        <div id="price" >
        <h3 id="price2" >${price2}</h3>
        <h3 style={{color:"tomato"}}>${price}</h3>
        </div>
        <div id="qnt" >
            <p>QNT</p>
            <button onClick={()=>{setCount(count-1)}} >-</button>
            <button >{count}</button>
            <button onClick={()=>{setCount(count+1)}}>+</button>
        </div>
        <div id="btns" >
            <button>Add to Cart</button>
            <button>Buy Now</button>
        </div>
        
      </div>
    
    </div>
    <div id='footer'>
        <Footer/>
    </div>


   </div>
    );
  }