import { motion } from "framer-motion";
import {
  FemaleStudents,
  HandsTogether,
  GenderDistribution,
  StudentsEducation,
  StudentsUsingComputer,
} from "../assets";

function Programs2() {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1.5 }}
      className="text-white overflow-hidden pb-10 flex flex-col items-center"
      id="who-we-are"
    >
      <div
        className="bg-[#E87900] w-16 h-16 
            rounded-full ml-auto mr-[-48px] md:mb-[-90px] mb-[-50px]
            md:w-20 md:h-20 md:mr-[-40px]"
      ></div>
      <div className="pt-20 flex flex-col items-center p-5">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="text-3xl text-center pb-5 md:text-5xl"
        >
          Diversity, Equity, and Inclusion
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-xs w-72 text-center md:text-base text-[#F5F5F5] md:w-[500px]"
        >
          Building a Unified Community: Diversity, Equity, and Inclusion at the
          Heart of Our Mission
        </motion.p>
      </div>
      <div className="flex float-left flex-col mt-20 lg:gap-10 md:flex-row md:mx-12 md:text-center md:items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="m-10 md:w-[500px] text-start mb-20 md:order-2"
        >
          <h2 className="mb-5 md:text-[35px]">
            Empowering Female Student Growth
          </h2>
          <p className="text-sm md:text-base text-[#F5F5F5]">
            At Paper Airplanes, we&apos;ve fostered an inclusive learning environment
            for all genders in conflict-affected areas, resulting in significant
            growth, especially among female students. Our commitment to equal
            opportunities is evident in the graph below, showcasing the rise in
            gender-inclusive participation over four years.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="mx-10 relative"
        >
          <img
            className="rounded-xl border-white border-2 md:w-[500px]"
            src={FemaleStudents}
            alt="A Teacher is teaching her students"
          />
          <img
            className="w-48 rounded-xl lg:w-60 left-[-20px] top-[-30px] absolute"
            src={GenderDistribution}
            alt="Number of English Tutors Chart"
          />
        </motion.div>
      </div>
      <div className="flex mt-10 float-left flex-col lg:gap-10 md:flex-row md:mx-12 md:text-center md:items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="m-10 md:w-[500px] text-start mb-20"
        >
          <h2 className="mb-5 md:text-[35px]">
            Serving a Diverse Range of Nationalities
          </h2>
          <p className="text-sm md:text-base text-[#F5F5F5]">
            Reflecting on our journey, from supporting Syrian students to
            reaching global conflict-affected regions, we&apos;re inspired by our
            learners resilience. Our unwavering commitment to breaking barriers
            to education drives us forward, eager to expand our reach and create
            lasting impact across nationalities.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="mx-10"
        >
          <img
            className="rounded-xl border-white border-2 md:w-[500px] lg:w-[600px]"
            src={HandsTogether}
            alt="A Teacher is teaching her students"
          />
        </motion.div>
      </div>
      <div className="flex float-left flex-col mt-20 lg:gap-10 md:flex-row md:mx-12 md:text-center md:items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="m-10 md:w-[500px] text-start mb-20 md:order-2"
        >
          <h2 className="mb-5 md:text-[35px]">
            Bridging Educational Gaps Across Levels
          </h2>
          <p className="text-sm md:text-base text-[#F5F5F5]">
            We&apos;re dedicated to harnessing education&apos;s transformative power
            across diverse levels, nurturing aspirations and creating
            opportunities for growth. From secondary school challenges to
            job-seeking graduates, Paper Airplanes empowers individuals at every
            educational and professional stage.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="mx-10 relative"
        >
          <img
            className="rounded-xl md:w-[500px] border-white border-2"
            src={StudentsUsingComputer}
            alt="A Teacher is teaching her students"
          />
          <img
            className="w-48 rounded-xl lg:w-60 right-[-15px] bottom-[-20px] absolute"
            src={StudentsEducation}
            alt="Number of English Tutors Chart"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Programs2;
