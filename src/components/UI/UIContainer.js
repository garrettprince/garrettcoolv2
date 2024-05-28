import React from "react";
import Nav from "./Nav";
import DialogModal from "./DialogModal";
import AudioPlayer from "./AudioPlayer";

function UIContainer({ action, setAction }) {
  return (
    <div className=" flex flex-col  items-center jusitfy-between w-full h-screen">
      <Nav />
      <DialogModal
        action={action}
        setAction={setAction}
        primaryButtonTitle="Visit"
        secondaryButtonTitle="Close"
        buttonActions={true}
        content="Welcome to my portfolio! Click the button below to view my work."
      />
    </div>
  );
}

export default UIContainer;
