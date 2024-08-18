import {
  Companies,
    Hero,
    Navbar,
    OurImpact,
    OurPrograms,
    Story,
    Students,
    Programs,
    Programs2,
    JoinUs,
    Footer,
  Testimonials,
  Team
} from "./components";

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
      <Team />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default App;
