import {
    FemaleStudents,
    HandsTogether,
    GenderDistribution,
    StudentsEducation,
    StudentsUsingComputer,
} from "../assets"
 
function Programs2() {
    return (
        <div className="text-white overflow-hidden pb-10 flex flex-col items-center" id="who-we-are">
            <div className="bg-[#E87900] w-16 h-16 
            rounded-full ml-auto mr-[-48px] md:mb-[-90px] mb-[-50px]
            md:w-20 md:h-20 md:mr-[-40px]"></div>
            <div className="pt-20 flex flex-col items-center p-5">
                <h1 className="text-3xl pb-5 md:text-5xl">Diversity, Equity, and Inclusion</h1>
                <p className="text-xs w-72 md:text-base text-[#F5F5F5] md:w-[500px]">
                    Building a Unified Community:
                    Diversity, Equity, and Inclusion at the Heart of Our Mission
                </p>
            </div>
            <div className='flex float-left flex-col mt-20 lg:gap-10 md:flex-row md:mx-12 md:text-center md:items-center'>
                  <div className="mx-10 relative">
                  <img
                      className="rounded-xl md:w-[500px]"
                      src={FemaleStudents}
                      alt="A Teacher is teaching her students"
                  />
                  <img
                      className="w-36 rounded-xl lg:w-48 left-[-20px] top-[-30px] absolute"
                      src={GenderDistribution}
                      alt="Number of English Tutors Chart"
                  />
              </div>
                <div className='m-10 md:w-[500px] text-start mb-20'>
                    <h2 className='mb-5 md:text-[35px]'>Empowering Female Student Growth</h2>
                    <p className='text-xm md:text-base text-[#F5F5F5]'>
                        At Paper Airplanes, we've fostered an inclusive learning
                        environment for all genders in conflict-affected areas,
                        resulting in significant growth, especially among female students.
                        Our commitment to equal opportunities is evident in the graph below,
                        showcasing the rise in gender-inclusive participation over four years.
                    </p>
              </div>
            </div>
            <div className='flex float-left flex-col mt-20 lg:gap-10 md:flex-row md:mx-12 md:text-center md:items-center'>
                <div className='m-10 md:w-[500px] text-start mb-20'>
                    <h2 className='mb-5 md:text-[35px]'>Serving a Diverse Range of Nationalities</h2>
                    <p className='text-sm md:text-base'>
                        Reflecting on our journey, from supporting Syrian students to reaching
                        global conflict-affected regions, we're inspired by our learners' resilience.
                        Our unwavering commitment to breaking barriers to education drives us forward,
                        eager to expand our reach and create lasting impact across nationalities.
                    </p>
                </div>
                <div className="mx-10">
                    <img
                        className="rounded-xl md:w-[500px] lg:w-[600px]"
                        src={HandsTogether}
                        alt="A Teacher is teaching her students"
                    />
                </div>
            </div>
            <div className='flex float-left flex-col mt-20 lg:gap-10 md:flex-row md:mx-12 md:text-center md:items-center'>
                  <div className="mx-10 relative">
                  <img
                      className="rounded-xl md:w-[500px]"
                      src={StudentsUsingComputer}
                      alt="A Teacher is teaching her students"
                  />
                    <img
                        className="w-36 rounded-xl lg:w-48 right-[-15px] bottom-[-20px] absolute"
                        src={StudentsEducation}
                        alt="Number of English Tutors Chart"
                    />
              </div>
                <div className='m-10 md:w-[500px] text-start mb-20'>
                    <h2 className='mb-5 md:text-[35px]'>Empowering Female Student Growth</h2>
                    <p className='text-xm md:text-base text-[#F5F5F5]'>
                        At Paper Airplanes, we've fostered an inclusive learning
                        environment for all genders in conflict-affected areas,
                        resulting in significant growth, especially among female students.
                        Our commitment to equal opportunities is evident in the graph below,
                        showcasing the rise in gender-inclusive participation over four years.
                    </p>
              </div>
            </div>
        </div>
  )
}

export default Programs2