import Expensedate from "../expenses/expendate";
import "./expenseform.css";
import { useState } from "react";
export default function Expenseform({ save }) {
  const [entertitle, settitle] = useState("");
  const [enteramount, setamount] = useState("");
  const [enterdate, setdate] = useState("");
  const titlechange = (e) => {
    settitle(e.target.value);
  };
  const mountcahange = (e) => {
    setamount(e.target.value);
  };
  const datachange = (e) => {
    setdate(e.target.value);
  };
  const submithandler = (e) => {
    e.preventDefault();
    const expensedata = {
      title: entertitle,
      amount: enteramount,
      date: new Date(enterdate),
    };
    save({ ...expensedata, id: Math.random().toString() });

    settitle("");
    setamount("");
    setdate("");

    console.log(expensedata.title, expensedata.amount, expensedata.date);
  };
  return (
    <form onSubmit={submithandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control ">
          <label>Title</label>
          <input value={entertitle} onChange={titlechange} type="text"></input>
        </div>

        <div className="new-expense__control ">
          <label>Amount</label>
          <input
            value={enteramount}
            onChange={mountcahange}
            type="number"
            min="0.1"
            step="0.1"
          ></input>
        </div>
        <div className="new-expense__control ">
          <label>Date</label>
          <input
            value={enterdate}
            onChange={datachange}
            type="date"
            min="2023-04-06"
            max="2029-05-06"
          ></input>
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="submit">Add expenses</button>
      </div>
    </form>
  );
}
