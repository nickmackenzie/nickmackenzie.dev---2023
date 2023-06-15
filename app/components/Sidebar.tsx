'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import styles from "./sidebar.module.css";

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/projects': {
    name: 'projects',
  },
  '/blog': {
    name: 'blog',
  },
};


export default function Sidebar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <nav className={styles.nav}>
                {Object.entries(navItems).map(([path, { name }]) => {
                        const isActive = path === pathname;
      return  <Link className={isActive ? styles.active : styles.link} href={path != "home" ? path : "/" } key={path}>{name}</Link>
})}
    </nav>
  );
}
