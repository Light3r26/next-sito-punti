import Image from "next/image";
import logo from "@/public/logo.png";
import background from "@/public/background-sea.jpg";
import styles from "./page.module.css"
import Button from "@/components/button";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={background}
        alt="Background"
        fill
        priority
        sizes="100vh"
        className={styles.bg}
      />
      <Image className={styles.logo} src={logo} alt={"Logo"} width={150} height={150} />
      <h2>ISIS J.M. Keynes</h2>
      <h1>ONE PIECE</h1>
      <Button type="btn-primary" link="/">Accedi</Button>
    </main>
  );
}
