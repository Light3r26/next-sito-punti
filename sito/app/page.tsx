import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <h2>Components:</h2>
      <br />
      <ul>
        <li><Link href="/popup-example">popup</Link></li>
      </ul>
    </>
  );
}
