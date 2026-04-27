import React from 'react'
import image from '../assets/1000_F_500611919_5wuf1qGRCubiXXxIa7og1fLLCyHi6qP9.jpg'

 import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default function Nav() {
  return (
    <div>
    <nav>
        <figure className="movie">
            <img src={image} alt=""className="navlogo"/>
        </figure>
        <ul className="nav__lists">
            <li className="nav__list"><Link to="/">Home</Link></li>
           <li className="nav__list"><Link to="/movies">Movies</Link></li>
           <li className="nav__list"> <Link to="/tickets">Tickets</Link></li>
        </ul>
    </nav>
    </div>
  )
}
