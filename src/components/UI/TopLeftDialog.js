import React, { useState, useEffect } from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { useAtom } from "jotai";
import { dialogModalOpen } from "@/utils/store";
import { animated, useSpring } from "@react-spring/web";

function TopLeftDialog({
  action,
  setAction,
  primaryButtonTitle,
  secondaryButtonTitle,
  content,
  buttonActions,
}) {
  ///////////
  // STATE //
  ///////////
  const [dialogModal, setDialogModal] = useAtom(dialogModalOpen);
  const [text, setText] = useState("");
  const fullText = content;

  ///////////////////////
  // SPRING ANIMATIONS //
  ///////////////////////
  const playerAnimation = useSpring({
    width: dialogModal ? "20rem" : "3.5rem",
    height: dialogModal ? "8rem" : "3.5rem",
  });

  const fadeIn = useSpring({
    opacity: dialogModal ? "1" : "0",
  });

  const fadeOut = useSpring({
    opacity: dialogModal ? "0" : "1",
  });

  ///////////////////////
  // TYPEWRITER EFFECT //
  ///////////////////////
  useEffect(() => {
    if (!fullText) return; // Check if fullText is undefined or null

    let index = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => prevText + (fullText[index] || "")); // Check for undefined element
      index++;
      if (index >= fullText.length) {
        clearInterval(intervalId);
      }
    }, 20); // Adjust speed here

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [fullText]);

  return (
    <section className="text-white text-sm">
      {/* {dialogModal && ( */}
      <div className="max-w-80 flex flex-col bg-[#B3B3B3]/20 rounded-2xl shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border-t-[1px] border-b-[1px] border-t-[#B3B3B3]/80 border-b-black/20">
        {/* Render text content */}
        <div className="flex">
          <div className="flex flex-col">
            <div className="w-20"></div>
            <div className="w-2 "></div>
          </div>
          <div className="my-3 mx-4">{text}</div>
        </div>

        {/* If dialog has button actions, render below */}
        {buttonActions && (
          <section className="flex justify-between">
            <SecondaryButton secondaryButtonTitle={secondaryButtonTitle} />
            <PrimaryButton primaryButtonTitle={primaryButtonTitle} />
          </section>
        )}
      </div>
      {/* )} */}
    </section>
  );
}

export default TopLeftDialog;
