import styles from "./navbar.module.scss";

const Navbar = ({ children }) => {
  return (
  <nav className={styles.navbar}>
    <ul className={styles.navbar__links}>
      {children}
    </ul>
  </nav>
  );
};

export default Navbar;