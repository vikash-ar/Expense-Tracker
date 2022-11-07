import React,{useState} from 'react'; //predefined hooks are starts with 'use'
import './ExpenceItem.css';
import ExpenceDate from './ExpenceDate';
import Card from './Card';
function ExpenceItem(props1){
     let title = props1.title1;
//    const titleHandler=()=>{
//        title = 'Updated';
//        console.log(title);  //react ignores changes in variable
//    };
   // const [title,changeTitle] = useState(props1.title1); // a state is separated on a per component instance basis
    // useState(); returns an array with eles value itself and state updating function(this way of storing called ArrayDestructuring)
    //const titleHandler=()=>{
    // changeTitle('New Title'); //when this SUF is called the whole component reloaded/re-evaluated
     //  console.log(title);
    //    changeTitle('New Title2');
    //    console.log(title);
    //} ;
    // const [title01,undoTitle] = useState(title);
    // const titleHandler2=()=>{
    //    undoTitle(props1.title1);
    //    console.log(title01);
    // } ;
    return (
        <Card className='expense-item'>
            <ExpenceDate date2={props1.date1}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                
            <div className='expense-item__price'>${props1.amount1}</div>
            </div>
            
        </Card>
    );
} export default ExpenceItem;