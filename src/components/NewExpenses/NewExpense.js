import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{
    const onSaveExpensesHandler=(enteredExpenseData)=>{
      const ExpenseData={
        ...enteredExpenseData
      };
      
      props.onAddExpense(ExpenseData);
    };
    return(
        <div className="new-expense ">
           <ExpenseForm onSaveExpenses={onSaveExpensesHandler}/> 
        </div>
    );
}; export default NewExpense;
