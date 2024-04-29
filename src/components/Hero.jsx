import React from 'react'
import'./Hero.css';
import { Link } from 'react-router-dom';
import { getIsAuthenticated, logoutUser } from './Navigation';
import { useAuth0 } from '@auth0/auth0-react';
export default function Hero() {

  const { isAuthenticated } = useAuth0(); // Get authentication status using useAuth0 hook

  const handleButtonClick = () => {
    if (isAuthenticated) {
      // Redirect to dashboard if authenticated
      window.location.href = "/dashboard";
    } else {
      // Show alert if not authenticated
      alert("Please login to access the dashboard.");
    }
  };

  return (
    <div className='Hero'>
      <div className='overlay'>
        <p className='tagline'>Track your money</p>
        <h1>WE ARE THE SOLUTION TO YOUR FINANCIAL ISSUES</h1>
        <p className='belowh1'>Explore our comprehensive suite of tools, resources, and expert guidance tailored to address a wide array of financial challenges. </p>
        <button onClick={handleButtonClick}>Get Started</button> {/* Always show the button */}
      </div>
    </div>
  );
}