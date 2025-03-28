import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./navbaritem.module.scss";

const NavbarItem = ({ title, icon, url }) => (
  <li className={styles.item}>
    <a href={url} className={styles.item__link}>
      <FontAwesomeIcon icon={icon} className={styles.item__link__icon} />
      <span>{title}</span>
    </a>
  </li>
);

export default NavbarItem;
