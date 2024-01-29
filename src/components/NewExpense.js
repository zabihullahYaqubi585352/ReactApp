import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{

    
const saveexpense=(Data)=>{
const ExpenseData={
    ...Data, 
    id:Math.random().toString()

}

props.onsaveExpenseData(ExpenseData)
}
    return(
        <div className="New-Ex">
<ExpenseForm onsaveexpense={saveexpense}/>
        </div>
    );
   
};
export default NewExpense