"use client";

import Link from "next/link";
import styles from "./button.module.css"

type ButtonProps = {
  children: React.ReactNode;
  link: string;
  type: "btn-primary" | "btn-secondary" | "btn-outline";
};

export default function Button({ children, link, type }: ButtonProps) {
    return(
        <Link className={styles[type]} href={link}>{children}</Link>
    )
}
