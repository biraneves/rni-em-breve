import Link from "next/link";
import GeneralHead from "../components/GeneralHead";
import Navbar from "../components/Navbar";
import siteSections from "../data/siteSections";
import NavbarItem from "../components/Navbar/NavbarItem";

const Home = () => {
  return (
    <>
      <GeneralHead />
      <header>
        <Link href="/">
          <img src="/img/rni-logo.png" alt="Residência na Itália" />
        </Link>
        <Navbar>
          {siteSections.map((item, index) => (
            <NavbarItem key={index} title={item.title} icon={item.icon} url={item.url} />
          ))}
        </Navbar>
      </header>
      <main>
      </main>
    </>
  );
};

export default Home;