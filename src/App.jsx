import Companies from './components/Companies';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OurPrograms from './components/Our-Programs';
import OurImpact from './components/Our-Impact';
import Story from './components/Story';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import JoinUs from './components/JoinUs';
import Programs2 from './components/Programs2';
import Students from './components/Students';

const App = () => {
  return (
    <div className="text-3xl text-center">
      <Navbar />
      <Hero />
      <Companies />
      <Story />
      <OurPrograms />
      <Programs />
      <Programs2 />
      <OurImpact />
      <Students />
      <Testimonials />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default App;
