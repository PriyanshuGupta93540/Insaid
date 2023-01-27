import React from 'react'
import F1 from '../../images/1.jpg'
import F2 from '../../images/2.jpg'
import F3 from '../../images/3.png'

import './Intro.css'

const Intro = () => {
  return (
    <div className='Intro_container'>
        <div className='Intro_img'>
          <img src={F3}></img>
        </div>   
    </div>
  )
}

export default Intro