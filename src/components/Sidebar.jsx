import AppFooter from "./AppFooter";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>list of cities</p>

      <AppFooter>
        &copy; Copyright {new Date().getFullYear()} by WorldWise inc
      </AppFooter>
    </div>
  );
}

export default Sidebar;
