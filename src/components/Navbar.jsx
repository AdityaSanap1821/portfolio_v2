// File: src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const tabs = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  {
    name: 'Download CV',
    path: 'https://drive.google.com/file/d/1oJQej0cuXPHucOk4dArAMWMUxAlBskkU/view?usp=sharing',
    external: true,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full bg-black md:bg-black/50 md:backdrop-blur-md text-white py-4 shadow-sm border-b border-white/10 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-widest hover:text-white transition duration-300 text-gray-300"
        >
          AS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {tabs.map((tab) =>
            tab.external ? (
              <a
                key={tab.name}
                href={tab.path}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-3 py-1 text-sm md:text-base font-medium text-gray-400 hover:text-white transition-colors duration-300"
              >
                {tab.name}
              </a>
            ) : (
              <Link
                key={tab.name}
                to={tab.path}
                className={`relative px-3 py-1 text-sm md:text-base font-medium transition-colors duration-300 ${
                  location.pathname === tab.path
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      <div className="relative z-50">
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-lg transition-opacity duration-300 ease-in-out ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 right-0 w-48 h-full bg-black md:bg-black/60 md:backdrop-blur-md border-l border-white/10 transition-transform duration-300 ease-in-out transform ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <span className="text-xl font-bold">AS</span>
            <button onClick={() => setMenuOpen(false)}>
              <FiX size={24} />
            </button>
          </div>

          <div className="flex flex-col p-6 space-y-4">
            {tabs.map((tab) =>
              tab.external ? (
                <a
                  key={tab.name}
                  href={tab.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-400 hover:text-white"
                >
                  {tab.name}
                </a>
              ) : (
                <Link
                  key={tab.name}
                  to={tab.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-left text-sm font-medium ${
                    location.pathname === tab.path
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
