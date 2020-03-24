import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  function validateSubmit() {
    if (firstname === "" || lastname === "")
      alert("One of the required fields is empty");
  }
  return (
    <div className="App">
      <div className="block">
        In this exercise you will have to:
        <ul>
          <li>
            Listen to every change (event <b>onChange</b>) and store each value
            in a State.
          </li>
          <li>
            Listen to the <b>submit</b> event and if one field is empty, show an
            alert.
          </li>
        </ul>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/forms.html"
        >
          Help
        </a>
      </div>
      <div className="block">
        <form onSubmit={event => validateSubmit()}>
          <input
            name="lastname"
            onChange={event => setLastname(event.target.value)}
            type="text"
            placeholder="Name"
          />
          <br />
          <input
            name="firstname"
            onChange={event => setFirstname(event.target.value)}
            type="text"
            placeholder="First Name"
          />
          <br />
          <button type="submit">Valider</button>
        </form>
      </div>
    </div>
  );
}
