const App = () => {
  return (
    <div className="bg-[#1D1E2F] w-full 
    text-white text-center">
      <div className="text-center pt-10 relative flex flex-col items-center p-5">
        <div className="bg-[#E87900] w-16 h-16 
        rounded-full absolute right-[-20px]"></div>
        <h1 className="text-4xl font-bold pb-5">Our Programs</h1>
        <p className="text-xs w-72">Empowering individuals through
          language learning, skills training, and career development.
        </p>
      </div>
      <div className="text-center flex flex-col">
        <div className="text-center pt-28 flex 
        flex-col md:flex-wrap md:flex-row">
          <div className="text-center p-10 flex flex-col 
          items-center border-2 z-0 border-[#86868B] m-8 rounded-xl relative">
          <img
            src="../images/book.png"
            alt="book"
            className="w-40 absolute bottom-44 z-10"
            
          />
            <h1 className="text-3xl mt-14 mb-5">English Program</h1>
            <p className="w-72 text-base text-[#F5F5F5]">
              Improve your English skills
              for better communication and opportunities.
            </p>
          </div>
          <div className="text-center p-10 flex flex-col mt-40
          items-center border-2 z-0 border-[#86868B] m-8 rounded-xl relative">
          <img
            src="../images/women-in-tech.png"
            alt="book"
            className="w-40 absolute bottom-44 z-10"
            
          />
            <h1 className="text-3xl mt-14 mb-5">English Program</h1>
            <p className="w-72 text-base text-[#F5F5F5]">
              Improve your English skills
              for better communication and opportunities.
            </p>
          </div>
          <div className="text-center p-10 flex flex-col mt-40 
          items-center border-2 z-0 border-[#86868B] m-8 rounded-xl relative">
          <img
            src="../images/development.png"
            alt="book"
            className="w-40 absolute bottom-44 z-10"
            
          />
            <h1 className="text-3xl mt-14 mb-5">English Program</h1>
            <p className="w-72 text-base text-[#F5F5F5]">
              Improve your English skills
              for better communication and opportunities.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
