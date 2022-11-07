import { useState } from 'react';
import Card from './Card';
import ExpenceItem from './ExpenceItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props3){
 const [filterYear,setFilterYear]=useState('2020');
   const SelectYearHandler=(inputYear)=>{
      setFilterYear(inputYear);
    };
   
  return (
    <Card className='expenses'>
      <ExpensesFilter defaultYear={filterYear} onSelectYear={SelectYearHandler}/>
      {props3.expenses1.map((expenses)=>(
      <ExpenceItem 
      key={expenses.id}
      title1={expenses.title} amount1={expenses.amount} date1={expenses.date}/>))}
    
    
    
  </Card>
  );
} export default Expenses;