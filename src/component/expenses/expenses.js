import Expemseitem from "./expenseitems";

import "./expenses.css";

export default function Expenses({ info }) {
  return (
    <div className="expenses">
      <Expemseitem info={info}></Expemseitem>
    </div>
  );
}
