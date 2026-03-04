import { useEffect, useState } from "react";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "./api/todoApi";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const loadTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async () => {
    if (!title.trim()) return;
    await createTodo({ title, completed: false });
    setTitle("");
    loadTodos();
  };

  const handleToggle = async (todo) => {
    await updateTodo(todo.id, {
      ...todo,
      completed: !todo.completed,
    });
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Todo List</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              onClick={() => handleToggle(t)}
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: 10,
              }}
            >
              {t.title}
            </span>

            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;