import React from 'react'
import './OurService.css'
import I6 from '../../images/6.jpg'
import I7 from '../../images/7.jpg'
import I8 from '../../images/80.jpg'
import I9 from '../../images/81.jpg'

const OurService = () => {
  return (
    <div className='Ourcategories'>
         <h1>Our Categories</h1>
    <div className='Our_categorieslist'>
       <div className='img1'>
        <img src={I6} alt="" />
        <h4>Winter Collection</h4>
        </div>
        <div className='img2'>
        <img src={I8} alt="" />
        <h4>Summer Collection</h4>
        </div>
        <div className='img3'>
        <img src={I7} alt="" />
        <h4>Partywear Collection</h4>
        </div>
        <div className='img4'>
        <img src={I9} alt="" />
        <h4>Casualwear Collection</h4>
        </div>
      </div>  

        
        
    </div>
  )
}

export default OurService