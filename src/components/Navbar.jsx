import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Biography', path: '/biography' },
  { name: 'Project', path: '/project' },
  { name: 'Papers', path: '/papers' },
  { name: 'Works', path: '/works' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-border-color py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <Link to="/" className="text-xl
    font-bold
    tracking-[0.25em]
    uppercase">
          梁悦然
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm tracking-wide transition-colors hover:text-text-muted ${location.pathname === item.path ? 'text-text-main font-medium border-b border-black' : 'text-text-muted'}`}
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
