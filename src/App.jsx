import './App.css';

// Import Swiper styles
// import 'swiper/css';


import { ThemeProvider } from './contexts/ThemeProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Element } from "react-scroll";
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Projects from './sections/Projects/Projects';
import Testimonials from './sections/Testimonials/Testimonials';
import Form from './components/Form/Form';


function App() {
  return (
    <ThemeProvider>

      <Header/>

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
