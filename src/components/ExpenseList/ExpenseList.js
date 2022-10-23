import React,{useState} from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import "./ExpenseList.css"
import Card from '../Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

function ExpenseList(props) {

  const current_year = new Date().getFullYear();
  const [enteredFilterYear,setFilterYear] = useState(current_year);
  const onFilterYearChangeHandler = (filterYear) => {
    setFilterYear(filterYear);
  }

    return(
        <Card className="expenses-list">
            <ExpensesFilter current_year={enteredFilterYear} filterYearChangeHandler={onFilterYearChangeHandler}></ExpensesFilter>
            {props.expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>)}
        </Card>
    )
}

export default ExpenseList;