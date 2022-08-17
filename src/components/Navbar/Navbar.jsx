import React from 'react'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'
import './Navbar.css'
function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <span className='n-name'>Ahammed Mishal</span>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' activeClass="active" smooth={true}>
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to='services' smooth={true}>
                        <li>Services</li>
                    </Link>
                    <Link spy={true} to='experience' smooth={true}>
                        <li>Experience</li>
                    </Link>
                    <Link spy={true} to='portfolio' smooth={true}>
                        <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='testimonial' smooth={true}>
                        <li>Testmonials</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='contact' smooth={true}>
                <button className="button n-button">
                    Contact
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar