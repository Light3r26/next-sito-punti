import type { Metadata } from "next";
import {  Pirata_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const pirataOne = Pirata_One({
  variable: "--font-pirata-one",
  weight: "400",
});

export const metadata: Metadata = {
  title: "sito punti keynes",
  description: "Un sito che raccoglie i punti ottenuti dagli studenti durante l'anno scolastico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pirataOne.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
