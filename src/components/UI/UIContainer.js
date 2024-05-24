import React from "react";
import Nav from "./Nav";
import DialogModal from "./DialogModal";
import AudioPlayer from "./AudioPlayer";

function UIContainer({ action, setAction }) {
  return (
    <>
      <Nav />
      <DialogModal
        action={action}
        setAction={setAction}
        primaryButtonTitle="Visit"
        secondaryButtonTitle="Close"
        buttonActions={true}
        content="Welcome to my portfolio! Click the button below to view my work."
      />
      
    </>
  );
}

export default UIContainer;
