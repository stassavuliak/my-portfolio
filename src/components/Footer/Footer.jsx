import './Footer.scss'
import { Link } from "react-scroll";
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="container">
          <div className="footer__inner-wrap">
            <a href="#!" className="logo">LOGO</a>

            <nav className="nav">
              <ul>
                <li><Link to="home" href="#!" smooth={true} duration={500} offset={-180}>Home</Link></li>
                <li><Link to="about" href="#!" smooth={true} duration={500} offset={-132}>About Me</Link></li>
                <li><Link to="services" href="#!" smooth={true} duration={500} offset={-132}>Services</Link></li>
                <li><Link to="projects" href="#!" smooth={true} duration={500} offset={-132}>Projects</Link></li>
                <li><Link to="testimonials" href="#!" smooth={true} duration={500} offset={-132}>Testimonials</Link></li>
                <li><Link to="form" href="#!" smooth={true} duration={500} offset={-132}>Contact</Link></li>
              </ul>
            </nav>

            <SocialLinks/>
            
          </div>
        </div>
      </div>

      <div className="footer__copy">
        <div className="container">
          <p>&copy; 2024 - {new Date().getFullYear()} All Rights Reserved , Inc.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer