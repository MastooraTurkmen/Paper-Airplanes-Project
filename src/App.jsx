import Companies from './components/Companies';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OurPrograms from './components/Our-Programs';
import Story from './components/Story';
import Programs from './components/Programs';
import ScrollToTop from './components/ScrollToTop';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="text-3xl text-center">
      <Navbar />
      <Hero />
      <Companies />
      <Story />
      <OurPrograms />
      <Programs />
      <Testimonials />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
