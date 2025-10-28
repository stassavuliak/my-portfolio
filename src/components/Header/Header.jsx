import './Header.scss';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { Link } from "react-scroll";
import { useEffect, useState } from "react";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scroll" : ""}`}>
      <div className="container">
        <div className="header__nav">
          <a href="#!" className="logo">LOGO</a>
          {/* logo */}

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
          {/* navigation menu */}

          <ThemeToggle/>

          <button href="#!" className="btn ">Downlaod CV</button>
        </div>
      </div>
    </header>
  )
}

export default Header