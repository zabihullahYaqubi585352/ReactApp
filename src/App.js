import ExpensItem from "./components/Expensitem.js";

function App() {
  const expens=[
     {
      id:'e1',
      Title:"Car Insurance"
      ,Amount:343.53,
       date:new Date(2021,2,28),},

    {
      id:'e2',
      Title:"Herat"
    ,Amount:210.53,
     date:new Date(2024,2,29),},
    {
      id:'e3',
      Title:"califonia" ,
      Amount:43.53,
     date:new Date(2024,5,28),},
    {
      id:'e4',
      Title:"New Yourk",
      Amount:30.53, 
      date:new Date(2028,2,28),
     
    }
  ]
  return (
    <div>
      <h2>Lets get started</h2>
      <ExpensItem title={expens[0].Title} amount={expens[0].Amount} date={expens[0].date} id={expens[0].id} />
      <ExpensItem   title={expens[1].Title} amount={expens[1].Amount} date={expens[1].date} id={expens[1].id}/>
      <ExpensItem   title={expens[2].Title} amount={expens[2].Amount} date={expens[2].date} id={expens[2].id}/>
      <ExpensItem  title={expens[3].Title} amount={expens[3].Amount} date={expens[3].date} id={expens[3].id} />
    </div>
  );
}

export default App;
