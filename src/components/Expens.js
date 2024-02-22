import "./Expens.css";
import React, { useState } from "react";

import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpenseChart";

function Expens(props) {
  const [filteredYear, setFilterYear] = useState("2020");

  const filterchangehandler = (selectedyear) => {
    setFilterYear(selectedyear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expense">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterchangehandler}
      />
      <ExpensesChart expenses={filteredExpense} />

      <ExpenseList items={filteredExpense} />
    </div>
  );
}
export default Expens;
