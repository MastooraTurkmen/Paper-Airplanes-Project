import { programs } from "../constants/programs";
import waves from '/images/waves.png'

const OurPrograms = () => {
  return (
    <div className="w-full 
    text-white text-center overflow-hidden" id="programs">
      <div className="text-center pt-10 flex flex-col items-center p-5">
        <div className="bg-[#E87900] w-16 h-16 
        rounded-full ml-auto mr-[-48px] md:mb-[-90px] mb-[-50px]
        md:w-20 md:h-20 md:mr-[-60px]"></div>
          <h1 className="text-4xl font-bold pb-5 md:text-5xl">Our Programs</h1>
          <p className="text-xs w-72 md:text-base md:w-[500px]">Empowering individuals through
            language learning, skills training, and career development.
          </p>
        </div>
        
      <div className="text-center flex relative mb-36 flex-col">
        <div className="text-center flex
        flex-col md:flex-wrap md:flex-row md:items-center md:justify-center">
          {programs.map((program) => {
            const { id, title, text, image } = program;
          return  <div
              key={id}
              className="text-center p-10 flex flex-col mt-36 md:mt-30 
              items-center border-2 z-0 border-[#86868B] tooltip m-8 rounded-xl relative">
              <img
                  src={image}
                  alt="book"
                  className="w-40 absolute bottom-44 z-10"
                  
              />
            <h1 className="text-3xl mt-8 mb-5">{title}</h1>
              <p className="min-w-64 md:max-w-64 text-base text-[#F5F5F5]">
              {text}
              <br />
            </p>
          </div>
          })}
          <img
            className="absolute md:hidden xl:w-[660px] xl:left-[-140px]
            xl:block bottom-[-180px] xl:bottom-[-180px] w-[500px] left-[-150px]"
            src={waves}
            alt="waves" />
        </div>
      </div>
    </div>
  )
}

export default OurPrograms
