import React from 'react'
import './Sidebar.css'
import { getIsAuthenticated, logoutUser } from '../components/Navigation';
import { useAuth0 } from '@auth0/auth0-react';
export default function Sidebar() {
  const { logout } = useAuth0(); // Get the logout function from useAuth0 hook

  const handleLogout = () => {
    logout({ returnTo: window.location.origin }); // Logout the user
  };

  return (
    <div className='Sidebar'>
      <div className='div1'></div>
      <div className='div2'>
        <div className='dashLink'>
          <img width="35" height="35" src="https://img.icons8.com/ios/50/1A1A1A/control-panel--v1.png" alt="control-panel--v1"/>&nbsp; &nbsp;
          <h3>Dashboard</h3>
        </div>
        <br/>
        <div className='logoutLink' onClick={handleLogout}> {/* Add onClick event handler */}
          <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/1A1A1A/exit.png" alt="exit"/>&nbsp; &nbsp;
          <h3>Logout</h3>
        </div>
      </div>
    </div>
  );
}
