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
    // Luxury SUVs
    {
      id: 1,
      model: "Mercedes-Benz G-Wagon",
      year: 2021,
      transmission: "Auto",
      price: 1200000,
      type: "luxury-suv",
      location: "lagos",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["Iconic Design", "Premium", "Power"]
    },
    {
      id: 2,
      model: "Mercedes-Benz G-Wagon",
      year: 2022,
      transmission: "Auto",
      price: 1200000,
      type: "luxury-suv",
      location: "abuja",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["Iconic Design", "Premium", "Power"]
    },
    {
      id: 3,
      model: "Mercedes-Benz S-Class",
      year: 2024,
      transmission: "Auto",
      price: 1500000,
      type: "luxury-suv",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 5.0,
      features: ["Executive", "Luxury", "Tech Features"]
    },
    {
      id: 4,
      model: "Mercedes-Benz S-Class 560",
      year: 2021,
      transmission: "Auto",
      price: 650000,
      type: "luxury-suv",
      location: "abuja",
      image: porscheCayenneImage,
      rating: 5.0,
      features: ["Self Drive", "Premium", "Comfortable"]
    },
    {
      id: 5,
      model: "Mercedes-Benz GLE 63",
      year: 2023,
      transmission: "Auto",
      price: 900000,
      type: "luxury-suv",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 4.9,
      features: ["Performance", "Luxury", "AMG"]
    },
    {
      id: 6,
      model: "Mercedes-Benz GLE 43",
      year: 2023,
      transmission: "Auto",
      price: 500000,
      type: "luxury-suv",
      location: "abuja",
      image: porscheCayenneImage,
      rating: 4.8,
      features: ["Sporty", "Elegant", "AMG"]
    },
    {
      id: 7,
      model: "Mercedes-Benz GLE 450",
      year: 2023,
      transmission: "Auto",
      price: 500000,
      type: "luxury-suv",
      location: "port-harcourt",
      image: porscheCayenneImage,
      rating: 4.8,
      features: ["Luxury", "Spacious", "Tech"]
    },
    {
      id: 8,
      model: "Mercedes-Benz GLE 350",
      year: 2017,
      transmission: "Auto",
      price: 300000,
      type: "luxury-suv",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 4.6,
      features: ["Self Drive", "Reliable", "Comfortable"]
    },
    {
      id: 9,
      model: "Cadillac Escalade",
      year: 2024,
      transmission: "Auto",
      price: 750000,
      type: "luxury-suv",
      location: "lagos",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["Spacious", "Premium", "American Luxury"]
    },
    {
      id: 10,
      model: "Range Rover Vogue",
      year: 2018,
      transmission: "Auto",
      price: 450000,
      type: "luxury-suv",
      location: "abuja",
      image: rollsRoyceImage,
      rating: 4.8,
      features: ["British Luxury", "Prestige", "Comfort"]
    },
    {
      id: 11,
      model: "Range Rover Velar",
      year: 2018,
      transmission: "Auto",
      price: 450000,
      type: "luxury-suv",
      location: "lagos",
      image: rollsRoyceImage,
      rating: 4.8,
      features: ["Modern Design", "Luxury", "Tech"]
    },
    {
      id: 12,
      model: "Lexus LX 570",
      year: 2018,
      transmission: "Auto",
      price: 450000,
      type: "luxury-suv",
      location: "port-harcourt",
      image: toyotaLandcruiserImage,
      rating: 4.8,
      features: ["Luxury", "Reliable", "Premium Sound"]
    },
    // Toyota SUVs
    {
      id: 13,
      model: "Toyota Land Cruiser",
      year: 2023,
      transmission: "Auto",
      price: 650000,
      type: "suv",
      location: "lagos",
      image: toyotaLandcruiserImage,
      rating: 4.9,
      features: ["Off-Road King", "Spacious", "Reliable"]
    },
    {
      id: 14,
      model: "Toyota Land Cruiser",
      year: 2022,
      transmission: "Auto",
      price: 600000,
      type: "suv",
      location: "abuja",
      image: toyotaLandcruiserImage,
      rating: 4.8,
      features: ["Legendary", "7-Seater", "Durable"]
    },
    {
      id: 15,
      model: "Toyota Land Cruiser",
      year: 2021,
      transmission: "Auto",
      price: 550000,
      type: "suv",
      location: "port-harcourt",
      image: toyotaLandcruiserImage,
      rating: 4.8,
      features: ["Adventure Ready", "Tough", "Spacious"]
    },
    {
      id: 16,
      model: "Toyota Prado",
      year: 2024,
      transmission: "Auto",
      price: 550000,
      type: "suv",
      location: "lagos",
      image: toyotaPradoImage,
      rating: 4.7,
      features: ["Modern", "Family Friendly", "Reliable"]
    },
    {
      id: 17,
      model: "Upgraded Toyota Prado",
      year: 2020,
      transmission: "Auto",
      price: 180000,
      type: "suv",
      location: "abuja",
      image: toyotaPradoImage,
      rating: 4.6,
      features: ["Self Drive", "Upgraded", "Value"]
    },
    {
      id: 18,
      model: "Toyota Prado",
      year: 2019,
      transmission: "Auto",
      price: 220000,
      type: "suv",
      location: "lagos",
      image: toyotaPradoImage,
      rating: 4.5,
      features: ["Reliable", "Comfortable", "Practical"]
    },
    {
      id: 19,
      model: "Toyota Prado",
      year: 2018,
      transmission: "Auto",
      price: 200000,
      type: "suv",
      location: "port-harcourt",
      image: toyotaPradoImage,
      rating: 4.5,
      features: ["Dependable", "Spacious", "Affordable"]
    },
    {
      id: 20,
      model: "Toyota Highlander",
      year: 2019,
      transmission: "Auto",
      price: 170000,
      type: "suv",
      location: "lagos",
      image: toyotaPradoImage,
      rating: 4.5,
      features: ["Self Drive", "Family SUV", "Efficient"]
    },
    {
      id: 21,
      model: "Toyota Highlander",
      year: 2020,
      transmission: "Auto",
      price: 180000,
      type: "suv",
      location: "abuja",
      image: toyotaPradoImage,
      rating: 4.6,
      features: ["Comfortable", "7-Seater", "Reliable"]
    },
    {
      id: 22,
      model: "Toyota Highlander",
      year: 2021,
      transmission: "Auto",
      price: 200000,
      type: "suv",
      location: "lagos",
      image: toyotaPradoImage,
      rating: 4.6,
      features: ["Modern", "Safety Features", "Spacious"]
    },
    {
      id: 23,
      model: "Lexus GX 460",
      year: 2017,
      transmission: "Auto",
      price: 200000,
      type: "suv",
      location: "port-harcourt",
      image: toyotaLandcruiserImage,
      rating: 4.5,
      features: ["Luxury", "Off-Road", "Quality"]
    },
    {
      id: 24,
      model: "Nissan Patrol",
      year: 2021,
      transmission: "Auto",
      price: 380000,
      type: "suv",
      location: "lagos",
      image: toyotaLandcruiserImage,
      rating: 4.7,
      features: ["Powerful", "Spacious", "Desert Warrior"]
    },
    {
      id: 25,
      model: "Nissan Patrol",
      year: 2022,
      transmission: "Auto",
      price: 420000,
      type: "suv",
      location: "abuja",
      image: toyotaLandcruiserImage,
      rating: 4.7,
      features: ["Robust", "Luxury", "Performance"]
    },
    // Pickup Trucks
    {
      id: 26,
      model: "Toyota Hilux",
      year: 2024,
      transmission: "Auto",
      price: 350000,
      type: "pickup",
      location: "lagos",
      image: toyotaHiluxImage,
      rating: 4.7,
      features: ["Latest Model", "Robust", "Work Ready"]
    },
    {
      id: 27,
      model: "Toyota Hilux",
      year: 2024,
      transmission: "Auto",
      price: 300000,
      type: "pickup",
      location: "abuja",
      image: toyotaHiluxImage,
      rating: 4.6,
      features: ["Self Drive", "Utility", "Reliable"]
    },
    {
      id: 28,
      model: "Toyota Hilux",
      year: 2023,
      transmission: "Auto",
      price: 320000,
      type: "pickup",
      location: "port-harcourt",
      image: toyotaHiluxImage,
      rating: 4.6,
      features: ["Durable", "Business Ready", "Tough"]
    },
    {
      id: 29,
      model: "Toyota Hilux",
      year: 2022,
      transmission: "Auto",
      price: 280000,
      type: "pickup",
      location: "lagos",
      image: toyotaHiluxImage,
      rating: 4.5,
      features: ["Dependable", "Utility Vehicle", "Strong"]
    },
    {
      id: 30,
      model: "Toyota Hilux",
      year: 2021,
      transmission: "Auto",
      price: 260000,
      type: "pickup",
      location: "abuja",
      image: toyotaHiluxImage,
      rating: 4.5,
      features: ["Proven", "Work Horse", "Affordable"]
    },
    {
      id: 31,
      model: "Toyota Hilux",
      year: 2020,
      transmission: "Auto",
      price: 250000,
      type: "pickup",
      location: "lagos",
      image: toyotaHiluxImage,
      rating: 4.4,
      features: ["Reliable", "Value", "Practical"]
    },
    {
      id: 32,
      model: "Ford Ranger",
      year: 2024,
      transmission: "Auto",
      price: 340000,
      type: "pickup",
      location: "abuja",
      image: toyotaHiluxImage,
      rating: 4.6,
      features: ["Modern", "Powerful", "Tech Features"]
    },
    {
      id: 33,
      model: "Ford Ranger",
      year: 2023,
      transmission: "Auto",
      price: 320000,
      type: "pickup",
      location: "lagos",
      image: toyotaHiluxImage,
      rating: 4.5,
      features: ["Strong", "Utility", "Capable"]
    },
    {
      id: 34,
      model: "Chevrolet Silverado",
      year: 2023,
      transmission: "Auto",
      price: 380000,
      type: "pickup",
      location: "port-harcourt",
      image: toyotaHiluxImage,
      rating: 4.6,
      features: ["Heavy Duty", "American", "Powerful"]
    },
    {
      id: 35,
      model: "Chevrolet Silverado",
      year: 2022,
      transmission: "Auto",
      price: 360000,
      type: "pickup",
      location: "lagos",
      image: toyotaHiluxImage,
      rating: 4.5,
      features: ["Work Ready", "Reliable", "Spacious Cab"]
    },
    // Vans
    {
      id: 36,
      model: "Toyota Granvia",
      year: 2024,
      transmission: "Auto",
      price: 750000,
      type: "van",
      location: "lagos",
      image: toyotaPradoImage,
      rating: 4.8,
      features: ["Premium Van", "Spacious", "Luxury"]
    },
    {
      id: 37,
      model: "Toyota Granvia",
      year: 2023,
      transmission: "Auto",
      price: 700000,
      type: "van",
      location: "abuja",
      image: toyotaPradoImage,
      rating: 4.7,
      features: ["Family Transport", "Comfortable", "Modern"]
    },
    {
      id: 38,
      model: "Toyota Hiace",
      year: 2024,
      transmission: "Auto",
      price: 400000,
      type: "van",
      location: "lagos",
      image: toyotaPradoImage,
      rating: 4.6,
      features: ["Commercial", "Reliable", "Spacious"]
    },
    {
      id: 39,
      model: "Toyota Hiace",
      year: 2023,
      transmission: "Auto",
      price: 380000,
      type: "van",
      location: "port-harcourt",
      image: toyotaPradoImage,
      rating: 4.5,
      features: ["Business", "Practical", "Efficient"]
    },
    {
      id: 40,
      model: "Mercedes-Benz Viano Black",
      year: 2018,
      transmission: "Auto",
      price: 650000,
      type: "van",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 4.8,
      features: ["Luxury Van", "Executive", "Premium"]
    },
    {
      id: 41,
      model: "Mercedes-Benz Viano Silver",
      year: 2018,
      transmission: "Auto",
      price: 650000,
      type: "van",
      location: "abuja",
      image: porscheCayenneImage,
      rating: 4.8,
      features: ["Luxury Van", "Elegant", "Comfort"]
    },
    {
      id: 42,
      model: "Maybach Viano",
      year: 2020,
      transmission: "Auto",
      price: 600000,
      type: "van",
      location: "lagos",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["Self Drive", "Ultra Luxury", "Exclusive"]
    },
    {
      id: 43,
      model: "Maybach Viano",
      year: 2019,
      transmission: "Auto",
      price: 600000,
      type: "van",
      location: "abuja",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["Premium", "Luxury Transport", "VIP"]
    },
    // Sedans
    {
      id: 44,
      model: "Honda Accord",
      year: 2020,
      transmission: "Auto",
      price: 120000,
      type: "sedan",
      location: "lagos",
      image: hondaAccordImage,
      rating: 4.5,
      features: ["Fuel Efficient", "Reliable", "Comfortable"]
    },
    {
      id: 45,
      model: "Honda Accord",
      year: 2019,
      transmission: "Auto",
      price: 110000,
      type: "sedan",
      location: "abuja",
      image: hondaAccordImage,
      rating: 4.4,
      features: ["Dependable", "Efficient", "Value"]
    },
    {
      id: 46,
      model: "Honda Accord",
      year: 2018,
      transmission: "Auto",
      price: 100000,
      type: "sedan",
      location: "port-harcourt",
      image: hondaAccordImage,
      rating: 4.4,
      features: ["Affordable", "Reliable", "Smooth"]
    },
    {
      id: 47,
      model: "Toyota Camry",
      year: 2022,
      transmission: "Auto",
      price: 140000,
      type: "sedan",
      location: "lagos",
      image: hondaAccordImage,
      rating: 4.6,
      features: ["Reliable", "Comfortable", "Modern"]
    },
    {
      id: 48,
      model: "Toyota Camry",
      year: 2021,
      transmission: "Auto",
      price: 130000,
      type: "sedan",
      location: "abuja",
      image: hondaAccordImage,
      rating: 4.6,
      features: ["Popular", "Efficient", "Quality"]
    },
    {
      id: 49,
      model: "Toyota Camry",
      year: 2020,
      transmission: "Auto",
      price: 120000,
      type: "sedan",
      location: "lagos",
      image: hondaAccordImage,
      rating: 4.5,
      features: ["Trusted", "Smooth Ride", "Value"]
    },
    {
      id: 50,
      model: "Toyota Camry",
      year: 2019,
      transmission: "Auto",
      price: 110000,
      type: "sedan",
      location: "port-harcourt",
      image: hondaAccordImage,
      rating: 4.5,
      features: ["Dependable", "Comfortable", "Efficient"]
    },
    // Additional Luxury SUVs to reach 60+
    {
      id: 51,
      model: "Porsche Cayenne",
      year: 2023,
      transmission: "Auto",
      price: 850000,
      type: "luxury-suv",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 5.0,
      features: ["Sports Performance", "Luxury", "Prestige"]
    },
    {
      id: 52,
      model: "Porsche Cayenne",
      year: 2022,
      transmission: "Auto",
      price: 800000,
      type: "luxury-suv",
      location: "abuja",
      image: porscheCayenneImage,
      rating: 5.0,
      features: ["Dynamic", "Premium", "Fast"]
    },
    {
      id: 53,
      model: "BMW X7",
      year: 2024,
      transmission: "Auto",
      price: 920000,
      type: "luxury-suv",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 4.9,
      features: ["Sophisticated", "Tech-Forward", "Premium"]
    },
    {
      id: 54,
      model: "BMW X7",
      year: 2023,
      transmission: "Auto",
      price: 880000,
      type: "luxury-suv",
      location: "abuja",
      image: porscheCayenneImage,
      rating: 4.9,
      features: ["Luxury", "Spacious", "Performance"]
    },
    {
      id: 55,
      model: "BMW X5",
      year: 2023,
      transmission: "Auto",
      price: 720000,
      type: "luxury-suv",
      location: "port-harcourt",
      image: porscheCayenneImage,
      rating: 4.8,
      features: ["Sporty", "Refined", "Tech"]
    },
    {
      id: 56,
      model: "BMW X5",
      year: 2022,
      transmission: "Auto",
      price: 680000,
      type: "luxury-suv",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 4.8,
      features: ["Performance", "Luxury", "Comfort"]
    },
    {
      id: 57,
      model: "Audi Q8",
      year: 2024,
      transmission: "Auto",
      price: 880000,
      type: "luxury-suv",
      location: "lagos",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["Cutting Edge", "Luxury", "Performance"]
    },
    {
      id: 58,
      model: "Audi Q8",
      year: 2023,
      transmission: "Auto",
      price: 850000,
      type: "luxury-suv",
      location: "abuja",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["Modern", "Premium", "Tech"]
    },
    {
      id: 59,
      model: "Audi Q7",
      year: 2023,
      transmission: "Auto",
      price: 750000,
      type: "luxury-suv",
      location: "lagos",
      image: rollsRoyceImage,
      rating: 4.8,
      features: ["Sophisticated", "7-Seater", "Luxury"]
    },
    {
      id: 60,
      model: "Audi Q7",
      year: 2022,
      transmission: "Auto",
      price: 720000,
      type: "luxury-suv",
      location: "port-harcourt",
      image: rollsRoyceImage,
      rating: 4.8,
      features: ["Family Luxury", "Tech Features", "Comfort"]
    },
    {
      id: 61,
      model: "Rolls Royce Cullinan",
      year: 2023,
      transmission: "Auto",
      price: 2500000,
      type: "luxury-suv",
      location: "lagos",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["Ultimate Luxury", "Chauffeur", "Prestige"]
    },
    {
      id: 62,
      model: "Bentley Bentayga",
      year: 2023,
      transmission: "Auto",
      price: 2200000,
      type: "luxury-suv",
      location: "lagos",
      image: rollsRoyceImage,
      rating: 5.0,
      features: ["Handcrafted", "Ultra Premium", "Exclusive"]
    },
    {
      id: 63,
      model: "Lamborghini Urus",
      year: 2023,
      transmission: "Auto",
      price: 1800000,
      type: "luxury-suv",
      location: "lagos",
      image: porscheCayenneImage,
      rating: 5.0,
      features: ["Super SUV", "Performance", "Exotic"]
    },
    {
      id: 64,
      model: "Maserati Levante",
      year: 2023,
      transmission: "Auto",
      price: 950000,
      type: "luxury-suv",
      location: "abuja",
      image: porscheCayenneImage,
      rating: 4.9,
      features: ["Italian Luxury", "Sporty", "Exclusive"]
    },
    {
      id: 65,
      model: "Land Rover Defender",
      year: 2023,
      transmission: "Auto",
      price: 820000,
      type: "luxury-suv",
      location: "lagos",
      image: toyotaLandcruiserImage,
      rating: 4.8,
      features: ["Iconic", "Off-Road", "Modern Classic"]
    }
  ];

  const filteredCars = cars.filter(car => {
    return (
      (selectedLocation === "all" || car.location === selectedLocation) &&
      (selectedType === "all" || car.type === selectedType) &&
      (selectedTransmission === "all" || car.transmission === selectedTransmission)
    );
  });

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
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Fleet <span className="text-secondary">Catalogue</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse our complete collection of premium vehicles. Each vehicle is maintained 
              to the highest standards and ready for your journey.
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
                <SelectItem value="van">Van</SelectItem>
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
        </div>
      </section>

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
