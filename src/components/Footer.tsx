import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin,
  Car,
  Shield,
  Award,
  Clock
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Fleet Rentals", href: "#rentals" },
    { name: "Car Sales", href: "#sales" },
    { name: "Financing", href: "#financing" },
    { name: "Charter Services", href: "#charter" },
    { name: "About Us", href: "#about" }
  ];

  const services = [
    { name: "Luxury Car Rentals", href: "#rentals" },
    { name: "Chauffeur Services", href: "#services" },
    { name: "Auto Sales", href: "#sales" },
    { name: "Car Financing", href: "#financing" },
    { name: "Air & Sea Charter", href: "#charter" },
    { name: "Car Tracking & Safety", href: "#services" }
  ];

  const locations = [
    { city: "Lagos", address: "52/54 Isaac John St, Ikeja GRA" },
    { city: "Abuja", address: "Central Business District" },
    { city: "Port Harcourt", address: "45 Aba Road, Rivers State" }
  ];

  const blogPosts = [
    {
      title: "How to Choose the Perfect Car for Your Abuja Business Trip",
      date: "Dec 15, 2024",
      href: "#blog"
    },
    {
      title: "5 Reasons Celebs Love MagniCarz",
      date: "Dec 10, 2024",
      href: "#blog"
    }
  ];

  return (
    <footer className="bg-gradient-luxury text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-2">MagniCarz</h2>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Nigeria's premier luxury car rental and automotive services brand. 
                Elevating every journey into a statement of excellence since 2020.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-secondary" />
                <span>Premium Service Award 2024</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-secondary" />
                <span>Fully Insured & Licensed</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-secondary" />
                <span>24/7 Customer Support</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-secondary" />
                <span>+234 806 683 6376</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-secondary" />
                <span>info@magnicarz.com</span>
              </div>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Newsletter */}
          <div className="space-y-6">
            {/* Locations */}
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-4">Our Locations</h3>
              <div className="space-y-3">
                {locations.map((location, index) => (
                  <div key={index} className="text-sm">
                    <div className="font-medium text-primary-foreground">{location.city}</div>
                    <div className="text-primary-foreground/80">{location.address}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-4">Stay Updated</h3>
              <p className="text-primary-foreground/80 text-sm mb-3">
                Subscribe to our newsletter for latest offers and updates
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-secondary/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="gold" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <Separator className="my-12 bg-secondary/20" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">Latest from Our Blog</h3>
            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <div key={index} className="border-l-2 border-secondary/30 pl-4">
                  <a
                    href={post.href}
                    className="block hover:text-secondary transition-colors"
                  >
                    <h4 className="font-medium text-sm mb-1">{post.title}</h4>
                    <p className="text-primary-foreground/60 text-xs">{post.date}</p>
                  </a>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="mt-4 border-secondary/20 hover:bg-secondary hover:text-secondary-foreground">
              View All Articles
            </Button>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">Why Choose MagniCarz?</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-secondary" />
                <span>Premium Fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-secondary" />
                <span>Award Winning</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-primary-foreground/80">
              © {currentYear} MagniCarz. All rights reserved.
            </div>
            
            <div className="flex gap-6">
              <a href="#privacy" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;