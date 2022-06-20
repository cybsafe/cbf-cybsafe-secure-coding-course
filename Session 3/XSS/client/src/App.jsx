import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);
  async function handleSubmit(event) {
    const data = await fetch("http://localhost:4000/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const json = await data.json();
    setData(json);
    console.log(json);
    event.preventDefault();
  }
  function handleChange(event) {
    setMessage(event.target.value);
  }
  function setSecret() {
    window.localStorage.setItem("secret", "cybsafe");
  }
  return (
    <div>
      <input type="text" value={message} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {data &&
          data.data.map((item) => (
            <li
              key={item.info}
              dangerouslySetInnerHTML={{ __html: item.info }}
            />
          ))}
      </ul>
      <button onClick={setSecret}>Set Secret</button>
    </div>
  );
}

export default App;
