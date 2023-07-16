import React from 'react'

const Contact = () => {
  return (
    <div className='Contact'>
      <h1>Let's Keep in Touch</h1>
      <div className="boxs">

        <div className="coverImg"> <img src="./contact.png" alt="" /></div>

        <form action="">
          <div className="group">
            <input type="text" id='name' placeholder='Name' />
          </div>
          
          <div className="group">
            <input type="email" id='Email' placeholder='Email' />
          </div>

          <div className="group">
            <textarea type="text" id='Message' placeholder='Message' />
          </div>

          <button className="btn">Send</button>

        </form>
      </div>
    </div>
  )
}

export default Contact