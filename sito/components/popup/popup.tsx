"use client";

import styles from "./popup.module.css";
import { ReactNode } from "react";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Popup({
  isOpen,
  onClose,
  children,
}: PopupProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.popup}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
        >
          ✘
        </button>
        {children}
      </div>
    </div>
  );
}
