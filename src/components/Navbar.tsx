
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-amarah-red">Ashiana</span>{' '}
              <span className="text-gray-600">Amarah</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amarah-blue transition-colors`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amarah-blue transition-colors`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amarah-blue transition-colors`}
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('amenities')}
            className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amarah-blue transition-colors`}
          >
            Amenities
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-amarah-blue transition-colors`}
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-amarah-blue hover:bg-amarah-light-blue text-white rounded-md flex items-center gap-2"
          >
            <Phone size={16} />
            Call Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-amarah-blue"
          onClick={toggleMobileMenu}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="text-2xl font-bold">
                <span className="text-amarah-red">Ashiana</span>{' '}
                <span className="text-gray-600">Amarah</span>
              </div>
              <button onClick={toggleMobileMenu}>
                <X size={24} className="text-gray-800" />
              </button>
            </div>
            <div className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-800 py-2 text-lg"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-800 py-2 text-lg"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-800 py-2 text-lg"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('amenities')}
                className="text-gray-800 py-2 text-lg"
              >
                Amenities
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-800 py-2 text-lg"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-amarah-blue hover:bg-amarah-light-blue text-white w-full justify-center mt-4 flex items-center gap-2"
              >
                <Phone size={16} />
                Call Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
