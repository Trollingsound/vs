import Image from "next/image";
import Nav from "@/components/navbar/Nav"
import Desk from "@/components/desk/Desk"

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex">
          <Nav />
          <Desk />
      </div>
    </>
  );
}
