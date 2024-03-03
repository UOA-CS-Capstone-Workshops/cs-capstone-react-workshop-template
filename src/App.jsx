import styles from "./App.module.css";

export default function App() {
  return (
    <>
      {/* Page header: Title */}
      <nav className={styles.nav}>
        <div className={styles.container}>
          <h1>My Todo List</h1>
        </div>
      </nav>

      {/* Main content: Todo list and search box */}
      <main className={styles.container}>
        <p>TODO: Your code here 😁</p>
      </main>
    </>
  );
}
