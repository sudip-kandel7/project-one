import React from "react";
import "/src/style.css";
import { nanoid } from "nanoid";

const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");

  const handleSubmit = () => {
    setTodos((prev) => {
      return prev.concat({
        text: input,
        id: nanoid(),
      });
    });
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id != id));

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="New Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
