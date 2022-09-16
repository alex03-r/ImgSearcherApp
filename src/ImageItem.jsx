
import React from 'react'
import { useState } from 'react'
import './style.css'
import { ToolTip } from './ToolTip'

export const ImageItem = (props) => {

  const [tooltip, settooltip] = useState(false)
const { urls , alt_description, handleImgClick } = props;

  return (  
    <div style={{position:"relative", width:"270px" , marginRight:"8px"}} className="d-flex" >
       <img className='img animate__animated animate__bounce'  onMouseOver={() => settooltip(true) } onMouseLeave={() => settooltip(false) }  onClick={() => handleImgClick(urls.raw)} src={urls.raw} alt={alt_description}   />
       { tooltip ? <ToolTip describtion={alt_description} /> : null } 
    </div>
    )
}
