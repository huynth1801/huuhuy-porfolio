import data from "./data";
import "./projects.css";
import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b pb-8
                dark:bg-zinc-600"
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
          {data.map((item, index) => (
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
              key={index}
            >
              <img
                src={item.imgPath}
                alt="Food order website"
                className="rounded-lg w-full md:h-[22rem]"
              />
              <div className="flex flex-col justify-between dark:text-white">
                <div className="px-5 pt-6 md:text-left">
                  <div className="text-xl font-semibold">
                    {item.projectName}
                  </div>
                  <div className="text-zinc-500 pt-4 dark:text-white">
                    {item.prjDesc}
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center mt-8 md:justify-start ">
                  <a
                    href={item.githubLink}
                    target="_blank"
                    className="btn__link py-2 px-4 mx-4"
                  >
                    <button className="text-sm text-slate-600 hover dark:text-white">
                      View source
                    </button>
                  </a>
                  <a
                    href={item.liveDemo}
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
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
