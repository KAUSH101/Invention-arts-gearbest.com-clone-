// main product page
import axios from "axios"
import {  Grid,
    GridItem} from "@chakra-ui/react"
import {useEffect,useState} from "react"
import ProductCard from "../Components/Productcard"
const Product=()=>{
const [data,setData] = useState([])
useEffect(()=>{
axios.get(`https://json-fev1.onrender.com/phones?_page=1&_limit=20`).then((res)=>{
    console.log(res.data)
    setData(res.data)
})
},[])

    return(
<>
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

</>
    )
}
export default Product