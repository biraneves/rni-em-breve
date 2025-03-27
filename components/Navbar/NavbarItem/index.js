import Link from "next/link";
import styles from "./navbaritem.module.scss";

const NavbarItem = ({ title, icon, url }) => (
  <li className={styles.item}>
    <Link href={url} className={styles.item__link}>
      <span className={`fa-solid fa-${icon}`} />
      <span>{title}</span>
    </Link>
  </li>
);

export default NavbarItem;