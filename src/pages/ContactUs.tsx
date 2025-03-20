
import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useToast } from "../hooks/use-toast";
import PageHeader from '@/components/common/PageHeader';
import NavBar from '@/components/common/NavBar';
import FooterNote from '@/components/common/FooterNote';
import PageWrapper from '@/components/PageWrapper';

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you can add actual form submission logic
      // For now, we'll just simulate a submission with timeout
      setTimeout(() => {
        toast({
          title: "Success",
          description: "Your message has been sent successfully!",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
    
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-lg text-gray-600">Get in touch with our team for any inquiries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 shadow-md rounded-md flex flex-col items-center text-center">
          <div className="bg-primary bg-opacity-10 p-4 rounded-full mb-4">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Our Location</h3>
          <p className="text-gray-600">Panchsheel Nagar, Chhindwara - 480001</p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-md flex flex-col items-center text-center">
          <div className="bg-primary bg-opacity-10 p-4 rounded-full mb-4">
            <Phone className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Call Us</h3>
          <p className="text-gray-600">(+91) 9260927665</p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-md flex flex-col items-center text-center">
          <div className="bg-primary bg-opacity-10 p-4 rounded-full mb-4">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Email Us</h3>
          <p className="text-gray-600">info@mapmytour.in</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-96 rounded-md overflow-hidden">
          <iframe 
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.8746712526486!2d78.93537049999999!3d22.0543892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd56725da3c2be9%3A0x55f8a49de8553aae!2sMAHORE%20JI%20E%20PANJIYAN%20SERVICE%20PROVIDER!5e0!3m2!1sen!2sin!4v1741628503303!5m2!1sen!2sin" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            title="Office Location Map"
          ></iframe>
        </div>

        <div className="bg-white p-8 shadow-md rounded-md">
          <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="john@example.com" 
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="Subject" 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows={4} 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary text-white py-3 px-8 rounded-md font-medium hover:bg-opacity-90 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
   
    </PageWrapper>
  );
};

export default ContactUs;
