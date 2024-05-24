import React from "react";

function Nav() {
  return (
    <section className="text-white text-sm w-full">
      <div className="flex justify-end items-center py-4 px-6">
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
