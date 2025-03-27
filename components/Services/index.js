import services from "../../data/services";
import ServiceCard from "./ServiceCard";
import styles from "./services.module.scss";

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.services__title}>
          <h2 className={styles.services__title__text}>
            <span
              className={`${styles.services__title__text__icon} fa-solid fa-list-checked`}
            ></span>
            Nossos serviços
          </h2>
        </div>
        <div className={styles.services__content}>
          <div className={styles.services__content__cta}>
            <h3 className={styles.services__content__cta__title}>
              Nosso objetivo é ajudar você a conquistar o seu sonho
            </h3>
            <p className={styles.services__content__cta__text}>
              Oferecemos suporte completo para garantir que sua experiência de
              reconhecimento da cidadania italiana seja tranquila e
              bem-sucedida. Desde a escolha do melhor <em>comune</em>, passando
              pelo aluguel da residência, orientações sobre o
              <em>permesso di soggiorno</em> e dicas essenciais para sua estada,
              estamos aqui para tornar cada etapa mais simples.
            </p>
            <p>
              Você terá autonomia para conduzir o processo, mas com a segurança
              de contar com especialistas que entendem os desafios e estão
              prontos para ajudar você a superar cada um deles.
            </p>
            <div className={styles["services__content__cta__button-wrapper"]}>
              <a
                href="#"
                className={`${styles.services__content__cta__button} cta-button`}
              >
                Fale conosco!
              </a>
            </div>
          </div>
          <div className={styles.services__content__list}>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                icon={service.icon}
                text={service.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
