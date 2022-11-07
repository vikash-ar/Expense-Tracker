import React from "react";
import { useState } from "react";
import './ExpenseForm.css';
const ExpenseForm =(props)=>{
    const [userTitle, setUserTitle] = useState('');
    const titleChangeHandler=(event)=>{
         setUserTitle(event.target.value);
         
    };
    const [userAmount, setUserAmount] = useState('');
    const amountChangeHandler=(event)=>{
         setUserAmount(event.target.value);
         
    };
    const [userDate, setUserDate] = useState('');
    const dateChangeHandler=(event)=>{
         setUserDate(event.target.value);
         
    };
    const submitHandler=(event)=>{
      event.preventDefault(); //to avoid page relode on submit click

      const expenseData = {
        title: userTitle, amount: userAmount, date: new Date(userDate)
      };
      props.onSaveExpenses(expenseData);
      setUserAmount('');
      setUserDate('');
      setUserTitle('');
    };

//using one state insted of multiple states

//     const [userInput , setUserInput] = useState({
//         userTitle: '', userAmount:'', userDate:''
//     });
//     const titleChangeHandler=(event)=>{
//         setUserTitle((prevState)=>{
//             return {...prevState, userTitle: event.target.value };
//         });
        
//    };

    return <div>
         <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={userTitle}onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={userAmount}onChange={amountChangeHandler} min='0.01' step='0.01' />
                </div>
                <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={userDate}onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
         </form>
    </div>
};
export default ExpenseForm;