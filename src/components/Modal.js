import React from 'react'
import App from '../App'
// import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";

export default function Modal({setModalOpen,modalRequestType,onExpenseHandler,onIncomeHandler}) {
    const [description,setDescription]=React.useState("")
    const [amount,setAmount]=React.useState("")
   

    // function handleSubmit(e){
    //     e.preventDefault()
    //     console.log("myy",description)
    // }

    function onHandleSubmit(){
        if(!description||!amount){
            return
        }
        if (modalRequestType==="Expense"){
            onExpenseHandler(description,amount)
        }
        if (modalRequestType==="Income"){
            onIncomeHandler(description,amount)
        }
        setModalOpen(false)
    }
  
  return (
    <div className='mains'>
      
        <div className='moneyabs'>
        <div className='close'> 
         <IoCloseCircle size={30} color='black' className='close'
         onClick={()=>setModalOpen(false)}/>
        </div>
            <div className='input'>
         
                <h4>{modalRequestType==="Income"? "Income":"Expense"}</h4>
                <input className='input' type='text'placeholder='Description'
                value={description.description} onChange={(e)=>setDescription(e.target.value)}/>
                <input className='input' type='text'placeholder='Amount'
                value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                <button className='btn'
                onClick={onHandleSubmit}
                     style={{background:modalRequestType==="Expense"? "Red":"green"}}>
                    {modalRequestType==="Income"? "Income":"Expense"}
                    
                </button>
            </div>

        </div>  
    </div>
  )
}
