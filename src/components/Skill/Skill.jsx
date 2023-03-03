import html from "../../assets/img/html.svg";
import css from "../../assets/img/css.svg";
import react from "../../assets/img/react.svg";
import tailwindcss from "../../assets/img/tailwindcss.svg";
import javascript from "../../assets/img/javascript.svg";
import python from "../../assets/img/python.png";
import sql from "../../assets/img/mysql.png";
import "./skill.css";
import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";
import BackToTopButton from "../BackToTopButton.jsx";

const Skill = () => {
  return (
    <div
      className="bg-gradient-to-b from-slate-100 to-[#F9FAFB] 
                    dark:from-pink-700 dark:to-[#172029]
                    min-h-screen flex items-center 
                    justify-center px-8 md:px-16"
    >
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
        className="relative w-full max-w-lg"
      >
        <div
          className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-orange-500
                    rounded-full mix-blend-multiply filter blur-xl 
                    opacity-70 animate-blob md:-left-2/3
                        lg:-left-full"
        ></div>
        <div
          className="absolute -right-4 w-72 h-72 bg-pink-300 dark:bg-sky-400
                     rounded-full mix-blend-multiply 
                     filter blur-xl opacity-70 
                     animate-delay-2000 md:top-1/3 md:-right-30"
        ></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-300 dark:bg-red-400
        rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-delay-4000 md:-right-2/3"
        ></div>

        {/* Skills here */}
        <section
          id="skills"
          className="my-8 mx-4 justify-center items-center text-center"
        >
          <div className="mb-8 ">
            <span className="text-5xl font-bold text-center text-blue-500 font-dg">
              MY SKILLS
            </span>
          </div>
          <div className="Skills__Wrapper grid gap-5 md:my-[90px]">
            <div
              className="Skills__SkillCards__Wrapper
                    grid grid-cols-3 gap-5 md:grid-cols-4 md:gap-6"
            >
              {/* HTML icon */}
              <div
                className="Skills__SkillsCards show flex
                          relative left-0 dark:bg-[#464749] dark:text-white
                          w-full h-full 
                          p-4 items-center
                          text-center"
              >
                <div className="flex flex-col items-center w-full">
                  <img
                    src={html}
                    alt="html icon"
                    className="w-[4rem] h-[4rem]"
                  />
                  <span className="text-sm mt-2">HTML</span>
                </div>
              </div>
              {/* CSS icon */}
              <div
                className="Skills__SkillsCards show flex flex-col
                          relative left-0 dark:bg-[#464749] dark:text-white
                          w-full h-full 
                          p-4 items-center
                          text-center"
              >
                <div className="flex flex-col items-center w-full">
                  <img src={css} alt="css icon" className="w-[4rem] h-[4rem]" />
                  <span className="text-sm mt-2">CSS</span>
                </div>
              </div>
              {/* Javascript icon */}
              <div
                className="Skills__SkillsCards show flex
                          relative left-0  dark:bg-[#464749] dark:text-white
                          w-full h-full 
                          p-4 items-center
                          text-center"
              >
                <div className="flex flex-col items-center w-full ">
                  <img
                    src={javascript}
                    alt="javascript icon"
                    className="w-[4rem] h-[4rem]"
                  />
                  <span className="text-sm mt-2">Javascript</span>
                </div>
              </div>
              {/* ReactJs icon */}
              <div
                className="Skills__SkillsCards show flex 
                        relative left-0 dark:bg-[#464749] dark:text-white
                        w-full h-full 
                        p-4 items-center
                        text-center"
              >
                <div className="flex flex-col items-center w-full ">
                  <img
                    src={react}
                    alt="reactjs icon"
                    className="w-[4rem] h-[4rem]"
                  />
                  <span className="text-sm mt-2">React.js</span>
                </div>
              </div>
              {/* Tailwind icon */}
              <div
                className="Skills__SkillsCards show flex 
                        relative left-0 dark:bg-[#464749] dark:text-white
                        w-full h-full 
                        p-4 items-center
                        text-center"
              >
                <div className="flex flex-col items-center w-full justify-center">
                  <img
                    src={tailwindcss}
                    alt="tailwind icon"
                    className="w-[4rem] h-[4rem]"
                  />
                  <span className="text-sm mt-2">Tailwind</span>
                </div>
              </div>
              {/* Python icon */}
              <div
                className="Skills__SkillsCards show flex 
                            relative left-0 dark:bg-[#464749] dark:text-white
                            w-full h-full 
                            p-4 items-center
                            text-center"
              >
                <div className="flex flex-col items-center w-full">
                  <img
                    src={python}
                    alt="Python icon"
                    className="w-[4rem] h-[4rem]"
                  />
                  <span className="text-sm mt-2">Python</span>
                </div>
              </div>
              {/* sql icon */}
              <div
                className="Skills__SkillsCards show flex 
                            relative left-0 dark:bg-[#464749] dark:text-white
                            w-full h-full 
                            p-4 items-center
                            text-center"
              >
                <div className="flex flex-col items-center w-full">
                  <img src={sql} alt="SQL icon" className="w-[4rem] h-[4rem]" />
                  <span className="text-sm mt-2">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BackToTopButton />
      </motion.div>
    </div>
  );
};

export default Skill;
