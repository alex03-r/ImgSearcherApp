import React, { useEffect, useRef, useState  } from 'react'
import { ImageItem } from './ImageItem';
import './style.css'




export const ImgSearcher = () => {

  const APY_KEY = 'd117mhkj6exY-z_CMSbgOx66rzvd_NPSjsoR6Yx9A6c';
  const [images, setImages] = useState([]);
  const [searchImg, setSearchImg] = useState('');

  const buttonref = useRef("");

  const url = `https://api.unsplash.com/search/photos?per_page=${13}&query=${searchImg}`;

  const getAllImages = async () => {

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Client-ID ${APY_KEY} `
      }
    })

    const data = await response.json();
    const { results } = data;
    console.log(results)
    setImages(results);
  }

  const handleSearch = (e) => {

    buttonref.current.removeAttribute("disabled");
    setSearchImg(e.target.value);

  }

  const handleSearchImg = () => {

    if (searchImg.length <= 0) {

      alert('the input is emty');
      return null;
    }

    getAllImages();

    setSearchImg('');

  }

  const handleImgClick = (url) => {
    window.open(url);
  }

  useEffect(() => {
    buttonref.current.setAttribute('disabled', 'disabled');
 
  }, [])


  return (
    <div>

      <h1 className='text-center'>Searcher image App</h1>
      <div className='d-flex aling-items-center mt-3 ms-5'>

        <label className='form-label mt-2 ms-5 me-0 fw-bold'>Search your image</label>
        <input className='form-control mt-2 ms-5 mb-2 w-50' placeholder='Img name' onChange={handleSearch} value={searchImg} />
        <button className='btn btn-primary h-50 mt-2 ms-2' ref={buttonref} onClick={handleSearchImg}>Search</button>
      </div>
 
        <div className='row mt-3'>
          {images.length <= 0 && <p className='alert alert-primary mt-5  text-center'>No phothos yet. Type a keword to search the kind of photos you want   </p> }

          {
            images.map(img => {

              return <ImageItem key={img.id}  {...img} handleImgClick={handleImgClick} />

            })

          }
        </div>
      

    </div>
  )
}
