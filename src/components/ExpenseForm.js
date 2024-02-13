import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) => {

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
Title:entertitle,
Amount:enteramount,
date:new Date(enterdate)
};
props.onsaveexpense(expenseData);
setentertitle("");
setenteramount("");
setenterdate("");
    
   } 
  return (
    <form onSubmit={submitForm}>
      <div className="new-expense-control">
        <div className="new-expense-control">
          <label>Title</label>
          <input type="text" value={entertitle} onChange={titlechangehandler} />
        </div>
        <div className='new-expense-control'>  
         <label>Amount</label>
          <input  type="number" min="0.01" step="0.01" value={enteramount} onChange={amountchangehandler}/>
        </div>
        <div className='new-expense-control'>
          <label>Price</label>
          <input  type="date" min="2019-01-01" max="2022-12-31" value={enterdate} onChange={datechangehandler}/>
        </div>
      </div>
      <div className='new-expense-control-action'>
      <button type="submit">cancle</button>
        <button type="submit">Add Expense</button>
        
      </div>
    </form>
  );
};
export default ExpenseForm;
