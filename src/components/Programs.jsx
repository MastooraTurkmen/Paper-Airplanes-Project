import {
    EnglishProgram, EnglishTeacherChart, EnglishStudentChart,
    Woman, WomanInTech, WomanInTechStudents
 } from "../assets"

const Programs = () => {
  return (
        <div className="text-white overflow-hidden pb-10 flex flex-col items-center" id="who-we-are">
            <div className="bg-[#E87900] w-16 h-16 
                rounded-full mr-auto ml-[-48px] md:mb-[-120px] mb-[-90px]
                md:w-20 md:h-20 md:ml-[-50px]"></div>
            <div className="pt-20 flex flex-col items-center p-5">
                <h1 className="text-3xl font-bold pb-5 md:text-5xl">Impactful Growth Over the Years</h1>
                <p className="text-xs w-72 md:text-base text-[#F5F5F5] md:w-[500px]">Discover our impactful growth story,
                    from humble beginnings to transformative achievements.
                </p>
            </div>
            <div className='flex float-left flex-col mt-20 lg:gap-10 md:flex-row md:mx-12 md:text-center md:items-center'>
                <div className='m-10 md:w-[500px] text-start mb-20'>
                    <h2 className='mb-5 md:text-[35px]'>English Program</h2>
                    <p className='text-sm md:text-base text-[#F5F5F5]'>Our growth transforms lives through education
                        and skills development. In 2023, we reached 3,229
                        students, starting from age 13,
                        with over 900 new and returning students.
                    </p>
                    <p className='text-sm font-bold my-5 text-[#F5F5F5]'>1:1 and Speaking Classes Programs</p>
                    <p className='text-sm md:text-base text-[#F5F5F5]'>Each student is matched with a tutor in the 1:1
                        program, while 3-5 students are assigned to a
                        tutor in Speaking Classes. Since 2014, 4,245
                        tutors have contributed to our mission.</p>
              </div>
              <div className="mx-10 relative">
                  <img
                      className="rounded-xl md:w-[500px]"
                      src={EnglishProgram}
                      alt="A Teacher is teaching her students"
                  />
                  <img
                      className="w-36 rounded-xl lg:w-48 left-[-20px] top-[-30px] absolute"
                      src={EnglishStudentChart}
                      alt="Number of English Tutors Chart"
                  />
                   <img
                      className="w-36 rounded-xl lg:w-48 right-7 bottom-[-25px] absolute"
                      src={EnglishTeacherChart}
                      alt="Number of English Tutors Chart"
                  />
              </div>
            </div>
            <div className='flex float-left flex-col mt-20 lg:gap-10 md:flex-row md:mx-12 md:text-center md:items-center'>
                <div className='m-10 md:w-[500px] text-start mb-20 md:order-2'>
                    <h2 className='mb-5 md:text-[35px]'>Women in Tech (WiT) Program</h2>
                    <p className='text-sm md:text-base text-[#F5F5F5]'>
                      Our WiT program empowers female students with
                      coding and digital skills in Python, Business Analytics,
                      and Web Development. Since 2017, we've impacted 675 women,
                      breaking job market barriers and achieving remarkable outcomes.
                    </p>
                </div>
                <div className="mx-10 relative">
                    <img
                        className="rounded-xl md:w-[500px] lg:w-[600px]"
                        src={WomanInTech}
                        alt="A Teacher is teaching her students"
                    />
                    <img
                        className="w-36 rounded-xl lg:w-48 right-[-20px] top-[-30px] absolute"
                        src={WomanInTechStudents}
                        alt="Number of English Tutors Chart"
                    />
                    <img
                        className="w-36 rounded-xl lg:w-48 left-[-15px] bottom-[-20px] absolute"
                        src={Woman}
                        alt="Number of English Tutors Chart"
                    />
                </div>
           </div>
        </div>
  )
}

export default Programs