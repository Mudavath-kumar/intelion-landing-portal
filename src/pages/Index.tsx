
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { ArrowRight, BarChart3, LineChart, CheckCircle2 } from 'lucide-react';
import { AnimatedTitle, RevealText } from '@/components/ui/AnimatedText';
import { cn } from '@/lib/utils';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Index = () => {
  useEffect(() => {
    scrollToTop();
    
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        
        {/* Horizontal Feature Preview Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
              <AnimatedTitle 
                text="Discover Our Powerful Features" 
                className="text-3xl md:text-4xl font-bold mb-4 justify-center"
              />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our platform offers comprehensive tools for data analysis, visualization, and AI-powered insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-all">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 mb-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Visualization</h3>
                <p className="text-gray-600 mb-4">
                  Transform complex data into intuitive visualizations that make insights immediately clear.
                </p>
                <Link to="/features" className="text-blue-600 font-medium flex items-center">
                  Explore Charts <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-all">
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-purple-600 mb-4">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Leverage machine learning algorithms to predict trends and identify patterns in your data.
                </p>
                <Link to="/dashboard" className="text-blue-600 font-medium flex items-center">
                  View Dashboard <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-all">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-green-600 mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Tailored solutions for your industry with specialized insights and recommendations.
                </p>
                <Link to="/about" className="text-blue-600 font-medium flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/features" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-medium transition-all shadow-lg hover:shadow-xl">
                Explore All Features
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <RevealText 
                  text="Ready to Transform Your Business with AI?" 
                  tag="h2" 
                  className="text-3xl md:text-4xl font-bold mb-6"
                />
                <p className="text-blue-100 mb-8">
                  Join thousands of companies that use Intelion to make data-driven decisions and stay ahead of the competition.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/signup" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center">
                    Get Started for Free
                  </Link>
                  <Link to="/contact" className="bg-transparent hover:bg-blue-700 border border-white px-8 py-3 rounded-full font-medium transition-all inline-flex items-center justify-center">
                    Contact Sales
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Quick Stats</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-4xl font-bold">500+</p>
                        <p className="text-blue-100">Clients</p>
                      </div>
                      <div>
                        <p className="text-4xl font-bold">98%</p>
                        <p className="text-blue-100">Satisfaction</p>
                      </div>
                      <div>
                        <p className="text-4xl font-bold">30%</p>
                        <p className="text-blue-100">Cost Reduction</p>
                      </div>
                      <div>
                        <p className="text-4xl font-bold">24/7</p>
                        <p className="text-blue-100">Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
