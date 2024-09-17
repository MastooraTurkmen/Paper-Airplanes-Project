import { motion } from "framer-motion";
import Slider from "./Slider";

const Programs = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1.5 }}
      className="text-white md:text-center p-5 text-start overflow-hidden pb-10 
        flex flex-col items-center mt-20"
      id="who-we-are"
    >
      <div
        className="bg-[#E87900] w-12 h-12 
                rounded-full mr-auto ml-[-48px] md:mb-[-120px] mb-[-90px]
                md:w-20 md:h-20 md:ml-[-60px]"
      ></div>
      <div className="pt-20 flex flex-col items-center p-5">
        <motion.h1 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="text-[#E87900] text-sm md:mr-0 
                md:ml-5 lg:mb-5 lg:text-[24px] md:text-lg mr-auto font-semibold"
        >
          Our Impact
        </motion.h1>
        <motion.h1 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold pb-5 md:m-3 md:text-5xl">
          The Women In Tech (WiT) program
        </motion.h1>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-sm md:mx-10 lg:text-lg lg:mx-28 md:text-base text-[#F5F5F5]">
          DMany beneficiaries have successfully completed high school, earned
          bachelor&apos;s or master&apos;s degrees, but their main challenge
          often lies in English proficiency, a skill we diligently address
          through our programs at Paper Airplanes. Students begin their journey
          with us at the appropriate level (A1, A2, B1, or B2) determined by a
          comprehensive placement test, which enables them to progress steadily
          towards their academic and professional goals.
        </motion.p>
        <motion.button
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="border-none mb-28 font-semibold md:mr-0 mr-auto rounded-full text-xs 
                    md:text-[18px] mt-5 px-5 py-2 bg-[#E87900] md:px-7 md:py-4"
        >
          Learn More
        </motion.button>
        <h1 className="text-3xl text-center font-semibold pb-5 md:m-3 md:text-4xl">
          From Virtual to Reality: Memorable Student-Tutor Moments
        </h1>
        <Slider />
      </div>
    </motion.div>
  );
};

export default Programs;
