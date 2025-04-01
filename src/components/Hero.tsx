import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center mt-12"
      style={{ 
        backgroundImage: "url('https://github.com/manan-a537/Amarah-Ashiana/blob/main/media/IMG-20250309-WA0059.jpg?raw=true')" 
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
      
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-4xl animate-fade-in text-center md:text-left mb-48 relative" style={{ top: '-1in' }}>
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 mt-12 sm:mt-0" 
            style={{ fontFamily: 'Core Sans NR SC 45 Regular, sans-serif' }}
          >
            <span className="text-white">Find Your Dream Property</span>
          </h1>
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-normal mb-4" 
            style={{ fontFamily: 'Core Sans NR SC 45 Regular, sans-serif' }}
          >
            <span className="text-white block md:inline">ASHIANA AMARAH</span>
          </h1>
          <p className="text-base text-white">
            <span className="font-bold">3&4 BHK</span> Luxury Apartments
          </p>
        </div>
        <div className="flex justify-center md:justify-start" style={{ marginTop: '-0.5in' }}>
          <button 
            onClick={scrollToContact}
            className="btn-primary mt-8"
          >
            Schedule a Visit
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
