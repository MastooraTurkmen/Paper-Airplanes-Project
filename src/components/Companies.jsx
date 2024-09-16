import { companies } from "../constants";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Companies = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      className="text-xl bg-[#1D1E2F] w-full lg:px-14 px-10 py-10"
      id="partners"
    >
      <div className="flex justify-evenly items-center flex-wrap gap-5 lg:gap-10">
        {companies.map((company) =>
          company.id === "2" ? (
            <motion.img
              variants={iconVariants(1)}
              initial="initial"
              animate="animate"
              src={company.src}
              alt={company.title}
              key={company.id}
              className="w-[70px] lg:w-[100px]"
            />
          ) : (
            <motion.img
              variants={iconVariants(1)}
              initial="initial"
              animate="animate"
              src={company.src}
              alt={company.title}
              key={company.id}
              className="w-[100px] lg:w-[150px] "
            />
          )
        )}
      </div>
    </motion.div>
  );
};

export default Companies;
