import React from 'react'
import {Link} from "react-router-dom";

// Link is used to avoid the reloading of the page everytime we go from let's say from home page to about page

// And inside Link we use the attribute called "to" instead of href

const Header = () => {
  return <nav>
    <ul>
      <li><Link className='anchor' to="/">Home</Link></li>
      <li><Link className='anchor' to="/about">About</Link></li>
      <li><Link className='anchor' to="/contact">Contact</Link></li>
    </ul>
  </nav>
  
}

export default Header