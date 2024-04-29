import React,{useRef} from 'react'
import './Analysis.css'
import {Chart as ChartJS} from 'chart.js/auto'
import {Bar, Doughnut, Line} from 'react-chartjs-2'
export default function Analysis({ categoricalSpend,categories }) {
    const labels = Object.keys(categoricalSpend);
    const data = Object.values(categoricalSpend);
    const namesArray = categories.map(category => category.name);

    // Extracting all values into an array
    const valuesArray = categories.map(category => category.value);
    // Define colors for each label
    const colors = [
      'rgba(255, 99, 132,0.7)',
      'rgba(54, 162, 235,0.7)',
      'rgba(255, 205, 86,0.7)',
      'rgba(153, 102, 255,0.7)',
      'rgba(208, 253, 243, 0.7)'
    ];
  
    const chartData = {
      labels: namesArray,
      datasets: [
        {
          label: "Spent",
          data: valuesArray,
          backgroundColor: colors, // Assign colors array to backgroundColor
          borderRadius: 20
        }
      ]
    };
  
    return (
        <div className='Analysis'>
        <Bar
          data={chartData}
          options={{
            plugins: {
              legend: {
                display: false // Hide the legend if you don't need it
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  display: false
                },
                ticks: {
                  color: 'rgb(255, 255, 255)' // Change color of y-axis values
                }
              },
              x: {
                grid: {
                  display: false
                },
                title: {
                  display: true,
                  text: 'Categories',
                  color: 'rgb(255, 255, 255)',
                  fontSize: 50,
                  font: {
                    size: 14 // Adjust font size of categories text
                  }
                },
                ticks: {
                  color: 'rgb(255, 255, 255)'
                }
              }
            }
          }}
          style={{ height: '40vh' }}
        />
      </div>
    );
  }