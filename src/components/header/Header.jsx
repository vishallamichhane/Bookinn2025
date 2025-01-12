import React, { Children, useState } from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faPerson, faPlane, faTowerBroadcast } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import {useDate} from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import {useNavigate} from 'react-router-dom'

export const  Header = ({type}) => {

  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
    }
  ]); 
const [openOptions, setOpenOptions] = useState(false);
const[options,setOptions]= useState({
  adult:1,
  children:0,
  room:1,
})




const handleOption = (name, operation) =>{
  setOptions(prev=>{return {
    ...prev, [name] : operation === "i"? options[name] + 1 : options[name] - 1,
  }
})
}

const handleSearch = (e)=>{
  e.preventDefault()
 navigate("/hotels", {state: {destination, date, options} })
}

  return (
    <div className='header'>
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
      <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span> Stays</span>
            </div>

            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} /> 
            <span> Airport</span>
            </div>

            <div className="headerListItem">
            <FontAwesomeIcon icon={faTowerBroadcast} /> 
            <span> Attractions</span> 
            </div>


        </div>

                { type !=="list" &&
                  <>

                  <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDescription">
          Get rewarded for your travels - unlock instant savings of 10% or more with a free BookInn account
        </p>
        <button type="button" className="headerBtn">Sign in / Register</button>
        <form className="headerSearch" onSubmit={handleSearch}>
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed}  className = "headerIcon"/>
          <input
           type = "text" 
          placeholder = "where are you going?" 
          className = "headerSearchInput"
          required

          onChange={e=>setDestination(e.target.value)} 
          />
          </div>
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays}  className = "headerIcon"/>
          <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
          
          {openDate && ( <DateRange
          edittableDateInputs ={true}
          onChange ={item=> setDate([item.selection])}
          moveRangeOnFirstSelection = {false}
        ranges={date}
        className='date'
        minDate={new Date()}
          />
          )}

          </div>
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson}  className = "headerIcon"/>
         <span onClick={()=> setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult ~ ${options.children} childern ~ ${options.room} room`}</span>
         {openOptions &&<div className="options">
          <div className="optionItem"> 
            <span className="optionText">Adult</span>
            <div className="optionCounter">
            <button type="button"
            disabled={options.adult <= 1}
             className="optionCounterButton"onClick={()=>handleOption("adult", "d")}>-</button>
            <span className="optionCounterNumber"> {options.adult} </span>
            <button type="button" className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
          </div>
          </div>

          <div className="optionItem"> 
            <span className="optionText">Children</span>
            <div className="optionCounter">
            <button type="button" 
            disabled={options.children <= 0}
            className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
            <span className="optionCounterNumber"> {options.children} </span>
            <button type="button" className="optionCounterButton"onClick={()=>handleOption("children", "i")} >+</button>
          </div>
          </div>

          <div className="optionItem"> 
            <span className="optionText">Room</span>
            <div className="optionCounter">
            <button type="button"
            disabled={options.room <= 1}
            className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
            <span className="optionCounterNumber">{options.room}</span>
            <button type="button" className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
          </div>
          </div>
         </div>
         }
          </div>
          <div className="headerSearchItem">
          <button className="headerBtn">Search</button>
          </div>

        </form></>}
      </div>
    </div>
  )
}
