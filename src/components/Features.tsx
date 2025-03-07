
import { useState, useEffect, useRef } from 'react';
import { CheckCircle, ShieldCheck, Zap, LineChart, PieChart, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedTitle } from './ui/AnimatedText';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const FeatureCard = ({ title, description, icon, index }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass-card rounded-2xl p-8 transition-all duration-500 hover:shadow-lg opacity-0",
        isVisible ? "animate-fade-in-up" : ""
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const features = [
  {
    title: "Advanced Analytics",
    description: "Gain deep insights with our powerful analytics engine that transforms raw data into actionable business intelligence.",
    icon: <LineChart className="w-6 h-6" />
  },
  {
    title: "Smart Automation",
    description: "Streamline workflows and eliminate manual tasks with intelligent automation powered by machine learning.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Secure Platform",
    description: "Enterprise-grade security with end-to-end encryption, ensuring your sensitive data remains protected.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Real-time Insights",
    description: "Monitor key metrics in real-time with dynamic dashboards that update as your data changes.",
    icon: <PieChart className="w-6 h-6" />
  },
  {
    title: "Predictive Analytics",
    description: "Forecast trends and anticipate market changes with our advanced predictive models.",
    icon: <BarChart className="w-6 h-6" />
  },
  {
    title: "Seamless Integration",
    description: "Connect with your existing tools and platforms through our extensive API and pre-built integrations.",
    icon: <CheckCircle className="w-6 h-6" />
  }
];

export default function Features() {
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
    <section id="features" ref={sectionRef} className="bg-white section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div 
            className={cn(
              "inline-block bg-blue-50 px-4 py-2 rounded-full mb-4 opacity-0",
              isVisible ? "animate-fade-in" : ""
            )}
          >
            <p className="text-blue-700 text-sm font-medium">Core Features</p>
          </div>
          
          {isVisible && (
            <AnimatedTitle 
              text="Intelligent Solutions for Modern Businesses" 
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
            Our platform combines powerful analytics, automation, and AI to help you make better decisions and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

