"use client";

import { useState } from "react";
import Popup from "@/components/popup";

export default function PopUp() {
  const [activePopup, setActivePopup] = useState<null | "a" | "b">(null);
  return (
    <main>
      <Popup      /*si usa un singolo popup*/
        isOpen={activePopup !== null}
        onClose={() => setActivePopup(null)}
      >
        {activePopup === "a" && (   /*che cambia contenuto*/
          <div>
            <h2>Popup A</h2>
            <p>Contenuto del popup A</p>
          </div>
        )}

        {activePopup === "b" && (
          <div>
            <h2>Popup B</h2>
            <p>Contenuto del popup B</p>
          </div>
        )}
      </Popup>
      {/* in base a quale pulsante viene cliccato */}
      <button onClick={() => setActivePopup("a")}>
        Apri popup A
      </button>              
      <br />
      <button onClick={() => setActivePopup("b")}>
        Apri popup B
      </button>
    </main>
  );
}
