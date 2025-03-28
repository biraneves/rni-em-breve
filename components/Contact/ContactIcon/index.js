import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./contactIcon.module.scss";

const ContactIcon = ({ type, icon, url }) => {
  return (
    <li className={styles.item}>
      <a href={url} target="_blank" className={styles.item__link}>
        <FontAwesomeIcon icon={icon} className={styles.item__icon} />
      </a>
    </li>
  );
};

export default ContactIcon;
