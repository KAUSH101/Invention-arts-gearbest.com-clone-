

function Pagination(props){
    const{current,onChange,total}=props
const prev= <button style={{borderRadius:"10px", background:"teal"}} disabled={current===1} onClick={()=>onChange(current-1)} >PREV</button>
const next= <button style={{borderRadius:"10px", background:"teal"}} disabled={current===10}  onClick={()=>onChange(current+1)}  >NEXT</button>

    const pages = new Array(total).fill(0).map((el,i)=>
<button onClick={()=>onChange(i+1)} disabled={current===(i+1)} >{i+1}</button>
    )


 

    return(

          <div>
            {prev}
            {pages}
            {next}
          </div>

    )
}
export default Pagination