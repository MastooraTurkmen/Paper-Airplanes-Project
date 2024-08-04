import quoteIcon from '/icons/quote.svg';
import { testimonials } from '../constants/index';
import { useState } from 'react';
import chevronLeft from '/icons/chevron-left.svg';
import chevronRight from '/icons/chevron-right.svg';

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className=" flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold pb-5 md:text-4xl">{title}</h1>

      {subtitle && (
        <p className="text-xs w-72 md:text-base text-[#F5F5F5] md:w-[500px]">
          {subtitle}
        </p>
      )}
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle Next testimonial
  const handleNextTestimonoal = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Handle Previous testimonial
  const handlePreviousTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Active testimonial
  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="text-white overflow-hidden pb-10 flex flex-col items-center mt-32">
      <SectionHeading title="What Our Tutors Say" />

      <div className="flex gap-3 mt-10 flex-col lg:gap-10 md:flex-row md:mx-12 md:text-center md:items-center">
        <div className="mx-10 md:w-[500px] text-start">
          <img src={quoteIcon} alt="Quote Icon" className="w-14 h-14 mb-5" />
          <p className="text-base sm:text-lg md:text-xl lg:h-36 mt-10">
            {activeTestimonial.quote}
          </p>

          <div className="flex items-center justify-between my-12">
            <div>
              <h2 className="text-base font-bold text-secondary md:text-lg">
                {activeTestimonial.name}
              </h2>
              <p className="text-xs md:text-sm">{activeTestimonial.role}</p>
            </div>

            <div className="flex items-center">
              <button
                className="border border-gray-500 transition hover:bg-secondary/40 w-7 h-7 md:w-10 md:h-10 rounded-full flex"
                onClick={handlePreviousTestimonial}
              >
                <img
                  src={chevronLeft}
                  className="m-auto w-4"
                  alt="Previous button"
                />
              </button>
              <button
                className="border border-gray-500 transition hover:bg-secondary/40 w-7 h-7 md:w-10 md:h-10 rounded-full ml-2 flex"
                onClick={handleNextTestimonoal}
              >
                <img
                  src={chevronRight}
                  className="m-auto w-4"
                  alt="Next button"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="mx-10 relative">
          <img
            className="rounded-xl md:w-[500px] border"
            src={activeTestimonial.img}
            alt="A Teacher is teaching her students"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
