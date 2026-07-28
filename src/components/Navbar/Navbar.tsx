import { useState } from 'react';
import '../../css/components/Navbar/Navbar.css';
import logo from '../../assets/crown-logo.svg';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Mobil List', href: '#mobil-list' },
  { label: 'Step Nyewa', href: '#step-nyewa' },
  { label: 'Blog & FAQ', href: '#' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const redirectToEmail = () => {
    const email = 'marketing2.crowncar@gmail.com';
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="container-navbar">
      <div className="wrapper-navbar">
        <a href="#home" className="left-navbar">
          <img src={logo} alt="Crown Car" />
        </a>
        <nav className={`center-navbar ${isMenuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="right-navbar">
          <button type="button" className="cta-navbar" onClick={redirectToEmail}>
            Sewa Sekarang
          </button>
          <button
            type="button"
            className={`burger-navbar ${isMenuOpen ? 'is-open' : ''}`}
            aria-label="Buka menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
