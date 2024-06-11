import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";

const Experience = () => {
  return (
    <section
      className="bg-gradient-to-b 
                    dark:bg-zinc-600
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
        <div className="education my-8 pb-12 dark:bg-[#464749]">
          <div className="education__time pl-6 pt-10 dark:text-white">
            <span className="time font-light text-zinc-400 dark:text-red-300">
              5/2023 - 8/2023
            </span>
            <div className="text-[20px] font-semibold mb-4">
              Onechain game studio
            </div>
            <div className="">Tech: Typescript</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
