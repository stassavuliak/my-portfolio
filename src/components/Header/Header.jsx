import './Header.scss';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
  return (
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
  )
}

export default Header