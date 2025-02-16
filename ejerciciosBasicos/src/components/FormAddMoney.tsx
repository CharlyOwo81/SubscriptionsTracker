import { useState } from "react";

type Props = {
  setCount: (value: number) => void;
};

function FormAddMoney({ setCount }: Props) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (input === "" || Number(input) < 0) {
      setError(true);
      return;
    }
    setError(false);
    setCount(Number(input));
    setInput("");
    console.log(input);
  };

  return (
    <div className="form-add-money">
      {input}
      <form onSubmit={handleForm}>
        <p>Add Budget</p>
        <input
          type="number"
          placeholder="$300"
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Add budget" />
      </form>
      {error ? <p className="error">Presupuesto inválido</p> : null}
    </div>
  );
}

export default FormAddMoney;
