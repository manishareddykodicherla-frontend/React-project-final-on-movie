import React from 'react'
import image from '../assets/1000_F_500611919_5wuf1qGRCubiXXxIa7og1fLLCyHi6qP9.jpg'
export default function Nav() {

  
  return (
    <div>
    <nav>
        <figure className="movie">
            <img src={image} alt=""className="navlogo"/>
        </figure>
        <ul className="nav__lists">
            <li className="nav__list"><a href="">Home</a></li>
           <li className="nav__list"><a href="#movies">Movies</a></li>
           <li className="nav__list"> <a href="#price">Tickets</a></li>
        </ul>
    </nav>
    </div>
  )
}
