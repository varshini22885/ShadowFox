import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer =React.FC () => {
  const treatments = [
    'Teeth Cleaning & Scaling',
    'Dental Implants',
    'Root Canal Therapy',
    'Orthodontic Braces',
    'Teeth Whitening',
    'Pediatric Dentistry'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.postimg.cc/13zMRd2C/SDC-Logo.png" 
                alt="Sakthi Dental Clinic" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">Sakthi Dental Clinic</h3>
                <p className="text-sm text-gray-400">Specialized Dental Care</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing comprehensive dental care for women, children, and families in Hosur with 
              advanced technology and experienced doctors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/treatments" className="text-gray-300 hover:text-white transition-colors text-sm">Treatments</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Treatments</h3>
            <ul className="space-y-2">
              {treatments.map((treatment, index) => (
                <li key={index}>
                  <Link to="/treatments" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {treatment}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sky-400" />
                <div className="text-gray-300 text-sm">
                  <p>+91 9862890897</p>
                  <p>+91 9363298118</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sky-400" />
                <p className="text-gray-300 text-sm">info@sakthidentalclinic.in</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-sky-400" />
                <p className="text-gray-300 text-sm">
                  <span className="font-medium">Sunday to Saturday:</span> 9am to 8pm
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Sakthi Dental Clinic. All rights reserved. | 
            <Link to="/privacy-policy" className="hover:text-white transition-colors ml-1">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;