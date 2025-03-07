
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
