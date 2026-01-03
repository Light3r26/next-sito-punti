"use client";

import { useState } from "react";
import Popup from "@/components/popup";
import Link from "next/link";

export default function PopUpPage() {
  const [open, setOpen] = useState(false);

  return (
    <main style={{ padding: "40px" }}>
      <button onClick={() => setOpen(true)}>
        tasto per aprire popup
      </button>

      <Popup
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <h2>titolo del popup</h2>
        <p>
            contenuto del popup.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus repellat ipsum facere incidunt soluta earum qui voluptatum 
            reprehenderit nesciunt deleniti ullam, iure consectetur perspiciatis vel fugit ipsa, itaque quae.
        </p>
      </Popup>
      <br />
      <br />
      <Link href="/">home</Link>
    </main>
  );
}
