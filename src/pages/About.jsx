import styles from './About.module.css';

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Haqqımda</h1>
      <p className={styles.text}>
        Mən React ilə SPA tətbiqləri hazırlayıram.
      </p>
    </div>
  );
}
export default About;
