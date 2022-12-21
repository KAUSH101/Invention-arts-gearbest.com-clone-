import{useState,useEffect} from "react"
import axios from "axios"
import Cartcard from "./Cartcard"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import {getData,removeData} from "../Components/Api"
import Empty from "./Emptypage"
import{Link} from "react-router-dom"

function Shoppingcart(){
    const[data,setData]=useState([])
    const [qnt,setQnt] = useState(1)
    var total=0
    let subtotal=qnt
    console.log(qnt)

    

    const handleGetTodos = async () => {
        
        return getData()
          .then((res) => {
            
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          
          });
      };


    // useEffect(()=>{
    //     axios.get(`https://json-fev1.onrender.com/posts`).then((res)=>{
    //         console.log(res.data)
    //         setData(res.data)
    //     })
    //     },[])


    useEffect(()=>{
        handleGetTodos()
    },[])

    const remove=(id)=>{
       
        removeData(id)
        handleGetTodos()
    }
   
   

    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div  id="main" style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{display:"grid", gridTemplateColumns: "repeat(1,1fr)",width:"20%",justifyContent:"center",alignItems:"center",textAlign:"center"}} >
{
data.length===0?

    <Empty/>

:
data.map((e)=>{
    total+=(+e.price)
   
   
 return(
    
    <Cartcard
    image={e.image}
id={e.id}
price2={e.price2}
price={e.price}

title={e.title}
remove={remove}
subtotal={subtotal}
// qnt={qnt}
    />
 )  

 
})}

</div>
<div id="pricedetail" style={{width:"30%",height:"400px",textAlign:"center"}} >
  

 <h1 style={{color:"green"}} >Number of Items <p style={{color:"tomato"}}>{data.length}</p> </h1>
<h1 style={{color:"green"}}>subtotal:<p style={{color:"tomato"}}>${total}</p></h1>
  <Link to={"/login"} >
  <button style={{marginTop:"12px",width:"50%",background:"green",color:"white",border:"none",height:"32px",cursor:"pointer",cursor:"pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} >Check Out</button>
  </Link>


   
    
    
    </div>
</div>
<div><Footer/></div>
        </div>
    )
}
export default Shoppingcart

// https://json-fev1.onrender.com/posts