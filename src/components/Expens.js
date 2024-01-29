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
      <ExpensItem
        title={props.items[0].Title}
        date={props.items[0].date}
        amount={props.items[0].Amount}
      />
      <ExpensItem
        title={props.items[1].Title}
        date={props.items[1].date}
        amount={props.items[1].Amount}
      />
      <ExpensItem
        title={props.items[2].Title}
        date={props.items[2].date}
        amount={props.items[2].Amount}
      />
      <ExpensItem
        title={props.items[3].Title}
        date={props.items[3].date}
        amount={props.items[3].Amount}
      />
    </div>
  );
}
export default Expens;
