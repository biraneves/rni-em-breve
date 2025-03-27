import styles from "./navbaritem.module.scss";

const NavbarItem = ({ title, icon, url }) => (
  <li className={styles.item}>
    <a href={url} className={styles.item__link}>
      <span className={`fa-solid fa-${icon}`} />
      <span>{title}</span>
    </a>
  </li>
);

export default NavbarItem;