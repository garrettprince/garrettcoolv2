import React from "react";
import Button from "./UI/Button";

function DialogWindow({ action, setAction }) {
  return (
    <section className=" text-white text-sm ">
      <div className="flex flex-col bg-[#B3B3B3]/40 backdrop-blur-xl rounded-2xl max-w-64 mt-20 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border-t-[1px] border-b-[1px] border-t-[#B3B3B3]/80 border-b-black/20">
        <div className="my-3 mx-4">
          This is a test to see what multiple lines look like. Adding more text
          to see.
        </div>
        <section className="flex justify-end">
          <button className="m-4 px-4 py-1 rounded-lg bg-[#b3b3b3]/30 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border-t-[1px] border-b-[1px] border-t-[#B3B3B3]/80 border-b-black/20">
            Cancel
          </button>
          <Button title="Submit" />
        </section>
      </div>
    </section>
  );
}

export default DialogWindow;
