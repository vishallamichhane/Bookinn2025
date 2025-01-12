import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faIndustry, faToilet, faTowerCell} from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="fLists">
            <ul className="fList">
            <h1>ABOUT US</h1>
                <li className="fListItem">Privacy policy</li>
                <li className="fListItem">Terms of service</li>
                <li className="fListItem">Help</li>  
            </ul>
            <ul className="fList">
            <h1>Social & Contacts</h1>
             <FontAwesomeIcon icon= {faTowerCell} />
             <FontAwesomeIcon icon= {faIndustry} />
             <FontAwesomeIcon icon= {faToilet} />
                  
            </ul>
            
            <ul className="fList">
            <h1>Payment Partners</h1>
            <FontAwesomeIcon icon= {faTowerCell} />
             <FontAwesomeIcon icon= {faIndustry} />
             <FontAwesomeIcon icon= {faToilet} />
            </ul>
        </div>

        <div className="fText">Copyright © 2025 BookInn.</div>
    </div>
  )
}
