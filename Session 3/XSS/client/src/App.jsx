import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);
  // Get data on initial page load
  useEffect(() => {
    async function getData() {
      const data = await fetch("http://localhost:4000", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const json = await data.json();
      setData(json);
    }
    getData();
  }, []);
  // Submit data
  async function handleSubmit(event) {
    const data = await fetch("http://localhost:4000/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const json = await data.json();
    setData(json);
    event.preventDefault();
  }
  // Set a secret in local storage
  function setSecret() {
    window.localStorage.setItem("secret", "cybsafe");
  }

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
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
