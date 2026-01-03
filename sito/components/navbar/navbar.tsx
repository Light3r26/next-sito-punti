"use client";

import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profilo">Profilo</Link>
        </li>
        <li>
          <Link href="/caccia-al-tesoro">Caccia al tesoro</Link>
        </li>
        <li>
          <Link href="/rotte">Rotte</Link>
        </li>
        <li>
          <Link href="/misteri">Misteri</Link>
        </li>
        <li>
          <Link href="/regole">Regole</Link>
        </li>
      </ul>
    </nav>
  );
}
