/* eslint-disable @next/next/no-img-element */
import { XMarkIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import CurrentProject from "../components/CurrentProject";

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState("list");

  const projectInfo = [
    {
      name: "Garrett.cool",
      icon1:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696674575/Garrett.cool%20Assets/Group_12_tfjsif.png",
      icon2:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_5_k24kkv.png",
      icon3:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png",
    },
    {
      name: "Long Addition",
      icon1:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696687579/Garrett.cool%20Assets/Ellipse_13_xszbuc.png",
      icon2:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_5_k24kkv.png",
      icon3:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png",
    },
    {
      name: "Chat App",
      icon1:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696687579/Garrett.cool%20Assets/Ellipse_13_xszbuc.png",
      icon2:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_2_povwly.png",
      icon3:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png",
    },
    {
      name: "Google Clone",
      icon1:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696687579/Garrett.cool%20Assets/Ellipse_13_xszbuc.png",
      icon2:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696687579/Garrett.cool%20Assets/Ellipse_13_xszbuc.png",
      icon3:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png",
    },
    // {
    //   name: "Junk",
    //   icon1:
    //     "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696687579/Garrett.cool%20Assets/Ellipse_13_xszbuc.png",
    //   icon2:
    //     "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_2_povwly.png",
    //   icon3:
    //     "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png",
    // },
    {
      name: "Automio",
      icon1:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696687579/Garrett.cool%20Assets/Ellipse_13_xszbuc.png",
      icon2:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_11_uomuo7.png",
      icon3:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696674948/Garrett.cool%20Assets/Group_14_zdxglb.png",
    },
    {
      name: "Montanahead",
      icon1:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696687579/Garrett.cool%20Assets/Ellipse_13_xszbuc.png",
      icon2:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_5_k24kkv.png",
      icon3:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_6_xoeq4q.png",
    },
    {
      name: "Twitter Clone",
      icon1:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_3_ao7mbv.png",
      icon2:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_9_rcxhyx.png",
      icon3:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png",
    },
    {
      name: "QR Code Creator",
      icon1:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696687579/Garrett.cool%20Assets/Ellipse_13_xszbuc.png",
      icon2:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696687579/Garrett.cool%20Assets/Ellipse_13_xszbuc.png",
      icon3:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696674574/Garrett.cool%20Assets/Group_13_rqpgp7.png",
    },
    {
      name: "Joody",
      icon1:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696687579/Garrett.cool%20Assets/Ellipse_13_xszbuc.png",
      icon2:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_10_txhadp.png",
      icon3:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696674948/Garrett.cool%20Assets/Group_14_zdxglb.png",
    },
    {
      name: "Airbnb Clone",
      icon1:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696687579/Garrett.cool%20Assets/Ellipse_13_xszbuc.png",
      icon2:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696686549/Garrett.cool%20Assets/Group_15_i4qhnn.png",
      icon3:
        "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png",
    },
  ];

  return (
    <div className="max-w-xl mx-auto">
      {currentProject === "list" && (
        <motion.div
          initial={{ y: 4, opacity: 0 }}
          animate={{ y: -2, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="flex flex-col mt-6 mx-5"
        >
          <section className="flex justify-between items-center">
            <Link href="/">
              <ArrowLeftIcon className="h-7 w-7 cursor-pointer" />
            </Link>
            <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
              Portfolio
            </h1>
            <XMarkIcon className="h-7 w-7 opacity-0 " />
          </section>
          <section id="projects" className="mt-7 mx-1">
            {projectInfo.map((project) => (
              <div
                key={project.name}
                onClick={() => setCurrentProject(project.name)}
                className="flex justify-between items-center cursor-pointer text-3xl font-thin mb-3"
              >
                <div>{project.name}</div>
                <div className="flex space-x-2">
                  <img src={project.icon1} alt="" className="h-5 w-5 " />
                  <img src={project.icon2} alt="" className="h-5 w-5" />
                  <img src={project.icon3} alt="" className="h-5 w-5" />
                </div>
              </div>
            ))}
          </section>
        </motion.div>
      )}

      {currentProject !== "list" && (
        <CurrentProject
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />
      )}
    </div>
  );
}
