
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-amarah-red">Ashiana</span>{' '}
                <span className="text-gray-300">Amarah</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Kid-centric homes designed for the perfect upbringing of your children in a nurturing environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amarah-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amarah-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amarah-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amarah-blue transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#amenities" className="text-gray-400 hover:text-white transition-colors">Amenities</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-amarah-blue mr-3 mt-1" />
                <span className="text-gray-400">info@ashianaamarah.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-amarah-blue mr-3 mt-1" />
                <span className="text-gray-400">+91 1234 567890</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amarah-blue mr-3 mt-1" />
                <span className="text-gray-400">Sector 37, Bhiwadi, Rajasthan 301019</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get latest updates and information.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none flex-grow"
              />
              <button className="bg-amarah-blue hover:bg-amarah-light-blue text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>© {currentYear} Ashiana Amarah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
