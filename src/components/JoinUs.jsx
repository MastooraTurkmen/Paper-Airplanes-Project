import Button from './Button';
import girlStandingImg from '/images/girl-standing.png';

const JoinUs = () => {
  return (
    <section className="px-10 max-w-6xl mx-auto my-20">
      <div className="bg-[#252741] p-10 md:px-20 rounded-[50px] text-left sm:flex sm:flex-row-reverse justify-between items-center">
        <img
          src={girlStandingImg}
          alt="Girl standing"
          className="hidden sm:block w-44 h-56 md:h-72 object-cover mx-auto sm:mx-0"
        />

        <div className="sm:w-96 md:w-[500px] mt-8 sm:mt-0">
          <h2 className="text-white text-xl font-bold sm:text-2xl md:text-3xl -mt-7 sm:m-0">
            Ready to Transform Your Future?
          </h2>
          <p className="text-sm mt-4">
            Join our community today to unlock a world of opportunities and
            embark on a journey of endless possibilities.
          </p>
          <Button className="bg-secondary text-white w-full sm:w-32 mt-7 md:!text-sm">
            Join Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
