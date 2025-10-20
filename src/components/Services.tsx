import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookingForm from "./BookingForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  CreditCard, 
  Car, 
  Users, 
  Plane, 
  Shield, 
  ShoppingBag,
  Calendar as CalendarIcon,
  MapPin,
  Calculator,
  ArrowRight
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import chauffeurImage from "@/assets/chauffeur-service.jpg";
import autoLoansImage from "@/assets/services/auto-loans.jpg";
import dealershipImage from "@/assets/services/car-dealership.jpg";
import airSeaCharterImage from "@/assets/services/air-sea-charter.jpg";
import carTrackingImage from "@/assets/services/car-tracking.jpg";

const Services = () => {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [dropoffDate, setDropoffDate] = useState<Date>();
  const [location, setLocation] = useState("");
  const [needsChauffeur, setNeedsChauffeur] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const services = [
    {
      icon: CreditCard,
      title: "Auto Loans & Car Financing",
      description: "Flexible financing options with competitive rates. Get pre-approved in minutes.",
      features: ["36-month FlexiPay", "PremiumDrive Loan", "Corporate Fleet Finance"],
      image: autoLoansImage
    },
    {
      icon: ShoppingBag,
      title: "Car Dealership",
      description: "Premium new and certified pre-owned vehicles from top luxury brands.",
      features: ["Mercedes-Benz", "BMW", "Porsche", "Lexus"],
      image: dealershipImage
    },
    {
      icon: Users,
      title: "Chauffeur & Escort Services",
      description: "Professional drivers for executive transport and special occasions.",
      features: ["Executive Drivers", "Event Transport", "Airport Transfers"],
      image: chauffeurImage
    },
    {
      icon: Plane,
      title: "Air & Sea Charter",
      description: "Exclusive charter services for the ultimate in luxury travel.",
      features: ["Private Jets", "Yacht Charters", "Helicopter Service"],
      image: airSeaCharterImage
    },
    {
      icon: Shield,
      title: "Car Tracking & Safety Films",
      description: "Advanced security systems and protective films for your vehicle.",
      features: ["GPS Tracking", "Security Films", "Anti-Theft Systems"],
      image: carTrackingImage
    }
  ];

  const calculatePrice = () => {
    if (!pickupDate || !dropoffDate || !location) return 0;
    
    const days = Math.ceil((dropoffDate.getTime() - pickupDate.getTime()) / (1000 * 3600 * 24));
    const basePrice = 150000; // Base daily rate
    const chauffeurFee = needsChauffeur ? 50000 : 0;
    
    return (basePrice + chauffeurFee) * Math.max(1, days);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive automotive services designed for the discerning client
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-luxury transition-luxury bg-gradient-card border-border/50 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-luxury">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking Widget */}
        <Card className="max-w-4xl mx-auto bg-gradient-card shadow-luxury border-secondary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">
              Book Your <span className="text-secondary">Luxury Experience</span>
            </CardTitle>
            <p className="text-muted-foreground">
              Select your preferences and get an instant quote
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Pickup Date */}
              <div className="space-y-2">
                <Label>Pickup Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !pickupDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {pickupDate ? format(pickupDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={pickupDate}
                      onSelect={setPickupDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Dropoff Date */}
              <div className="space-y-2">
                <Label>Drop-off Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !dropoffDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dropoffDate ? format(dropoffDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={dropoffDate}
                      onSelect={setDropoffDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label>Location</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                    <MapPin className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="abuja">Abuja</SelectItem>
                    <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <Label>Service Type</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <Car className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rental">Car Rental</SelectItem>
                    <SelectItem value="chauffeur">Chauffeur Service</SelectItem>
                    <SelectItem value="charter">Charter Service</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Chauffeur Toggle */}
            <div className="flex items-center space-x-2 justify-center">
              <Switch
                id="chauffeur"
                checked={needsChauffeur}
                onCheckedChange={setNeedsChauffeur}
              />
              <Label htmlFor="chauffeur" className="text-sm">
                Add Professional Chauffeur (+₦50,000/day)
              </Label>
            </div>

            {/* Price Display */}
            {pickupDate && dropoffDate && location && (
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calculator className="w-5 h-5 text-secondary" />
                  <span className="text-lg font-semibold text-foreground">Estimated Total</span>
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  {formatPrice(calculatePrice())}
                </div>
                <p className="text-sm text-muted-foreground">
                  {pickupDate && dropoffDate && 
                    Math.ceil((dropoffDate.getTime() - pickupDate.getTime()) / (1000 * 3600 * 24))
                  } day(s) • {needsChauffeur ? "With Chauffeur" : "Self Drive"}
                </p>
              </div>
            )}

            {/* Book Button */}
            <div className="text-center">
              <Button 
                variant="luxury" 
                size="lg" 
                className="px-12 py-3 text-lg"
                disabled={!pickupDate || !dropoffDate || !location}
                onClick={() => setBookingModalOpen(true)}
              >
                Book Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <BookingForm
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </section>
  );
};

export default Services;