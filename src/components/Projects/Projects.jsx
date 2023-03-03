import theband from "../../assets/img/theband.png";
import food from "../../assets/img/food.png";
import nike from "../../assets/img/nike.png";
import "./projects.css";
import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-[#F7D0E6] to-white pb-8
                dark:from-[#343f4a] dark:to-[#172029]"
    >
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-5xl text-blue-500 font-bold text-center font-dg">
          <span>MY PROJECTS</span>
        </div>
        {/* projects */}
        <div className="my-12 mx-4 grid grid-cols-1 gap-10 z-10">
          {/* food */}
          <div
            className="recent__project-card project__slide-up my-4
            flex 
            flex-col 
            text-center 
            items-center 
            justify-center
            duration-300
            cursor-pointer
            hover:bg-fuchsia-100
            md:hover:scale-105
            md:grid
            md:grid-cols-2
            md:gap-10
            md:mx-38
            lg:mx-28
            dark:bg-[#464749]
            dark:hover:bg-pink-800
            "
          >
            <img
              src={food}
              alt="Food order website"
              className="rounded-lg w-full md:h-[22rem]"
            />
            <div className="flex flex-col justify-between dark:text-white">
              <div className="px-5 pt-6 md:text-left">
                <div className="text-xl font-semibold">Grab food</div>
                <div className="text-zinc-500 pt-4 dark:text-white">
                  A simple demo landing page website, i did this project to
                  study TailwindCSS and responsive layout.
                </div>
              </div>
              <div className="flex flex-row justify-center items-center mt-8 md:justify-start ">
                <a
                  href="https://github.com/huynth1801/landing-page-tailwind"
                  target="_blank"
                  className="btn__link py-2 px-4 mx-4"
                >
                  <button className="text-sm text-slate-600 hover dark:text-white">
                    View source
                  </button>
                </a>
                <a
                  href="https://comforting-daifuku-846607.netlify.app/"
                  target="_blank"
                  className="btn__link py-2 px-4"
                >
                  <button className="text-sm text-slate-600 hover dark:text-white">
                    Visit website
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Nike */}
          <div
            className="recent__project-card project__slide-up my-4
            flex 
            flex-col 
            text-center 
            items-center 
            justify-center
            duration-300
            cursor-pointer
            hover:bg-fuchsia-100
            md:hover:scale-105
            md:grid
            md:grid-cols-2
            md:gap-10
            md:mx-38
            lg:mx-28
            dark:bg-[#464749]
            dark:hover:bg-pink-800
            "
          >
            <img
              src={nike}
              alt="Nike clone website"
              className="w-full rounded-t-lg md:h-[22rem]"
            />
            <div className="flex flex-col justify-between dark:text-white">
              <div className="px-5 pt-6 md:text-left">
                <div className="text-xl font-semibold">Nike</div>
                <div className="text-zinc-500 pt-4 dark:text-white">
                  Nike clone website, not responsive yet.
                </div>
              </div>
              <div className="flex flex-row justify-center items-center mt-8 md:justify-start">
                <a
                  href="https://github.com/huynth1801/NikeWebsite"
                  target="_blank"
                  className="btn__link py-2 px-4 mx-4"
                >
                  <button className="text-sm text-slate-600 hover dark:text-white">
                    View source
                  </button>
                </a>
                <a
                  href="https://huynth1801.github.io/NikeWebsite/"
                  target="_blank"
                  className="btn__link py-2 px-4"
                >
                  <button className="text-sm text-slate-600 hover dark:text-white">
                    Visit website
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* The band */}
          <div
            className="recent__project-card project__slide-up my-4
            flex 
            flex-col 
            text-center 
            items-center 
            justify-center
            duration-300
            cursor-pointer
            hover:bg-fuchsia-100
            md:hover:scale-105
            md:grid
            md:grid-cols-2
            md:gap-10
            md:mx-38
            lg:mx-28
            dark:bg-[#464749]
            dark:hover:bg-pink-800
            "
          >
            <img
              src={theband}
              alt="Food order website"
              className="w-full rounded-t-lg md:h-[22rem]"
            />
            <div className="flex flex-col justify-between dark:text-white">
              <div className="px-5 pt-3 md:text-left">
                <div className="text-xl font-semibold">The band</div>
                <div className="text-zinc-500 pt-4 dark:text-white">
                  A website when i studied how to build website with HTML, CSS.
                </div>
              </div>
              <div className="flex flex-row items-center justify-center mt-8 md:justify-start">
                <a
                  href="https://github.com/huynth1801/theband"
                  target="_blank"
                  className="btn__link py-2 px-4 mx-4"
                >
                  <button className="text-sm text-slate-600 hover dark:text-white">
                    View source
                  </button>
                </a>
                <a
                  href="https://huynth1801.github.io/theband/"
                  target="_blank"
                  className="btn__link py-2 px-4"
                >
                  <button className="text-sm text-slate-600 hover dark:text-white">
                    Visit website
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
