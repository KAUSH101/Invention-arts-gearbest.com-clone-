import { func } from "prop-types";
import Carousel from "./Carousel";
import "./Navbar.css"
import Footer from "./Footer";
import{  Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image,
    Text,
    Input,} from "@chakra-ui/react"
  import { GiHamburgerMenu } from "react-icons/gi";
  import {FaRegUser, FaSearch} from "react-icons/fa"
  import {FiHeart} from "react-icons/fi"
  import {GrCart} from "react-icons/gr" 
  import Product from "../Pages/Product";
  import {Link as RouterLink} from "react-router-dom"
function Navbar(){
    
  const style = { marginTop:"33px", color:"black", height: "30px",width:"30px"}
  const styleSearch = { color:"gray", height: "24px",width:"24px"}
  const stylep = {  color:"gray",fontSize:"20px",marginTop:"50px"}
  const styleSpan = {  color:"white", background:"red",marginLeft:"80%",width:"20%",borderRadius:"90%",marginTop:"5px"}
//   const [showMediaIcons, setShowMediaIcons] = useState(false);
    return(
        <div id="homep">  
        <div className="mainNav" >
            <div className="navSearch" >
<div id="logo" >
<img  width="120px" height="90%" src="https://drive.google.com/uc?export=view&id=1PDrnXQKTsjCBUtOzsORBkE66RlNhSFJO" />
</div>
<div id="searchbar" >
<Center
            className="inputbox"
            marginTop="30px"
        //   border="0px solid yellow"
          borderRadius="10px"
          width="75%"
          height="40px"
          justifyContent="space-between"
          background="yellow"
          >
           
<Input
className="input"
border="none "
outline="none"
width="90%"
height="35px"
borderTopLeftRadius="10px"
borderBottomLeftRadius="10px"
background="white"
 placeholder='Search' 
 style={{fontSize:"20px"}}
 
 />
       <FaSearch 
       style={styleSearch}
       />
       
          </Center>

</div>
<div id="icons">
<FaRegUser style={style}/>

<span>
<GrCart style={style}
/>
</span>

</div>
            </div>
        <div className="menu" >
<div id="dropDown">

<button id="ddBtn" >
<GiHamburgerMenu/>
    All Categories

</button>

</div>
<div id="menuNav" >
<RouterLink style={{textDecoration:"none" , color:"gray"}} to={`/`} ><h3>Home</h3></RouterLink>

<h3>All Collection</h3>
<h3>Super Deals</h3>
<RouterLink style={{textDecoration:"none" , color:"gray"}} to={`/newarrival`} ><h3>New Arrival</h3></RouterLink>



</div>
<div id="blank" ></div>
        </div>
        </div>
        {/* <div id="poster" >
            <img  src="https://www.gearbest.com/u_file/2212/12/photo/105254957714338494-195a.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_1920" alt="poster" /> 
             <Carousel/>

        </div> */}

        {/* <div id="products" >
<Product/>
        </div> */}
        {/* <div id="footer" >
     <Footer/>
        </div> */}
        </div>
    )
}
export default Navbar