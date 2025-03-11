import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Calendar, Mail, Phone, Send, User, MapPin } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this URL with your Google Apps Script web app URL
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbxSYM2cVjkjDgZd3SxvfQzynhL9V7O0iY6D2KHAzKPU6OPCcCTturaVE2jQlWqPZeBMPQ/exec';
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: "Form Submitted Successfully!",
        description: "We'll get back to you as soon as possible.",
      });

      // Clear the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container-custom">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="section-title mx-auto">Contact Us</h2>
        <p className="text-lg">
          Schedule a visit or request more information about Ashiana Amarah
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-6 text-gray-600">
            We'd love to hear from you! Fill out the form and our team will get back to you as soon as possible.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-amarah-sky-blue p-3 rounded-full">
                <Phone className="h-6 w-6 text-amarah-blue" />
              </div>
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-gray-600">+91 1234 567890</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-amarah-sky-blue p-3 rounded-full">
                <Mail className="h-6 w-6 text-amarah-blue" />
              </div>
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-gray-600">info@ashianaamarah.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-amarah-sky-blue p-3 rounded-full">
                <MapPin className="h-6 w-6 text-amarah-blue" />
              </div>
              <div>
                <h4 className="font-semibold">Visit Us</h4>
                <p className="text-gray-600">Omaxe Gurgaon Mall, Sector 49, 2nd floor, Shop no.7</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <User size={16} className="inline mr-2" />
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amarah-blue focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Mail size={16} className="inline mr-2" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amarah-blue focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Phone size={16} className="inline mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amarah-blue focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Calendar size={16} className="inline mr-2" />
                Preferred Visit Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amarah-blue focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amarah-blue focus:border-transparent"
                placeholder="Tell us what you're looking for"
              ></textarea>
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-amarah-blue hover:bg-amarah-light-blue text-white flex items-center justify-center gap-2 py-6"
            >
              {isSubmitting ? 'Submitting...' : 'Schedule a Visit'}
              <Send size={16} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
