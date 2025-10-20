import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Eye, Heart, Zap, Shield, Award } from "lucide-react";
import showroomImage from "@/assets/luxury-showroom.jpg";
import showroomUtilityImage from "@/assets/showroom-utility.jpg";
import showroomExoticsImage from "@/assets/showroom-exotics.jpg";
import mercedesImage from "@/assets/cars/rolls-royce-cullinan.jpg";
import porscheImage from "@/assets/cars/porsche-cayenne.jpg";
import lexusImage from "@/assets/cars/toyota-landcruiser.jpg";
import bmwImage from "@/assets/cars/toyota-prado.jpg";

const Sales = () => {
  const carCategories = [
    {
      title: "Luxury Sedans & SUVs",
      description: "Premium vehicles from Mercedes, Lexus, and Porsche",
      image: showroomImage,
      brands: ["Mercedes-Benz", "Lexus", "Porsche", "BMW"]
    },
    {
      title: "Utility Vehicles",
      description: "Robust and reliable for business and personal use",
      image: showroomUtilityImage,
      brands: ["Toyota Hilux", "Ford Ranger", "Nissan Navara"]
    },
    {
      title: "Exotics & Performance",
      description: "High-performance vehicles for the ultimate driving experience",
      image: showroomExoticsImage,
      brands: ["BMW M-Series", "Audi R8", "Mercedes AMG"]
    }
  ];

  const featuredCars = [
    {
      id: 1,
      model: "Mercedes-Benz S-Class",
      year: 2023,
      price: 45000000,
      originalPrice: 52000000,
      image: mercedesImage,
      features: ["Executive Package", "Panoramic Roof", "Massage Seats"],
      rating: 5.0,
      badge: "Best Seller",
      mileage: "5,000 km",
      fuelType: "Hybrid"
    },
    {
      id: 2,
      model: "Porsche Cayenne Turbo",
      year: 2022,
      price: 38000000,
      originalPrice: 42000000,
      image: porscheImage,
      features: ["Sports Package", "Air Suspension", "Carbon Fiber"],
      rating: 4.9,
      badge: "Limited Edition",
      mileage: "8,200 km",
      fuelType: "Petrol"
    },
    {
      id: 3,
      model: "Lexus LX 600",
      year: 2023,
      price: 55000000,
      originalPrice: null,
      image: lexusImage,
      features: ["Off-Road Package", "Premium Interior", "Mark Levinson Audio"],
      rating: 4.8,
      badge: "New Arrival",
      mileage: "New",
      fuelType: "Petrol"
    },
    {
      id: 4,
      model: "BMW M5 Competition",
      year: 2022,
      price: 35000000,
      originalPrice: 40000000,
      image: bmwImage,
      features: ["M Performance", "Carbon Ceramic Brakes", "Track Package"],
      rating: 5.0,
      badge: "Performance",
      mileage: "12,000 km",
      fuelType: "Petrol"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="sales" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Luxury Car <span className="text-secondary">Showroom</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our premium collection of new and certified pre-owned luxury vehicles
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {carCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-luxury transition-luxury bg-gradient-card border-border/50 overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-40"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-primary-foreground/90 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.brands.map((brand, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {brand}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-luxury">
                  Explore Category
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Cars */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Featured <span className="text-secondary">Vehicles</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCars.map((car) => (
              <Card key={car.id} className="group hover:shadow-luxury transition-luxury bg-gradient-card border-border/50 relative overflow-hidden">
                {/* Car Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge 
                      variant="secondary" 
                      className="bg-secondary/90 text-secondary-foreground font-semibold"
                    >
                      {car.badge}
                    </Badge>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-luxury">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-card/90 px-2 py-1 rounded">
                    <Star className="w-3 h-3 fill-secondary text-secondary" />
                    <span className="text-xs font-medium">{car.rating}</span>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h4 className="font-bold text-foreground mb-2 line-clamp-1">{car.model}</h4>
                  
                  {/* Car Details */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span>{car.year}</span>
                    <span>{car.mileage}</span>
                    <span>{car.fuelType}</span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {car.features.slice(0, 2).map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {car.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{car.features.length - 2} more
                      </Badge>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="text-lg font-bold text-secondary">
                      {formatPrice(car.price)}
                    </div>
                    {car.originalPrice && (
                      <div className="text-xs text-muted-foreground line-through">
                        {formatPrice(car.originalPrice)}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      Details
                    </Button>
                    <Button variant="luxury" size="sm" className="flex-1 text-xs">
                      Inquire
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <Card className="bg-gradient-luxury text-primary-foreground">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose MagniCarz?</h3>
              <p className="text-primary-foreground/90">
                Excellence in every aspect of luxury automotive sales
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Certified Quality</h4>
                <p className="text-sm text-primary-foreground/80">
                  All vehicles undergo rigorous inspection and certification
                </p>
              </div>
              
              <div className="text-center">
                <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Premium Service</h4>
                <p className="text-sm text-primary-foreground/80">
                  White-glove treatment from inquiry to delivery
                </p>
              </div>
              
              <div className="text-center">
                <Zap className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Fast Processing</h4>
                <p className="text-sm text-primary-foreground/80">
                  Quick financing and documentation processing
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button variant="gold" size="lg" className="px-8">
                View All Inventory
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Sales;