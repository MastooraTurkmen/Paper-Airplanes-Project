import { motion } from "framer-motion";
import Button from "./Button";
import girlStandingImg from "/images/girl-standing.png";

const JoinUs = () => {
  return (
    <motion.section
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1.5 }}
      className="px-10 max-w-6xl mx-auto my-20"
      id="join"
    >
      <div className="bg-[#252741] p-10 md:px-20 rounded-[50px] text-left sm:flex sm:flex-row-reverse justify-between items-center">
        <motion.img
          whileInView={{ y: [-10, 10, 10, -10] }}
          initial={{ y: 0 }}
          transition={{ duration: 1.7, repeat: Infinity }}
          src={girlStandingImg}
          alt="Girl standing"
          className="hidden sm:block w-44 h-56 md:h-72 object-cover mx-auto sm:mx-0"
        />

        <div className="sm:w-96 md:w-[500px] mt-8 sm:mt-0">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="text-white text-xl font-bold sm:text-2xl md:text-3xl -mt-7 sm:m-0"
          >
            Ready to Transform Your Future?
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-sm mt-4"
          >
            Join our community today to unlock a world of opportunities and
            embark on a journey of endless possibilities.
          </motion.p>
          <Button className="bg-secondary text-white w-full sm:w-32 mt-7 md:!text-sm">
            Join Us
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default JoinUs;
