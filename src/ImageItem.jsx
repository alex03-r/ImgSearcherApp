
import React from 'react'
import './style.css'

export const ImageItem = (props) => {

const { urls , alt_description, handleImgClick } = props;

  return (  
       <img className='img animate__animated animate__bounce' onClick={() => handleImgClick(urls.raw)} src={urls.raw} alt={alt_description}   />
    )
}
