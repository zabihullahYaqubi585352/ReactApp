import ExpensItem from "./ExpenseItem"
import './ExpenseList.css';
const ExpenseList=(props) =>{
    
    if (props.items.length===0) {
        return <h2 className="expense-List__falback">No Expense Founded</h2>
    }
    return(
        <ul className="expense-List">
{props.items.map((expenses) => (
      <ExpensItem
        key={expenses.id}
        title={expenses.Title} 
        date={expenses.date}
        amount={expenses.Amount}
      />
    ))}

        </ul>
    )
}
export default ExpenseList;