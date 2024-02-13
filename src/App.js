import React, { useState } from "react";
import Expens from "./components/Expens.js";
import NewExpense from "./components/NewExpense.js";

const INITIONAL_EXPENSE= [
  {
    id: "e1",
    Title: "Car Insurance",
    Amount: 343.53,
    date: new Date(2020, 1, 28),
  },

  {
    id: "e2",
    Title: "Herat",
    Amount: 210.53,
    date: new Date(2021, 2, 29),
  },
  {
    id: "e3",
    Title: "califonia",
    Amount: 43.53,
    date: new Date(2022, 3, 28),
  },
  {
    id: "e4",
    Title: "New Yourk",
    Amount: 30.53,
    date: new Date(2023, 4, 28),
  },
];

function App() {
  const [expens, setexpens] = useState(INITIONAL_EXPENSE);

  const saveExpenseDataHandler = (NewData) => {
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
