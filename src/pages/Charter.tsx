import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookingForm from "@/components/BookingForm";
import { 
  Plane, 
  Ship, 
  Users, 
  Clock, 
  Shield, 
  Star,
  MapPin,
  Phone,
  Calendar
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import chauffeurImage from "@/assets/chauffeur-service.jpg";
import airSeaCharterImage from "@/assets/services/air-sea-charter.jpg";

const Charter = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const charterServices = [
    {
      icon: Plane,
      title: "Private Jet Charter",
      description: "Luxurious private jet travel for business and leisure",
      features: ["Global Destinations", "24/7 Availability", "Personalized Service", "Executive Catering"],
      image: airSeaCharterImage,
      priceRange: "₦2,500,000 - ₦8,000,000/trip"
    },
    {
      icon: Ship,
      title: "Yacht Charter",
      description: "Exclusive yacht experiences along Nigeria's beautiful coastline",
      features: ["Luxury Yachts", "Professional Crew", "Gourmet Dining", "Water Sports"],
      image: airSeaCharterImage,
      priceRange: "₦1,200,000 - ₦5,000,000/day"
    },
    {
      icon: Users,
      title: "Executive Chauffeur",
      description: "Professional chauffeur services for discerning clients",
      features: ["Trained Drivers", "Luxury Vehicles", "Punctual Service", "Multilingual"],
      image: chauffeurImage,
      priceRange: "₦50,000 - ₦150,000/day"
    }
  ];

  const chauffeurPackages = [
    {
      name: "Executive Package",
      price: "₦75,000/day",
      features: [
        "Professional uniformed chauffeur",
        "Luxury sedan (Mercedes S-Class)",
        "8-hour service",
        "Meet & greet service",
        "Refreshments included"
      ],
      popular: false
    },
    {
      name: "VIP Package",
      price: "₦120,000/day",
      features: [
        "Senior executive chauffeur",
        "Premium SUV (Range Rover)",
        "12-hour service",
        "Airport transfers included",
        "Security-trained driver",
        "Premium refreshments"
      ],
      popular: true
    },
    {
      name: "Presidential Package",
      price: "₦200,000/day",
      features: [
        "Elite chauffeur team",
        "Armored luxury vehicle",
        "24-hour availability",
        "Security escort available",
        "Concierge services",
        "Red carpet treatment"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Charter & <span className="text-secondary">Chauffeur</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Elevate your travel experience with our exclusive charter and professional chauffeur services
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gold" size="lg" className="px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Book Charter
              </Button>
              <Button variant="outline" size="lg" className="px-8 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Charter Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Premium <span className="text-secondary">Charter Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the ultimate in luxury travel with our comprehensive charter services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {charterServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-luxury transition-luxury bg-gradient-card border-border/50 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <service.icon className="w-10 h-10 text-secondary" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-primary-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/90 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="text-lg font-bold text-secondary mb-4">
                    {service.priceRange}
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-luxury" onClick={() => setBookingModalOpen(true)}>
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chauffeur Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Chauffeur <span className="text-secondary">Packages</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect chauffeur package for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chauffeurPackages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden transition-luxury hover:shadow-luxury ${
                pkg.popular ? 'ring-2 ring-secondary bg-gradient-card' : 'bg-card'
              }`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-secondary text-secondary-foreground text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={pkg.popular ? 'pt-12' : ''}>
                  <CardTitle className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-2">{pkg.name}</div>
                    <div className="text-3xl font-bold text-secondary">{pkg.price}</div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                  
                  <Button 
                    variant={pkg.popular ? "luxury" : "outline"} 
                    className="w-full mt-6"
                    onClick={() => setBookingModalOpen(true)}
                  >
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-luxury text-primary-foreground">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Why Choose MagniCarz Charter & Chauffeur?</h3>
                <p className="text-primary-foreground/90 text-lg">
                  Uncompromising excellence in luxury transportation and travel
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Security First</h4>
                  <p className="text-sm text-primary-foreground/80">
                    All our staff are thoroughly vetted and security trained
                  </p>
                </div>
                
                <div className="text-center">
                  <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">24/7 Availability</h4>
                  <p className="text-sm text-primary-foreground/80">
                    Round-the-clock service for all your travel needs
                  </p>
                </div>
                
                <div className="text-center">
                  <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Premium Quality</h4>
                  <p className="text-sm text-primary-foreground/80">
                    Only the finest vehicles and highest service standards
                  </p>
                </div>
                
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Global Reach</h4>
                  <p className="text-sm text-primary-foreground/80">
                    Services available across Nigeria and international destinations
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <Button variant="gold" size="lg" className="px-12">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us Today
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BookingForm
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default Charter;