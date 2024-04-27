import Head from "next/head";
import Scene from "../components/Scene";
import Overlay from "../components/Overlay";
import { useState } from "react";
import InfoWindow from "@/components/InfoWindow";

export default function Home() {
  const [action, setAction] = useState("home");

  return (
    <div className="relative h-screen">
    <Head>
      <title>garrett.cool</title>
      <meta name="description" content="All things Garrett" />
      <link rel="icon" href="/icon.png" />
    </Head>
    <div className="absolute w-full h-full">
      <Scene action={action} setAction={setAction} />
    </div>
    <div className="absolute w-full h-full flex items-start justify-start pointer-events-none">
      <div className="flex mx-auto text-white text-2xl p-4 bg-transparent pointer-events-auto">
        <div className="flex space-x-2">
          <p>Garrett </p>
          <button className="bg-black ">Test</button>
                </div>
        </div>
      
    </div>
    <div className="">
      <Overlay action={action} setAction={setAction} />
    </div>
  </div>
  );
}
