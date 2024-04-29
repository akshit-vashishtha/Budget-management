import React from 'react'
import './AboutCard.css'
export default function AboutCard({src,header,desc}) {
  return (
    <div className='AboutCard'>
        <img src={src} height="50" width="50"></img>
        <h2>{header}</h2>
        <p>{desc}</p>
    </div>
  )
}
