import React,{useEffect,useRef} from 'react';
import './Card.css';
export default function Card({ totalSpent, dailyLimit,resetData }) {
  // Calculate the percentage of totalSpent relative to dailyLimit
  const percentage = (totalSpent / dailyLimit) * 100;

  // Determine the color based on the percentage
  let color;
  if (percentage <= 50) {
    color = 'rgb(125, 255, 125)'; // Change color to green when less than or equal to 50%
  } else if (percentage <= 80) {
    color = 'orange'; // Change color to orange when less than or equal to 80%
  } else if (percentage <= 100) {
    color = 'red'; // Change color to red when less than or equal to 100%
  } else {
    color = 'darkred'; // Change color to darkred when exceeded 100%
  }

  // Style the progress bar dynamically based on the percentage and color
  const progressBarStyle = {
    width: `${Math.min(percentage, 100)}%`, // Ensure width doesn't exceed 100%
    backgroundColor: color, // Set background color based on the determined color
  };

  return (
    <div className='Card'>
      <h2 style={{color:'rgb(208, 253, 243)'}}>Daily Spent Analysis</h2>
      <p className='spent'>{totalSpent}/{dailyLimit}</p>
      {/* progress bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={progressBarStyle}></div>
      </div>
      <p className={percentage <= 100 ? 'under-budget' : 'exceeded-budget'}>
        {percentage <= 100 ? 'You are under the budget' : 'You have exceeded the budget'}
      </p>
      <button onClick={resetData} className='resetButton'>Reset</button>
    </div>
  );
}
