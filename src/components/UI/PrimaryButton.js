import React from "react";

function PrimaryButton({ primaryButtonTitle }) {
  return (
    <>
      <button className="transform transition-all  active:bg-[#b3b3b3]/30 hover:bg-[#b3b3b3]/50 m-4 px-4 py-1 rounded-lg bg-[#b3b3b3]/30 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border-t-[1px] border-b-[1px] border-t-[#B3B3B3]/80 border-b-black/20">
        {primaryButtonTitle}
      </button>
    </>
  );
}

export default PrimaryButton;
