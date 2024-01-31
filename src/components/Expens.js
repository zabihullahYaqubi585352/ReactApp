import "./Expens.css";
import React, { useState } from 'react'; 
import Card from "./Card";
import ExpensItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter"
function Expens(props) {
  const[filteredYear ,setFilterYear]=useState('2020')
  const filterchangehandler=(selectedyear) =>{
    setFilterYear(selectedyear)
  
  }

  return (
    <div className="expense">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterchangehandler}/>
      {props.items.map((expenses) => (
         <ExpensItem
         title={expenses.Title}
         date={expenses.date}
         amount={expenses.Amount}
      
       />
      ))}
     
    </div>
  );
}
export default Expens;
