import { navLinks } from '../data/portfolioData';

function Navigation() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Tamanna Kumari Naik home">
          Tamanna
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
