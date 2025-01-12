import React, { Children, useState } from 'react'
import "./SecondNav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faPerson, faPlane, faTowerBroadcast } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import {useDate} from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"

export const SecondNav = ({type}) => {
  

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
        </div>
        </div>

             
  )
}
