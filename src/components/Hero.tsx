import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Car, Users, Shield, Plane, CreditCard, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-luxury-car.jpg";
import BookingForm from "./BookingForm";

const Hero = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const services = [
    { icon: Car, title: "Luxury Rentals", description: "Premium fleet at your service" },
    { icon: CreditCard, title: "Auto Sales", description: "Certified luxury vehicles" },
    { icon: CreditCard, title: "Car Financing", description: "Flexible payment plans" },
    { icon: Plane, title: "Air & Sea Charter", description: "Elite travel solutions" },
    { icon: Users, title: "Chauffeur & Escort", description: "Professional drivers" },
    { icon: Shield, title: "Car Tracking & Safety", description: "Advanced security systems" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury car"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Prestige in Motion —{" "}
            <span className="text-secondary">Nigeria's Premier</span>{" "}
            Luxury Car Experience
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl leading-relaxed">
            MagniCarz is Nigeria's premier luxury car rental and automotive services brand, 
            serving clients in Lagos, Abuja, and Port Harcourt. From chauffeur-driven Rolls Royces 
            to executive car loans and jet charters, our tailored services elevate every journey 
            into a statement of excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="gold" size="lg" className="text-lg px-8 py-3">
              Explore Fleet
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-3" onClick={() => setBookingModalOpen(true)}>
              Book Now
            </Button>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card/10 backdrop-blur-sm border border-secondary/20 rounded-lg p-4 text-center hover:bg-card/20 transition-luxury group"
              >
                <service.icon className="w-8 h-8 text-secondary mx-auto mb-2 group-hover:scale-110 transition-luxury" />
                <h3 className="text-primary-foreground font-semibold text-sm mb-1">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/70 text-xs">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <BookingForm
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </section>
  );
};

export default Hero;