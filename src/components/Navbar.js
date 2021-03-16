import React, { useEffect, useState } from 'react'
import { Link }from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes} from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [ click ,setClick ] = useState(false);
    const [button,setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=> setClick(false)
    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false)
        }else {
            setButton(true)
        }
    }
//useeefect to not rerender
useEffect(() => {
    showButton () ; } ,[])    

window.addEventListener('resize',showButton);

  return (
   <>
   <IconContext.Provider value={{ color: 'black'}}>

   
   <div className="navbar">
       <div className="navbar-container container">
           <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
              <i className='fas fa-syringe'></i>QUIVER 
           </Link>
           <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars /> }
           </div>
          <ul className = { click ? 'nav-menu active': 'nav-menu'}>
                <li className = "nav_item">
                    <Link to = '/' className = "nav-links" onClick={closeMobileMenu}>
                       Home
                    </Link>
                </li>
                <li className = "nav_item">
                    <Link to = '/book-appointment' className = "nav-links" onClick={closeMobileMenu}>
                       Book Appointment 
                    </Link>
                </li>
                <li className = "nav_item">
                    <Link to = '/covid-test' className = "nav-links" onClick={closeMobileMenu}>
                    COVID Test
                    </Link>
                </li>
               
          </ul>
       </div>
   </div>
   </IconContext.Provider>
   </>
  )
}

export default Navbar
