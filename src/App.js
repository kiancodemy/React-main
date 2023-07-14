import Expenses from "./component/expenses";
const info = [
  { id: 1, date: new Date(2021, 8, 9), title: "toiletpaper", amount: 249.2 },
  { id: 2, date: new Date(2021, 8, 9), title: "New tv", amount: 749.2 },
  { id: 3, date: new Date(2021, 8, 9), title: "car insurance", amount: 89.2 },
];

function App() {
  return <Expenses info={info}></Expenses>;
}

export default App;
