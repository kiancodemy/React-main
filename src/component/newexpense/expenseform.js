import "./expenseform.css";
export default function Expenseform() {
  return (
    <form>
      <div className="new-expense__controls ">
        <div className="new-expense__control ">
          <label>Title</label>
          <input type="text"></input>
        </div>

        <div className="new-expense__control ">
          <label>Amount</label>
          <input type="number" min={0.1}></input>
        </div>
        <div className="new-expense__control ">
          <label>Date</label>
          <input type="date" min={"2019-05-06"} max={"2025-05-06"}></input>
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="submit">Add expenses</button>
      </div>
    </form>
  );
}
