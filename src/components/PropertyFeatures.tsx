import { useState } from 'react';
import { ArrowRight, MapPin, Tag, Home, CheckCircle2, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const PropertyFeatures = () => {
  const [activeTab, setActiveTab] = useState('3bhk');

  const propertyFeatures = {
    'properties': {
      title: 'Properties Listed',
      description: 'Explore our listed properties with detailed addresses and map links.',
      properties: [
        {
          address: 'Ashiana Amarah, Sector 93, Village, Wazirpur, Gurugram, Haryana 122505',
          mapLink: 'https://maps.app.goo.gl/NPSTUgARvZ9Ho65cA?g_st=awb',
        },
      ],
    },
    '2bhk': {
      title: '2 BHK Apartments',
      description: 'Spacious apartments with modern amenities suitable for growing families.',
      startingPrice: '₹62.5 Lakhs',
      area: '950-1100 sq ft',
      possession: 'Ready to move',
      offers: ['Free club membership for 2 years', 'Kitchen appliances included'],
      images: [
        'https://ohnnehfcidcngpmixwek.supabase.co/storage/v1/object/public/media//IMG-20250309-WA0070.jpg',
        'https://ohnnehfcidcngpmixwek.supabase.co/storage/v1/object/public/media//IMG-20250309-WA0067.jpg',
      ]
    },
    '3bhk': {
      title: '3 BHK Apartments',
      description: 'Luxurious living spaces with premium finishes and expansive layouts for larger families.',
      startingPrice: '₹2.5 - 4.5 Crores',
      area: '1000-1450 sq ft',
      possession: 'Ready to move',
      offers: ['Home automation system included', 'Complimentary interior design consultation'],
      images: [
        'https://ohnnehfcidcngpmixwek.supabase.co/storage/v1/object/public/media//IMG-20250309-WA0069.jpg',
        'https://ohnnehfcidcngpmixwek.supabase.co/storage/v1/object/public/media//IMG-20250309-WA0068.jpg',
      ]
    },
  };

  const activeProperty = propertyFeatures[activeTab as keyof typeof propertyFeatures];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="property-features" className="container-custom bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
        <h2 className="section-title">Property Features and Offers</h2>
        <p className="text-lg text-gray-600">
          Discover our range of thoughtfully designed living spaces with premium features and special offers
        </p>
      </div>

      <div className="mb-8 flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="inline-flex p-1 bg-amarah-sky-blue/30 rounded-full">
          {Object.keys(propertyFeatures).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === key
                  ? 'bg-amarah-blue text-white shadow-md'
                  : 'bg-transparent text-gray-700 hover:bg-amarah-sky-blue'
              }`}
            >
              {key === 'properties' ? 'Properties Listed' : key.toUpperCase() + ' Apartments'}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'properties' ? (
        <div className="grid grid-cols-1 gap-8 mb-12">
          <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-amarah-blue">{activeProperty.title}</CardTitle>
              <p className="mt-2 text-gray-600">{activeProperty.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {activeProperty.properties.map((property, index) => (
                  <li key={index} className="flex flex-col sm:flex-row justify-between items-center border-b pb-4">
                    <div className="text-gray-700 text-center sm:text-left mb-2 sm:mb-0">{property.address}</div>
                    <a 
                      href={property.mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-amarah-blue hover:bg-amarah-light-blue text-white px-3 py-1 text-sm rounded-md flex items-center transition-colors duration-300"
                    >
                      View on Map
                      <MapPin size={14} className="ml-2" />
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="animate-fade-in h-full" style={{ animationDelay: "0.3s" }}>
            <Carousel className="w-full h-full">
              <CarouselContent>
                {activeProperty.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                      <img 
                        src={image} 
                        alt={`${activeProperty.title} - View ${index + 1}`} 
                        className="w-full h-full object-contain bg-gray-100"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          <div className="animate-slide-in" style={{ animationDelay: "0.4s" }}>
            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-amarah-blue">{activeProperty.title}</CardTitle>
                    <CardDescription className="mt-2">{activeProperty.description}</CardDescription>
                  </div>
                  
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Tag className="h-5 w-5 text-amarah-blue" />
                    <div>
                      <p className="text-sm text-gray-500">Starting Price</p>
                      <p className="font-semibold">{activeProperty.startingPrice}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="h-5 w-5 text-amarah-blue" />
                    <div>
                      <p className="text-sm text-gray-500">Carpet Area</p>
                      <p className="font-semibold">{activeProperty.area}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-amarah-blue" />
                    <div>
                      <p className="text-sm text-gray-500">Possession</p>
                      <p className="font-semibold">{activeProperty.possession}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="font-semibold mb-2">Special Offers:</p>
                    <ul className="space-y-1">
                      {activeProperty.offers.map((offer, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-amarah-red shrink-0 mt-0.5" />
                          <span>{offer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-amarah-blue hover:bg-amarah-light-blue text-white transition-colors duration-300"
                >
                  Schedule a Visit
                  <ArrowRight size={16} />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </section>
  );
};

export default PropertyFeatures;
