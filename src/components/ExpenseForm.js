import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = () => {

    const[entertitle,setentertitle]=useState('');
    const[enteramount,setenteramount]=useState('');
    const[enterdate,setenterdate]=useState('');
    function titlechangehandler(event) {
      setentertitle(event.target.value);
        
    }
    function amountchangehandler(event) {
        setenteramount(event.target.value);
        
    }
    function datechangehandler(event) {
       setenterdate(event.target.value)
        
    }
   function submitForm(event) {
event.preventDefault();

const expenseData={
title:entertitle,
amount:enteramount,
date:new Date(enterdate)
};
console.log(expenseData);
    
   } 
  return (
    <form onSubmit={submitForm}>
      <div className="new-expense-control">
        <div className="new-expense-control">
          <label>Title</label>
          <input type="text" onChange={titlechangehandler} />
        </div>
        <div className='new-expense-control'>  
         <label>Amount</label>
          <input  type="number" min="0.01" step="0.01" onChange={amountchangehandler}/>
        </div>
        <div className='new-expense-control'>
          <label>Price</label>
          <input  type="date" min="2019-01-01" max="2022-12-31" onChange={datechangehandler}/>
        </div>
      </div>
      <div className='new-expense-control-action'>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
