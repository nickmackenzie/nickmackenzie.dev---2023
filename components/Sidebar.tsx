import Link from 'next/link'
import styles from "./sidebar.module.css";

const sidebarItems = ["home", "about", "projects"];

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      {sidebarItems.map((link) => (
        <Link href={link != "home" ? link : "/" } key={link}>{link}</Link>
      ))}
    </nav>
  );
}
