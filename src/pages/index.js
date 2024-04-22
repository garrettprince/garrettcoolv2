import Head from "next/head";
import Scene from "../components/Scene";
import Overlay from "../components/Overlay";
import { useState } from "react";

export default function Home() {
  const [action, setAction] = useState("home");

  return (
    <div>
      <Head>
        <title>garrett.cool</title>
        <meta name="description" content="All things Garrett" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="h-screen">
        <Scene action={action} setAction={setAction} />
      </div>
      <div className="">
        <Overlay action={action} setAction={setAction} />
      </div>
    </div>
  );
}
