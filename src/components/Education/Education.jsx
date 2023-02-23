import "./education.css";
import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";

const Education = () => {
  return (
    <section className="bg-gradient-to-b from-[#F9FAFB] to-[#F7D0E6] py-4 md:py-8">
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
        className="m-auto mx-4"
      >
        <div className="text-center pb-12">
          <span className="text-5xl font-bold text-blue-500">EDUCATION</span>
        </div>
        <div className="education my-8 pb-12">
          <div className="education__time pl-6">
            <span className="time font-light text-zinc-400 ">2018 - 2022</span>
            <div className="text-[20px] font-semibold mb-4">
              Banchelor's Degree
            </div>
            <div className="">
              Electronics & Telecommunication - Ho Chi Minh City University of
              Technology
            </div>
          </div>
          <div className="education__time pl-6 pt-10">
            <span className="time font-light text-zinc-400">2023 - now</span>
            <div className="text-[20px] font-semibold mb-4">
              Banchelor's Degree
            </div>
            <div className="">Software Engineering - UEH University</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
