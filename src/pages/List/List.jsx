import React, { useState } from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import { SecondNav } from './SecondNav'
import "./List.css"
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import hotelImage1 from '../../atithi resort/atithi resort 1.jpeg'
import hotelImage2 from '../../culture resort/culture resort 6.jpeg'
import hotelImage3 from '../../hotel barahi/hotel barahi 7.jpg'
import hotelImage4 from '../../hotel elia/hotel elia 4.jpeg'
import hotelImage5 from '../../hotel portland/hotel portland 4.jpeg'
import hotelImage6 from '../../hotel fewa/hotel fewa 3.jpeg'
import hotelImage7 from '../../hotel himalayan vaccation/hotel himalayan vaccation 1.jpeg'
import hotelImage8 from '../../villa karma/karma villa 1.jpeg'
export const List = () => {
const location = useLocation();
const[destination,setDestination] = useState(location.state.destination);
const[date,setDate] = useState(location.state.date);
const[openDate,setOpenDate] = useState(false);
const[options,setOptions] = useState(location.state.options);



  return (
    <div>
      <Navbar/>
    <div>
      <SecondNav/>
      {/* <Header type="List"/> */}

<div className="listContainer">
  <div className="listWrapper">

    <div className="listSearch">
      <h1 className="lsTitle">Search</h1>

      <div className="lsItem">
        <label>Destination</label>
        <input placeholder= {destination} type='text'/>
      </div>

      <div className="lsItem">
        <label>Check-in Date</label>

        <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${
          format(date[0].endDate,
            "MM/dd/yyyy"
          )
        }`}</span>
        {openDate &&(
          <DateRange onChange={item=>setDate([item.selection])} 
        minDate={new Date()}
        ranges={date} 
        />
         )}
      </div>
      <div className="lsItem">
        <label>Options</label>
        <div className="lsOptions">

        <div className="lsOptionItem">
          <span className="lsOptionText">Min price <small>per night</small>
          </span>
           <input type="number" className="lsOptionInput" />
        </div>
        <div className="lsOptionItem">
          <span className="lsOptionText">Max price <small>per night</small>
          </span>
           <input type="number" className="lsOptionInput" />
        </div>
        <div className="lsOptionItem">
          <span className="lsOptionText">
            Adult
          </span>
           <input type="number" min={1} placeholder={options?.adult}  className="lsOptionInput" />
        </div>
        <div className="lsOptionItem">
          <span className="lsOptionText"
          >Childern
          </span>
           <input type="number" min={0} className="lsOptionInput" placeholder={options?.children} />
        </div>
        <div className="lsOptionItem">
          <span className="lsOptionText">
            Room
          </span>
           <input type="number" min={1} className="lsOptionInput" placeholder={options?.room} />
          </div>
        </div>  
      </div>
      <button>Search</button>
    </div>
    <div className="listResult">
      <SearchItem 
        title={"Atithi Resort & Spa"}
        distance={"1500m from center"}
        map={"Show on map"}
        subtitle={"Please come and eat"}
        features={"Big bed, free breakfast, good facilities"}
         message={"You can cancel later, so lock in this great price today"}
         rating={"9.9"}
         price={"16000"}
        cancelOption={"Free cancellation"}
        img={hotelImage2}

      />
      <SearchItem 
        title={"The Culture Resort"}
        distance={"500 meters from pasal"}
        subtitle={"Please come"}
        features={""}
         message={"You can cancel later, so lock in this great price today"}
         rating={"9.9"}
         price={"3000"}
        cancelOption={"Free cancellation"}
        img={hotelImage3}

      />
      <SearchItem 
        title={"Hotel Barahi Pokhara"}
        distance={"1500 meters from pasal"}
        subtitle={"Please come and eat"}
        features={"Big bed, free breakfast, good facilities"}
         message={"You can cancel later, so lock in this great price today"}
         rating={"9.9"}
         price={"16000"}
        cancelOption={"Free cancellation"}
        img={hotelImage1}

      />
      <SearchItem 
        title={"Hotel Elia"}
        distance={"1500 meters from pasal"}
        subtitle={"Please come and eat"}
        features={"Big bed, free breakfast, good facilities"}
         message={"No messages"}
         rating={"9.9"}
         price={"16000"}
        cancelOption={"Free cancellation"}
        img={hotelImage4}

      />
      <SearchItem 
      title={"Hotel Portland"}
      distance={"1500 meters from pasal"}
      subtitle={"Please come and eat"}
      features={"Big bed, free breakfast, good facilities"}
       message={"You can cancel later, so lock in this great price today"}
       rating={"9.9"}
       price={"16000"}
      cancelOption={"Free cancellation"}
      img={hotelImage5}

    />
    <SearchItem 
      title={"Hotel Fewa Camp"}
      distance={"1500 meters from pasal"}
      subtitle={"Please come and eat"}
      features={"Big bed, free breakfast, good facilities"}
       message={"You can cancel later, so lock in this great price today"}
       rating={"9.9"}
       price={"16000"}
      cancelOption={"Free cancellation"}
      img={hotelImage6}

    /><SearchItem 
    title={"Hotel Himalayan Vaccation"}
    distance={"1500 meters from pasal"}
    subtitle={"Please come and eat"}
    features={"Big bed, free breakfast, good facilities"}
     message={"You can cancel later, so lock in this great price today"}
     rating={"9.9"}
     price={"16000"}
    cancelOption={"Free cancellation"}
    img={hotelImage7}

  /><SearchItem 
  title={"Villa Karma "}
  distance={"1500 meters from pasal"}
  subtitle={"Please come and eat"}
  features={"Big bed, free breakfast, good facilities"}
   message={"You can cancel later, so lock in this great price today"}
   rating={"9.9"}
   price={"16000"}
  cancelOption={"Free cancellation"}
  img={hotelImage8}

/>
      {/* <SearchItem/>
      <SearchItem/>
      <SearchItem/> */}
      
    </div>
    </div>
  </div>
 </div>
  </div>
  )
}