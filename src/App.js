import { useState } from "react";

import Expenses from "./component/expenses/expenses";
import Newexpense from "./component/newexpense/Newexpense";
const info = [
  {
    id: 1,
    date: new Date("2021-01-07"),
    title: "toiletpaper",
    amount: 249.2,
  },
  { id: 2, date: new Date("2021-02-04"), title: "New tv", amount: 749.2 },
  {
    id: 3,
    date: new Date("2021-08-06"),
    title: "car insurance",
    amount: 89.2,
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
