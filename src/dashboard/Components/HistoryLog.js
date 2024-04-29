import React,{useState} from 'react'
import './HistoryLog.css'
export default function HistoryLog({expense,setExpense}){
    // const [expense,setExpense]=useState([{
    //     number:"Sr.no",
    //     description:"Description",
    //     price:"Price",
    //     category:"Category",
    //     time:"Time",
    //     header:true
    // },{
    //     number:1,
    //     description:"abcadbvbhjsrhfbshjfbshbfsjbfjkwdkjsdfbfkjhwkjfrbrkjfkjdbsgkjrbkjerfkjkvhebvkjsrbgkjhebkjbtkrjge",
    //     price:12,
    //     category:"Food",
    //     time:"12:45",
    //     header:false
    // }])

  return (
    <div>
        <ul>
        {true && expense.map((expense)=>

<li key={expense.number} className={expense.header ? "heading" : ""}>
    <div className='log'>
        {/* <div className='serial' >
        {expense.number}
        </div> */}
        <div className='description'>
        {expense.description} 
        </div>
        <div className='price'>
        {expense.price} 
        </div>
        <div className='category'>
        {expense.category} 
        </div>
        <div className='time'>
        {expense.time} 
        </div>
    </div>


</li>    )}

    </ul>
    </div>
  )
}
