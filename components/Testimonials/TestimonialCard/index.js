import styles from "./testimonialCard.module.scss";

const TestimonialCard = ({ testimonial, author }) => {
  return (
    <article className={styles.testimonial}>
      <img
        src="https://dummyimage.com/64x64"
        alt="testimonial"
        className={styles.testimonial__icon}
      />
      <p className={styles.testimonial__text}>{testimonial}</p>
      <div className={styles.testimonial__author}>
        <div className={styles.testimonial__author__text}>
          <p className={styles.testimonial__author__text__name}>
            {author.name}
          </p>
          <p className={styles.testimonial__author__text__origin}>
            {author.origin}
          </p>
          <p className={styles.testimonial__author__text__evaluation}>
            {author.evaluation}
          </p>
        </div>
        <div className={styles.testimonial__author__avatar}>
          <img
            src={author.avatar}
            alt={author.name}
            className={styles.testimonial__author__avatar__image}
          />
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
