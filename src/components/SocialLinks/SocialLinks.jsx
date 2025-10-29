import './SocialLinks.scss';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    { href: "https://github.com/stassavuliak", icon: <FaGithub/> },
    { href: "https://www.linkedin.com/in/stas-savuliak", icon: <FaLinkedin/> },
    { href: "https://www.facebook.com/stas.savuliak", icon: <FaFacebook/> },
    { href: "https://www.instagram.com/stas_savuliak", icon: <FaInstagram/> },
  ];

  return (
    <ul className="social">
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          {link.icon}
        </a>
      ))}
    </ul>    
  );
}

export default SocialLinks;