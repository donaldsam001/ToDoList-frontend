import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

const TaskList = ({ todos, onToggle, onDelete, onEdit }) => {
  if (todos.length === 0) {
    return <div className={styles.emptyState}>No tasks yet. Enjoy your day!</div>;
  }

  return (
    <div className={styles.listContainer}>
      {todos.map((todo) => (
        <TaskItem 
          key={todo.id} 
          todo={todo} 
          onToggle={onToggle} 
          onDelete={onDelete} 
          onEdit={onEdit} 
        />
      ))}
    </div>
  );
};

export default TaskList;