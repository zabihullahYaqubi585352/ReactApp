import "./ExpensItem.css";
import ExpensDate from "./ExpensDate";
function ExpensItem(props) {

  return (
    <div className="expens-item">
    <ExpensDate date={props.date}/>
      <div className="expens-descrption">
        <h2 className="h2"> {props.title} </h2>
        <div className="expens-price"> ${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpensItem;
