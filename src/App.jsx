import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Approach from './sections/Approach';
import ProjectsSection from './sections/ProjectsSection';

const App = () => {
  return (
<div className="w-full overflow-x-hidden">

      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Projects />
      </div>
        {/* <div id="work">
        <ProjectsSection />
      </div> */}
       <div id="work">
        <Approach />
      </div>
      <div id="work">
        <Experiences />
      </div>
      <div id="work">
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};


export default App;

