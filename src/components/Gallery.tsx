import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define our gallery items
const galleryItems = [
  {
    id: 1,
    image: 'https://ohnnehfcidcngpmixwek.supabase.co/storage/v1/object/public/media//IMG-20250309-WA0060.jpg',
    title: 'Expansive Green Areas',
    description: 'Lush gardens and play areas for children',
  },
  {
    id: 2,
    image: 'https://ohnnehfcidcngpmixwek.supabase.co/storage/v1/object/public/media//IMG-20250309-WA0066.jpg',
    title: 'Modern Living Spaces',
    description: 'Contemporary designs with family comfort in mind',
  },
  {
    id: 3,
    image: 'https://ohnnehfcidcngpmixwek.supabase.co/storage/v1/object/public/media//IMG-20250309-WA0065.jpg',
    title: 'Kid-Friendly Amenities',
    description: 'Specially designed spaces for children of all ages',
  },
  {
    id: 4,
    image: 'https://ohnnehfcidcngpmixwek.supabase.co/storage/v1/object/public/media//IMG-20250309-WA0059.jpg',
    title: 'Community Spaces',
    description: 'Areas designed for families to connect and grow together',
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? galleryItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === galleryItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="gallery" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-title mx-auto">Gallery</h2>
          <p className="text-lg">
            Explore the beautiful spaces and amenities that make Ashiana Amarah a unique place to live
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Slide */}
          <div className="aspect-[16/9] md:aspect-[21/9] w-full relative overflow-hidden rounded-xl shadow-lg">
            <div 
              className="h-full w-full transition-opacity duration-500"
              style={{ opacity: 1 }}
            >
              <img 
                src={galleryItems[currentIndex].image} 
                className="absolute inset-0 w-full h-full object-contain bg-gray-100 transition-transform duration-1000"
                alt={galleryItems[currentIndex].title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{galleryItems[currentIndex].title}</h3>
                <p className="text-white/80">{galleryItems[currentIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 transition-all"
          >
            <ChevronLeft className="text-gray-800" size={24} />
          </button>
          <button 
            onClick={goToNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 transition-all"
          >
            <ChevronRight className="text-gray-800" size={24} />
          </button>

          {/* Thumbnails */}
          <div className="flex justify-center mt-4 space-x-2">
            {galleryItems.map((slide, slideIndex) => (
              <div
                key={slide.id}
                onClick={() => goToSlide(slideIndex)}
                className={`h-2 w-8 rounded-full cursor-pointer transition-all duration-300 ${
                  currentIndex === slideIndex ? "bg-amarah-blue" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
