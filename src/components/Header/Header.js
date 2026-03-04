import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My To-Do List</h1>
      <p>Stay organized, focused, and productive.</p>
    </header>
  );
};

export default Header;