import {Link} from "react-router-dom"
function Empty(){

    return(
        <div style={{width:"100%",height:"500px" }}>
            <h1>Cart is Empty</h1>
<Link to={'/'} ><p>Continue shopping</p></Link>

        </div>
    )
}
export default Empty