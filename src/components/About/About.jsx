import avatar from "../../assets/img/myavatar.JPG";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";
import resume from "./../../assets/resume/CV_NguyenThaiHuuHuy_SoftwareEngineer.docx";

const About = () => {
  const [state] = useState({
    title: "Hi, I'm Huu Huy",
    titleTwo: "Welcome to my personal website!",
    titleThree:
      "I love coding and learning how each piece of code works. I am looking for an internship as front-end developer",
  });
  return (
    <section
      id="about"
      className="bg-white dark:bg-zinc-600
      justify-center items-center text-center opacity-190"
    >
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="text-5xl font-bold py-12 text-center text-blue-400 md:py-10 font-dg"
      >
        ABOUT ME
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="md:flex md:justify-center"
      >
        <div className="home-introduce text-cyan-500 md:mx-auto md:text-left md:w-auto md:px-8 dark:text-cyan-6">
          <h2>
            <motion.div className="title text-5xl font-bold my-2">
              {state.title}
            </motion.div>
            <div className="titleTwo text-[18px]">
              {state.titleTwo}
            </div>
          </h2>
          <div className="text text-[30px] p-2 md:px-0">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 60,
                strings: ["I'm a software engineer"],
              }}
            />
          </div>
        </div>
        {/* My avatar */}
        <div className="py-8 px-6 bg-no-repeat md:py-0 md:mx-auto">
          <img
            src={avatar}
            className="rounded-xl md:h-[30rem] md:w-auto
              md:items-center md:rounded-2xl"
            alt="Picture of me"
          />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-4 my-2 md:mt-12 md:mx-8"
      >
        <p className="text-left md:text-[18px] dark:text-white">
          I am a hardworking and ambitious individual with a
          great passion for programming. I am currently
          studying website development. I have communication
          skils, self-study ability, like to study new
          technologies. I am eager to be challenged in order
          to grow and futher improve my front-end skils. I
          am looking for an internship as front-end
          developer
        </p>
      </motion.div>
      <div className="py-4">
        <a
          href={resume}
          download="CV_NguyenThaiHuuHuy_SoftwareEngineer"
        >
          <button
            className="transition ease-in-out delay-150 bg-red-500  my-4
            rounded-full py-2 px-6 text-white font-semibold
            hover:-translate-y-1 hover:scale-110
          hover:bg-red-900 duration-300"
          >
            My Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default About;
