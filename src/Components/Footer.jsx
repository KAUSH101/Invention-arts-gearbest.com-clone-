import "./Footer.css"

function Footer(){
    return(
        <div id="bottomPage" >
        <div id="mainFooter" >
            <div>
            <h2>Company Information</h2>
                <h4>About Us</h4>
                <h4>Privacy Policy</h4>
                <h4>Terms and Conditions</h4>
                <h4>Intellectual Property Policy</h4>
                <h4>Contact Us</h4>
                <h4>Cookies Policy</h4>
            </div>
            <div>
            <h2>Customer Service</h2>
                <h4>Shipping Information</h4>
                <h4>FAQ For Newsletter Subscription</h4>
                <h4>Warranty and Return</h4>
                <h4>Payment Methods</h4>
                <h4>FAQ & Support</h4>
                
            </div>
            <div>
            <h2>Contact Us</h2>
                <h4>support@gearbest.com</h4>

            </div>
            <div>
            <h2>About Us</h2>
            <img  width="120px" height="120px" src="https://drive.google.com/uc?export=view&id=1PDrnXQKTsjCBUtOzsORBkE66RlNhSFJO" />
            <p>Gearbest will always provide high quality products and services via its international e-commerce platform maximize the happiness of global customers.</p>
            <button>View More</button>
            </div>

            <div>
            <h2>Newsletter</h2>
            <input type="email" placeholder="Enter your e-mail address" />
            <button>Subscribe</button>
            </div>
           
        </div>
        <div id="bottom" >
<p>Copyright © 2014-2022 Gearbest.com. All Rights Reserved.</p>
<img src="https://gearbest.com/static/themes-v2/default/images/cart/payment/icon_Paypal.png" alt="" />
        </div>
        </div>
        
    )
}
export default Footer

