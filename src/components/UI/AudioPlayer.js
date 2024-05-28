import React, { useState } from "react";
import { MusicalNoteIcon } from "@heroicons/react/20/solid";
import { useSpring, animated } from "@react-spring/web";

function AudioPlayer() {
  const [isHovered, setIsHovered] = useState(false);

  const animatedStyles = useSpring({
    width: isHovered ? "400px" : "100px", // Tailwind classes for width
  });

  return (
    <animated.div
      id="container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={animatedStyles}
      className=" text-white flex flex-col bg-[#B3B3B3]/40 backdrop-blur-xl rounded-2xl mt-20 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border-t-[1px] border-b-[1px] border-t-[#B3B3B3]/80 border-b-black/20 m-4"
    >
      <MusicalNoteIcon
        className={`${
          isHovered === true
            ? "h-6 w-6 m-4 text-white/60"
            : "h-6 w-6 m-4 text-white/80"
        }`}
      />
      {/* <button className="transform transition-all active:bg-[#b3b3b3]/30 hover:bg-[#b3b3b3]/50 m-4 px-5 py-1 rounded-lg bg-[#b3b3b3]/30 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border-t-[1px] border-b-[1px] border-t-[#B3B3B3]/80 border-b-black/20 cursor-pointer">
        title
      </button> */}
    </animated.div>
  );
}

export default AudioPlayer;
