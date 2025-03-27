import styles from './aboutus.module.scss';

const AboutUs = () => {
  return (
    <section className={styles['about-us']} id="about-us">
      <div className='container'>
        <div className={styles['about-us__title']}>
          <h2 className={styles['about-us__title__text']}>
            <span className={`${styles['about-us__title__text__icon']} fa-solid fa-people-group`}></span>
            Quem somos
          </h2>
        </div>
        <div className={styles['about-us__content']}>
          <div className={styles['about-us__content__text']}>
            <p>
              Somos apaixonados pela Itália e, assim como você, decidimos
              buscar o reconhecimento de nossa cidadania italiana.
              Queríamos fazer isso por conta própria, acreditando que bastava
              viajar para a Itália e iniciar o processo com a documentação
              em mãos.
            </p>
            <p>
              Porém, logo percebemos que o início não era tão simples quanto
              parecia. Surgiram muitas dúvidas, e nem sempre as respostas
              estavam ao nosso alcance. Perguntas como:
            </p>
            <ul>
              <li>Qual é o melhor <em>comune</em> para realizar o processo?</li>
              <li>Como alugar uma casa de forma confiável?</li>
              <li>Quanto tempo devo planejar para ficar?</li>
              <li>Quanto dinheiro preciso para me manter durante o processo?</li>
              <li>Como faço o <em>permesso di soggiorno</em>?</li>
              <li>Posso explorar a Itália enquanto espero ou preciso ficar em casa?</li>
            </ul>
            <p>
              Foi nessa jornada que aprendemos, enfrentamos desafios e contamos
              com a ajuda de pessoas incríveis. Esse aprendizado nos trouxe
              até aqui: nossa missão é ajudar você a conduzir seu processo de
              forma independente, oferecendo suporte em um dos principais
              obstáculos do caminho - a <strong>residência na Itália</strong>.
            </p>
            <p>
              Conquiste sua cidadania com confiança, vivendo cada etapa dessa
              experiência única!
            </p>
          </div>
          <img src="https://dummyimage.com/640x480" alt="" class={styles['about-us__content__image']} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;