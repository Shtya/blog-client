import React from 'react'

const CategoryId = ({params}) => {
  return (
    <div className='CategoryId'>
      <div className="h1Main">Our Works</div>
      <p>{params.category}</p>

      <div className="boxs">
      <div className="box">
        <div className="left">
        <h2>Creative Porfolio</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit repudiandae aut sit ex labore error dolores reprehenderit iste nihil voluptates molestias modi dignissimos quibusdam. Autem nobis asperiores cupiditate ex?</p>
        <button className="btn">See More</button>
        </div>

        <div className="right"><img src="/17.webp" alt="" /></div>
      </div>

      <div className="box">
        <div className="left">
        <h2>Creative Porfolio</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit repudiandae aut sit ex labore error dolores reprehenderit iste nihil voluptates molestias modi dignissimos quibusdam. Autem nobis asperiores cupiditate ex?</p>
        <button className="btn">See More</button>
        </div>

        <div className="right"><img src="/18.webp" alt="" /></div>
      </div>

      <div className="box">
        <div className="left">
        <h2>Creative Porfolio</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit repudiandae aut sit ex labore error dolores reprehenderit iste nihil voluptates molestias modi dignissimos quibusdam. Autem nobis asperiores cupiditate ex?</p>
        <button className="btn">See More</button>
        </div>

        <div className="right"><img src="/19.jpeg" alt="" /></div>
      </div>
      </div>

    </div>
  )
}

export default CategoryId