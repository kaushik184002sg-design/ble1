import React, { useState, useEffect, useRef } from 'react';

const Logo: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('home');
    
    if (targetElement) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a 
      href="#home" 
      onClick={handleClick}
      className="text-3xl font-bold tracking-tighter"
    >
      Bl<span className="text-[#FFB74D]">e</span>
    </a>
  );
};

const NavLink: React.FC<{ children: React.ReactNode; active?: boolean; href: string }> = ({ children, active, href }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80; // Adjust for fixed header
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
        active ? 'text-white bg-white/10' : 'text-[#A0A0A0] hover:text-white'
      }`}
    >
      {children}
    </a>
  );
};

const navLinks = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#mission', label: 'Our Mission', id: 'mission' },
  { href: '#vision', label: 'Our Vision', id: 'vision' },
  { href: '#values', label: 'Core Values', id: 'values' },
  { href: '#careers', label: 'Careers', id: 'careers' },
];

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState('home');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const intersectingEntry = entries.find(entry => entry.isIntersecting);
        if (intersectingEntry) {
          setActiveLink(intersectingEntry.target.id);
        }
      },
      { rootMargin: '-40% 0px -60% 0px' } 
    );

    const elements = navLinks.map(link => document.getElementById(link.id)).filter(el => el);
    elements.forEach(el => observer.current?.observe(el));

    return () => {
      elements.forEach(el => observer.current?.unobserve(el));
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#140A1E]/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center space-x-1">
           {navLinks.map(link => (
            <NavLink key={link.id} href={link.href} active={activeLink === link.id}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;