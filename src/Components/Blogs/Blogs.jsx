import React from 'react'
import './Blogs.css'
import I95 from '../../images/95.jpg'
import I96 from '../../images/96.jpg'

const Blogs = () => {
  return (
    <div className='Blogs'>
        <h1>Latest Blogs</h1>
       <div className='Blogs_outer'>
          <img src={I95} alt="" />
          <img src={I96} alt="" />
       </div>
       <div className='Blogs_content1'>
            <h1>This is First Post</h1>
            <p>Welcome in Developers Infotech Private Limited</p>
            <h8>16 April, 2023</h8>
            <h8>1 Comments</h8>
       </div>
       <div className='Blogs_content2'>
            <h1>This is Second Post</h1>
            <p>Welcome in Developers Infotech Private Limited</p>
            <h8>16 April, 2023</h8>
            <h8>1 Comments</h8>
       </div>
    </div>
  )
}

export default Blogs