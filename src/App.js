import React from 'react'; 
import Expens from "./components/Expens.js";
import NewExpense from './components/NewExpense.js';
function App() {
  const expens = [
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
  return (
    <div>
      <NewExpense/>
      <Expens items={expens} />
</div> 
  );

}

export default App;
