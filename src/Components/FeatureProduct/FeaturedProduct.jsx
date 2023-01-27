import React from 'react'
import './FeaturedProduct.css'
import F4 from '../../images/4.jpg'
import F5 from '../../images/5.jpg'

const FeaturedProduct = () => {
  return (
    <div className='FeaturedProduct_Container'>
       <div className="FeatureProduct_left">
        <img src={F4} alt="" />
        <div className='FeatureProduct_content'>
        <span>New Collection</span>
         <span>Specially Designed</span>
         <p>We Are An Online Baby Store With More Yhat 12-Years Experience On
The Market! Our Shop Is Aimed To Fulfill All Parents’ Need And Give Your
Babies A Perfect Childhood!</p>
         
         <button>Shop Now</button>
         </div>
        </div>

        <div className="FeatureProduct_right">
        <img src={F5} alt="" />
        <div className='FeatureProduct_rightside'>
         <span>Trendy Clothes For</span>
         <span>Your Kid's</span>
         <p>We Are An Online Baby Store With More Yhat 12-Years Experience On
The Market! Our Shop Is Aimed To Fulfill All Parents’ Need And Give Your
Babies A Perfect Childhood!</p>
        </div>
        <button>Shop Now</button>
        </div>
    </div>
  )
}

export default FeaturedProduct