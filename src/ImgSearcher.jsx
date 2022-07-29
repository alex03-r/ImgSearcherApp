import React, { useEffect, useRef, useState } from 'react'
import './style.css'

export const ImgSearcher = () => {



  const APY_KEY = 'd117mhkj6exY-z_CMSbgOx66rzvd_NPSjsoR6Yx9A6c';
  const [images, setImages] = useState([])
  const [removeAlert, setRemoveAlert] = useState(true)
  const [searchImg, setSearchImg] = useState('')

  const ref = useRef("");

  const url = `https://api.unsplash.com/search/photos?per_page=${12}&query=${searchImg}`;

  const getAllImages = async () => {

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Client-ID ${APY_KEY} `
      }
    })

    const data = await response.json()
    const { results } = data


    setImages(results)
  }

  const handleSearch = (e) => {

    ref.current.removeAttribute("disabled");
    setSearchImg(e.target.value)

  }

  const handleSearchImg = () => {

    if (searchImg.length <= 0) {
      alert('the input is emty');
      return null;
    }
    setRemoveAlert(false);
    getAllImages()
    setSearchImg('')

  }

  const handleImgClick = (url) => {
    window.open(url);
  }

  useEffect(() => {

    ref.current.setAttribute('disabled', 'disabled');

  }, [])


  return (
    <div className='d-column justify-content-center align-items-center'>

      <h1 className='text-center'>Searcher image App</h1>
      <div className='d-flex aling-items-center mt-3 ms-5'>

        <label className='form-label mt-2 ms-5 me-0 fw-bold'>Search your image</label>
        <input className='form-control mt-2 ms-5 mb-2 w-50' placeholder='Img name' onChange={handleSearch} value={searchImg} />
        <button className='btn btn-primary h-50 mt-2 ms-2' ref={ref} onClick={handleSearchImg}>Search</button>
      </div>
      <div className='row mt-3'>

        {searchImg === "" && images.length <= 0 || removeAlert ? <p className='alert alert-primary mt-5  text-center'>No phothos yet. Type a keword to search the kind of photos you want   </p> : null}

        {
          images.map(img => {
            // data-tooltip={img.alt_description}
            return <img className='img animate__animated animate__bounce' onClick={() => handleImgClick(img.urls.raw)} src={img.urls.raw} alt={img.alt_description} />
          })
        }

      </div>

    </div>


  )
}
