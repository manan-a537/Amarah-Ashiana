
import { ArrowRight } from 'lucide-react';

const Promotion = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-amarah-sky-blue py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <div className="animate-pulse-slow">
              <div className="bg-white px-6 py-4 rounded-md inline-block text-amarah-blue font-semibold mb-4">
                Limited Time Opportunity
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Launching Our <span className="text-amarah-blue">Final Phase</span>
            </h2>
            <p className="text-lg mb-6">
              Don't miss the opportunity to be part of our exclusive community. The final phase of Ashiana Amarah offers the perfect blend of luxury, comfort, and a nurturing environment for your children.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start gap-2">
                <div className="mt-1 text-amarah-blue">✓</div>
                <div>Premium 2, 3 & 4 BHK kid-centric homes</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-amarah-blue">✓</div>
                <div>Expansive green spaces and dedicated play areas</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-amarah-blue">✓</div>
                <div>Limited units available - Book now for special offers</div>
              </li>
            </ul>
            <button 
              onClick={scrollToContact}
              className="btn-primary"
            >
              Enquire Now <ArrowRight size={16} />
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Ashiana Amarah Final Phase" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -top-4 -right-4 bg-amarah-blue text-white px-6 py-3 rounded-md font-bold">
                Final Phase
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
