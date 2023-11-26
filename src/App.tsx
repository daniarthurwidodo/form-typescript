import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [form1, setForm1] = useState({
    name: "",
    email: "",
    password: "",
  });
  const submitForm = (event: any) => {
    event.preventDefault();
    console.log(form1);
  };
  return (
    <div className="App">
      <label htmlFor="name">name : </label>

      <form onSubmit={submitForm}>
        <div >
          <input
            type="text"
            id="name"
            value={form1.name}
            onChange={(e) => {
              setForm1({ ...form1, name: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="email">email : </label>

          <input
            type="email"
            id="email"
            value={form1.email}
            onChange={(e) => {
              setForm1({ ...form1, email: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="email">password : </label>

          <input
            type="password"
            id="password"
            value={form1.password}
            onChange={(e) => {
              setForm1({ ...form1, password: e.target.value });
            }}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
