import React , {useState} from "react";
import "./ExpenseItem.css"
import ExpenseDate from "../ExpenseDate/ExpenseDate"
import Card from "../Card/Card";

function ExpenseItem(props) { 

    const [title,setTitle] = useState(props.title)
    
    const clickHandler = () => {
        setTitle("Updated !!!!!")
    }

    return (<Card className="expense-item">
                <div><ExpenseDate date={props.date}></ExpenseDate></div>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>)
}

export default ExpenseItem;

