import { useState } from "react"
import { HandsTogether } from "../assets"
import { people } from "../constants/data"

const Programs = () => {
  const [person, setPerson] = useState(null)

  const getPeople = () => {
    const newPersons = people.map((newPerson) => {
      const { id, image, text } = newPerson;
    })

    setPerson(newPersons)
  }


  return (
      <div className="text-white md:text-center p-5 text-start overflow-hidden pb-10 
        flex flex-col items-center mt-20" id="who-we-are">
          <div className="bg-[#E87900] w-12 h-12 
                rounded-full mr-auto ml-[-48px] md:mb-[-120px] mb-[-90px]
                md:w-20 md:h-20 md:ml-[-60px]"></div>
            <div className="pt-20 flex flex-col items-center p-5">
                <h1 className="text-[#E87900] text-sm md:mr-0 
                md:ml-5 lg:mb-5 lg:text-[24px] md:text-lg mr-auto font-semibold">
                  Our Impact
                </h1>
                <h1 className="text-3xl font-bold pb-5 md:m-3 md:text-5xl">The Women In Tech (WiT) program</h1>
                <p className="text-xs md:mx-10 lg:text-lg lg:mx-28 md:text-base text-[#F5F5F5]">
                    DMany beneficiaries have successfully completed high school,
                    earned bachelor's or master's degrees, but their main challenge
                    often lies in English proficiency, a skill we diligently address
                    through our programs at Paper Airplanes. Students begin their
                    journey with us at the appropriate level (A1, A2, B1, or B2)
                    determined by a comprehensive placement test, which enables them
                    to progress steadily towards their academic and professional goals.
                </p>
                <button className="border-none mb-28 font-semibold md:mr-0 mr-auto rounded-full text-xs 
                    md:text-[18px] mt-5 px-5 py-2 bg-[#E87900] md:px-7 md:py-4">
                    Learn More
                </button>
              <h1 className="text-3xl text-center font-semibold pb-5 md:m-3 md:text-4xl">
                  From Virtual to Reality: Memorable Student-Tutor Moments
              </h1>
        <div className='flex mt-10 float-left flex-col lg:gap-10 md:flex-row md:mx-12 md:text-center md:items-center'>
                <div className='md:w-[500px] text-start mb-20'>
                    <h2 className='mb-5 md:text-[35px]'>Serving a Diverse Range of Nationalities</h2>
                    <p className='text-sm md:text-base text-[#F5F5F5]'>
                        Reflecting on our journey, from supporting Syrian students to reaching
                        global conflict-affected regions, we're inspired by our learners' resilience.
                        Our unwavering commitment to breaking barriers to education drives us forward,
                        eager to expand our reach and create lasting impact across nationalities.
                     </p>
                     <div className="w-3 mt-5 h-3 cursor-pointer md:h-5 md:w-5 rounded-full bg-orange-400"></div>
                </div>
                <div className="">
                    <img
                        className="rounded-xl border-white border-2 md:w-[500px] lg:w-[600px]"
                        src={HandsTogether}
                        alt="A Teacher is teaching her students"
                    />
                </div>
            </div>
            </div>
        </div>
  )
}

export default Programs