import Image from "next/image";
import logo from "@/public/logo.png";
import "./style.css"

export default function Home() {
  return (
    <main>
      <Image src={logo} alt={"Logo"} width={150} height={150}/>
    </main>
  );
}
