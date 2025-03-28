import styles from "./contactIcon.module.scss";

const ContactIcon = ({ type, url }) => {
  return (
    <li className={styles.item}>
      <a href={url} target="_blank">
        <span className={`${styles.item__icon} fa-brands fa-${type}`}></span>
      </a>
    </li>
  );
};

export default ContactIcon;
