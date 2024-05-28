import React, { useState, useEffect } from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { useAtom } from "jotai";
import { dialogModalOpen } from "@/utils/store";

function DialogModal({
  action,
  setAction,
  primaryButtonTitle,
  secondaryButtonTitle,
  content,
  buttonActions,
}) {
  const [dialogModal, setDialogModal] = useAtom(dialogModalOpen);

  const [text, setText] = useState("");
  const fullText = content;

  // Typewriter effect //
  useEffect(() => {
    if (!fullText) return; // Check if fullText is undefined or null
  
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => prevText + (fullText[index] || '')); // Check for undefined element
      index++;
      if (index >= fullText.length) {
        clearInterval(intervalId);
      }
    }, 30); // Adjust speed here
  
    return () => clearInterval(intervalId); // Clean up on unmount
  }, [fullText]);

  return (
    <section className="text-white text-sm ">
      {dialogModal && (
        <div className="w-64 flex flex-col bg-[#B3B3B3]/20 backdrop-blur-xl rounded-2xl max-w-64 mt-20 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border-t-[1px] border-b-[1px] border-t-[#B3B3B3]/80 border-b-black/20">
          {/* Render text content */}
          <div className="my-3 mx-4">{text}</div>

          {/* If dialog has button actions, render below */}
          {buttonActions && (
            <section className="flex justify-between">
              <SecondaryButton secondaryButtonTitle={secondaryButtonTitle} />
              <PrimaryButton primaryButtonTitle={primaryButtonTitle} />
            </section>
          )}
        </div>
      )}
    </section>
  );
}

export default DialogModal;
