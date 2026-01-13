"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <ul className={`${styles.links} ${isOpen ? styles.active : ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profilo">Profilo</Link>
        </li>
        <li>
          <Link href="/viaggio">Viaggio</Link>
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

      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </nav>
  );
}
