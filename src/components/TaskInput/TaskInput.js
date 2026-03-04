import { useState } from 'react';
import styles from './TaskInput.module.css';

const TaskInput = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          required
        />
        <input
          className={styles.input}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Optional details..."
        />
      </div>
      <button type="submit" className={styles.addButton}>
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;