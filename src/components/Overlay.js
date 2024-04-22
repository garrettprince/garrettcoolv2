import { useState } from "react";
import { motion } from "framer-motion";
import {
  XMarkIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";
import { useEffect } from "react";
import Link from "next/link";

export default function Overlay({ action, setAction }) {
  return (
    <main className="">
      {action != "home" && (
        <div>
          <XButton action={action} setAction={setAction} />
          <NextButton action={action} setAction={setAction} />
          <PreviousButton action={action} setAction={setAction} />
        </div>
      )}

      {action === "portfolio" && (
        <div>
          <ProjectTitle
            action={action}
            setAction={setAction}
            title="Portfolio"
            subtitle="Things I do and don't know"
          />
          <Visit
            action={action}
            setAction={setAction}
            website1="/portfolio"
            website2="https://github.com/garrettprince"
          />
          <TextBubble input="Cl ick 'VISIT' to view a collection of my work over the past 18 months or so. There's a small write up and link for the code to each project." />
        </div>
      )}
      {action === "montanahead" && (
        <div>
          <ProjectTitle
            action={action}
            setAction={setAction}
            title="Demos"
            subtitle="I made some music a while ago"
          />
          <Visit
            action={action}
            setAction={setAction}
            website1="https://www.montanahead.com"
          />
          <TextBubble input="I  made some music a few years back and sent casettes to friends, family, and strangers. The casette ended up not working but it looks really cool." />
        </div>
      )}
      {action === "playDate" && (
        <div>
          <ProjectTitle
            action={action}
            setAction={setAction}
            title="Playdate Development"
            subtitle="Coming 2025"
          />
          <Visit action={action} setAction={setAction} website="/" />
          <TextBubble input="M y siblings and I are in the process of making a game in the next few years. More to come." />
        </div>
      )}
      {action === "contactPhone" && (
        <div>
          <ProjectTitle
            action={action}
            setAction={setAction}
            title="Contact"
            subtitle="Much obliged"
          />
          <Visit
            action={action}
            setAction={setAction}
            website1="mailto:g@garrett.cool"
            website2="https://www.instagram.com/garrettjprince"
          />
          <TextBubble input="Re ach out via email, Instagram, or Github and let's talk about the big things in life: Tapas are just small plates of food." />
        </div>
      )}
      {action === "nameTag" && (
        <div>
          <ProjectTitle
            action={action}
            setAction={setAction}
            title="About Me"
            subtitle="It's all true"
          />
          <TextBubble input="I 'm a completely self taught programmer with long legs, long arms and I love shiny objects." />
        </div>
      )}
      {action === "longAddition" && (
        <div>
          <ProjectTitle
            action={action}
            setAction={setAction}
            title="Long Addition"
            subtitle="A man and his blog"
          />
          <Visit
            action={action}
            setAction={setAction}
            website1="https://www.longaddition.com"
          />
          <TextBubble input="I  started a blog mid 2023 spanning a wide range of topics including my attraction to Javascript libraries, death, photography, and rubies. I'll resume writing in 2024." />
        </div>
      )}
    </main>
  );
}

function ProjectTitle({ title }) {
  return (
    <motion.div
      initial={{ y: 4, opacity: 0 }}
      animate={{ y: -2, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      className="absolute w-64 text-center top-[1.6rem] left-0 right-0 mx-auto"
    >
      <h1 className="font-light font-sans  text-4xl mb-1">{title}</h1>
    </motion.div>
  );
}

function XButton({ setAction }) {
  return (
    <div>
      <XMarkIcon
        className="absolute top-8 right-5 h-7 w-7 sm:right-[10%] md:right-[20%] lg:right-[30%] cursor-pointer"
        onClick={() => setAction("home")}
      />
    </div>
  );
}

function NextButton({ action, setAction }) {
  return (
    <div>
      <ArrowRightIcon
        className="absolute top-[40%] right-5 h-7 w-7 sm:right-[10%] md:right-[20%] lg:right-[30%] cursor-pointer"
        onClick={() =>
          action === "portfolio"
            ? setAction("montanahead")
            : action === "montanahead"
            ? setAction("playDate")
            : action === "playDate"
            ? setAction("contactPhone")
            : action === "contactPhone"
            ? setAction("nameTag")
            : action === "nameTag"
            ? setAction("longAddition")
            : action === "longAddition"
            ? setAction("portfolio")
            : action === "portfolio"
        }
      />
    </div>
  );
}

function PreviousButton({ action, setAction }) {
  return (
    <div>
      <ArrowLeftIcon
        className="absolute top-[40%] left-5 h-7 w-7 sm:left-[10%] md:left-[20%] lg:left-[30%] cursor-pointer"
        onClick={() =>
          action === "portfolio"
            ? setAction("longAddition")
            : action === "longAddition"
            ? setAction("nameTag")
            : action === "nameTag"
            ? setAction("contactPhone")
            : action === "contactPhone"
            ? setAction("playDate")
            : action === "playDate"
            ? setAction("montanahead")
            : action === "montanahead"
            ? setAction("portfolio")
            : action === "portfolio"
        }
      />
    </div>
  );
}

function Visit({ action, website1, website2 }) {
  return (
    <div>
      <motion.a
        initial={{ y: 4, opacity: 0 }}
        animate={{ y: -2, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        {action === "playDate" && <div></div>}
        {action === "longAddition" && (
          <Link
            href={website1}
            className="absolute items-center  rounded-full py-1 pl-[1.45rem] mx-auto left-0 right-0 top-20 w-20 font-black  text-xs text-black bg-black/10 "
          >
            VISIT
          </Link>
        )}
        {action === "portfolio" && (
          <div>
            <Link
              href={website1}
              className="absolute items-center  rounded-full py-1 pl-[1.45rem] mx-auto left-0 right-[6.5rem] top-20 w-20 font-black  text-xs text-black bg-black/10"
            >
              VISIT
            </Link>
            <Link
              href={website2}
              className="absolute items-center rounded-full py-1 pl-[1.5rem] mx-auto left-24 right-0 top-20 w-24 font-black  text-xs text-black bg-black/10"
            >
              GITHUB
            </Link>
          </div>
        )}
        {action === "montanahead" && (
          <Link
            href={website1}
            className="absolute items-center  rounded-full py-1 pl-[1.45rem] mx-auto left-0 right-0 top-20 w-20 font-black  text-xs text-black bg-black/10"
          >
            VISIT
          </Link>
        )}
        {action === "contactPhone" && (
          <div>
            <Link
              href={website1}
              className="absolute items-center  rounded-full py-1 pl-[1.30rem] mx-auto left-0 right-[5.7rem] top-20 w-20 font-black  text-xs text-black bg-black/10"
            >
              EMAIL
            </Link>
            <Link
              href={website2}
              className="absolute items-center rounded-full py-1 pl-[1.30rem] mx-auto left-24 right-0 top-20 w-20 font-black  text-xs text-black bg-black/10"
            >
              INSTA
            </Link>
          </div>
        )}
      </motion.a>
    </div>
  );
}

function TextBubble({ input }) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    let txt = input;
    let speed = 25;

    function typeWriter() {
      if (i < txt.length) {
        setTypedText((prevTypedText) => prevTypedText + txt.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();

    return () => clearTimeout(typeWriter);
  }, [input]);

  return (
    <motion.div
      id="info"
      initial={{ y: 4, opacity: 0 }}
      animate={{ y: -2, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.9 }}
      className="absolute w-64 sm:w-72 ml-[30%] rounded-xl text-left text-sm px-4 py-2 bottom-8 left-0 right-0 mx-auto my-auto mb-10 sm:ml-[35%] md:ml-[42%] lg:ml-[45%] sm:mb-32 font-sans font-light"
    >
      {typedText}
    </motion.div>
  );
}
