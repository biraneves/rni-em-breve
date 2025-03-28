import accommodations from "../../data/accommodations";
import AccommodationCard from "./AccommodationCard";
import styles from "./accommodations.module.scss";

const Accommodations = () => {
  return (
    <section id="accommodations" className={styles.accommodations}>
      <div className="container">
        <div className={styles.accommodations__title}>
          <h2 className={styles.accommodations__title__text}>
            <span
              className={`${styles.accommodations__title__text__icon} fa-solid fa-people-roof`}
            ></span>
            Acomodações
          </h2>
        </div>
        <div className={styles.accommodations__content}>
          {accommodations.map((item, index) => (
            <AccommodationCard key={index} {...item} className={styles.house} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
