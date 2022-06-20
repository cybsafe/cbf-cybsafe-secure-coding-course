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
    <div>
      <input type="text" value={form} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {data && data.data.map((item) => <li key={item.info}>{item.info}</li>)}
      </ul>
    </div>
  );
}

export default App;
