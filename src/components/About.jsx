import React from 'react'
import './About.css'
import AboutCard from './AboutCard'
export default function About() {
  return (
    <div className='About'>
        <div className='whatWeDo'>
            <h3>What We Do</h3>
            <h1>Managing Your Finances Is Now Easy</h1>
        </div>
        <div className='AboutCards'>
            <AboutCard src={"https://img.icons8.com/ios-filled/50/FFFFFF/settings.png"} header={"Automated Expenses"} desc={"Effortlessly streamline your finances with our automated expense tracking feature."}/>

            <AboutCard src={"https://img.icons8.com/ios-filled/50/FFFFFF/courses.png"} header={"Spending Overview"} desc={"Instantly track and manage expenses for smarter financial decisions."}/>
            <AboutCard src={"https://img.icons8.com/ios-filled/50/FFFFFF/smartphone--v2.png"} header={"Cross platform support"} desc={"The dashboard could be used anywhere anytime and in any device."}/>
        </div>
    </div>
  )
}
