import Link from "next/link";

const NavbarItem = ({ title, icon, url }) => (
  <li>
    <Link href={url}>
      <span className={`fa-solid fa-${icon}`} />
      <span>{title}</span>
    </Link>
  </li>
);

export default NavbarItem;