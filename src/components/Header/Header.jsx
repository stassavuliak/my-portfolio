import './Header.scss';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import Hamburger from '../Hamburger/Hamburger';

const Header = ({ menuOpen, toggleMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className={`header ${isScrolled ? "scroll" : ""}`}>
      <div className="container">
        <div className="header__nav">
          <a href="#!" className="logo">LOGO</a>

          <nav className="nav">
            <ul>
              <li><Link to="home" smooth duration={500} offset={-180}>Home</Link></li>
              <li><Link to="about" smooth duration={500} offset={-132}>About Me</Link></li>
              <li><Link to="services" smooth duration={500} offset={-132}>Services</Link></li>
              <li><Link to="projects" smooth duration={500} offset={-132}>Projects</Link></li>
              <li><Link to="testimonials" smooth duration={500} offset={-132}>Testimonials</Link></li>
              <li><Link to="form" smooth duration={500} offset={-132}>Contact</Link></li>
            </ul>
          </nav>

          <ThemeToggle/>
          <button className="btn">Download CV</button>

          <Hamburger isActive={menuOpen} toggleClass={toggleMenu} />
        </div>
      </div>

      
    </header>
  )
}

export default Header;
