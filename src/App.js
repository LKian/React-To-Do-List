import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

const App = () => {
  const [name, setName] = useState("");
  const [todos, setToDos] = useState([
    {
      contents: "Make react object",
      isDeleted: false,
      id: name,
    },
  ]);

  const handleOnChange = (e) => {
    setName(e.currentTarget.value);
  };

  const handleAddToDo = () => {
    setToDos((prevState) =>
      prevState.concat({ contents: name, isDone: false, id: name })
    );
    setName("");
  };

  const deleteToDo = (id) => {
    console.log("Removing to do : " + id);
    setToDos((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Hello, {name}</h1>
      <input type="text" value={name} onChange={handleOnChange} />
      <button onClick={handleAddToDo}>Add</button>
      <List items={todos} deleteToDo={deleteToDo} count={todos.length} />
    </div>
  );
};

export default App;
