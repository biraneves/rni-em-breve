import siteSections from "../../data/siteSections";
import styles from "./navbar.module.scss";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__links}>
        {siteSections.map((item, index) => (
          <NavbarItem key={index} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
