import quoteIcon from "/icons/quote.svg";
import { students } from "../constants/index";
import { useState } from "react";
import chevronLeft from "/icons/chevron-left.svg";
import chevronRight from "/icons/chevron-right.svg";
import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col items-center p-5"
    >
      <h1 className="text-2xl font-bold pb-5 md:text-4xl"
      >
        {title}
      </h1>

      {subtitle && (
        <p className="text-xs w-72 md:text-base text-[#F5F5F5] md:w-[500px]"
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

const Students = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle Next student
  const handleNextStudent = () => {
    setActiveIndex((prev) => (prev + 1) % students.length);
  };

  // Handle Previous student
  const handlePreviousStudent = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? students.length - 1 : prevIndex - 1
    );
  };

  // Active student
  const activeStudents = students[activeIndex];

  return (
    <section className="text-white overflow-hidden pb-10 flex flex-col items-center mt-32">
      <SectionHeading title="What Our Students Say" />

      <motion.div whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1.5 }} className="flex gap-3 mt-10 flex-col lg:gap-10 md:flex-row md:mx-12 md:text-center md:items-center">
        <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }} className="mx-10 relative">
          <img
            className="rounded-xl md:w-[500px] border"
            src={activeStudents.img}
            alt="A learning student"
          />
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }} className="mx-10 md:w-[500px] text-start">
          <img src={quoteIcon} alt="Quote Icon" className="w-14 h-14 mb-5" />
          <p className="text-base sm:text-lg md:text-xl lg:h-36 mt-10">
            {activeStudents.quote}
          </p>

          <div className="flex items-center justify-between my-12">
            <div>
              <h2 className="text-base font-bold text-secondary md:text-lg">
                {activeStudents.name}
              </h2>
              <p className="text-xs md:text-sm">{activeStudents.role}</p>
            </div>

            <div className="flex items-center">
              <button
                className="border border-gray-500 transition hover:bg-secondary/40 w-7 h-7 md:w-10 md:h-10 rounded-full flex"
                onClick={handlePreviousStudent}
              >
                <img
                  src={chevronLeft}
                  className="m-auto w-4"
                  alt="Previous button"
                />
              </button>
              <button
                className="border border-gray-500 transition hover:bg-secondary/40 w-7 h-7 md:w-10 md:h-10 rounded-full ml-2 flex"
                onClick={handleNextStudent}
              >
                <img
                  src={chevronRight}
                  className="m-auto w-4"
                  alt="Next button"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Students;
