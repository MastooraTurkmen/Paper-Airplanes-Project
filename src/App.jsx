import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import OurPrograms from "./components/Our-Programs";

const App = () => {
  return (
    <div className="text-3xl text-center">
      <Navbar />
       <Hero />
      <OurPrograms  />
    </div>
  );
};

export default App;
