import Link from "next/link";
import GeneralHead from "../components/GeneralHead";
import Navbar from "../components/Navbar";
import siteSections from "../data/siteSections";
import NavbarItem from "../components/Navbar/NavbarItem";
import styles from './home.module.scss';

const Home = () => {
  return (
    <>
      <GeneralHead />
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/">
            <img src="/img/rni-logo-branco-120.svg" alt="Residência na Itália" />
          </Link>
          <Navbar>
            {siteSections.map((item, index) => (
              <NavbarItem key={index} title={item.title} icon={item.icon} url={item.url} />
            ))}
          </Navbar>
        </div>
      </header>
      <main>
      </main>
    </>
  );
};

export default Home;