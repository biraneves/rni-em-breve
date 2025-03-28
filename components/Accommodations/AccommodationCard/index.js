import styles from "./accommodationCard.module.scss";

const AccommodationCard = ({ image, title, description }) => {
  return (
    <div className={styles.house}>
      <img src={image} alt={title} className={styles.house__image} />
      <div className={styles.house__text}>
        <h3 className={styles.house__text__title}>{title}</h3>
        <p className={styles.house__text__description}>{description}</p>
      </div>
    </div>
  );
};

export default AccommodationCard;
