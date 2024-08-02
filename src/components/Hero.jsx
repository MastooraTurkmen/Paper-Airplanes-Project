import React from 'react';
import wavesIcon from '/icons/waves.svg';
import wavyIcon from '/icons/wavy-shape.svg';
import hatIcon from '/icons/hat.svg';
import boxIcon from '/icons/box-shape.svg';
import starIcon from '/icons/star.svg';
import blurredIcon from '/icons/blurred-shape.svg';

// Button Component | Must be seperated later
const Button = ({ children, className }) => (
  <button className={`text-xs py-2 px-5 rounded-full ${className} lg:text-lg`}>
    {children}
  </button>
);

// InfoItem Component
const InfoItem = ({ value, label }) => (
  <div className="text-center">
    <h3 className="text-lg md:text-3xl text-gray-300">{value}</h3>
    <p className="text-[9px] text-gray-400 md:text-sm">{label}</p>
  </div>
);

// HeroSection Component
function HeroSection() {
  const infoData = [
    { value: '8.5K', label: 'Reviews' },
    { value: '100K+', label: 'Users' },
    { value: '15K', label: 'Trust Partners' },
  ];

  return (
    <main className="bg-primary flex h-screen overflow-hidden">
      {/* Hero Content */}
      <section className="container mx-auto pt-20 px-2 text-center text-white relative">
        <img
          src={blurredIcon}
          className="absolute w-96 -top-9 -left-20 sm:left-20"
          alt=""
        />
        {/* Hero Text */}
        <div className="relative">
          <img
            src={starIcon}
            className="absolute w-3 -top-5 left-10 md:w-5"
            alt=""
          />
          <h1 className="text-xl font-bold sm:text-3xl md:text-4xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">
            Unlock Your Potential With <br /> World-Class{' '}
            <span className="text-secondary">Education</span>
          </h1>

          <img
            src={wavyIcon}
            className="absolute right-0 top-10 md:w-14 lg:w-20 lg:right-10"
            alt=""
          />
          <img
            src={hatIcon}
            className="absolute left-0 w-7 -bottom-10 md:w-16"
            alt=""
          />

          <p className="text-[9.5px] mt-4 sm:text-sm md:text-lg text-gray-400 leading-5">
            Join our vibrant community of learners and access a wide range of{' '}
            <br />
            courses designed to inspire and empower you
          </p>
          <img
            src={boxIcon}
            className="absolute right-0 -bottom-20 md:w-7"
            alt=""
          />
        </div>

        {/* Call to action buttons */}
        <div className="flex justify-center items-center gap-4 mt-7">
          <Button className="bg-secondary text-white">Get Started</Button>
          <Button className="bg-transparent border border-gray-500">
            Learn More
          </Button>
        </div>

        {/* Infos */}
        <div className="flex justify-center items-center gap-2 mt-16">
          {infoData.map((info, index) => (
            <React.Fragment key={index}>
              <InfoItem value={info.value} label={info.label} />
              {index < infoData.length - 1 && (
                <div className="w-px h-6 bg-gray-600 mx-4"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Shapes */}
        <div className="w-full relative -top-24 sm:-top-60 md:-top-96">
          <img
            src={wavesIcon}
            alt="waves"
            className="scale-x-[-1] absolute -left-20 md:w-[900px] 2xl:w-[1000px]"
          />
          <img
            src={wavesIcon}
            alt="waves"
            className="absolute -right-20 lg:w-[900px] 2xl:w-[1000px]"
          />
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
