import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import "./ExpenseList.css"
import Card from '../Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

function ExpenseList(props) {

  const onFilterYearChangeHandler = (filterYear) => {
    console.log(filterYear);
  }

    return(
        <Card className="expenses-list">
            <ExpensesFilter filterYearChangeHandler={onFilterYearChangeHandler}></ExpensesFilter>
            {props.expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>)}
        </Card>
    )
}

export default ExpenseList;