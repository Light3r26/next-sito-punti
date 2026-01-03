import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>text 1</h1>
      <h2>Components:</h2>
      <br />
      <ul>
        <li><Link href="/popup-example">popup</Link></li>
      </ul>
    </>
  );
}
