
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'




export const Navbar = () => {
  return (
    <div  className='navbar'>
        <div className="navContainer">
            <span className="logo">BookInn</span>
           <div  className="navItems">
           <div className="icon">
              <button className="navButton">Register</button>
              <FontAwesomeIcon icon= {faUser} />
              <button className="navButton">Login</button>
              <FontAwesomeIcon icon= {faArrowCircleRight} /> </div>           
            </div>

            
        </div>
    </div>
  )
}