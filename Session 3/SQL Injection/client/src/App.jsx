import { useState } from "react";

function App() {
  const [form, setForm] = useState("");
  const [data, setData] = useState(null);
  async function handleSubmit(event) {
    const data = await fetch("http://localhost:8080", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: form }),
    });
    const json = await data.json();
    setData(json);
    console.log(json);
    event.preventDefault();
  }
  function handleChange(event) {
    setForm(event.target.value);
  }
  return (
    <main>
      <h1>SQL Injection</h1>
      <p>
        This form will make an SQL query, it is designed for numbers between 1
        and 10 and will return text for each number
      </p>
      <p>Try to create an input that instead returns all 10 pieces of text</p>
      <input type="text" value={form} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {data && data.data.map((item) => <li key={item.info}>{item.info}</li>)}
      </ul>
    </main>
  );
}

export default App;
