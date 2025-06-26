import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const footerSections = {
    English: {
      about: {
        title: 'About Zoromart',
        links: ['About Us', 'Careers', 'Press Releases', 'Zoromart Science']
      },
      help: {
        title: 'Help & Support',
        links: ['Customer Service', 'Return Policy', 'Delivery Information', 'Track Your Order']
      },
      business: {
        title: 'Business',
        links: ['Sell on Zoromart', 'Advertise Your Products', 'Become a Delivery Partner', 'Zoromart Pay']
      },
      social: {
        title: 'Connect with Us',
        links: ['Facebook', 'Twitter', 'Instagram', 'YouTube']
      }
    },
    Telugu: {
      about: {
        title: 'జోరోమార్ట్ గురించి',
        links: ['మా గురించి', 'ఉద్యోగాలు', 'పత్రికా ప్రకటనలు', 'జోరోమార్ట్ సైన్స్']
      },
      help: {
        title: 'సహాయం & మద్దతు',
        links: ['కస్టమర్ సేవ', 'రిటర్న్ పాలసీ', 'డెలివరీ సమాచారం', 'మీ ఆర్డర్‌ను ట్రాక్ చేయండి']
      },
      business: {
        title: 'వ్యాపారం',
        links: ['జోరోమార్ట్‌లో అమ్మండి', 'మీ ఉత్పత్తులను ప్రచారం చేయండి', 'డెలివరీ పార్టనర్ అవ్వండి', 'జోరోమార్ట్ పే']
      },
      social: {
        title: 'మాతో అనుసంధానం',
        links: ['ఫేస్‌బుక్', 'ట్విట్టర్', 'ఇన్‌స్టాగ్రామ్', 'యూట్యూబ్']
      }
    }
  };

  const currentLang = language as keyof typeof footerSections;
  const sections = footerSections[currentLang];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">
              {language === 'Telugu' ? 'న్యూస్‌లెటర్‌కు సబ్‌స్క్రైబ్ చేయండి' : 'Subscribe to Our Newsletter'}
            </h3>
            <p className="text-orange-100 mb-6">
              {language === 'Telugu' 
                ? 'ప్రత్యేక ఆఫర్లు మరియు అప్‌డేట్‌లను పొందండి'
                : 'Get exclusive offers and updates delivered to your inbox'
              }
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder={language === 'Telugu' ? 'మీ ఇమెయిల్ చిరునామా' : 'Enter your email address'}
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-r-lg font-semibold text-gray-900 transition-colors">
                {language === 'Telugu' ? 'సబ్‌స్క్రైబ్' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{sections.about.title}</h4>
              <ul className="space-y-3">
                {sections.about.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{sections.help.title}</h4>
              <ul className="space-y-3">
                {sections.help.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{sections.business.title}</h4>
              <ul className="space-y-3">
                {sections.business.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === 'Telugu' ? 'సంప్రదించండి' : 'Contact Us'}
              </h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-orange-400" />
                  <span className="text-gray-300">1800-123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-orange-400" />
                  <span className="text-gray-300">support@zoromart.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-orange-400" />
                  <span className="text-gray-300">
                    {language === 'Telugu' ? 'అమలాపురం, ఆంధ్రప్రదేశ్' : 'Amalapuram, Andhra Pradesh'}
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h5 className="font-medium mb-3">{sections.social.title}</h5>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h5 className="text-sm font-medium mb-4 text-gray-300">
              {language === 'Telugu' ? 'చెల్లింపు పద్ధతులు' : 'Payment Methods'}
            </h5>
            <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-gray-400">
              <span className="bg-gray-800 px-3 py-1 rounded">UPI</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Paytm</span>
              <span className="bg-gray-800 px-3 py-1 rounded">PhonePe</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Credit/Debit Cards</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Cash on Delivery</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Zoromart Wallet</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">© 2025 Zoromart. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-1 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current mx-1" />
              <span>for India</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {language === 'Telugu' ? 'గోప్యతా విధానం' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {language === 'Telugu' ? 'నిబంధనలు' : 'Terms of Service'}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {language === 'Telugu' ? 'కుకీలు' : 'Cookies'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;