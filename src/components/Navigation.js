import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <ul className='nav justify-content-center nav-pills nav-justified navigation'>
        <li className='nav-item'>
          <NavLink to='/' className='nav-link'>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/register' className='nav-link'>Register</NavLink>
        </li>
        <li className='nav-item'>
        <NavLink to='/listing' className='nav-link'>Listing</NavLink>
        </li>
        
        
        
      </ul>
    )
  }
}

export default Navigation;