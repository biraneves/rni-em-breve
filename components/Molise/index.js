import styles from "./molise.module.scss";

const Molise = () => {
  return (
    <section id="molise" className={styles.molise}>
      <div className="container">
        <div className={styles.molise__content}>
          <h2 className={styles.molise__content__title}>A Região de Molise</h2>
          <p>
            Molise, uma das regiões menos conhecidas da Itália, é um verdadeiro
            tesouro escondido que encanta com sua autenticidade e paaisagens
            deslumbrantes. Localizada no coração do país, entre montanhas,
            colinas e a costa do Mar Adriático, Molise oferece um equilíbrio
            perfeito entre natureza exuberante, história rica e tradições
            culturais que permanecem praticamente intocadas pelo tempo.
          </p>
          <p>
            Com vilarejos medievais pitorescos, como Termoli, Larino e Agnone, a
            região transporta você a uma Itália de séculos passados. Explore
            castelos, catedrais e ruas de parelelepípedos que parecem saídos de
            um conto de fadas. Além disso, Molise é o berço de uma culinária
            rústica e deliciosa, onde massas caseiras, trufas frescas, queijos
            premiados e vinhos locais refletem o orgulho e a autenticidade da
            terra e de seu povo.
          </p>
          <img
            src="https://dummyimage.com/64x64"
            alt=""
            className={styles.molise__content__icon}
          />
          <p>
            Para os amantes da natureza, Molise é um paraíso. A região abriga
            parques nacionais intocados, como o{" "}
            <strong>Parco Nazionale d'Abruzzo, Lazio e Molise</strong>, com
            trilhas para caminhadas, vistas deslumbrantes e uma rica fauna,
            incluindo lobos e ursos. Já na costa, as praias de Termoli oferecem
            águas cristalinas e uma atmosfera tranquila, ideal para quem busca
            relaxar longe das multidões. Em Molise, cada canto é uma nova
            descoberta, revelando a magia de uma Itália ainda pouco explorada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Molise;
