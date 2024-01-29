import React, { useState } from 'react'; 
import "./ExpensItem.css";
import ExpensDate from "./ExpensDate";
function ExpensItem(props) {
 const [title, setTitle]= useState(props.title);
  function onchangeHandler() {

    setTitle("update");
  }

  return (
    <div className="expens-item">
    <ExpensDate date={props.date}/>
      <div className="expens-descrption">
        <h2 className="h2"> {title} </h2>
        <div className="expens-price"> ${props.amount}</div>
      </div>
      <button onClick={onchangeHandler}> click me</button>
    </div>
  );
}

export default ExpensItem;
