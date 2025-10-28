import './App.css';

// Import Swiper styles
// import 'swiper/css';


import { ThemeProvider } from './contexts/ThemeProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Element } from "react-scroll";
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
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
