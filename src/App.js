import React, { useState } from "react";
import Expens from "./components/Expens.js";
import NewExpense from "./components/NewExpense.js";

const INITional_Expense = [
  {
    id: "e1",
    Title: "Car Insurance",
    Amount: 343.53,
    date: new Date(2021, 1, 28),
  },

  {
    id: "e2",
    Title: "Herat",
    Amount: 210.53,
    date: new Date(2024, 2, 29),
  },
  {
    id: "e3",
    Title: "califonia",
    Amount: 43.53,
    date: new Date(2024, 3, 28),
  },
  {
    id: "e4",
    Title: "New Yourk",
    Amount: 30.53,
    date: new Date(2028, 4, 28),
  },
];

function App() {
  const [expens, setexpens] = useState(INITional_Expense);

  const saveExpenseDataHandler = NewData => {
    setexpens((preexpense) => {
      return [NewData, ...preexpense];
     
    });
  

  };
  return (
    <div>
      <NewExpense onsaveExpenseData={saveExpenseDataHandler} />
      <Expens items={expens} />
    </div>
  );
}

export default App;
