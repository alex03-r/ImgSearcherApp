

export function ToolTip({describtion}){


    return(
        <div style={{position:"absolute", borderColor:"white", borderRadius:"5px", marginLeft:"60px",  width:"100px" , height:"auto ", backgroundColor:"white",  top:"20px"}} >
            <p className="text-center p-3">{ describtion ?? "no describtion" }</p>
        </div>
    )

}