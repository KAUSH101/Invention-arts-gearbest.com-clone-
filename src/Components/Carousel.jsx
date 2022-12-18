import ImageSlider from "./ImageSlider";
import Navbar from "./Navbar";
const Carousel = () => {
  const slides = [
    { url: "https://uidesign.gbtcdn.com/GB/image/8823/PPC+1190X420+EN.jpg" },
    { url: "https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg"},
    { url: "https://uidesign.gbtcdn.com/GB/image/5502/1190x420.jpg?imbypass=true" },
    { url: "https://uidesign.gbtcdn.com/GB/image/8823/tools_1190X420_en.jpg"},
    { url: "https://uidesign.gbtcdn.com/GB/image/8823/security_1190%C3%97420_en.jpg" },
    { url: "https://www.gearbest.com/u_file/2212/12/photo/105254957714338494-195a.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_1920" },
  ];
  const containerStyles = {
    width: "100%",
    height: "500px",
    marginBottom: "20px",
  };
  return (
    <div>
        
       
       
     
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Carousel;