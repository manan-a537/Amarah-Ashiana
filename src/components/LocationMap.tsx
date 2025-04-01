import { useState } from 'react';
import { Map, Navigation, MapPin } from 'lucide-react';

const LocationMap = () => {
  const [showMapToken, setShowMapToken] = useState(false);
  const [mapToken, setMapToken] = useState('');
  const [showSiteMap, setShowSiteMap] = useState(true);

  const toggleMapTokenInput = () => {
    setShowMapToken(!showMapToken);
    setShowSiteMap(false);
  };

  const toggleSiteMap = () => {
    setShowSiteMap(true);
    setShowMapToken(false);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-title mx-auto">Location</h2>
          <p className="text-lg">
            Ashiana Amarah is strategically located with excellent connectivity and amenities nearby
          </p>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto">
          {showSiteMap ? (
            <div className="relative">
              <img 
                src="/lovable-uploads/3909d23d-b84d-4e62-ac91-a5a3a5211f3b.png" 
                alt="Learning Hub" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Site Map</h3>
                <img 
                  src="/lovable-uploads/4497bc04-06fb-4eae-b399-9392ae0daa08.png" 
                  alt="Ashiana Amarah Site Map" 
                  className="w-full rounded-lg mb-4"
                />
                <img 
                  src="https://github.com/manan-a537/Amarah-Ashiana/blob/main/media/IMG-20250309-WA0062.jpg?raw=true" 
                  alt="Additional View" 
                  className="w-full rounded-lg mb-4"
                />
                <div className="flex flex-wrap gap-4 justify-center max-w-md mx-auto mt-6">
                  <div className="flex items-center gap-2 bg-amarah-sky-blue px-4 py-2 rounded-md">
                    <Map size={16} className="text-amarah-blue" />
                    <span>20 min to NH-8</span>
                  </div>
                  <div className="flex items-center gap-2 bg-amarah-sky-blue px-4 py-2 rounded-md">
                    <Navigation size={16} className="text-amarah-blue" />
                    <span>5 min to City Center</span>
                  </div>
                  <div className="flex items-center gap-2 bg-amarah-sky-blue px-4 py-2 rounded-md">
                    <MapPin size={16} className="text-amarah-blue" />
                    <span>15 min to Airport</span>
                  </div>
                </div>
                <button
                  onClick={toggleMapTokenInput}
                  className="mt-6 text-amarah-blue underline block mx-auto"
                >
                  Click here to load interactive map
                </button>
              </div>
            </div>
          ) : showMapToken ? (
            <div className="p-6 text-center">
              <p className="mb-4">
                To display the interactive map, please enter your Mapbox public token:
              </p>
              <input
                type="text"
                value={mapToken}
                onChange={(e) => setMapToken(e.target.value)}
                placeholder="Enter your Mapbox public token"
                className="px-4 py-2 border border-gray-300 rounded-md w-full max-w-md mb-4"
              />
              <div className="flex gap-4 justify-center">
                <button
                  onClick={toggleMapTokenInput}
                  className="btn-primary"
                >
                  Load Map
                </button>
                <button
                  onClick={toggleSiteMap}
                  className="btn-secondary"
                >
                  Show Site Map
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                You can get a Mapbox public token by creating an account at mapbox.com
              </p>
            </div>
          ) : (
            <div className="aspect-video relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
                <div className="text-8xl text-amarah-blue mb-4">
                  <MapPin />
                </div>
                <h3 className="text-2xl font-bold mb-2">Ashiana Amarah</h3>
                <p className="text-gray-600 mb-6">Sector 37, Bhiwadi, Rajasthan 301019</p>
                <div className="flex flex-wrap gap-4 justify-center max-w-md">
                  <div className="flex items-center gap-2 bg-amarah-sky-blue px-4 py-2 rounded-md">
                    <Map size={16} className="text-amarah-blue" />
                    <span>20 min to NH-8</span>
                  </div>
                  <div className="flex items-center gap-2 bg-amarah-sky-blue px-4 py-2 rounded-md">
                    <Navigation size={16} className="text-amarah-blue" />
                    <span>5 min to City Center</span>
                  </div>
                  <div className="flex items-center gap-2 bg-amarah-sky-blue px-4 py-2 rounded-md">
                    <MapPin size={16} className="text-amarah-blue" />
                    <span>15 min to Airport</span>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={toggleMapTokenInput}
                    className="text-amarah-blue underline"
                  >
                    Enter Mapbox token
                  </button>
                  <button
                    onClick={toggleSiteMap}
                    className="text-amarah-blue underline"
                  >
                    Show Site Map
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
