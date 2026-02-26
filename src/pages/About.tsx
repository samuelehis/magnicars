import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Target, 
  Heart,
  Car,
  Shield,
  Globe,
  TrendingUp,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import showroomImage from "@/assets/luxury-showroom.jpg";
import chauffeurImage from "@/assets/chauffeur-service.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Excellence",
      description: "We pursue perfection in every aspect of our service delivery"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparent, honest, and ethical business practices always"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction and comfort are our highest priorities"
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Continuously evolving to meet modern luxury travel needs"
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Satisfied Clients",
      description: "Premium customers served"
    },
    {
      number: "50+",
      label: "Luxury Vehicles",
      description: "In our premium fleet"
    },
    {
      number: "3",
      label: "Major Cities",
      description: "Lagos, Abuja, Port Harcourt"
    },
    {
      number: "24/7",
      label: "Service Available",
      description: "Round-the-clock support"
    }
  ];

  const team = [
    {
      name: "Oladayo Olwawunmi",
      position: "Head of Operations",
      description: "A versatile leader with a 15-year legacy in the automotive sector and a high-impact background in fintech sales and credit advisory, he now drives operational excellence as the Head of Operations for a luxury automobile brand.",
      image: "/placeholder.svg"
    },
    {
      name: "Samuel Ehis",
      position: "IT & Marketing",
      description: "An entrepreneurial Technical Delivery Manager with 8+ years of experience, he merges deep technical roots in cybersecurity and diagnostics with strategic KPI-driven leadership to deliver cutting-edge IT and marketing solutions across the fintech and luxury automobile sectors",
      image: "/placeholder.svg"
    },
    {
      name: "Joy Omudu-Ehis",
      position: "Head of Customer Service",
      description: "From scaling digital service in fintech to leading premium customer operations in luxury automobiles, she leverages 12 years of financial sector expertise to redefine the elite client experience.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-secondary">MagniCarz</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                Nigeria's premier luxury automotive services company, setting the standard for excellence in luxury transportation since 2020.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="gold" size="lg" className="px-8">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
                <Button variant="outline" size="lg" className="px-8 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Car className="w-5 h-5 mr-2" />
                  Our Fleet
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={showroomImage}
                alt="MagniCarz Showroom"
                className="rounded-lg shadow-luxury w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-secondary">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2020 with a vision to revolutionize luxury transportation in Nigeria, MagniCarz has grown from a boutique car rental service to a comprehensive luxury automotive solutions provider. We understand that our discerning clientele demands nothing but the finest, and we have built our reputation on delivering exceptional experiences that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                <Target className="w-8 h-8 text-secondary inline-block mr-3" />
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To provide exceptional luxury automotive services that enhance the lifestyle and business operations of Nigeria's most successful individuals and organizations. We are committed to delivering experiences that combine comfort, prestige, and reliability.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-6">
                <Award className="w-8 h-8 text-secondary inline-block mr-3" />
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be West Africa's leading luxury automotive services company, recognized for our commitment to excellence, innovation, and customer satisfaction. We envision a future where luxury transportation is seamlessly integrated with cutting-edge technology and personalized service.
              </p>
            </div>
            <div className="relative">
              <img
                src={chauffeurImage}
                alt="Professional Chauffeur Service"
                className="rounded-lg shadow-luxury w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-secondary">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at MagniCarz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-luxury transition-luxury bg-gradient-card border-border/50">
                <CardContent className="p-8">
                  <value.icon className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-secondary">Achievements</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership <span className="text-secondary">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the visionaries behind MagniCarz's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-luxury transition-luxury bg-gradient-card border-border/50">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.position}</Badge>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-luxury text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h3>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Join the MagniCarz family and discover what sets us apart in the world of luxury automotive services.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="gold" size="lg" className="px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Call +234 806 683 6376
                </Button>
                <Button variant="outline" size="lg" className="px-8 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <MapPin className="w-5 h-5 mr-2" />
                  Visit Our Showroom
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
