import "./expenseitems.css";
import Expensedate from "./expendate";
export default function Expemseitem({ info }) {
  const final = info.map((a) => {
    return (
      <div key={a.id} className="expense-item">
        <Expensedate a={a} />

        <div className="expense-item__description ">
          <h2>{a.title}</h2>
          <div className="expense-item__price ">{a.amount}</div>
        </div>
      </div>
    );
  });

  return <div>{final}</div>;
}
