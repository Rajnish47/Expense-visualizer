import React,{useState} from "react";
import "./NewExpense.css"

const NewExpense = (props) => {

    const[componentState,setComponentState] = useState(0);
    const [enteredTitle,setTitle] = useState('');
    const [enteredAmount,setAmount] = useState('');
    const [enteredDate,setDate] = useState('');

    const onTitleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const onAmountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const onDateChangeHandler = (event) => {
        setDate(event.target.value)      
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {title: enteredTitle,
                             amount: +enteredAmount,
                             date: new Date(enteredDate),
                             id: Math.random().toString()
                            }
        //console.log(expenseData)
        props.newExpenseHandler(expenseData);
        setComponentState(0)
        setTitle('')
        setAmount('')
        setDate('')
    }

    const newExpenseHandler = () => {
        setComponentState(1)
    }

    const cancelNewExpenseHandler = () => {
        setComponentState(0)
    }

    let componentUi = <button type="button" onClick={newExpenseHandler}>New Expense</button>
    if(componentState===1)
    {
        componentUi= <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={onTitleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={enteredAmount} min="1" step="1" onChange={onAmountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='Date' value={enteredDate} min="2022-01-01" max="2023-12-31" onChange={onDateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={cancelNewExpenseHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    }


    return(<div className="new-expense">
        {componentUi}
    </div>)
}

export default NewExpense;