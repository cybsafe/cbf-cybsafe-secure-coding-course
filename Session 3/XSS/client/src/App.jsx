import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);
  // Get data on initial page load
  useEffect(() => {
    window.localStorage.setItem("secret", "cybsafe");
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

  return (
    <main>
      <h1>XSS</h1>
      <p>
        Each piece of text inputted into the text box will be shown in a list
      </p>
      <p>
        A secret has been set in localStorage under the key `secret` which can
        be exposed using cross site scripting
      </p>
      <p>Create an input that alerts the secret</p>
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
    </main>
  );
}

export default App;
