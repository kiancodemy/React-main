import { useState } from "react";

import Expenses from "./component/expenses/expenses";
import Newexpense from "./component/newexpense/Newexpense";
const info = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 799.49,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [datae, setdata] = useState(info);
  const save = (data) => {
    setdata([data, ...info]);

    console.log(datae);
  };
  return (
    <div style={{ backgroundColor: "#ddd" }}>
      <Newexpense save={save}></Newexpense>
      <Expenses info={datae}></Expenses>;
    </div>
  );
}

export default App;
