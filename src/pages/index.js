import Head from "next/head";
import Scene from "../components/Scene";
import Overlay from "../components/Overlay";
import { useState } from "react";
import DialogModal from "@/components/UI/DialogModal";

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
      <div className=" flex justify-center pointer-events-none ">
        <div className="absolute flex pointer-events-auto">
          <DialogModal
            action={action}
            setAction={setAction}
            primaryButtonTitle="Visit"
            secondaryButtonTitle="Close"
            buttonActions={true}
            content="Welcome to my portfolio! Click the button below to view my work."
          />
        </div>
      </div>
      <div className="">
        <Overlay action={action} setAction={setAction} />
      </div>
    </div>
  );
}
