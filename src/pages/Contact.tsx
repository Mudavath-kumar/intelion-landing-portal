
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { AnimatedTitle } from '@/components/ui/AnimatedText';
import { cn } from '@/lib/utils';
import { Mail, MapPin, Phone, MessageSquare, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <PageLayout>
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div 
              className={cn(
                "inline-block bg-blue-50 px-4 py-2 rounded-full mb-4 opacity-0",
                isVisible ? "animate-fade-in" : ""
              )}
            >
              <p className="text-blue-700 text-sm font-medium">Contact Us</p>
            </div>
            
            {isVisible && (
              <AnimatedTitle 
                text="Get in Touch with Our Team" 
                className="text-3xl md:text-4xl font-bold mb-6 justify-center"
              />
            )}
            
            <p 
              className={cn(
                "text-gray-600 max-w-2xl mx-auto opacity-0",
                isVisible ? "animate-fade-in" : ""
              )}
              style={{ animationDelay: "400ms" }}
            >
              Have questions about our platform? Our team is here to help. Reach out to us through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div 
              className={cn(
                "opacity-0",
                isVisible ? "animate-fade-in-up" : ""
              )}
              style={{ animationDelay: "200ms" }}
            >
              <div className="glass-card rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center text-blue-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Our Location</h4>
                      <p className="text-gray-600">123 Innovation Street, Tech City, TC 10111</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center text-blue-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email Us</h4>
                      <p className="text-gray-600">info@intelion.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center text-blue-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Call Us</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center text-blue-600">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Global Support</h4>
                      <p className="text-gray-600">Available 24/7 for enterprise clients</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="font-semibold mb-4">Working Hours</h4>
                  <p className="text-gray-600 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
                
                <div className="mt-10">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3060153225!2d-74.25987368715492!3d40.69767006766623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1631712143090!5m2!1sen!2s" 
                    width="100%" 
                    height="200" 
                    className="rounded-lg"
                    title="map"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div 
              className={cn(
                "opacity-0",
                isVisible ? "animate-fade-in-up" : ""
              )}
              style={{ animationDelay: "400ms" }}
            >
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 mr-3">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <p className="text-gray-600">We'll respond to your inquiry within 24 hours</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="firstName">First Name</label>
                      <input 
                        id="firstName"
                        name="firstName"
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="lastName">Last Name</label>
                      <input 
                        id="lastName"
                        name="lastName"
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4} 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <div 
              className={cn(
                "glass-card rounded-xl p-8 text-center opacity-0",
                isVisible ? "animate-fade-in-up" : ""
              )}
              style={{ animationDelay: "600ms" }}
            >
              <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Stay updated with the latest news, product updates, and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 border border-gray-200 rounded-lg flex-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                />
                <Button 
                  onClick={() => toast({
                    title: "Subscribed",
                    description: "Thank you for subscribing to our newsletter!",
                  })}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
