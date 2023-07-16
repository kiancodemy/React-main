import "./expenseitems.css";
import ExpensesFilter from "./expensefilter";
import Card from "../ui/Card";
import { useState } from "react";
import Expensedate from "./expendate";
export default function Expemseitem({ info }) {
  const [title, setit] = useState(5);

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const final = info.map((a) => {
    return (
      <Card key={a.id} className="expense-item">
        <Expensedate a={a} />
        <div className="expense-item__description ">
          <h2>{a.title}</h2>
          <div className="expense-item__price ">{a.amount}</div>
        </div>
      </Card>
    );
  });

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      {final}
    </div>
  );
}
