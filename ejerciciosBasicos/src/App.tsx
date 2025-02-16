import { useState } from "react";
import Header from "./components/Header";
import FormAddMoney from "./components/FormAddMoney";

function App() {
  const [budget, setBudget] = useState(0);
  return (
    <div className="App">
      <Header />
      <FormAddMoney setCount={setBudget}/>
    </div>
  );
}

export default App;