import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Karad Catalyst | Social Media Management & Creative Agency</title>
        <meta 
          name="description" 
          content="A boutique social media management firm specializing in high-impact strategy, creative execution, and measurable growth. We craft social momentum, not just content." 
        />
        <meta name="keywords" content="social media management, SMM, content creation, digital marketing, brand strategy, social media agency" />
        <link rel="canonical" href="https://karad.co.in" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Noise texture overlay */}
        <div className="fixed inset-0 noise pointer-events-none z-50" />
        
        <Navbar />
        
        <main>
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <TeamSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
