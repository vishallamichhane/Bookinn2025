import React from 'react'
import "./featured.css"

export const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem  ">
        <img src="https://i.pinimg.com/474x/01/c4/5f/01c45f6fe411923b32d0e368b3e925f5.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Lakeside</h1>
          <h2>10 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://i.pinimg.com/474x/4a/f3/4d/4af34d577a56647532faf5921e3267c2.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Sarangkot</h1>
          <h2>5 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://i.pinimg.com/474x/14/98/7a/14987a2f7cf8f7e98b4e8efd215002aa.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Lekhnath</h1>
          <h2>8 properties</h2>
        </div>
      </div>
    </div>
  )
}
