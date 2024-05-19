import React,{useState} from 'react'
import Card from './Components/Card'
import AddExpense from './Components/AddExpense'
import ExpenseHistory from './Components/ExpenseHistory'
import './MainContent.css'
import Extra from './Components/Extra'
import Analysis from './Components/Analysis'
import Card2 from './Components/Card2'

export default function MainContent() {
  const[categories,setCategories]=useState([{
    name:"Food",
    value:"100"
  },{
    name:"Electronics",
    value:"200"
  },{
    name:"Bills",
    value:"150"
  },{
    name:"Clothes",
    value:"250"
  },{
    name:"Miscellaneous",
    value:"200"
  },])
  const [totalSpent,setTotalSpent]=useState(2250);
  const [dailyLimit,setDailyLimit]=useState(10000);
  const [expense,setExpense]=useState([{
    number:"Sr.no",
    description:"Description",
    price:"Price",
    category:"Category",
    time:"Time",
    header:true
},
{
  number: 1,
  description: "Lunch",
  price: 15,
  category: "Food",
  time: "12:30 PM",
  header: false
},
{
  number: 2,
  description: "Clothes",
  price: 50,
  category: "Clothing",
  time: "3:00 PM",
  header: false
},
{
  number: 3,
  description: "Utilities",
  price: 100,
  category: "Bills",
  time: "5:45 PM",
  header: false
},
{
  number: 4,
  description: "Headphones",
  price: 80,
  category: "Electronics",
  time: "10:00 AM",
  header: false
},
{
  number: 5,
  description: "Dinner",
  price: 20,
  category: "Food",
  time: "7:00 PM",
  header: false
},
{
  number: 6,
  description: "Shoes",
  price: 70,
  category: "Clothing",
  time: "2:15 PM",
  header: false
},
{
  number: 7,
  description: "Internet Bill",
  price: 60,
  category: "Bills",
  time: "9:30 AM",
  header: false
},
{
  number: 8,
  description: "Phone Charger",
  price: 10,
  category: "Electronics",
  time: "4:20 PM",
  header: false
},
{
  number: 9,
  description: "Breakfast",
  price: 10,
  category: "Food",
  time: "8:00 AM",
  header: false
},
{
  number: 10,
  description: "T-Shirt",
  price: 25,
  category: "Clothing",
  time: "1:30 PM",
  header: false
},
{
  number: 11,
  description: "Rent",
  price: 500,
  category: "Bills",
  time: "6:00 PM",
  header: false
},
{
  number: 12,
  description: "Laptop",
  price: 700,
  category: "Electronics",
  time: "11:45 AM",
  header: false
},
{
  number: 13,
  description: "Snacks",
  price: 5,
  category: "Food",
  time: "3:45 PM",
  header: false
},
{
  number: 14,
  description: "Jacket",
  price: 60,
  category: "Clothing",
  time: "7:30 PM",
  header: false
},
{
  number: 15,
  description: "Electricity Bill",
  price: 80,
  category: "Bills",
  time: "10:30 AM",
  header: false
},
])

const [categoricalSpend,setCategoricalSpend]=useState({
  "Food":65,
  "Electronics":790,
  "Clothes":205,
  "Bills":740,
  "Miscellaneous":450

})

  return (
    <div className='mainContent'>
      <div className='col1'>
        <div className='cards'>
              <Card totalSpent={totalSpent} dailyLimit={dailyLimit}/>
              <Card2 dailyLimit={dailyLimit} setDailyLimit={setDailyLimit} categories={categories} setCategories={setCategories}/>
          </div>
          <ExpenseHistory expense={expense} setExpense={setExpense} categories={categories} setCategories={setCategories}/>
      </div>
      <div className='col2'>
      <div className='newExpense'>
            <AddExpense expense={expense} setExpense={setExpense} setCategoricalSpend={setCategoricalSpend} categoricalSpend={categoricalSpend} 
            totalSpent={totalSpent} setTotalSpent={setTotalSpent} categories={categories} setCategories={setCategories}/>
          </div>
        <Analysis categoricalSpend={categoricalSpend} categories={categories}/>
      </div>
      
        
        
        
    </div>
  )
}
