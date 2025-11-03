import { useState } from "react";
import { ThemeProvider } from './contexts/ThemeProvider';
import { Element } from "react-scroll";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Projects from './sections/Projects/Projects';
import Testimonials from './sections/Testimonials/Testimonials';
import Form from './components/Form/Form';
import PopupNavigation from './components/PopupNavigation/PopupNavigation';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <ThemeProvider>

      <PopupNavigation isActive={menuOpen} toggleMenu={toggleMenu} />

      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <Element name="home">
        <Hero/>
      </Element>
      
      <Element name="about">
        <About/>
      </Element>
      
      <Element name="services">
        <Services/>
      </Element>
      
      <Element name="projects">
        <Projects/>
      </Element>

      <Element name="testimonials">
        <Testimonials/>
      </Element>

      <Element name="form">
        <Form/>
      </Element>
    
      <Footer/>

    </ThemeProvider>
  )
}

export default App
