import "./newexpenses.css";
import Expenseform from "./expenseform";
export default function Newexpense({save}) {
  return (
    <div className="new-expense">
      <Expenseform save={save}></Expenseform>
    </div>
  );
}
