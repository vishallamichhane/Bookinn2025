import React, { useState } from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { MailList } from '../../components/mailList/MailList'
// import { Footer } from '../../components/footer/Footer.jsx'
import "./hotel.css"
import { SecondNav } from '../List/SecondNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export const Hotel = () => {

const [slideNumber, setSlideNumber] = useState(0);
const [open, setOpen] = useState(false);

  const photos = [ 
    {
    src: "https://basiyo.com/_next/image?url=https%3A%2F%2Fbasiyo-images-standard.s3-accelerate.amazonaws.com%2Fe25fc579-b0bf-47c1-a8c5-1bd3fc581278.jpeg%3FAWSAccessKeyId%3DAKIAXWGOH7AHINE7U4MO%26Signature%3Dw8OAbTE5YVTBCwftoLcQhunyxpg%253D%26Expires%3D1736663074&w=750&q=75"
  },
    {
    src: "https://basiyo.com/_next/image?url=https%3A%2F%2Fbasiyo-images-standard.s3-accelerate.amazonaws.com%2Fbcf42248-0329-467b-a66e-418fa185b0a2.jpeg%3FAWSAccessKeyId%3DAKIAXWGOH7AHINE7U4MO%26Signature%3DhJk02ZOtzxMXD471IC85E2tSfUM%253D%26Expires%3D1736663074&w=750&q=75"
  },
    {
    src: "https://basiyo.com/_next/image?url=https%3A%2F%2Fbasiyo-images-standard.s3.us-west-2.amazonaws.com%2F3bf2d48b-2b1f-4fc7-b5ba-985d3cb87476.jpeg&w=750&q=75"
  },
    {
    src: "https://basiyo.com/_next/image?url=https%3A%2F%2Fbasiyo-images-standard.s3-accelerate.amazonaws.com%2F0edf289a-59e3-4022-bcf3-afd5a22179d7.jpeg%3FAWSAccessKeyId%3DAKIAXWGOH7AHINE7U4MO%26Signature%3Dbbmj59fZLOWRgRE7OnNdNLu%252FAiY%253D%26Expires%3D1736663223&w=750&q=75"
  },
    {
    src: "https://basiyo.com/_next/image?url=https%3A%2F%2Fbasiyo-images-standard.s3-accelerate.amazonaws.com%2Fdc41c300-466e-4631-bc0c-05c6594bd05d.png%3FAWSAccessKeyId%3DAKIAXWGOH7AHINE7U4MO%26Signature%3DSjR9qA2B9K1xkXRvCVn5XzLAzqs%253D%26Expires%3D1736663223&w=750&q=75"
  },
    {
    src: "https://basiyo.com/_next/image?url=https%3A%2F%2Fbasiyo-images-standard.s3-accelerate.amazonaws.com%2F798373db-18e3-47d0-a9ff-71ca1b0ffcc3.jpeg%3FAWSAccessKeyId%3DAKIAXWGOH7AHINE7U4MO%26Signature%3DSlwwWViGE4mX0IvTX3fg465G4Js%253D%26Expires%3D1736663223&w=750&q=75"
  },
];
const handleOpen = (i)=>{
  setSlideNumber(i);
  setOpen(true);
}
const handleMove =(direction)=>{
  let  newSliderNumber;
  if(direction==="l"){
    newSliderNumber= slideNumber=== 0 ? 5 : slideNumber -1;
  }else{
    newSliderNumber= slideNumber=== 5 ? 0 : slideNumber +1;
  }
  setSlideNumber(newSliderNumber)
};

  return (
    <div>
      <Navbar/>
      <SecondNav type = "list"/>
      {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=> setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
          <div className="slideWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("t")}/>
          </div>}
      <div className="hotelContainer">
        
        <div className="hotelWrapper">
          <button className="bookNow">
            Reserve or Book Now!
          </button>
          <h1 className="hotelTitle">Tower Street</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon = {faLocationDot}/>
            <span>Lakeside St 16</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over Rs5000 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
           {photos.map((photo,i)=>(
            <div className="hotelImgWrapper">
              <img  onClick={()=>handleOpen(i)}
               src={photo.src}
               alt="" 
               className="hotelImg"/>
            </div>
           ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className='hotelTitle'> Stay in the heart of Pokhara</h1>
              <p className='hotelDesc'>
              Torre Guaceto Reserve is 15 km from Villa Karma by Perle di Puglia, while Archaeological Museum Egnazia is 35 km away. Brindisi - Salento Airport is 21 km from the property. Featuring air-conditioned accommodation with a private pool, pool view and a patio, Villa Karma by Perle di Puglia is located in Carovigno. This property offers access to a terrace, free private parking and free WiFi. The accommodation provides airport transfers, while a bicycle rental service is also available.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 3-night stay!</h1>
              <span>
                Located in the real heart of pokhara. This property has aa excellent location score of 9.8!
              </span>
              <h2>
                <b>Rs13999</b> (3 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
       
      </div>
      <MailList/>
      <Footer/>
    </div>
    
  )
}
