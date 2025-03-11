import { Play } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const AboutVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsPlaying(true);
          if (videoRef.current) {
            videoRef.current.play().catch(error => {
              console.log("Autoplay failed:", error);
            });
          }
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Play failed:", error);
      });
    }
  };

  return (
    <section ref={sectionRef} id="about" className="container-custom">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="section-title mx-auto">About Ashiana Amarah</h2>
        <p className="text-lg">
          Experience luxury living designed with children in mind. Discover what makes Ashiana Amarah the perfect place for your family.
        </p>
      </div>

      <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto">
        {!isPlaying ? (
          <>
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Video thumbnail" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <button 
                onClick={handlePlay}
                className="w-20 h-20 bg-amarah-blue rounded-full flex items-center justify-center transition-transform hover:scale-110"
              >
                <Play size={32} className="text-white ml-2" />
              </button>
            </div>
          </>
        ) : (
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full"
            controls
            autoPlay
            playsInline
            muted
          >
            <source src="https://ohnnehfcidcngpmixwek.supabase.co/storage/v1/object/public/media//VID-20250309-WA0008.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </section>
  );
};

export default AboutVideo;
