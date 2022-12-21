import "./Cardcard.css"
import {useState} from "react"
function Cartcard({image,title,price,id,remove,subtotal,qnt}){
const[count,setCount]=useState(1)

var subtotal=count*price
   

 
function qnt(by){
    setCount(count+by)
}

// function add(){
//     setCount(count+1)
// }
// function sub(){
//     setCount(count-1)
// }

    return(
        <div id="container" >
        <div id="main">
            <div id="card" >
                <div>
                <img src={image} alt={title} />
                
                
<p id="title" >{title}</p>
<p id="price" >${price}</p>
<p id="qn" >Quantity</p>
<button disabled={count===1} id="sub" onClick={()=>qnt(-1)} >-</button>
    <button >{count}</button>
    <button id="add" onClick={()=>qnt(1)}  >+</button>
    <br />
    <p>{subtotal}</p>
    <button id="rem" onClick={()=>remove(id)} >Remove Item</button>
                </div>

    

            </div>
          

        </div>
        </div>
    )
}
export default Cartcard