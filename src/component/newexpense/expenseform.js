import "./expenseform.css";
import { useState } from "react";
export default function Expenseform() {
  const [entertitle, settitle] = useState(" ");
  const [enteramount, setamount] = useState(" ");
  const [enterdate, setdate] = useState(" ");
  const titlechange = (e) => {
    settitle(e.taget.value);
  };
  const mountcahange = (e) => {
    setamount(e.taget.value);
  };
  const datachange = (e) => {
    setdate(e.taget.value);
  };

  return (
    <form>
      <div className="new-expense__controls ">
        <div className="new-expense__control ">
          <label>Title</label>
          <input onChange={titlechange} type="text"></input>
        </div>

        <div className="new-expense__control ">
          <label>Amount</label>
          <input onChange={mountcahange} type="number" min={0.1}></input>
        </div>
        <div className="new-expense__control ">
          <label>Date</label>
          <input
            onChange={datachange}
            type="date"
            min={"2019-05-06"}
            max={"2025-05-06"}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="submit">Add expenses</button>
      </div>
    </form>
  );
}
