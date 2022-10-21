import React from "react";
import "./ExpenseItem.css"
import ExpenseDate from "../ExpenseDate/ExpenseDate"
import Card from "../Card/Card";

function ExpenseItem(props) { 

    // console.log(props.title)

    return (<Card className="expense-item">
                <div><ExpenseDate date={props.date}></ExpenseDate></div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>)
}

export default ExpenseItem;

