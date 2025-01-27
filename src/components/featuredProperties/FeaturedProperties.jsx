import React from 'react'
import "./featuredProperties.css"

export const FeaturedProperties = () => {
  return (
    <>
    <h1 className="fpTitle">Homes guests love </h1>
    <div className='fp'>

      <div className="fpItem">
       <img src="http://www.pokharagrande.com/images/features/Lwt1d-swimmingpool.jpg" alt="" className="fpImg" />
       <span className='fpName'>Hotel Grand</span>
       <span className='fpCity'>Dam Side,Birauta</span>
       <span className='fpPrice'>Starting from Rs5000</span>
       <div className="fpRating">
        <button>9.0</button>
        <span>Excellent</span>
      </div>
       </div>

    <div className='fpItem'>
       <img src="https://barahi.com/wp-content/themes/yootheme/cache/a7/sml-slider-one-a7b7877c.webp" alt="" className="fpImg" />
       <span className='fpName'>Sarangkot Mountain lodge</span>
       <span className='fpCity'>Sarangkot</span>
       <span className='fpPrice'>Starting from Rs6400</span>
       <div className="fpRating">
        <button>10</button>
        <span>Excellent</span>
       </div>
        </div>

        <div className='fpItem'>
       <img src="https://barahi.com/wp-content/themes/yootheme/cache/98/hbp-gallery-11-98a419d4.webp" alt="" className="fpImg" />
       <span className='fpName'>Hotel Barahi  </span>
       <span className='fpCity'>Lakeside</span>
       <span className='fpPrice'>Starting from Rs7000</span>
       <div className="fpRating">
        <button>9.0</button>
        <span>Excellent</span>
       </div>
        </div>

        <div className='fpItem'>
       <img src="https://pix8.agoda.net/hotelImages/126/1265179/1265179_16062919220044254179.jpg?ca=6&ce=1&s=1024x" alt="" className="fpImg" />
       <span className='fpName'>Hotel Deep Sagar</span>
       <span className='fpCity'>Newroad</span>
       <span className='fpPrice'>Starting from Rs6000</span>
       <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
       </div>
        </div>
        </div>
        </>
  )
}
