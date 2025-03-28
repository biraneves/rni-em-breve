import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import testimonials from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import styles from "./testimonials.module.scss";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={styles.testimonials__title}>
          <h2 className={styles.testimonials__title__text}>
            <FontAwesomeIcon
              icon={faMessage}
              className={styles.testimonials__title__text__icon}
            />
            Depoimentos
          </h2>
        </div>
        <div className={styles.testimonials__content}>
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
        <div className={styles.testimonials__cta}>
          <a
            href="#"
            className={`${styles.testimonials__cta__button} cta-button`}
          >
            Button text
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
