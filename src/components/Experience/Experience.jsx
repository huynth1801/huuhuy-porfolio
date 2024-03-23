import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";

const Experience = () => {
  return (
    <section
      className="bg-gradient-to-b from-[#F9FAFB] to-[#F7D0E6] 
                        dark:from-[#172029] dark:to-[#343f4a]
                        py-4 md:py-8"
    >
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
        className="m-auto mx-4 md:px-[100px]"
      >
        <div className="text-center pb-12">
          <span className="text-5xl font-bold text-blue-500 font-dg">
            EXPERIENCE
          </span>
        </div>
        <div className="experience my-8 pb-12 dark:bg-[#464749]">
          <div className="experience__time pl-6 dark:text-white ">
            <span className="time font-light text-zinc-400 dark:text-red-300">
              5-2023 - 8-2023
            </span>
            <div className="text-[20px] font-semibold mb-4">
              Game Developer Intern
            </div>
            <div className="">
              Worked on various game development projects at Onechain Game
              Studio, including game design, programming, and testing -{" "}
              <strong>Typescript</strong>.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
