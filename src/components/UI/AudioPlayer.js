/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { MusicalNoteIcon } from "@heroicons/react/20/solid";
import { useSpring, animated } from "@react-spring/web";
import { songData1 } from "@/utils/songData";

function AudioPlayer() {
  ///////////
  // STATE //
  ///////////

  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);
  const [volume, setVolume] = useState(1.0);
  const [seek, setSeek] = useState(0);
  const [duration, setDuration] = useState(0);

  ///////////////////////
  // SPRING ANIMATIONS //
  ///////////////////////

  const playerAnimation = useSpring({
    width: isHovered ? "20rem" : "3.5rem",
    height: isHovered ? "8rem" : "3.5rem",
  });

  const fadeIn = useSpring({
    opacity: isHovered ? "1" : "0",
  });

  const fadeOut = useSpring({
    opacity: isHovered ? "0" : "1",
  });

  /////////////////////
  // HOVER FUNCTIONS //
  /////////////////////

  const handleMouseEnter = () => {
    setIsHovered(true);
    // setIsExpanded(true);
    if (timeoutId) clearTimeout(timeoutId); // Add this line
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      // Update this line
      // setIsExpanded(false);
      setIsHovered(false);
    }, 3000); // 3 seconds delay
  };

  let timeoutId = null; // Add this line

  return (
    <animated.div
      id="container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={playerAnimation}
      className="text-white flex flex-col bg-[#B3B3B3]/40 backdrop-blur-xl rounded-2xl mt-20 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border-t-[1px] border-b-[1px] border-t-[#B3B3B3]/80 border-b-black/20 m-4 justify-center items-center"
    >
      {/* MUSIC NOTE INDICATOR */}
      <animated.div>
        <MusicalNoteIcon
          style={fadeOut}
          className={`${
            isHovered === true ? "hidden" : "h-6 w-6 m-4 text-white/80"
          }`}
        />
      </animated.div>


      {isHovered && (
        <section style={fadeIn} className="flex w-[19rem]">
          <div className="flex justify-between items-center"></div>
          <img src={songData1.albumArt} className="h-14 w-14 rounded-lg" />
          <animated.div className="flex flex-col ml-2">
            <p className="text-xs font-bold">{songData1.songTitle}</p>
            <p className="text-xs">{songData1.artist}</p>
          </animated.div>
        </section>
      )}
    </animated.div>
  );
}

export default AudioPlayer;
