import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Settings, Calendar, Star } from "lucide-react";
import BookingForm from "./BookingForm";
import rollsRoyceImage from "@/assets/cars/rolls-royce-cullinan.jpg";
import hondaAccordImage from "@/assets/cars/honda-accord.jpg";
import toyotaLandcruiserImage from "@/assets/cars/toyota-landcruiser.jpg";
import toyotaHiluxImage from "@/assets/cars/toyota-hilux.jpg";
import porscheCayenneImage from "@/assets/cars/porsche-cayenne.jpg";
import toyotaPradoImage from "@/assets/cars/toyota-prado.jpg";
import maybachVianoImage from "@/assets/cars/Maybach-Viano.jpg";
import rangeRoverImage from "@/assets/cars/Range-Rover.jpg";
import escalade2023Image from "@/assets/cars/Escalade-2023.jpg";
import toyotaHilux2024Image from "@/assets/cars/Toyota-Hilux-2024-Magnicarz.jpg";
import toyotaPrado2021Image from "@/assets/cars/Toyota-Prado-2021.jpg";
import toyotaHiaceImage from "@/assets/cars/Toyota-HiAce-2024.png";
import mercedezBenzSclassImage from "@/assets/cars/MercedezBenz-S-class.jpg";
import benzGle350Image from "@/assets/cars/Benz-GLE350-2017.jpg";
import lx570Image from "@/assets/cars/LX570-2018.jpg";
import g63BulletproofImage from "@/assets/cars/2020-G63-Bulletproof.jpg";
import toyotaHighlanderImage from "@/assets/cars/Toyota-Highlander-2019.jpg";

const FleetGallery = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedTransmission, setSelectedTransmission] = useState("all");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedCarForBooking, setSelectedCarForBooking] = useState("");

  const cars = [
    {
      id: 1,
      model: "Rolls Royce Cullinan",
      year: 2023,
      transmission: "Auto",
      price: 6000000,
      type: "luxury-suv",
      location: "lagos",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["Chauffeur Available", "Premium Interior", "WiFi"]
    },
    {
      id: 2,
      model: "Honda Accord",
      year: 2014,
      transmission: "Auto",
      price: 850000,
      type: "sedan",
      location: "abuja",
      image: hondaAccordImage,
      rating: 4.5,
      features: ["Fuel Efficient", "Reliable", "Comfortable"]
    },
    {
      id: 3,
      model: "Toyota LandCruiser",
      year: 2023,
      transmission: "Auto",
      price: 600000,
      type: "suv",
      location: "Lagos",
      image: toyotaLandcruiserImage,
      rating: 4.8,
      features: ["Off-Road Capable", "Spacious", "7-Seater"]
    },
    {
      id: 4,
      model: "Toyota Hilux",
      year: 2024,
      transmission: "Auto",
      price: 300000,
      type: "suv",
      location: "lagos",
      image: toyotaHilux2024Image,
      rating: 4.6,
      features: ["Utility Vehicle", "Robust", "Business Ready"]
    },
    {
      id: 5,
      model: "Porsche Cayenne",
      year: 2019,
      transmission: "Auto",
      price: 650000,
      type: "luxury-suv",
      location: "Lagos",
      image: porscheCayenneImage,
      rating: 5.0,
      features: ["Sports Performance", "Luxury", "Prestige"]
    },
    {
      id: 6,
      model: "Toyota Prado",
      year: 2021,
      transmission: "Auto",
      price: 240000,
      type: "suv",
      location: "lagos",
      image: toyotaPradoImage,
      rating: 4.7,
      features: ["Family Friendly", "Reliable", "Comfortable"]
    },
    {
      id: 7,
      model: "Maybach Viano",
      year: 2023,
      transmission: "Auto",
      price: 6000000,
      type: "luxury-suv",
      location: "lagos",
      image: maybachVianoImage,
      rating: 5.0,
      features: ["Chauffeur Available", "Premium Interior", "WiFi"]
    },
    {
      id: 8,
      model: "Escalade",
      year: 2023,
      transmission: "Auto",
      price: 750000,
      type: "sedan",
      location: "Lagos",
      image: escalade2023Image,
      rating: 4.5,
      features: ["Fuel Efficient", "Reliable", "Comfortable"]
    },
    {
      id: 9,
      model: "Toyota HiAce",
      year: 2024,
      transmission: "Auto",
      price: 400000,
      type: "suv",
      location: "Lagos",
      image: toyotaHiaceImage,
      rating: 4.8,
      features: ["Off-Road Capable", "Spacious", "7-Seater"]
    },
    {
      id: 10,
      model: "Toyota Highlander",
      year: 2019,
      transmission: "Auto",
      price: 170000,
      type: "suv",
      location: "lagos",
      image: toyotaHighlanderImage,
      rating: 4.6,
      features: ["Family friendly", "Robust", "Business Ready"]
    },
    {
      id: 11,
      model: "G63 Bulletproof",
      year: 2020,
      transmission: "Auto",
      price: 2300000,
      type: "luxury-suv",
      location: "Lagos",
      image: g63BulletproofImage,
      rating: 5.0,
      features: ["Bullet Proof", "Luxury", "Prestige"]
    },
    {
      id: 12,
      model: "Toyota Prado",
      year: 2021,
      transmission: "Auto",
      price: 240000,
      type: "suv",
      location: "lagos",
      image: toyotaPrado2021Image,
      rating: 4.7,
      features: ["Family Friendly", "Reliable", "Comfortable"]
    }
  ];

  const filteredCars = cars.filter(car => {
    return (
      (selectedLocation === "all" || car.location === selectedLocation) &&
      (selectedType === "all" || car.type === selectedType) &&
      (selectedTransmission === "all" || car.transmission === selectedTransmission)
    );
  });

// Limit to 12 cars on home page
  const displayedCars = filteredCars.slice(0, 12);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="rentals" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Premium <span className="text-secondary">Fleet</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our carefully curated collection of luxury vehicles, 
            each maintained to the highest standards of excellence.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-[180px]">
              <MapPin className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="lagos">Lagos</SelectItem>
              <SelectItem value="abuja">Abuja</SelectItem>
              <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Car Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="luxury-suv">Luxury SUV</SelectItem>
              <SelectItem value="sedan">Sedan</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="pickup">Pickup</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedTransmission} onValueChange={setSelectedTransmission}>
            <SelectTrigger className="w-[180px]">
              <Settings className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Transmission" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Transmissions</SelectItem>
              <SelectItem value="Auto">Automatic</SelectItem>
              <SelectItem value="Manual">Manual</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <Card key={car.id} className="group hover:shadow-luxury transition-luxury bg-gradient-card border-border/50">
              <CardHeader className="relative p-0">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground">
                    {car.year}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-card/90 px-2 py-1 rounded">
                  <Star className="w-3 h-3 fill-secondary text-secondary" />
                  <span className="text-xs font-medium">{car.rating}</span>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{car.model}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {car.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <Settings className="w-4 h-4" />
                    {car.transmission}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {car.location.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {car.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="text-2xl font-bold text-secondary mb-4">
                  {formatPrice(car.price)}
                  <span className="text-sm text-muted-foreground font-normal">/day</span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="flex gap-2 w-full">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => navigate(`/car/${car.id}`)}
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="luxury" 
                    className="flex-1"
                    onClick={() => {
                      setSelectedCarForBooking(car.model);
                      setBookingModalOpen(true);
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No vehicles match your current filters. Please adjust your search criteria.
            </p>
          </div>
        )}

        {/* View More Fleet Button */}
        {filteredCars.length > 12 && (
          <div className="text-center mt-12">
            <Button 
              variant="luxury" 
              size="lg"
              onClick={() => navigate('/fleet')}
            >
              View More Fleet
            </Button>
          </div>
        )}
      </div>

      <BookingForm
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedCarModel={selectedCarForBooking}
      />
    </section>
  );
};

export default FleetGallery;
