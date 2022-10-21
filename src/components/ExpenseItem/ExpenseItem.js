import React from "react";
import "./ExpenseItem.css"
import ExpenseDate from "../ExpenseDate/ExpenseDate"

function ExpenseItem(props) { 

    // console.log(props.title)

    return (<div className="expense-item">
                <div><ExpenseDate date={props.date}></ExpenseDate></div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </div>)
}

export default ExpenseItem;

