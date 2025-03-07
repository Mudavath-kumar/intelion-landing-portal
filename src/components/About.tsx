
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedTitle } from './ui/AnimatedText';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-gradient-to-b from-gray-50 to-white section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={cn(
              "opacity-0 order-2 lg:order-1",
              isVisible ? "animate-fade-in-up" : ""
            )}
          >
            <div 
              className="aspect-square bg-gradient-to-tr from-blue-500 to-blue-400 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="w-full h-full flex items-center justify-center bg-opacity-50 backdrop-filter backdrop-blur-sm">
                <div className="glass-card rounded-xl p-8 max-w-xs mx-auto">
                  <h3 className="font-bold text-xl mb-3">Our Mission</h3>
                  <p className="text-gray-800">
                    To empower businesses with intelligent solutions that drive innovation and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "opacity-0 order-1 lg:order-2",
              isVisible ? "animate-fade-in" : ""
            )}
            style={{ animationDelay: "200ms" }}
          >
            <div className="inline-block bg-blue-50 px-4 py-2 rounded-full mb-4">
              <p className="text-blue-700 text-sm font-medium">About Intelion</p>
            </div>
            
            {isVisible && (
              <AnimatedTitle 
                text="Pioneering the Future of Business Intelligence" 
                className="text-3xl md:text-4xl font-bold mb-6"
                delay={300}
              />
            )}
            
            <div 
              className={cn(
                "space-y-4 opacity-0",
                isVisible ? "animate-fade-in" : ""
              )}
              style={{ animationDelay: "500ms" }}
            >
              <p className="text-gray-600">
                At Intelion, we believe in the transformative power of data. Our platform combines advanced analytics, machine learning, and intuitive design to help businesses of all sizes make better decisions.
              </p>
              <p className="text-gray-600">
                Founded by a team of data scientists and industry experts, we've built a solution that addresses the real challenges businesses face when trying to leverage their data.
              </p>
              <p className="text-gray-600">
                Our approach is centered on simplicity and results. We strip away complexity to deliver insights that drive tangible business outcomes.
              </p>
            </div>
            
            <div 
              className={cn(
                "mt-8 space-y-4 opacity-0",
                isVisible ? "animate-fade-in" : ""
              )}
              style={{ animationDelay: "700ms" }}
            >
              <div className="flex items-center space-x-3">
                <div className="h-1 w-12 bg-blue-600 rounded"></div>
                <span className="text-blue-600 font-medium">Innovation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-1 w-12 bg-blue-600 rounded"></div>
                <span className="text-blue-600 font-medium">Reliability</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-1 w-12 bg-blue-600 rounded"></div>
                <span className="text-blue-600 font-medium">Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

