import Expemseitem from "./expenseitems";
import "./expenses.css";
import { useState } from "react";
export default function Expenses({ info }) {
 

  return (
    <div className="expenses">
      <Expemseitem info={info}></Expemseitem>
    </div>
  );
}
