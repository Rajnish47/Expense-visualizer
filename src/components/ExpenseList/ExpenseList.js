import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import "./ExpenseList.css"
import Card from '../Card/Card';

function ExpenseList(props) {

    return(
        <Card className="expenses-list">
            {props.expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>)}
        </Card>
    )
}

export default ExpenseList;