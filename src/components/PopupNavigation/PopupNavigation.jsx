// PopupNavigation.jsx
import './PopupNavigation.scss';
import { Link } from "react-scroll";
import SocialLinks from '../SocialLinks/SocialLinks';

const PopupNavigation = ({ isActive, toggleMenu }) => {
  return (
    <div className={`popup ${isActive ? 'active' : ''}`}>
      <div className="popup__overlay" onClick={toggleMenu}></div>

      <div className="popup__nav">
        <div className="popup__wrap">
          <nav className="nav">
            <ul>
              <li><Link onClick={toggleMenu} to="home" smooth duration={500} offset={-180}>Home</Link></li>
              <li><Link onClick={toggleMenu} to="about" smooth duration={500} offset={-132}>About Me</Link></li>
              <li><Link onClick={toggleMenu} to="services" smooth duration={500} offset={-132}>Services</Link></li>
              <li><Link onClick={toggleMenu} to="projects" smooth duration={500} offset={-132}>Projects</Link></li>
              <li><Link onClick={toggleMenu} to="testimonials" smooth duration={500} offset={-132}>Testimonials</Link></li>
              <li><Link onClick={toggleMenu} to="form" smooth duration={500} offset={-132}>Contact</Link></li>
            </ul>
          </nav>

          <button className="btn">Download CV</button>
          <SocialLinks/>
        </div>
      </div>
    </div>
  )
}

export default PopupNavigation;
