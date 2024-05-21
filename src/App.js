import logo from './logo.svg';
import './App.css';
import Animation from './components/Animation';
import Header from './components/Header';
import Modal from './components/Modal';
import Footer from './components/Footer';
import React from 'react';
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import uniqid from 'uniqid';
import { GrNotes } from "react-icons/gr";

function App() {
  const [modalOpen, setModalOpen] =React.useState(false)
  const [modalRequestType,setModalRequestType]=React.useState("") //used for btn add title change
  const [expenses,setExpenses]=React.useState([])
  const [incomes,setIncomes]=React.useState([])


  function onExpenseBoxClick(){
    setModalOpen(true)
    setModalRequestType("Expense")
  }

  function onIncomeeBoxClick(){
    setModalOpen(true)
    setModalRequestType("Income")
  }

  const onExpenseHandler=(description,amount)=>{
    // alert("expenses has been called")
    const oldExpenses =[...expenses]
    const newExpenses ={
      id:uniqid(),
      type:"Expenses",
      amount,
      description
    }
    const myExpenses = [...oldExpenses,newExpenses]
    setExpenses(myExpenses)
  }
  const onIncomeHandler=(description,amount)=>{
    // alert("income has been called")
    const oldIncomes =[...incomes]
    const newIncome ={
      id:uniqid(),
      type:"Incomes",
      amount,
      description
    }
    const myIncome = [...oldIncomes,newIncome]
    setIncomes(myIncome)
  }

  function removetransc(type,id){
    if(type==="Expenses"){
      const oldExp =[...expenses]
      const newExp = oldExp.filter((el)=>el.id!==id)
      setExpenses(newExp)
    }
    if(type==="Incomes"){
      const oldInc =[...incomes]
      const newInc = oldInc.filter((el)=>el.id!==id)
      setIncomes(newInc)
    }
         
  }


 const transactions =[...expenses,...incomes]
 
console.log(transactions)



  return (
    <div className="App">
     {/* <Animation/> */}
     <Header/>
    
     <div className='mainn'>
     {modalOpen && <Modal setModalOpen={setModalOpen}
     onExpenseHandler={onExpenseHandler}
     onIncomeHandler={onIncomeHandler}
     modalRequestType={modalRequestType}/> }
       <div className='money'> 
            <div className='hand' onClick={onExpenseBoxClick}>
                <GiPayMoney size={150} color='red'/>
                <p>Add Expense</p>
            </div>
            <div className='hand' onClick={onIncomeeBoxClick}>
               <GiReceiveMoney size={150} color='green'/> 
               <p>Add Income</p>
            </div>
        </div> 
        <div className='transactions'>
          {transactions.length>0 ? 
          <h3>All Transactions</h3> :
          <div className='hand' >
          <GrNotes size={150} color='gold'/>
          <p>No Transactions</p>
      </div>
          }
          {transactions.map(function(trans){
            return(
              <div key={trans.id} className='transac'onClick={()=>removetransc(trans.type, trans.id)}
              style={{background :trans.type==="Expenses"? "Red":"green"}}>
                <div >{trans.description}</div>
                <div>{trans.amount}</div>
              </div>
            )
          })}
        </div>
     </div>
     {/* <Modal /> */}
     <Footer/>
    </div>
  );
}

export default App;
