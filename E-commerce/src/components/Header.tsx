import React, { useState } from 'react';
import { Search, ShoppingCart, User, MapPin, Globe, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Cart from './Cart';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  language: string;
  setLanguage: (language: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  selectedLocation,
  setSelectedLocation,
  language,
  setLanguage
}) => {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  
  const { state } = useCart();

  const locations = ['Amalapuram', 'Malikipuram', 'Lakkavaram'];
  const languages = ['English', 'Telugu'];

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
        {/* Top bar with delivery message */}
        <div className="bg-orange-500 text-white text-center py-2 text-sm">
          <span className="font-medium">
            {language === 'Telugu' ? '15 నిమిషాల్లో డెలివరీ' : 'Now Delivering in 15 Minutes!'} 🚀 
            Free delivery on orders above ₹199
          </span>
        </div>

        {/* Main header */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Logo */}
              <div className="flex items-center">
                <div className="text-2xl font-bold">
                  <span className="text-white">Zoro</span>
                  <span className="text-yellow-300">mart</span>
                </div>
                <div className="hidden sm:block ml-2 text-xs">
                  <div className="text-yellow-300">Ultra-Fast</div>
                  <div className="text-yellow-200">15-Min Delivery</div>
                </div>
              </div>

              {/* Location Selector */}
              <div className="hidden lg:flex items-center relative">
                <MapPin size={16} className="mr-1" />
                <button
                  className="text-sm hover:text-yellow-300 transition-colors"
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                >
                  {language === 'Telugu' ? 'స్థానం' : 'Deliver to'} {selectedLocation}
                </button>
                
                {showLocationDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-gray-900 rounded-md shadow-lg py-2 w-48 z-50">
                    {locations.map((location) => (
                      <button
                        key={location}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                        onClick={() => {
                          setSelectedLocation(location);
                          setShowLocationDropdown(false);
                        }}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-2xl mx-4 lg:mx-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={language === 'Telugu' ? 'ఉత్పత్తులను వెతకండి...' : 'Search for products, brands and more...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-12 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              {/* Right side actions */}
              <div className="flex items-center space-x-4">
                {/* Language Toggle */}
                <div className="relative">
                  <button
                    className="flex items-center space-x-1 hover:text-yellow-300 transition-colors"
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  >
                    <Globe size={16} />
                    <span className="hidden sm:inline text-sm">{language}</span>
                  </button>
                  
                  {showLanguageDropdown && (
                    <div className="absolute top-full right-0 mt-2 bg-white text-gray-900 rounded-md shadow-lg py-2 w-32 z-50">
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                          onClick={() => {
                            setLanguage(lang);
                            setShowLanguageDropdown(false);
                          }}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* User Account */}
                <button className="flex items-center space-x-1 hover:text-yellow-300 transition-colors">
                  <User size={20} />
                  <span className="hidden sm:inline text-sm">
                    {language === 'Telugu' ? 'ఖాతా' : 'Account'}
                  </span>
                </button>

                {/* Cart */}
                <button 
                  onClick={() => setCartOpen(true)}
                  className="relative flex items-center space-x-1 hover:text-yellow-300 transition-colors"
                >
                  <ShoppingCart size={20} />
                  <span className="hidden sm:inline text-sm">
                    {language === 'Telugu' ? 'కార్ట్' : 'Cart'}
                  </span>
                  {state.itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-orange-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {state.itemCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile location selector */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-orange-600 border-t border-orange-500">
            <div className="px-4 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin size={16} />
                <span className="text-sm">
                  {language === 'Telugu' ? 'డెలివరీ స్థానం' : 'Delivery Location'}
                </span>
              </div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 rounded-md text-gray-900 bg-white"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </header>

      {/* Cart Component */}
      <Cart 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
        language={language}
      />
    </>
  );
};

export default Header;