import { Check, Building, Ruler, Users, TreePine, Puzzle } from 'lucide-react';
import { Button } from './ui/button';

const PropertyLayout = () => {
  const features = [
    { icon: <Ruler className="h-6 w-6 text-amarah-blue" />, title: "Land Parcel", value: "22.10 Acre" },
    { icon: <TreePine className="h-6 w-6 text-amarah-blue" />, title: "Green Area", value: "6.7 Acre" },
    { icon: <Check className="h-6 w-6 text-amarah-blue" />, title: "Open Area", value: "78%" },
    { icon: <Users className="h-6 w-6 text-amarah-blue" />, title: "Density", value: "54 units per Acre (Low Density Project)" },
    { icon: <Building className="h-6 w-6 text-amarah-blue" />, title: "Towers", value: "21 (Standalone towers, 4 units per core)" },
    { icon: <Puzzle className="h-6 w-6 text-amarah-blue" />, title: "Structure", value: "Stilt + 14" },
  ];

  const scrollToAmenities = () => {
    const element = document.getElementById('amenities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="property-layout" className="container-custom bg-gradient-to-b from-white to-amarah-sky-blue/30">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="section-title animate-fade-in">Project: Ashiana Amarah Kid Centric Homes</h2>
        <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          A thoughtfully designed community focused on children's development and family living
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6 animate-slide-in" style={{ animationDelay: "0.3s" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="p-3 bg-amarah-sky-blue rounded-md">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-amarah-blue">{feature.title}</h3>
                  <p className="text-gray-700">{feature.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-5 bg-amarah-sky-blue/30 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <h3 className="font-semibold text-lg mb-2 text-amarah-blue">Amenities:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Check size={16} className="text-amarah-blue" /> Club House</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-amarah-blue" /> Learning Hub</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-amarah-blue" /> Playstreet</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-amarah-blue" /> Adventure Zone</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-amarah-blue" /> And many more...</li>
            </ul>
            <div className="mt-4">
              <Button 
                variant="default" 
                className="bg-amarah-blue hover:bg-amarah-light-blue text-white transition-colors duration-300"
                onClick={scrollToAmenities}
              >
                View All Amenities
              </Button>
            </div>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-lg group animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <img 
            src="/lovable-uploads/3909d23d-b84d-4e62-ac91-a5a3a5211f3b.png" 
            alt="Artistic impression of Learning Hub" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
            <p className="text-lg font-semibold">Artistic impression of Learning Hub</p>
            <p className="text-sm opacity-80">A dedicated space for children's educational activities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyLayout;
