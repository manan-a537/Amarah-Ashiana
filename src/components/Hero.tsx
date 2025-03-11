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
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: "url('https://ohnnehfcidcngpmixwek.supabase.co/storage/v1/object/public/media//IMG-20250309-WA0061.jpg')" 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-amarah-red">Find Your Dream Property with</span>{' '}
            <span className="text-black block md:inline">Ashiana Amarah</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-amarah-red">
            Kids Centric Homes: Behtar Parvarish Ka Pata
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Discover exclusive properties in prime locations with our premium real estate services.
            Your journey to the perfect home starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="btn-primary"
            >
              Schedule a Visit
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amarah-red">200+</div>
              <div className="text-sm md:text-base">Premium Properties</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amarah-red">180+</div>
              <div className="text-sm md:text-base">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amarah-red">15+</div>
              <div className="text-sm md:text-base">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
