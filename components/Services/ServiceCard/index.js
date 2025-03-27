import styles from "./servicecard.module.scss";

const ServiceCard = ({ title, icon, text }) => {
  return (
    <div className={styles.item}>
      <img src={icon} alt={title} className={styles.item__icon} />
      <h4 className={styles.item__title}>{title}</h4>
      <p className={styles.item__text}>{text}</p>
    </div>
  );
};

export default ServiceCard;
