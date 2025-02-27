import { useState } from "react";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenseList = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(expenseList);

  const onAddNewExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div className="App">
      <h2>Build From Jenkins</h2>
      <NewExpense newExpenseHandler={onAddNewExpenseHandler}></NewExpense>
      <ExpenseList expenses={expenses}></ExpenseList>
    </div>
  );
}

export default App;
