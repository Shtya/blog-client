import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='Portfolio'>
      <h1 className='h1Main'>our Works</h1>
      <p>Choose a gallery</p>

      <ul>
        <Link href="/portfolio/illustrations">
          <img src="./illustration.png" alt="" />
          <p>Illustration</p>
        </Link>
        <Link href="/portfolio/websites">
          <img src="./websites.jpg" alt="" />
          <p>websites</p>
        </Link>
        <Link href="/portfolio/Applications">
          <img src="./apps.jpg" alt="" />
          <p>Applications</p>
        </Link>


      </ul>
    </div>
  )
}

export default Portfolio