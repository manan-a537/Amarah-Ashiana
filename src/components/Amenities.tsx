
import { Check, Home, Leaf, Users, Shield, Sun } from 'lucide-react';

const amenities = [
  {
    icon: <Home className="h-8 w-8 text-amarah-blue" />,
    title: "Kid-Centric Design",
    description: "Homes designed with children's growth and development in mind",
  },
  {
    icon: <Leaf className="h-8 w-8 text-amarah-blue" />,
    title: "Green Spaces",
    description: "Lush gardens and open areas for outdoor activities",
  },
  {
    icon: <Users className="h-8 w-8 text-amarah-blue" />,
    title: "Community Living",
    description: "Spaces designed to foster community bonds and friendship",
  },
  {
    icon: <Shield className="h-8 w-8 text-amarah-blue" />,
    title: "Safety First",
    description: "Advanced security systems and child-safe infrastructure",
  },
  {
    icon: <Sun className="h-8 w-8 text-amarah-blue" />,
    title: "Learning Zones",
    description: "Dedicated areas for educational activities and growth",
  },
  {
    icon: <Check className="h-8 w-8 text-amarah-blue" />,
    title: "Quality Construction",
    description: "Premium materials and thoughtful architectural details",
  },
];

const Amenities = () => {
  return (
    <section id="amenities" className="container-custom">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="section-title mx-auto">Why Choose Ashiana Amarah</h2>
        <p className="text-lg">
          Discover the unique features that make our kid-centric homes the perfect choice for your family
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {amenities.map((amenity, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-amarah-blue/20"
          >
            <div className="mb-4">{amenity.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
            <p className="text-gray-600">{amenity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
