import Sidebar from "../Components/Sidebars";
import Navbar from "../Components/Navbar";
import Product from "./Product";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";
function Home(){
    return(
        <div>
<Navbar/>
<Carousel />
<Product/> 
<Footer/>


        </div>
    )
}
export default Home