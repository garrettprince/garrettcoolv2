import React from "react";
import TopLeftDialog from "./TopLeftDialog";
import { Bars2Icon } from "@heroicons/react/24/solid";

function Nav({ action, setAction }) {
  return (
    <section className="text-white text-sm w-full ">
      <div className="flex justify-between py-4 px-4">
        <TopLeftDialog
          action={action}
          setAction={setAction}
          buttonActions={true}
          primaryButtonTitle="Visit"
          secondaryButtonTitle="Close"
          content="Welcome to my portfolio! Click the button below to view my work. There are many things in the portfolio that I'd love for you to see. "
        />
        <Bars2Icon className="md:hidden h-8 w-8" />
        <ul className="hidden md:flex md:space-x-4">
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
