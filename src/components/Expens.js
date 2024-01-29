import "./Expens.css";
import React from 'react'; 
import Card from "./Card";
import ExpensItem from "./ExpenseItem";
function Expens(props) {
  return (
    <div className="expense">
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
