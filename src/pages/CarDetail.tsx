import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Settings, MapPin, Star, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import rollsRoyceImage from "@/assets/cars/rolls-royce-cullinan.jpg";
import hondaAccordImage from "@/assets/cars/honda-accord.jpg";
import toyotaLandcruiserImage from "@/assets/cars/toyota-landcruiser.jpg";
import toyotaHiluxImage from "@/assets/cars/toyota-hilux.jpg";
import porscheCayenneImage from "@/assets/cars/porsche-cayenne.jpg";
import toyotaPradoImage from "@/assets/cars/toyota-prado.jpg";

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const cars = [
    {
      id: 1,
      model: "Rolls Royce Cullinan",
      year: 2021,
      transmission: "Auto",
      price: 110000,
      type: "luxury-suv",
      location: "lagos",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["Chauffeur Available", "Premium Interior", "WiFi"],
      description: "Experience the pinnacle of luxury with the Rolls Royce Cullinan. This flagship SUV combines unparalleled comfort with commanding presence, featuring hand-crafted interiors and whisper-quiet ride quality.",
      specifications: {
        engine: "6.75L V12 Twin-Turbo",
        power: "563 HP",
        torque: "627 lb-ft",
        acceleration: "5.2 seconds 0-60 mph",
        topSpeed: "155 mph",
        fuelType: "Premium Gasoline",
        drivetrain: "All-Wheel Drive",
        seats: "4-5 Passengers"
      },
      amenities: ["Massage Seats", "Champagne Cooler", "Starlight Headliner", "Premium Sound System", "Climate Control", "Privacy Glass"]
    },
    {
      id: 2,
      model: "Honda Accord",
      year: 2014,
      transmission: "Auto",
      price: 80000,
      type: "sedan",
      location: "abuja",
      image: hondaAccordImage,
      rating: 4.5,
      features: ["Fuel Efficient", "Reliable", "Comfortable"],
      description: "The Honda Accord offers exceptional value with proven reliability and comfort. Perfect for business meetings or daily transportation with excellent fuel efficiency and spacious interior.",
      specifications: {
        engine: "2.4L 4-Cylinder",
        power: "185 HP",
        torque: "181 lb-ft",
        acceleration: "7.7 seconds 0-60 mph",
        topSpeed: "125 mph",
        fuelType: "Regular Gasoline",
        drivetrain: "Front-Wheel Drive",
        seats: "5 Passengers"
      },
      amenities: ["Bluetooth Connectivity", "Backup Camera", "Automatic Climate Control", "Power Windows", "Cruise Control", "USB Ports"]
    },
    {
      id: 3,
      model: "Toyota LandCruiser",
      year: 2020,
      transmission: "Auto",
      price: 280000,
      type: "suv",
      location: "port-harcourt",
      image: toyotaLandcruiserImage,
      rating: 4.8,
      features: ["Off-Road Capable", "Spacious", "7-Seater"],
      description: "The legendary Toyota LandCruiser combines rugged capability with premium comfort. Built to tackle any terrain while providing luxurious accommodations for up to 7 passengers.",
      specifications: {
        engine: "5.7L V8",
        power: "381 HP",
        torque: "401 lb-ft",
        acceleration: "7.3 seconds 0-60 mph",
        topSpeed: "137 mph",
        fuelType: "Regular Gasoline",
        drivetrain: "4WD",
        seats: "8 Passengers"
      },
      amenities: ["Multi-Terrain Select", "Premium Audio", "Navigation System", "Leather Seats", "Sunroof", "Third Row Seating"]
    },
    {
      id: 4,
      model: "Toyota Hilux",
      year: 2022,
      transmission: "Auto",
      price: 150000,
      type: "pickup",
      location: "lagos",
      image: toyotaHiluxImage,
      rating: 4.6,
      features: ["Utility Vehicle", "Robust", "Business Ready"],
      description: "The Toyota Hilux is the ultimate utility vehicle, combining robust performance with modern comfort. Perfect for construction projects, cargo transport, or adventure expeditions.",
      specifications: {
        engine: "2.8L Turbo Diesel",
        power: "201 HP",
        torque: "369 lb-ft",
        acceleration: "10.7 seconds 0-60 mph",
        topSpeed: "109 mph",
        fuelType: "Diesel",
        drivetrain: "4WD",
        seats: "5 Passengers"
      },
      amenities: ["Cargo Bed Liner", "Towing Package", "Hill Start Assist", "Smartphone Integration", "Automatic A/C", "Power Outlets"]
    },
    {
      id: 5,
      model: "Porsche Cayenne",
      year: 2019,
      transmission: "Auto",
      price: 500000,
      type: "luxury-suv",
      location: "abuja",
      image: porscheCayenneImage,
      rating: 5.0,
      features: ["Sports Performance", "Luxury", "Prestige"],
      description: "The Porsche Cayenne redefines the luxury SUV experience with sports car performance and premium comfort. Experience breathtaking acceleration combined with sophisticated luxury.",
      specifications: {
        engine: "3.0L V6 Turbo",
        power: "335 HP",
        torque: "332 lb-ft",
        acceleration: "5.9 seconds 0-60 mph",
        topSpeed: "152 mph",
        fuelType: "Premium Gasoline",
        drivetrain: "All-Wheel Drive",
        seats: "5 Passengers"
      },
      amenities: ["Sport Seats", "Panoramic Roof", "Premium Sound", "Adaptive Suspension", "Sport Exhaust", "Navigation Plus"]
    },
    {
      id: 6,
      model: "Toyota Prado",
      year: 2021,
      transmission: "Auto",
      price: 105000,
      type: "suv",
      location: "lagos",
      image: toyotaPradoImage,
      rating: 4.7,
      features: ["Family Friendly", "Reliable", "Comfortable"],
      description: "The Toyota Prado offers the perfect balance of capability and comfort for families. With proven reliability and versatile seating arrangements, it's ideal for both city driving and weekend adventures.",
      specifications: {
        engine: "2.7L 4-Cylinder",
        power: "163 HP",
        torque: "198 lb-ft",
        acceleration: "11.8 seconds 0-60 mph",
        topSpeed: "106 mph",
        fuelType: "Regular Gasoline",
        drivetrain: "4WD",
        seats: "7 Passengers"
      },
      amenities: ["Flexible Seating", "Rear Entertainment", "Dual Climate Control", "Power Tailgate", "Roof Rails", "Bluetooth Audio"]
    }
  ];

  const car = cars.find(c => c.id === parseInt(id || "0"));

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Car Not Found</h1>
          <Button onClick={() => navigate("/")}>Return to Fleet</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Fleet
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Car Image */}
          <div className="space-y-4">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Car Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground">
                  {car.year}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span className="font-medium">{car.rating}</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {car.model}
              </h1>
              
              <p className="text-muted-foreground text-lg mb-6">
                {car.description}
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {car.year}
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  {car.transmission}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {car.location.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </div>
              </div>

              <div className="text-3xl font-bold text-secondary mb-6">
                {formatPrice(car.price)}
                <span className="text-base text-muted-foreground font-normal">/day</span>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Key Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="luxury" className="flex-1" size="lg" onClick={() => setBookingModalOpen(true)}>
                    Book Now
                  </Button>
                  <Button variant="outline" size="lg" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications and Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Technical Specifications</h3>
              <div className="space-y-3">
                {Object.entries(car.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center border-b border-border/50 pb-2">
                    <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="font-medium text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Premium Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {car.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Ready to Experience Luxury?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us today to reserve this premium vehicle or learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="lg" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +234 (0) 123 456 789
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                rental@luxuryfleet.com
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <BookingForm
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedCarModel={car.model}
      />

      <Footer />
    </div>
  );
};

export default CarDetail;