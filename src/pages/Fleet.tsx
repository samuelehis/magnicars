import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Settings, Calendar, Star } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import rollsRoyceImage from "@/assets/cars/rolls-royce-cullinan.jpg";
import hondaAccordImage from "@/assets/cars/honda-accord.jpg";
import toyotaLandcruiserImage from "@/assets/cars/toyota-landcruiser.jpg";
import toyotaHiluxImage from "@/assets/cars/toyota-hilux.jpg";
import porscheCayenneImage from "@/assets/cars/porsche-cayenne.jpg";
import toyotaPradoImage from "@/assets/cars/toyota-prado.jpg";

const Fleet = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedTransmission, setSelectedTransmission] = useState("all");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedCarForBooking, setSelectedCarForBooking] = useState("");

  const cars = [
    // HIGH END LUXURY
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
      model: "Rolls Royce Cullinan",
      year: 2023,
      transmission: "Auto",
      price: 6000000,
      type: "high-end",
      location: "lagos",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["Ultimate SUV", "Luxury", "Prestige"]
    },
    {
      id: 3,
      model: "Bentley GT",
      year: 2023,
      transmission: "Auto",
      price: 2000000,
      type: "high-end",
      location: "lagos",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["Performance", "Luxury", "Prestige"]
    },
    {
      id: 4,
      model: "Rolls Royce Ghost",
      year: 2023,
      transmission: "Auto",
      price: 900000,
      type: "high-end",
      location: "abuja",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["Elegance", "Chauffeur", "Premium"]
    },
    {
      id: 5,
      model: "Bentley",
      year: 2020,
      transmission: "Auto",
      price: 1300000,
      type: "high-end",
      location: "lagos",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["British Luxury", "Prestige", "Power"]
    },
    {
      id: 6,
      model: "Cadillac Escalade",
      year: 2023,
      transmission: "Auto",
      price: 750000,
      type: "luxury-suv",
      location: "abuja",
      image: porscheCayenneImage,
      rating: 4.9,
      features: ["Spacious", "Premium", "Tech"]
    },
    {
      id: 7,
      model: "Porsche Cayenne",
      year: 2023,
      transmission: "Auto",
      price: 650000,
      type: "luxury-suv",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 5.0,
      features: ["Sports Performance", "Luxury", "AMG"]
    },

    // MERCEDES BENZ EXOTIC CARS
    {
      id: 8,
      model: "Mercedes Benz G63 Soft Body",
      year: 2022,
      transmission: "Auto",
      price: 1800000,
      type: "luxury-suv",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 5.0,
      features: ["Iconic", "Exclusive", "Power"]
    },
    {
      id: 9,
      model: "Mercedes Benz Maybach S560",
      year: 2023,
      transmission: "Auto",
      price: 1500000,
      type: "luxury-sedan",
      location: "lagos",
      image: hondaAccordImage,
      rating: 5.0,
      features: ["Executive", "Ultimate Luxury", "Chauffeur"]
    },
    {
      id: 10,
      model: "Mercedes Benz S-Class 580 AMG",
      year: 2023,
      transmission: "Auto",
      price: 1500000,
      type: "luxury-sedan",
      location: "abuja",
      image: hondaAccordImage,
      rating: 5.0,
      features: ["Performance", "Technology", "AMG"]
    },
    {
      id: 11,
      model: "BMW 730i Series",
      year: 2023,
      transmission: "Auto",
      price: 1500000,
      type: "luxury-sedan",
      location: "lagos",
      image: hondaAccordImage,
      rating: 5.0,
      features: ["Executive", "Premium", "Tech"]
    },
    {
      id: 12,
      model: "Mercedes Benz GLC 300",
      year: 2023,
      transmission: "Auto",
      price: 1300000,
      type: "luxury-suv",
      location: "abuja",
      image: porscheCayenneImage,
      rating: 5.0,
      features: ["Brand New", "Luxury", "Compact SUV"]
    },
    {
      id: 13,
      model: "Mercedes Benz G63",
      year: 2019,
      transmission: "Auto",
      price: 900000,
      type: "luxury-suv",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 5.0,
      features: ["Iconic Design", "Premium", "Power"]
    },
    {
      id: 14,
      model: "Mercedes Benz Maybach",
      year: 2020,
      transmission: "Auto",
      price: 700000,
      type: "luxury-sedan",
      location: "abuja",
      image: hondaAccordImage,
      rating: 5.0,
      features: ["White", "Luxury", "Chauffeur"]
    },
    {
      id: 15,
      model: "Mercedes Benz GLS 580",
      year: 2022,
      transmission: "Auto",
      price: 650000,
      type: "luxury-suv",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 4.9,
      features: ["7-Seater", "Premium", "Spacious"]
    },
    {
      id: 16,
      model: "Mercedes Benz Viano V250",
      year: 2022,
      transmission: "Auto",
      price: 600000,
      type: "luxury-bus",
      location: "port-harcourt",
      image: porscheCayenneImage,
      rating: 4.8,
      features: ["Luxury Bus", "Spacious", "Premium"]
    },
    {
      id: 17,
      model: "Mercedes Sprinter Bus",
      year: 2018,
      transmission: "Auto",
      price: 550000,
      type: "bus",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 4.7,
      features: ["Group Transport", "Comfortable", "Spacious"]
    },
    {
      id: 18,
      model: "Mercedes Benz GLS 450",
      year: 2020,
      transmission: "Auto",
      price: 500000,
      type: "luxury-suv",
      location: "abuja",
      image: porscheCayenneImage,
      rating: 4.8,
      features: ["Premium", "7-Seater", "Tech"]
    },
    {
      id: 19,
      model: "Mercedes Benz G63",
      year: 2018,
      transmission: "Auto",
      price: 450000,
      type: "luxury-suv",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 4.8,
      features: ["Iconic", "Premium", "Power"]
    },
    {
      id: 20,
      model: "Range Rover Sport",
      year: 2021,
      transmission: "Auto",
      price: 450000,
      type: "luxury-suv",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 4.9,
      features: ["Sporty", "Luxury", "Performance"]
    },
    {
      id: 21,
      model: "Range Rover Sport",
      year: 2020,
      transmission: "Auto",
      price: 450000,
      type: "luxury-suv",
      location: "abuja",
      image: porscheCayenneImage,
      rating: 4.9,
      features: ["Sporty", "Luxury", "Performance"]
    },
    {
      id: 22,
      model: "Range Rover Vogue",
      year: 2018,
      transmission: "Auto",
      price: 350000,
      type: "luxury-suv",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 4.8,
      features: ["Elegant", "Luxury", "Comfortable"]
    },

    // LEXUS EXOTIC CARS
    {
      id: 23,
      model: "Lexus LX570",
      year: 2023,
      transmission: "Auto",
      price: 1300000,
      type: "luxury-suv",
      location: "lagos",
      image: toyotaLandcruiserImage,
      rating: 5.0,
      features: ["Premium", "Spacious", "Luxury"]
    },
    {
      id: 24,
      model: "Lexus LS500",
      year: 2020,
      transmission: "Auto",
      price: 850000,
      type: "luxury-sedan",
      location: "abuja",
      image: hondaAccordImage,
      rating: 4.9,
      features: ["Executive", "Hybrid", "Tech"]
    },
    {
      id: 25,
      model: "Lexus LX570",
      year: 2021,
      transmission: "Auto",
      price: 450000,
      type: "luxury-suv",
      location: "lagos",
      image: toyotaLandcruiserImage,
      rating: 4.9,
      features: ["Direct", "Premium", "7-Seater"]
    },
    {
      id: 26,
      model: "Lexus LX570",
      year: 2018,
      transmission: "Auto",
      price: 350000,
      type: "luxury-suv",
      location: "port-harcourt",
      image: toyotaLandcruiserImage,
      rating: 4.8,
      features: ["Reliable", "Spacious", "Luxury"]
    },
    {
      id: 27,
      model: "Lexus GX460",
      year: 2020,
      transmission: "Auto",
      price: 170000,
      type: "suv",
      location: "lagos",
      image: toyotaLandcruiserImage,
      rating: 4.7,
      features: ["Off-Road", "Reliable", "Spacious"]
    },
    {
      id: 28,
      model: "Lexus GX460",
      year: 2018,
      transmission: "Auto",
      price: 170000,
      type: "suv",
      location: "abuja",
      image: toyotaLandcruiserImage,
      rating: 4.7,
      features: ["Off-Road", "Reliable", "Spacious"]
    },

    // TOYOTA EXOTIC CARS
    {
      id: 29,
      model: "Toyota Landcruiser",
      year: 2023,
      transmission: "Auto",
      price: 600000,
      type: "suv",
      location: "lagos",
      image: toyotaLandcruiserImage,
      rating: 4.9,
      features: ["Premium", "Off-Road", "7-Seater"]
    },
    {
      id: 30,
      model: "Toyota Landcruiser",
      year: 2023,
      transmission: "Auto",
      price: 400000,
      type: "suv",
      location: "abuja",
      image: toyotaLandcruiserImage,
      rating: 4.8,
      features: ["Upgraded", "Reliable", "Spacious"]
    },
    {
      id: 31,
      model: "Toyota Landcruiser",
      year: 2020,
      transmission: "Auto",
      price: 250000,
      type: "suv",
      location: "lagos",
      image: toyotaLandcruiserImage,
      rating: 4.8,
      features: ["Upgraded", "Off-Road", "Reliable"]
    },
    {
      id: 32,
      model: "Toyota Prado",
      year: 2021,
      transmission: "Auto",
      price: 240000,
      type: "suv",
      location: "port-harcourt",
      image: toyotaPradoImage,
      rating: 4.7,
      features: ["Family Friendly", "Reliable", "Comfortable"]
    },
    {
      id: 33,
      model: "Toyota Prado",
      year: 2021,
      transmission: "Auto",
      price: 220000,
      type: "suv",
      location: "lagos",
      image: toyotaPradoImage,
      rating: 4.7,
      features: ["Direct", "Reliable", "Comfortable"]
    },
    {
      id: 34,
      model: "Toyota Prado",
      year: 2020,
      transmission: "Auto",
      price: 150000,
      type: "suv",
      location: "abuja",
      image: toyotaPradoImage,
      rating: 4.6,
      features: ["Upgraded", "Family Friendly", "Reliable"]
    },

    // BULLETPROOF VEHICLES
    {
      id: 35,
      model: "Mercedes Benz G63 Bulletproof",
      year: 2020,
      transmission: "Auto",
      price: 2300000,
      type: "bulletproof",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 5.0,
      features: ["Armored", "VIP Security", "Ultimate Protection"]
    },
    {
      id: 36,
      model: "Toyota Landcruiser Bulletproof",
      year: 2023,
      transmission: "Auto",
      price: 1200000,
      type: "bulletproof",
      location: "lagos",
      image: toyotaLandcruiserImage,
      rating: 5.0,
      features: ["Direct", "Armored", "Security"]
    },
    {
      id: 37,
      model: "Lexus LX570 Bulletproof",
      year: 2021,
      transmission: "Auto",
      price: 700000,
      type: "bulletproof",
      location: "abuja",
      image: toyotaLandcruiserImage,
      rating: 4.9,
      features: ["Armored", "Luxury", "Protection"]
    },
    {
      id: 38,
      model: "Toyota Landcruiser Bulletproof",
      year: 2020,
      transmission: "Auto",
      price: 550000,
      type: "bulletproof",
      location: "lagos",
      image: toyotaLandcruiserImage,
      rating: 4.8,
      features: ["Upgraded", "Armored", "Security"]
    },
    {
      id: 39,
      model: "Toyota Prado Bulletproof",
      year: 2021,
      transmission: "Auto",
      price: 400000,
      type: "bulletproof",
      location: "port-harcourt",
      image: toyotaPradoImage,
      rating: 4.7,
      features: ["Armored", "Security", "Reliable"]
    },
    {
      id: 40,
      model: "BMW Bulletproof",
      year: 2021,
      transmission: "Auto",
      price: 400000,
      type: "bulletproof",
      location: "abuja",
      image: hondaAccordImage,
      rating: 4.7,
      features: ["Armored", "Executive", "Protection"]
    },
  ];

  const filteredCars = cars.filter(car => {
    if (selectedLocation !== "all" && car.location !== selectedLocation) return false;
    if (selectedType !== "all" && car.type !== selectedType) return false;
    if (selectedTransmission !== "all" && car.transmission !== selectedTransmission) return false;
    return true;
  });

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}/day`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Complete Fleet Catalogue
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our extensive collection of premium vehicles, from luxury sedans to bulletproof SUVs
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
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="bulletproof">Bulletproof</SelectItem>
                <SelectItem value="luxury-bus">Luxury Bus</SelectItem>
                <SelectItem value="bus">Bus</SelectItem>
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
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
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
                    <h3 className="text-2xl font-bold text-foreground mb-2">{car.model}</h3>
                    
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

                    <div className="text-3xl font-bold text-gold mb-4">
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
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No vehicles match your current filters. Please adjust your selection.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <BookingForm 
        isOpen={bookingModalOpen} 
        onClose={() => setBookingModalOpen(false)}
        selectedCarModel={selectedCarForBooking}
      />
    </div>
  );
};

export default Fleet;
