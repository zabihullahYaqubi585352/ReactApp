import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [x, setx] = useState(false);

  function showX() {
    setx(!x)
  }

  const saveexpense = (Data) => {
    const ExpenseData = {
      ...Data,
      id: Math.random().toString(),
    };

    props.onsaveExpenseData(ExpenseData);
  };
  return (
    <div className="New-Ex">
      {!x && (
        <div className="addNewButton">
          <button type="submit" onClick={showX}>
            Add New Expense
          </button>
        </div>
      )}

      {x && <ExpenseForm onsaveexpense={saveexpense}  onhidex={showX}/>}
    </div>
  );
};
export default NewExpense;
