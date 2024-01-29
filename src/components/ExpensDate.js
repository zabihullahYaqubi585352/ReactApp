import React from 'react'; 
import './ExpensDate.css';
function ExpensDate(props) {
const month=props.date.toLocaleString('en-us',{month: 'long'});
const day=props.date.toLocaleString('en-us',{day: '2-digit'});
const year=props.date.getFullYear();
  return (
 
      <div className="expensDate">
      <div className="expenMonth"> {month} </div>
      <div className="expensDay">{day}</div>
      <div className="expensYear">{year}</div>
      </div>
      
     
  );
}

export default ExpensDate;
