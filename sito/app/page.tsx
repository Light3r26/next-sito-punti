import Image from "next/image";
import logo from "@/public/logo.png";
import "./style.css"
import Button from "@/components/button";

export default function Home() {
  return (
    <main>
      <Image src={logo} alt={"Logo"} width={150} height={150}/>
      <h2>ISIS J.M. Keynes</h2>
      <h1>ONE PIECE</h1>
      <Button type="btn-primary" link="/">Accedi</Button>
    </main>
  );
}
