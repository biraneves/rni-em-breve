import { useEffect, useState } from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [copyYears, setCopyYears] = useState("");
  const startingYear = 2025;

  useEffect(() => {
    setCopyYears(
      currentYear === startingYear
        ? currentYear
        : `${startingYear} - ${currentYear}`,
    );
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.footer__disclaimer}>
          <p>
            &copy;{" "}
            <span className={styles["footer__disclaimer__current-year"]}>
              {copyYears}
            </span>
            . Todos os direitos reservados.
            <br />
            <strong>Residência na Itália</strong> não é agência de turismo ou
            viagem.
          </p>
        </div>
        <div className={styles.footer__design}>
          <p>
            Site desenvolvido por <a href="#">Bira Neves Software</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
