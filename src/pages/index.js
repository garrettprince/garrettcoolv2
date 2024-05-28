import { useState } from "react";
import Head from "next/head";
import Scene from "../components/3D-components/Scene";
import UIContainer from "@/components/UI/UIContainer";
import AudioPlayer from "@/components/UI/AudioPlayer";

export default function Home() {
  const [action, setAction] = useState("home");

  return (
    <div className=" h-screen">
      <Head>
        <title>garrett.cool</title>
        <meta name="description" content="All things Garrett" />
        <link rel="icon" href="/icon.png" />
      </Head>
      {/* 3D Scene */}
      <div className="absolute z-0 w-full h-full">
        <Scene action={action} setAction={setAction} />
      </div>
      {/* UI Container */}
      <div className=" flex justify-center pointer-events-none h-full w-full">
        <div  className=" flex flex-col pointer-events-auto items-center w-full">
          <UIContainer action={action} setAction={setAction} />
        </div>
        <section className="absolute bottom-0 right-0 pointer-events-auto">
          <AudioPlayer />
      </section>
      </div>
    </div>
  );
}
