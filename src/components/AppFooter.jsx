import styles from "./AppFooter.module.css";

function AppFooter({ children }) {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>{children}</p>
    </footer>
  );
}

export default AppFooter;
