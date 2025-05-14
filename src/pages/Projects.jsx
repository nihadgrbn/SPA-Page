import styles from './Projects.module.css';

function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>İşlərim</h1>
      <ul className={styles.list}>
        <li>Portfolio Saytı</li>
        <li>To-Do App</li>
        <li>Valyuta Konvertoru</li>
      </ul>
    </div>
  );
}
export default Projects;
