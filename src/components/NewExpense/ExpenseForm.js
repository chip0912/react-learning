import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = props => {

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  }

  const submitHandler = () => {
    console.log("title: ", title);
    console.log("amount: ", amount);
    console.log("date: ", date);
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
          <button type='submit' onClick={submitHandler}>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;