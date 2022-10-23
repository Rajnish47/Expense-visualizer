import { useState } from "react";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpenseFilter/ExpenseFilter";

function App() {

  const expenseList = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses,setExpenses] = useState(expenseList);

  const onAddNewExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense,...prevState]
    });
  }

  const onFilterYearChangeHandler = (filterYear) => {
    console.log(filterYear);
  }

  return (
    <div className="App">
      <h2>Lets Get Started</h2>
      <NewExpense newExpenseHandler={onAddNewExpenseHandler}></NewExpense>
      <ExpensesFilter filterYearChangeHandler={onFilterYearChangeHandler}></ExpensesFilter>      
      <ExpenseList expenses={expenses}></ExpenseList>
    </div>
  );
}

export default App;
