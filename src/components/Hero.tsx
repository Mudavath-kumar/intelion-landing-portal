
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { RevealText } from './ui/AnimatedText';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen pt-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 section-padding flex flex-col justify-center">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float"></div>
        <div className="absolute top-2/3 left-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-16 right-1/4 w-80 h-80 bg-yellow-50 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="inline-block bg-blue-50 px-4 py-2 rounded-full mb-6">
              <p className="text-blue-700 text-sm font-medium">Intelligent Solutions</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <RevealText 
              text="Transforming Data into Intelligent Solutions" 
              tag="h1" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight tracking-tight mb-6"
            />
            <RevealText
              text="Unleash the power of AI to streamline operations, drive innovation, and solve complex business challenges with our cutting-edge platform."
              tag="p"
              className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 text-balance"
            />
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 w-full justify-center opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '1s' }}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center group">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full text-base font-medium transition-all shadow-md border border-gray-200">
              Learn More
            </button>
          </div>
        </div>

        <div className={`mt-16 w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-br from-blue-600 to-blue-400 aspect-video rounded-lg flex items-center justify-center">
            <div className="glass-card rounded-lg p-8 text-center">
              <h3 className="font-bold text-lg mb-2">Visualize your success</h3>
              <p className="text-gray-800">Intelion Dashboard Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

