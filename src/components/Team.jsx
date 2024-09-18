import { motion } from "framer-motion";
import TeamComponent from "./TeamComponent";

const Team = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1.5 }}
      className="pt-20 flex flex-col items-center p-5"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="text-3xl text-white font-bold pb-5 md:text-5xl"
      >
        Meet our talented team
      </motion.h1>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-xs w-72 md:text-base text-[#F5F5F5] md:w-[500px]"
      >
        Meet the diverse and passionate professionals driving our success with
        creativity and expertise.
      </motion.p>
      <TeamComponent />
    </motion.div>
  );
};

export default Team;
