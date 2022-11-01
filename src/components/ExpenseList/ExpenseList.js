import React,{useState} from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import "./ExpenseList.css"
import Card from '../Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

function ExpenseList(props) {

  const current_year = new Date().getFullYear().toString();
  const [enteredFilterYear,setFilterYear] = useState(current_year);

  const onFilterYearChangeHandler = (filterYear) => {
    setFilterYear(filterYear) 
  }
  const filteredExpenses = props.expenses.filter(expense => { return expense.date.getFullYear().toString()===enteredFilterYear})
  
    return(
        <Card className="expenses-list">
            <ExpensesFilter current_year={enteredFilterYear} filterYearChangeHandler={onFilterYearChangeHandler}></ExpensesFilter>
            {filteredExpenses.length === 0 && <p className="expenses_no-expenses">No expenses found for the select year</p> }
            {filteredExpenses.length > 0 && filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>)}
        </Card>
    )
}

export default ExpenseList;