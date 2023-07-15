import "./expensedate.css";
export default function Expensedate({ a }) {
  const month = a.date.toLocaleString("en-US", { month: "long" });
  const year = a.date.getFullYear();
  const day = a.date.toLocaleString("en-US", { month: "2-digit" });
  return (
    <div className="expense-date">
      <div className=".expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
