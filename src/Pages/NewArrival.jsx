import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import {Link as RouterLink} from "react-router-dom"
import axios from "axios"
import Pagination from "../Components/Pagination"
import {  Grid,
    GridItem} from "@chakra-ui/react"
import {useEffect,useState} from "react"
import ProductCard from "../Components/Productcard"
import "./NewArrival.css"



function Newarrival(){
    const [data,setData] = useState([])
    const[asortdata,setAsortdata]=useState([])
    const[dsortdata,setDsortdata]=useState([])
    const[page,setPage] = useState(1)

  
   
useEffect(()=>{
axios.get(`http://localhost:3004/phones?_page=${page}&_limit=20`).then((res)=>{
    console.log(res.data)
    setData(res.data)
    
})
},[page])

// function DescData(){
    
//         useEffect(()=>{
   
//             axios.get(`http://localhost:3004/newarrival?_page=${page}&_limit=20&_sort=price&_order=desc`).then((res)=>{
//                 console.log(res.data)
//                 setData(res.data)
                
//             })
//             },[page])
    
// }
// const AscData=()=>{
    
//         useEffect(()=>{
   
//             axios.get(`http://localhost:3004/newarrival?_page=${page}&_limit=20&_sort=price&_order=asc`).then((res)=>{
//                 console.log(res.data)
//                 setData(res.data)
                
//             })
//             },[page])

            // const AscData = () => {
            //     axios.get("http://localhost:3004/newarrival?_page=${page}&_limit=20&_sort=price&_order=asc").then((res) => {
            //         setAsortdata(res.data);
                
            //     });
            //   };

            // const DescData = () => {
            //     axios.get("http://localhost:3004/newarrival?_page=${page}&_limit=20&_sort=price&_order=desc").then((res) => {
            //         setDsortdata(res.data);
                
            //     });
            //   };

              const  DescData=async(page)=>{
               
                let res = await fetch(`http://localhost:3004/phones?_page=${page}&_limit=20&_sort=price&_order=desc`)
                let data = await res.json()
                setData(data);
            }
              const  AscData=async(page)=>{
               
                let res = await fetch(`http://localhost:3004/phones?_page=${page}&_limit=20&_sort=price&_order=asc`)
                let data = await res.json()
                setData(data);
            }
              const  All=async(page)=>{
               
                let res = await fetch(`http://localhost:3004/phones?_page=${page}&_limit=20`)
                let data = await res.json()
                setData(data);
            }

            //   let a= useEffect(()=>{
                
            //     AscData()
            //   },[])
            //   let b= useEffect(()=>{

            //     DescData()
            //   },[])
    
// }
// function All(){
   
//         useEffect(()=>{
   
//             axios.get(`http://localhost:3004/newarrival?_page=${page}&_limit=20`).then((res)=>{
//                 console.log(res.data)
//                 setData(res.data)
                
//             })
//             },[page])
    
// }


   


function HandleChange(e){
    if(e.target.value==="asc"){
        console.log(asortdata)
        AscData()
    }else if(e.target.value==="dsc"){
        DescData()
        console.log(dsortdata)
    }else if(e.target.value==="all"){
All()
    }
  
   

}

    return(
        <div>
            <Navbar/>
            <div id="timer" ></div>
            <div id="header" >
                <h1>New Arrival</h1>
                <select onChange={HandleChange}  > Sort by: All 
                    <option value="all">Sort by: All</option>
                    <option value="asc">Price (Low to High)</option>
                    <option value="dsc">Price (High to Low)</option>
                </select>
            </div>
            <div id="product" >
{/* --------------------------------------------------------------- */}
<Grid templateColumns='repeat(4, 1fr)' gap={6}> 
    {/* mapping product */}
{
    data?.length>0 && data.map((e)=>{
return (
<GridItem key={e.id} >
    {/* mapping in card */}
<ProductCard

image={e.image}
id={e.id}
price2={e.price2}
price={e.price}

title={e.title}

/>
</GridItem>
     ) })
}

</Grid>

{/* --------------------------------------------------------------------- */}
            </div>
            <div id="paginate" >
                <h5>Total 10 Pages</h5>
            <Pagination current={page} total={10} onChange={(value)=>setPage(value)} />
            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )
}
export default Newarrival