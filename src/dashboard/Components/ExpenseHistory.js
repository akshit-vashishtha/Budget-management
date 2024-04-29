import React,{useState} from 'react'
import './ExpenseHistory.css'
import HistoryLog from './HistoryLog'
export default function ExpenseHistory({expense,setExpense}) {
  return (
    <div className='ExpenseHistory'>
      <h1>Expense Log</h1>
      <div className='expenselog'>
        <HistoryLog expense={expense} setExpense={setExpense}/>
      </div>
    </div>
  )
}
