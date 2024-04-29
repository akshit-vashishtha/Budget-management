import React from 'react'
import './nav.css'
import {useAuth0} from '@auth0/auth0-react'
import { Link } from 'react-router-dom';
export default function Navigation() {
    const {user,loginWithRedirect,isAuthenticated,logout}=useAuth0();
  console.log("current user: ", user)
    return (
      <div className='navbar'>
        <div className='brand'>
          <img width="50" height="50" src="https://img.icons8.com/arcade/64/f.png" alt="f"/>
          <p>FinVista</p>
        </div>
        <div className='links'>
          <div className='mainBar'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Testimonials</a>
            {/* <a href='#'>Pricing</a> */}
          </div>
          
        </div>
        <div className='login'>
          {isAuthenticated ? (
          <Link to="/dashboard">
            <button>Get Dashboard</button>
        </Link>    
          ):<button onClick={(e)=>loginWithRedirect()}>Login</button> }
          
        </div>
      </div>

  )
};
export const getIsAuthenticated = (isAuthenticated) => {
  return isAuthenticated;
};

export const logoutUser = (logout) => {
  logout({ returnTo: window.location.origin });
};
