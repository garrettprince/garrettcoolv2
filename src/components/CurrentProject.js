/* eslint-disable @next/next/no-img-element */
import { XMarkIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CurrentProject({ currentProject, setCurrentProject }) {
  return (
    <div className="">
      {currentProject === "Garrett.cool" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7 cursor-pointer"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-4">
              <div className="flex space-x-3 font-black text-xs text-black/40">
                <Link
                  href="https://www.spline.design/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1 "
                >
                  <p>SPLINE</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696674575/Garrett.cool%20Assets/Group_12_tfjsif.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
                <Link
                  href="https://www.cloudinary.com/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>CLOUDINARY</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_5_k24kkv.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
                <Link
                  href="https://www.nextjs.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1 "
                >
                  <p>NEXT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </section>
            <img
              src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696751697/Garrett.cool%20Assets/Portfolio%20Screenshot/Group_2_xeyj9u.png"
              alt=""
              className="rounded-xl my-6"
            />
            <p className="font-light text-sm mb-2">
              I wanted my personal site to be a bit less boring. Yes, I could do
              the gradient and Inter or Plex Mono combo, but I thought my
              floating head describing my projects and interests would be both
              unique and equally disturbing.
            </p>
            <p className="font-light text-sm mb-6">
              Like most of my projects I started with Next and incorporated the
              react-three/fiber library to get 3D integrated. Tied nicely in a
              no frills font and asset management from Cloudinary. Check out the
              code below.
            </p>

            <section className="flex justify-center space-x-3">
              <Link
                href="/"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                VISIT
              </Link>
              <Link
                href="https://github.com/garrettprince/www.garrett.cool"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                GITHUB
              </Link>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Long Addition" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7 cursor-pointer"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-4">
              <div className="flex space-x-3 font-black text-xs text-black/40">
                <Link
                  href="https://www.cloudinary.com/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>CLOUDINARY</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_5_k24kkv.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
                <Link
                  href="https://www.nextjs.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>NEXT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </section>
            <img
              src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696753473/Garrett.cool%20Assets/Portfolio%20Screenshot/Screen_Shot_2023-10-08_at_2.44_1_spqd90.png"
              alt=""
              className="rounded-xl my-6"
            />
            <p className="font-light text-sm mb-2">
              Long Addition is both an experiement in blog design and my own
              creative writing. Loved the layout and decided to forego a CMS and
              Markdown. This proved to be very cumbersome and a massive barrier
              to getting writing up. I plan on revamping it with a simpler
              Markdown in early 2024.
            </p>
            <p className="font-light text-sm mb-6">
              Tech wise, I learned a ton about routing, asset management with
              Cloudinary, and adding my own twist (the 3D popping effect) with
              2D resources.
            </p>

            <section className="flex justify-center space-x-3">
              <Link
                href="https://longaddition.com/"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                VISIT
              </Link>
              <Link
                href="https://github.com/garrettprince/longadditionv6"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                GITHUB
              </Link>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Chat App" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7 cursor-pointer"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-4">
              <div className="flex space-x-3 font-black text-xs text-black/40">
                <Link
                  href="https://www.supabase.com/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>SUPABASE</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_2_povwly.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
                <Link
                  href="https://www.nextjs.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>NEXT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </section>
            <img
              src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696754391/Garrett.cool%20Assets/Portfolio%20Screenshot/Screen_Shot_2023-10-08_at_3.37_1_d2velh.png"
              alt=""
              className="rounded-xl my-6"
            />
            <p className="font-light text-sm mb-2">
              I made this chat app to test my skills with authentication and
              start work with a database. Turns out the database using Supabase
              was the easier part. Auth using NextAuth was not as simple.
              Excellent lesson and learned a ton.
            </p>
            <p className="font-light text-sm mb-6">
              Design wise, I was going for a Discord/WhatsApp combo. You can add
              a new thread on the left side and add your own messages in each
              thread.
            </p>

            <section className="flex justify-center space-x-3">
              <Link
                href="https://chat-app-liart-six.vercel.app/"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                VISIT
              </Link>
              <Link
                href="https://github.com/garrettprince/chat-app"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                GITHUB
              </Link>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Google Clone" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7 cursor-pointer"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-4">
              <div className="flex space-x-3 font-black text-xs text-black/40">
                <Link
                  href="https://www.nextjs.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>NEXT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </section>
            <img
              src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696753473/Garrett.cool%20Assets/Portfolio%20Screenshot/Screen_Shot_2023-10-08_at_2.30_1_vd3agz.png"
              alt=""
              className="rounded-xl my-6"
            />
            <p className="font-light text-sm mb-2">
              This was a pretty straight forward tutorial I found on Youtube. I
              mostly wanted to work with massive API like the Google Search API
              and was surprised how simple it was.
            </p>
            <p className="font-light text-sm mb-6">
              No frills. Pagination, Next, responsive design. Fun project for
              practice.
            </p>

            <section className="flex justify-center space-x-3">
              <Link
                href="https://google-clone-vert-nu.vercel.app/"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                VISIT
              </Link>
              <Link
                href="https://github.com/garrettprince/google-clone"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                GITHUB
              </Link>
            </section>
          </motion.div>
        </div>
      )}
      {/* {currentProject === "Junk" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-5">
              <div className="flex space-x-3 font-medium text-sm text-black/40">
                <Link
                  href="https://www.supabase.com/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>SUPABASE</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_2_povwly.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
                <Link
                  href="https://www.nextjs.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>NEXT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      )} */}
      {currentProject === "Automio" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7 cursor-pointer"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-4">
              <div className="flex space-x-3 font-black text-xs text-black/40">
                <Link
                  href="https://www.airplane.dev/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>AIRPLANE</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_11_uomuo7.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>

                <Link
                  href=""
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>JAVASCRIPT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696674948/Garrett.cool%20Assets/Group_14_zdxglb.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </section>
            <img
              src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696756000/Garrett.cool%20Assets/Portfolio%20Screenshot/Screen_Shot_2023-10-08_at_4.04_1_lmact4.png"
              alt=""
              className="rounded-xl my-6"
            />
            <p className="font-light text-sm mb-2">
              One of my favorite projects. Thought it would be fun to create a
              list of 400 different bios for my Instagram. Each day, I would use
              Airplane.dev to automatically run a script I made to update my
              occupation.
            </p>
            <p className="font-light text-sm mb-6">
              So much fun creating the occupations with my siblings and pretty
              simple to integrate automation with Airplane.dev. Only issue is
              the Instagram Private API. Good way to learn how not to do
              documentation.
            </p>

            <section className="flex justify-center space-x-3">
              <Link
                href="https://github.com/garrettprince/instagram-bio"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                GITHUB
              </Link>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Montanahead" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7 cursor-pointer"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-4">
              <div className="flex space-x-3 font-black text-xs text-black/40">
                <Link
                  href="https://www.cloudinary.com/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>CLOUDINARY</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_5_k24kkv.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
                <Link
                  href="https://www.svelte.dev/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>SVELTE</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_6_xoeq4q.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </section>
            <img
              src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696753473/Garrett.cool%20Assets/Portfolio%20Screenshot/Group_1_m3fiyc.png"
              alt=""
              className="rounded-xl my-6"
            />
            <p className="font-light text-sm mb-2">
              First time working with SvelteKit and loved it. Different workflow
              but a lot of fun writing something from scratch in a different
              framework than what I typically reach for.
            </p>
            <p className="font-light text-sm mb-6">
              Also how I found out about Cloudinary. Fumbled around with AWS and
              luckily found Cloudinary to store and playback audio using
              Howler.js.
            </p>

            <section className="flex justify-center space-x-3">
              <Link
                href="https:/www.montanahead.com/"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                VISIT
              </Link>
              <Link
                href="https://github.com/garrettprince/montanahead"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                GITHUB
              </Link>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Twitter Clone" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7 cursor-pointer"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-4">
              <div className="flex space-x-3 font-bold text-xs text-black/40">
                <Link
                  href="https://www.sanity.io/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>SANITY</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_3_ao7mbv.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
                <Link
                  href=""
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>TYPESCRIPT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_9_rcxhyx.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
                <Link
                  href="https://www.nextjs.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>NEXT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </section>
            <img
              src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696756855/Garrett.cool%20Assets/Portfolio%20Screenshot/Group_4_d2w3ej.png"
              alt=""
              className="rounded-xl my-6"
            />
            <p className="font-light text-sm mb-2">
              Massive bummer that the clone site no longer works due to the API
              skyrocketing from free to not free.
            </p>
            <p className="font-light text-sm mb-6">
              Still wanted to link code as it was a really complex project that
              introduced me to both Typescript and Sanity CMS. Both of which had
              a pretty steep learning curve for me. Grateful I had the
              opportunity to work with both and was proud of the effort put in.
            </p>

            <section className="flex justify-center space-x-3">
              <Link
                href="https://github.com/garrettprince/twitter-clone"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                GITHUB
              </Link>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "QR Code Creator" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7 cursor-pointer"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-4">
              <div className="flex space-x-3 font-black text-xs text-black/40">
                <Link
                  href="https://www.python.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>PYTHON</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696674574/Garrett.cool%20Assets/Group_13_rqpgp7.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </section>
            <img
              src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696757496/Garrett.cool%20Assets/Portfolio%20Screenshot/longadditionscan_1_kw8ic3.png"
              alt=""
              className="rounded-xl my-6"
            />
            <p className="font-light text-sm mb-2">
              Could not stand trying to find a free QR code generator online.
              Used QR.io and was so frustrated with the experience that I
              decided to research how to make my own.
            </p>
            <p className="font-light text-sm mb-6">
              Luckily, it was pretty simple and I ended up building one myself.
              Check out the code below.
            </p>

            <section className="flex justify-center space-x-3">
              <Link
                href="https://github.com/garrettprince/qrcodegenerator"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                GITHUB
              </Link>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Joody" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7 cursor-pointer"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-4">
              <div className="flex space-x-3 font-black text-xs text-black/40">
                <Link
                  href="https://discord.js.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>DISCORD.JS</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673908/Garrett.cool%20Assets/Group_10_txhadp.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
                <Link
                  href=""
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>JAVASCRIPT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696674948/Garrett.cool%20Assets/Group_14_zdxglb.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </section>
            <img
              src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696753474/Garrett.cool%20Assets/Portfolio%20Screenshot/Screen_Shot_2023-10-08_at_2.45_1_iztc1y.png"
              alt=""
              className="rounded-xl my-6"
            />
            <p className="font-light text-sm mb-2">
              Joody is an ode to Groovy, a discord music bot my siblings and
              used when gaming together online. Sadly, when YouTube filed a
              cease and desist, the owner shut it down. Feeling a gap in some of
              our gaming sessions, I decided to build my own.
            </p>
            <p className="font-light text-sm mb-6">
              Followed a couple of YouTube tutorials and made some custom tweaks
              to fit our Discord server. Eventually chose to host it on Repl.it
              for the 24/7 uptime, but took it down recently due to travels and
              money.
            </p>

            <section className="flex justify-center space-x-3">
              <Link
                href="https://github.com/garrettprince/joody"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                GITHUB
              </Link>
            </section>
          </motion.div>
        </div>
      )}
      {currentProject === "Airbnb Clone" && (
        <div className="">
          <motion.div
            initial={{ y: 4, opacity: 0 }}
            animate={{ y: -2, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="flex flex-col mt-6 mx-4"
          >
            <section className="flex justify-between items-center">
              <Link href="/">
                <ArrowLeftIcon className="h-7 w-7 opacity-0" />
              </Link>
              <h1 className="flex mx-auto mb-1 text-4xl font-sans font-light">
                {currentProject}
              </h1>
              <XMarkIcon
                className="h-7 w-7 cursor-pointer"
                onClick={() => setCurrentProject("list")}
              />
            </section>

            <section className="mx-auto mt-4">
              <div className="flex space-x-3 font-black text-xs text-black/40">
                <Link
                  href="https://www.mapbox.com/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>MAPBOX</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696686549/Garrett.cool%20Assets/Group_15_i4qhnn.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>

                <Link
                  href="https://www.nextjs.org/"
                  className="flex items-center space-x-2 bg-black/10 rounded-full py-1 pl-3 pr-1"
                >
                  <p>NEXT</p>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696673907/Garrett.cool%20Assets/Group_1_gk3eg6.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </section>
            <img
              src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1696758352/Garrett.cool%20Assets/Portfolio%20Screenshot/Screen_Shot_2023-10-08_at_4.44_1_jifyuw.png"
              alt=""
              className="rounded-xl my-6"
            />
            <p className="font-light text-sm mb-2">
              One of my very first projects. The first project that introduced
              me to the basics of Next.js and how to utilize external APIs like
              Mapbox.
            </p>
            <p className="font-light text-sm mb-6">
              Super simple app with simple navigation. Fun starter project and
              still fun to look back on.
            </p>

            <section className="flex justify-center space-x-3">
              <Link
                href="https://airbnb-clone2-seven.vercel.app/"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                VISIT
              </Link>
              <Link
                href="https://github.com/garrettprince/airbnb-clone"
                className="rounded-full px-6 py-1 font-black text-xs text-black bg-black/10 "
              >
                GITHUB
              </Link>
            </section>
          </motion.div>
        </div>
      )}
    </div>
  );
}
