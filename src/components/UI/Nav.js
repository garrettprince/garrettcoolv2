import React from "react";
import DialogModal from "./DialogModal";

function Nav() {
  return (
    <section className="text-white text-sm w-full">
      <div className="flex justify-between items-center py-4 px-6">
        <DialogModal 
        content="This is a test"
        />
        <ul className="flex space-x-4">
          <li>Work</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </section>
  );
}

export default Nav;
