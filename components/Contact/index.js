import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactOptions from "../../data/contactOptions";
import ContactIcon from "./ContactIcon";
import styles from "./contact.module.scss";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.contact__title}>
          <h2 className={styles.contact__title__text}>
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              className={styles.contact__title__text__icon}
            />
            Entre em contato
          </h2>
        </div>
        <div className={styles.contact__content}>
          <form className={styles.contact__content__form}>
            <div className={styles.contact__content__form__field}>
              <label
                htmlFor="name"
                className={styles.contact__content__form__field__label}
              >
                Seu nome completo:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.contact__content__form__field__input}
                required
              />
            </div>
            <div className={styles.contact__content__form__field}>
              <label
                htmlFor="phone"
                className={styles.contact__content__form__field__label}
              >
                Seu telefone (com WhatsApp):
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className={styles.contact__content__form__field__input}
                required
              />
            </div>
            <div className={styles.contact__content__form__field}>
              <label
                htmlFor="email"
                className={styles.contact__content__form__field__label}
              >
                Seu melhor e-mail:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className={styles.contact__content__form__field__input}
                required
              />
            </div>
            <div className={styles.contact__content__form__field}>
              <label
                htmlFor="message"
                className={styles.contact__content__form__field__label}
              >
                Diga-nos algo sobre você e sua família italiana:
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.contact__content__form__field__textarea}
                required
              />
            </div>
            <button
              type="submit"
              className={styles.contact__content__form__button}
            >
              Enviar
            </button>
          </form>
          <div className={styles["contact__content__social-media"]}>
            <div className={styles["contact__content__social-media__item"]}>
              <FontAwesomeIcon
                icon={faWhatsapp}
                className={styles["contact__content__social-media__item__icon"]}
              />
              <p
                className={
                  styles["contact__content__social-media__item__number"]
                }
              >
                +39 351 123-4567
              </p>
            </div>
            <ul className={styles["contact__content__social-media__list"]}>
              {contactOptions.map((item, index) => (
                <ContactIcon key={index} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.contact__overlay}></div>
    </section>
  );
};

export default Contact;
