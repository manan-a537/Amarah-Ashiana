
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Promotion from "@/components/Promotion";
import AboutVideo from "@/components/AboutVideo";
import Gallery from "@/components/Gallery";
import PropertyLayout from "@/components/PropertyLayout";
import PropertyFeatures from "@/components/PropertyFeatures";
import Amenities from "@/components/Amenities";
import LocationMap from "@/components/LocationMap";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Promotion />
      <AboutVideo />
      <Gallery />
      <PropertyLayout />
      <PropertyFeatures />
      <Amenities />
      <LocationMap />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
