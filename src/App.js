import { useEffect, useState } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "./api/todoApi";
import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    try {
      const res = await getTodos();
      setTodos(res.data);
    } catch (error) {
      console.error("Failed to load todos", error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async (taskData) => {
    await createTodo({ ...taskData, completed: false });
    loadTodos();
  };

  const handleToggle = async (todo) => {
    await updateTodo(todo.id, { ...todo, completed: !todo.completed });
    loadTodos();
  };

  const handleEdit = async (todo, newTitle, newDescription) => {
    await updateTodo(todo.id, { ...todo, title: newTitle, description: newDescription });
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
      <Header />
      <TaskInput onAdd={handleAdd} />
      <TaskList 
        todos={todos} 
        onToggle={handleToggle} 
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;