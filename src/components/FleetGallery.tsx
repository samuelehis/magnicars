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
import g63BulletproofImage from "@/assets/cars/2020-G63-Bulletprooof.jpg";
import benzSclassImage from "@/assets/cars/Benz-S-Class-2023.jpg";
import escalade2024Image from "@/assets/cars/Escalade-2024.jpg";
import rangeRoverSportImage from "@/assets/cars/Range-Rover-Sport.jpg";
import maybachVianoImage from "@/assets/cars/Maybach-Viano.jpg";
import gle350Image from "@/assets/cars/GLE-350-2017.jpg";

const FleetGallery = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedTransmission, setSelectedTransmission] = useState("all");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedCarForBooking, setSelectedCarForBooking] = useState("");

  const cars = [
    // Premium Fleet - High End & Top Luxury
    {
      id: 1,
      model: "Rolls Royce Phantom",
      year: 2023,
      transmission: "Auto",
      price: 6000000,
      type: "high-end",
      location: "lagos",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["Ultimate Luxury", "Chauffeur", "Prestige"]
    },
    {
      id: 2,
      model: "Toyota Prado",
      year: 2019,
      transmission: "Auto",
      price: 220000,
      type: "high-end",
      location: "lagos",
      image: toyotaPradoImage,
      rating: 5.0,
      features: ["Ultimate SUV", "Luxury", "Prestige"]
    },
    {
      id: 3,
      model: "Mercedes Benz G63 Bulletproof",
      year: 2020,
      transmission: "Auto",
      price: 2300000,
      type: "bulletproof",
      location: "lagos",
      image: g63BulletproofImage,
      rating: 5.0,
      features: ["Armored", "VIP Security", "Ultimate Protection"]
    },
    {
      id: 4,
      model: "Escalade",
      year: 2024,
      transmission: "Auto",
      price: 750000,
      type: "high-end",
      location: "lagos",
      image: escalade2024Image,
      rating: 5.0,
      features: ["Performance", "Luxury", "Prestige"]
    },
    {
      id: 5,
      model: "Mercedes Benz GLE350",
      year: 2017,
      transmission: "Auto",
      price: 300000,
      type: "luxury-suv",
      location: "lagos",
      image: gle350Image,
      rating: 5.0,
      features: ["Iconic", "Exclusive", "Power"]
    },
    {
      id: 6,
      model: "Mercedes Benz Maybach S560",
      year: 2023,
      transmission: "Auto",
      price: 1500000,
      type: "luxury-sedan",
      location: "lagos",
      image: benzSclassImage,
      rating: 5.0,
      features: ["Executive", "Ultimate Luxury", "Chauffeur"]
    },
    {
      id: 7,
      model: "Mercedes Benz S-Class 580 AMG",
      year: 2023,
      transmission: "Auto",
      price: 1500000,
      type: "luxury-sedan",
      location: "abuja",
      image: benzSclassImage,
      rating: 5.0,
      features: ["Performance", "Technology", "AMG"]
    },
    {
      id: 8,
      model: "Maybach Viano",
      year: 2022,
      transmission: "Auto",
      price: 600000,
      type: "luxury-bus",
      location: "lagos",
      image: maybachVianoImage,
      rating: 5.0,
      features: ["Executive", "Premium", "Tech"]
    },
    {
      id: 9,
      model: "Range Rover Sport",
      year: 2020,
      transmission: "Auto",
      price: 450000,
      type: "high-end",
      location: "lagos",
      image: rangeRoverSportImage,
      rating: 5.0,
      features: ["British Luxury", "Prestige", "Power"]
    },
  ];

  const filteredCars = cars.filter(car => {
    if (selectedLocation !== "all" && car.location !== selectedLocation) return false;
    if (selectedType !== "all" && car.type !== selectedType) return false;
    if (selectedTransmission !== "all" && car.transmission !== selectedTransmission) return false;
    return true;
  });

  const displayedCars = filteredCars.slice(0, 9);

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}/day`;
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Premium Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exclusive collection of ultra-luxury and high-end vehicles
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="lagos">Lagos</SelectItem>
              <SelectItem value="abuja">Abuja</SelectItem>
              <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger>
              <SelectValue placeholder="Car Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="high-end">High-End Luxury</SelectItem>
              <SelectItem value="luxury-suv">Luxury SUV</SelectItem>
              <SelectItem value="luxury-sedan">Luxury Sedan</SelectItem>
              <SelectItem value="bulletproof">Bulletproof</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedTransmission} onValueChange={setSelectedTransmission}>
            <SelectTrigger>
              <SelectValue placeholder="Transmission" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Transmissions</SelectItem>
              <SelectItem value="Auto">Automatic</SelectItem>
              <SelectItem value="Manual">Manual</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Cars Grid */}
        {displayedCars.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedCars.map((car) => (
                <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={car.image} 
                        alt={car.model}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 right-4 bg-gold text-gold-foreground">
                        {car.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{car.model}</h3>
                    
                    <div className="flex items-center gap-1 mb-4">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="text-sm font-semibold">{car.rating}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {car.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="capitalize">{car.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Settings className="w-4 h-4" />
                        <span>{car.transmission}</span>
                      </div>
                    </div>

                    <div className="text-2xl font-bold text-gold mb-4">
                      {formatPrice(car.price)}
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0 gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => navigate(`/car/${car.id}`)}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="gold"
                      className="flex-1"
                      onClick={() => {
                        setSelectedCarForBooking(car.model);
                        setBookingModalOpen(true);
                      }}
                    >
                      Book Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredCars.length > 9 && (
              <div className="text-center">
                <Button 
                  variant="gold"
                  size="lg"
                  onClick={() => navigate('/fleet')}
                >
                  View More Fleet
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No vehicles match your current filters. Please adjust your selection.
            </p>
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
