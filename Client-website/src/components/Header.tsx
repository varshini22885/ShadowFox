import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://i.postimg.cc/13zMRd2C/SDC-Logo.png" 
              alt="Sakthi Dental Clinic" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Sakthi Dental Clinic</h1>
              <p className="text-sm text-gray-600">Specialized Dental Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-sky-600 border-b-2 border-sky-600 pb-1'
                    : 'text-gray-700 hover:text-sky-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+91 9862890897</span>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-sky-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-sky-600 bg-sky-50 rounded-md'
                      : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50 rounded-md'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 text-sm text-gray-600 border-t border-gray-200 mt-3 pt-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 9862890897</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;