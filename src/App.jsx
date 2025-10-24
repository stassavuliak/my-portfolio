import './App.css';
import CustomRangeSlider from './components/CustomRangeSlider/CustomRangeSlider';

import Tabs from './components/Tabs/Tabs';

// Import Swiper styles
import 'swiper/css';
import TestimonialsSlider from './components/TestimonialsSlider/TestimonialsSlider';

import { ThemeProvider } from './contexts/themeContext';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';




function App() {
  return (
    <ThemeProvider>
      <header className="header">
        <div className="container">
          <div className="header__nav">
            <a href="#!" className="logo">LOGO</a>
            {/* logo */}

            <nav className="nav">
              <ul>
                <li><a href="#!">Home</a></li>
                <li><a href="#!">About Me</a></li>
                <li><a href="#!">Services</a></li>
                <li><a href="#!">Projects</a></li>
                <li><a href="#!">Testimonials</a></li>
                <li><a href="#!">Contact</a></li>
              </ul>
            </nav>
            {/* navigation menu */}

            <ThemeToggle/>

            <a href="#!" className="btn ">Downlaod CV</a>
          </div>
        </div>
      </header>

      <section className="section-hero">
        <div className="container">
          <div className="hero">
            <div className="hero__info">
              <div className="hero__head">
                <div className="hero__name">Hi I am <span>Stanislav Savuliak</span></div>
                <h1>Front-end <span>Developer</span></h1>
              </div>
              
              <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>

              <button className='btn hero__btn'>Hire Me</button>
            </div>
            {/* hero info */}

            <div className="hero__photo">
              <img src="images/img/hero1.png" className='hero__img' alt="" />
              <ul className="social">
                <li><a href="#!" target='_blank'><img src="images/icons/social1.svg" alt="" /></a></li>
                <li><a href="#!" target='_blank'><img src="images/icons/social2.svg" alt="" /></a></li>
                <li><a href="#!" target='_blank'><img src="images/icons/social3.svg" alt="" /></a></li>
                <li><a href="#!" target='_blank'><img src="images/icons/social4.svg" alt="" /></a></li>
              </ul>
            </div>
            {/* hero photo */}
          </div>
        </div>
      </section>
      {/* section hero */}

      <section className="section-about">
        <div className="container">
          <div className="about">
            <div className="about__photo">
              <img src="images/img/hero2.png" alt="" />
            </div>
            {/* about photo */}

            <div className="about__info">
              <div className="heading">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
              </div>
              {/* heading */}

              <div className="about__skills">
                <div className="about__skills-item">
                  <span>UX</span>
                  <CustomRangeSlider defaultValue={90}/>
                </div>

                <div className="about__skills-item">
                  <span>Website Design</span>
                  <CustomRangeSlider defaultValue={86}/>
                </div>

                <div className="about__skills-item">
                  <span>App Design </span>
                  <CustomRangeSlider defaultValue={97}/>
                </div>

                <div className="about__skills-item">
                  <span>Graphic Design </span>
                  <CustomRangeSlider defaultValue={92}/>
                </div>
              </div>
            </div>
            {/* about info */}
          </div>
        </div>
      </section>
      {/* section about */}

      <section className="section-services">
        <div className="container">
          <div className="heading">
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
          </div>
          {/* heading */}

          <div className="services">
            <div className="services__wrap">
              <div className="services__item">
                <img src="images/icons/serv1.svg" alt="" />
                <b>UI/UX</b>
                <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
              </div>

              <div className="services__item">
                <img src="images/icons/serv2.svg" alt="" />
                <b>Web Design </b>
                <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
              </div>

              <div className="services__item">
                <img src="images/icons/serv3.svg" alt="" />
                <b>App Design</b>
                <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
              </div>

              <div className="services__item">
                <img src="images/icons/serv4.svg" alt="" />
                <b>Graphic Design </b>
                <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section services */}

      <section className="section-projects">
        <div className="container">
          <div className="heading">
            <h2>My Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</p>
          </div>
          {/* heading */}

          <div className="projects">
            <Tabs></Tabs>
          </div>
        </div>
      </section>
      {/* section tabs */}

      <section className="section-testimonials">
        <div className="container">
          <div className="heading">
            <h2>Testimonials</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
          </div>
          {/* heading */}

          <div className="testimonials">
            <TestimonialsSlider></TestimonialsSlider>
          </div>
        </div>
      </section>
      {/* section testimonials */}

      <section className="section-form">
        <div className="container">
          <div className="heading">
            <h2>Lets Design Together</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima error quia illum est praesentium delectus vel vitae totam quasi?</p>
          </div>
          {/* heading */}

          <form className="form">
            <input type="email" placeholder='Enter Your Email'/>
            <button type="submit" className='btn'>Contact Me</button>
          </form>
        </div>
      </section>
      {/* section form */}

      <footer className="footer">
        <div className="footer__wrap">
          <div className="container">
            <div className="footer__inner-wrap">
              <a href="#!" className="logo">LOGO</a>

              <nav className="nav">
                <ul>
                  <li><a href="#!">Home</a></li>
                  <li><a href="#!">About Me</a></li>
                  <li><a href="#!">Services</a></li>
                  <li><a href="#!">Projects</a></li>
                  <li><a href="#!">Testimonials</a></li>
                  <li><a href="#!">Contact</a></li>
                </ul>
              </nav>

              <ul className="social">
                <li><a href="#!" target='_blank'><img src="images/icons/social1.svg" alt="" /></a></li>
                <li><a href="#!" target='_blank'><img src="images/icons/social2.svg" alt="" /></a></li>
                <li><a href="#!" target='_blank'><img src="images/icons/social3.svg" alt="" /></a></li>
                <li><a href="#!" target='_blank'><img src="images/icons/social4.svg" alt="" /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__copy">
          <div className="container">
            <p>&copy; 2025 All Rights Reserved , Inc.</p>
          </div>
        </div>
      </footer>

    </ThemeProvider>

      


  )
}



export default App
