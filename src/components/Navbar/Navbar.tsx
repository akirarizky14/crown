import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/components/Navbar/Navbar.css';
import logo from '../../assets/crown-logo.svg';
import BookingModal from '../BookingModal/BookingModal';
import { fetchSiteSettings } from '../../data/siteSettingsApi';
import { isCmsEditMode, notifyCmsEdit } from '../../lib/cmsEditMode';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Mobil List', to: '/#mobil-list' },
  { label: 'Step Nyewa', to: '/#step-nyewa' },
  { label: 'Blog & FAQ', to: '/blog' },
];

const DEFAULT_CTA_LABEL = 'Sewa Sekarang';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [navLogo, setNavLogo] = useState<string>(logo);
  const [ctaLabel, setCtaLabel] = useState<string>(DEFAULT_CTA_LABEL);
  const editMode = isCmsEditMode();

  useEffect(() => {
    fetchSiteSettings()
      .then((settings) => {
        if (settings.navbarLogo) setNavLogo(settings.navbarLogo);
        if (settings.navbarCtaLabel) setCtaLabel(settings.navbarCtaLabel);
      })
      .catch(() => {});
  }, []);

  return (
    <div
      className={`container-navbar ${editMode ? 'cms-editable' : ''}`}
      onClickCapture={
        editMode
          ? (e) => {
              e.preventDefault();
              e.stopPropagation();
              notifyCmsEdit('navbar');
            }
          : undefined
      }
    >
      <div className="wrapper-navbar">
        <Link to="/" className="left-navbar">
          <img src={navLogo} alt="Crown Car" />
        </Link>
        <nav className={`center-navbar ${isMenuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.to} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="right-navbar">
          <button type="button" className="cta-navbar" onClick={() => setIsBookingOpen(true)}>
            {ctaLabel}
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
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default Navbar;
