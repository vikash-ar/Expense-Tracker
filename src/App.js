import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import { useState } from 'react';
const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
//const init=[{title:" ",amount:" ", date:new Date() }]; //if want no initial data
function App() {
  const [expenses,setExpenses]=useState(INITIAL_EXPENSES);
 
  const addExpenseHandler=(expense)=>{
     setExpenses((oldExpenses) =>{
      return [expense, ...oldExpenses];
     });//name of this oldExpenses is up to you, its just soters orignal state value(expenses)
  };
  return (
    <div>    
    <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses expenses1={expenses} /> 
    </div>

  );
}

export default App;
