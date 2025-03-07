
import { useEffect, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { AnimatedTitle } from '@/components/ui/AnimatedText';
import { cn } from '@/lib/utils';
import { Users, Award, Lightbulb, BarChart } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  index: number;
}

const TeamMember = ({ name, role, index }: TeamMemberProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-xl shadow-md text-center opacity-0",
        isVisible ? "animate-fade-in-up" : ""
      )}
      style={{ animationDelay: `${200 + index * 100}ms` }}
    >
      <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">{name.charAt(0)}</span>
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

const teamMembers = [
  { name: "Sarah Johnson", role: "CEO & Founder" },
  { name: "Michael Chen", role: "CTO" },
  { name: "Amelia Patel", role: "Head of AI Research" },
  { name: "David Wilson", role: "Lead Data Scientist" }
];

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <PageLayout>
      <section className="bg-gradient-to-b from-gray-50 to-white section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div 
              className={cn(
                "inline-block bg-blue-50 px-4 py-2 rounded-full mb-4 opacity-0",
                isVisible ? "animate-fade-in" : ""
              )}
            >
              <p className="text-blue-700 text-sm font-medium">About Intelion</p>
            </div>
            
            {isVisible && (
              <AnimatedTitle 
                text="Pioneering the Future of Business Intelligence" 
                className="text-3xl md:text-4xl font-bold mb-6 justify-center"
                delay={300}
              />
            )}
            
            <p 
              className={cn(
                "text-gray-600 max-w-3xl mx-auto opacity-0",
                isVisible ? "animate-fade-in" : ""
              )}
              style={{ animationDelay: "500ms" }}
            >
              At Intelion, we believe in the transformative power of data. Our platform combines advanced analytics, 
              machine learning, and intuitive design to help businesses of all sizes make better decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div 
              className={cn(
                "opacity-0",
                isVisible ? "animate-fade-in-up" : ""
              )}
            >
              <div 
                className="aspect-video bg-gradient-to-tr from-blue-500 to-blue-400 rounded-2xl overflow-hidden shadow-xl"
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
                "space-y-6 opacity-0",
                isVisible ? "animate-fade-in" : ""
              )}
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0 text-blue-600">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovation at Core</h3>
                  <p className="text-gray-600">
                    We're continuously pushing the boundaries of what's possible with data analytics and AI. 
                    Our R&D team works tirelessly to develop new features and capabilities.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0 text-blue-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Customer-Focused Approach</h3>
                  <p className="text-gray-600">
                    Our solutions are built based on real customer needs. We work closely with our users to 
                    understand their challenges and develop features that address them effectively.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0 text-blue-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Commitment to Excellence</h3>
                  <p className="text-gray-600">
                    Quality is non-negotiable at Intelion. Our rigorous testing and quality assurance processes 
                    ensure that our platform is reliable, secure, and performs at the highest level.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className={cn(
              "text-3xl font-bold mb-12 text-center opacity-0",
              isVisible ? "animate-fade-in" : ""
            )}>
              Our Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className={cn(
                    "md:w-1/2 text-right pr-12 opacity-0 mb-6 md:mb-0",
                    isVisible ? "animate-fade-in-right" : ""
                  )}>
                    <h3 className="text-xl font-bold mb-2">2018</h3>
                    <p className="text-gray-600">Intelion was founded with a vision to democratize data analytics.</p>
                  </div>
                  <div className="rounded-full bg-blue-500 w-6 h-6 z-10 mb-6 md:mb-0"></div>
                  <div className="md:w-1/2"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2"></div>
                  <div className="rounded-full bg-blue-500 w-6 h-6 z-10 mb-6 md:mb-0"></div>
                  <div className={cn(
                    "md:w-1/2 text-left pl-12 opacity-0 mb-6 md:mb-0",
                    isVisible ? "animate-fade-in-left" : ""
                  )} style={{ animationDelay: "200ms" }}>
                    <h3 className="text-xl font-bold mb-2">2020</h3>
                    <p className="text-gray-600">Launched our first AI-powered analytics platform.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className={cn(
                    "md:w-1/2 text-right pr-12 opacity-0 mb-6 md:mb-0",
                    isVisible ? "animate-fade-in-right" : ""
                  )} style={{ animationDelay: "400ms" }}>
                    <h3 className="text-xl font-bold mb-2">2022</h3>
                    <p className="text-gray-600">Expanded our services to include predictive analytics and machine learning solutions.</p>
                  </div>
                  <div className="rounded-full bg-blue-500 w-6 h-6 z-10 mb-6 md:mb-0"></div>
                  <div className="md:w-1/2"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2"></div>
                  <div className="rounded-full bg-blue-500 w-6 h-6 z-10 mb-6 md:mb-0"></div>
                  <div className={cn(
                    "md:w-1/2 text-left pl-12 opacity-0 mb-6 md:mb-0",
                    isVisible ? "animate-fade-in-left" : ""
                  )} style={{ animationDelay: "600ms" }}>
                    <h3 className="text-xl font-bold mb-2">Today</h3>
                    <p className="text-gray-600">Serving over 500 businesses worldwide with our comprehensive intelligence platform.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className={cn(
            "text-3xl font-bold mb-12 text-center opacity-0",
            isVisible ? "animate-fade-in" : ""
          )} style={{ animationDelay: "800ms" }}>
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                role={member.role}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
