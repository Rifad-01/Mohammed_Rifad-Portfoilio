import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block md:inline-block text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 cursor-pointer"
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu on click
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('home');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to scrolling to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            {/* --- INTERACTIVE LOGO START --- */}
            <a
              href="#home"
              onClick={handleLogoClick}
              className="group flex items-baseline text-2xl font-bold text-slate-900 dark:text-white cursor-pointer tracking-tight"
              aria-label="Mohammed Rifad - Home"
            >
              <span className="transition-all duration-300 ease-in-out">M</span>
              <span
                className="inline-block overflow-hidden align-bottom transition-all duration-500 ease-in-out max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100"
              >
                ohammed
              </span>
              <span className="ml-1.5 transition-all duration-300 ease-in-out">R</span>
              <span
                className="inline-block overflow-hidden align-bottom transition-all duration-500 ease-in-out max-w-0 opacity-0 group-hover:max-w-[70px] group-hover:opacity-100"
              >
                ifad
              </span>
            </a>
            {/* --- INTERACTIVE LOGO END --- */}
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.name}</NavLink>
              ))}
            </div>
            <ThemeToggle />
          </div>
          <div className="-mr-2 flex md:hidden">
             <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-slate-200 dark:bg-slate-800 ml-2 inline-flex items-center justify-center p-2 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-slate-900/95">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.name}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;