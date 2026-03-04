import { useState } from 'react';
import styles from './TaskItem.module.css';

const TaskItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDesc, setEditDesc] = useState(todo.description || "");

  const handleSave = () => {
    onEdit(todo, editTitle, editDesc);
    setIsEditing(false);
  };

  return (
    <div className={`${styles.itemCard} ${todo.completed ? styles.completedCard : ''}`}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
          className={styles.checkbox}
        />
      </div>

      <div className={styles.contentContainer}>
        {isEditing ? (
          <div className={styles.editMode}>
            <input 
              value={editTitle} 
              onChange={(e) => setEditTitle(e.target.value)} 
              className={styles.editInput} 
            />
            <input 
              value={editDesc} 
              onChange={(e) => setEditDesc(e.target.value)} 
              className={styles.editInput}
              placeholder="Description..." 
            />
          </div>
        ) : (
          <div className={`${styles.textContainer} ${todo.completed ? styles.completedText : ''}`}>
            <span className={styles.title}>{todo.title}</span>
            {todo.description && <span className={styles.description}>{todo.description}</span>}
          </div>
        )}
      </div>

      <div className={styles.actions}>
        {isEditing ? (
          <button onClick={handleSave} className={styles.saveBtn}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className={styles.editBtn}>Edit</button>
        )}
        <button onClick={() => onDelete(todo.id)} className={styles.deleteBtn}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;