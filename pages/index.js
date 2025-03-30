import Link from "next/link";
import GeneralHead from "../components/GeneralHead";
import Navbar from "../components/Navbar";
import siteSections from "../data/siteSections";
import NavbarItem from "../components/Navbar/NavbarItem";
import styles from "./home.module.scss";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Molise from "../components/Molise";
import Accommodations from "../components/Accommodations";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState } from "react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <GeneralHead />
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header__logo}>
            <Link href="/">
              <img
                src="/img/rni-logo-branco-120.svg"
                alt="Residência na Itália"
              />
            </Link>
            <div
              className={styles.header__logo__hamburger}
              onClick={toggleMenu}
            >
              <span className={styles.header__logo__hamburger__line}></span>
              <span className={styles.header__logo__hamburger__line}></span>
              <span className={styles.header__logo__hamburger__line}></span>
            </div>
          </div>
          <div
            className={
              isMenuOpen === true
                ? styles.header__navbar__open
                : styles.header__navbar
            }
          >
            <Navbar>
              {siteSections.map((item, index) => (
                <NavbarItem
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  url={item.url}
                />
              ))}
            </Navbar>
          </div>
        </div>
      </header>
      <main>
        <Banner />
        <AboutUs />
        <Services />
        <Molise />
        <Accommodations />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
