import "./Expensitem.css";
function ExpensItem(props) {
//   const expenseDate = new Date(2021, 2, 21);
//   const expenseTitle = "Car insurance";
//   const expensPrice = 234.89;
  return (
    <div className="expens-item">
      <div> {props.date.toISOString()} </div>
      <div className="expens-descrption">
        <h2 className="h2"> {props.title} </h2>
        <div className="expens-price"> ${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpensItem;
