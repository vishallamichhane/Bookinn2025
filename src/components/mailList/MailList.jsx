import React from 'react'
import "./mailList.css"

export const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Travel more, spend less</h1>
        <span className="mailDesc">Sign up and we will send the best deals to you</span>
        <div className="mailInputContainer">
            <input type='text' placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
