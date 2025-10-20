import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FleetGallery from "@/components/FleetGallery";
import Services from "@/components/Services";
import Sales from "@/components/Sales";
import Financing from "@/components/Financing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FleetGallery />
      <Services />
      <Sales />
      <Financing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
