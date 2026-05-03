import React from 'react'
import image from '../assets/1000_F_500611919_5wuf1qGRCubiXXxIa7og1fLLCyHi6qP9.jpg'
import { useState } from "react";
 import {  Link } from 'react-router-dom';
export default function Nav() {
  const [open, setOpen] = useState(false);
  return (

    <div className="nav__container">
    <nav>
        <figure className="movie">
            <img src={image} alt=""className="navlogo"/>
        </figure>
        <button className="burger" onClick={() => setOpen(!open)}>☰</button>
        <ul className={open ? "nav__lists nav__lists--open" : "nav__lists"}>
            <li className="nav__list"><Link to="/">Home</Link></li>
           <li className="nav__list"><Link to="/movies">Movies</Link></li>
           <li className="nav__list"> <Link to="/tickets">Tickets</Link></li>
        </ul>
    </nav>
    </div>
  )
}
