import React from "react";
import { employees, manager, rect1, rect2 } from "../assets";
import waves from "/images/waves.png";

const Story = () => {
  return (
    <div className="text-xl bg-[#1D1E2F] relative z-10 overflow-hidden w-full flex flex-col justify-center mx-auto lg:px-20 px-10 py-10 mb-20 mt-[40px] md:mt-[70px]">
      <div
        className="bg-[#E87900] w-10 h-10 mr-[-50px]
        rounded-full ml-auto md:mr-[-90px] lg:mr-[-130px] md:w-[90px] md:h-[90px]"
      ></div>
      <div className="flex items-center justify-center mx-auto flex-wrap-reverse lg:flex-nowrap gap-3 relative">
        {/* Image Area */}
        <div className="manager px-10 md:px-0 flex justify-center lg:justify-end">
          <div className="img-container w-full md:w-[470px] relative">
            <img
              src={manager}
              alt="Manager"
              className="md:w-[400px] md:h-[380px] w-[250px] h-[240px]  border-[#86868B] border-[3px] rounded-[30px] object-center object-fit object-cover"
            />
            <img
              src={employees}
              alt="Employees"
              className="md:w-[250px] w-[150px] absolute z-10 bottom-[20px] md:bottom-[30px] md:left-[220px] left-[130px]  border-[#86868B] border-[2px] rounded-[12px] object-fit object-cover object-center"
            />
          </div>
        </div>
        {/* Story Content */}
        <div className="content w-[370px]  md:w-[500px] h-auto lg:h-full p-4 pt-7 md:flex mx-auto relative text-white">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-[#E87900] md:text-lg text-md font-semibold">
              Our Story
            </h1>
            <p className="lg:text-3xl text-3xl text-start font-semibold mt-3 w-full">
              From Refugee to Executive Director
            </p>
            <p className="md:text-sm text-xs mt-3 text-white/70 text-start w-full md:w-[400px]">
              We are thrilled to welcome Ibrahim Alaboud as our new Executive
              Director. A former student and manager of our English program,
              Ibrahim embodies our commitment to student leadership. His unique
              journey positions him to guide Paper Airplanes into its next
              chapter.
            </p>
            <button className="border-none rounded-full text-sm mt-3 px-5 py-2 bg-[#E87900]">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="vision-mission flex flex-wrap lg:flex-nowrap gap-7 lg:gap-3 mt-[150px] justify-start md:justify-center lg:justify-between mx-auto text-white text-start">
        <div className="mission p-7 lg:p-5 relative w-full md:w-[500px] lg:w-[400px]">
          <img
            src={rect1}
            alt="Rectangle 1"
            className="w-full h-full absolute z-10 top-0 md:top-[-20px] left-0"
          />
          <h1 className="font-semibold md:text-3xl text-xl">Our Mission</h1>
          <p className="md:text-base text-xs lg:text-sm font-light mt-5">
            We empower individuals impacted by conflict through education and
            skills training, fostering empowerment and inclusivity.
          </p>
        </div>
        <div className="vision p-7 lg:p-5 relative w-full md:w-[500px] lg:w-[400px]">
          <img
            src={rect2}
            alt="Rectangle 2"
            className="w-full h-full absolute z-10 top-0 md:top-[-20px] left-0 md:left-[-20px]"
          />
          <h1 className="font-semibold md:text-3xl text-xl">Our Vision</h1>
          <p className="md:text-base text-xs lg:text-sm font-light mt-5 h-20">
            We envision a world where everyone affected by conflict has equal
            access to education enabling them to thrive and contribute to
            society.
          </p>
        </div>
        <img
          className="absolute -z-10 lg:w-[900px] lg:left-[-140px]
            lg:block bottom-[430px] md:bottom-[350px] lg:bottom-[80px] w-[800px] left-[-70px] md:left-[-150px]"
          src={waves}
          alt="waves"
        />
      </div>
    </div>
  );
};

export default Story;
