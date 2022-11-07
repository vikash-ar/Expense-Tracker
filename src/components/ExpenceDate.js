import './ExpenceDate.css';
function ExpenceDate(props2){
    const month = props2.date2.toLocaleString('en-us',{month: 'long'});
    const day = props2.date2.toLocaleString('en-us',{day: '2-digit'});
    const year = props2.date2.getFullYear(); 
    return (
            <div className="expense-date"> 
                <div className='expense-date__day'>{day}</div>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__year'>{year}</div>
            </div>
);
}
export default ExpenceDate;