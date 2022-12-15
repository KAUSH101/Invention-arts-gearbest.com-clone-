

function Productcard({image,id,title,price,discount}){
    return(
        <div>
            <img src={image} alt="title" />
           <p></p>
           <p>{title}</p>
           <p>{price}</p>
           <p>{discount}</p>

        </div>
    )
}
export default Productcard