import TeamComponent from './TeamComponent';

const Team = () => {
  return (
    <div className="pt-20 flex flex-col items-center p-5">
        <h1 className="text-3xl text-white font-bold pb-5 md:text-5xl">Meet our talented team</h1>
        <p className="text-xs w-72 md:text-base text-[#F5F5F5] md:w-[500px]">Meet the diverse and passionate
            professionals driving our success with creativity and expertise.
        </p>
        <TeamComponent />
    </div>
  )
}

export default Team