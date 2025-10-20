import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const locations = [
    {
      name: "Lagos Headquarters",
      address: "52/54 Isaac John St, Ikeja GRA 101233, Lagos",
      phone: "+234 806 683 6376",
      email: "lagos@magnicarz.com",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      coordinates: { lat: 6.5952, lng: 3.3621 }
    },
    {
      name: "Victoria Island Branch",
      address: "92 adeola odeku Street Union bank building.VI, Lagos",
      phone: "+234 806 683 6376",
      email: "abuja@magnicarz.com",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      coordinates: { lat: 6.4052, lng: 3.5762 }
    },
    {
      name: "Abuja Office",
      address: "Plot 1234, Central Business District, Abuja",
      phone: "+234 806 683 6376",
      email: "hello@magnicarz.com",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      coordinates: { lat: 9.0579, lng: 7.4951 }
    }
  ];

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, credit/debit cards, cash payments, and our flexible financing options. For luxury rentals, we require a security deposit which is refunded upon safe return of the vehicle."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 48 hours before pickup receive a full refund. Cancellations made 24-48 hours before pickup receive a 50% refund. Cancellations made within 24 hours are non-refundable, except in cases of emergency or force majeure."
    },
    {
      question: "What documentation do I need to rent a car?",
      answer: "You need a valid driver's license (Nigerian or International), a valid form of identification (National ID or International Passport), and a credit card for security deposit. For chauffeur services, only identification is required."
    },
    {
      question: "Do you provide insurance coverage?",
      answer: "Yes, all our vehicles come with comprehensive insurance coverage. We also offer additional coverage options for extra peace of mind. Our insurance covers damage, theft, and third-party liability."
    },
    {
      question: "Can I extend my rental period?",
      answer: "Yes, rental extensions are subject to vehicle availability. Please contact us at least 24 hours before your original return date. Extension rates may apply, and payment is required before the extension period begins."
    },
    {
      question: "Do you offer airport pickup and delivery?",
      answer: "Yes, we provide complimentary airport pickup and delivery services in Lagos, Abuja, and Port Harcourt. Please provide your flight details at least 2 hours before your arrival for domestic flights and 4 hours for international flights."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact <span className="text-secondary">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get in touch with our team for bookings, inquiries, or support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">
                Send us a Message
              </CardTitle>
              <p className="text-muted-foreground">
                We'll get back to you within 24 hours
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+234 800 000 0000" />
              </div>

              <div>
                <Label htmlFor="service">Service Interest</Label>
                <select className="w-full p-2 border border-border rounded-md bg-background">
                  <option value="">Select a service</option>
                  <option value="rental">Car Rental</option>
                  <option value="sales">Car Sales</option>
                  <option value="financing">Car Financing</option>
                  <option value="chauffeur">Chauffeur Service</option>
                  <option value="charter">Charter Service</option>
                  <option value="tracking">Car Tracking & Safety</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  rows={5}
                />
              </div>

              <Button variant="luxury" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="bg-gradient-luxury text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-semibold">WhatsApp & Call</div>
                      <div className="text-sm text-primary-foreground/80">
                        +234 806 683 6376
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-primary-foreground/80">
                        info@magnicarz.com
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-semibold">24/7 Support</div>
                      <div className="text-sm text-primary-foreground/80">
                        Live chat available on website
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="gold" className="w-full mt-6">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start WhatsApp Chat
                </Button>
              </CardContent>
            </Card>

            {/* Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Our Locations</h3>
              {locations.map((location, index) => (
                <Card key={index} className="bg-gradient-card border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">
                      {location.name}
                    </h4>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{location.address}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-secondary" />
                        <span className="text-muted-foreground">{location.phone}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-secondary" />
                        <span className="text-muted-foreground">{location.email}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span className="text-muted-foreground">{location.hours}</span>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full mt-3">
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="bg-gradient-card shadow-card border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground text-center">
              Frequently Asked Questions
            </CardTitle>
            <p className="text-muted-foreground text-center">
              Find answers to common questions about our services
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Collapsible key={index} open={openFaq === index}>
                  <CollapsibleTrigger
                    className="flex w-full items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 rounded-lg transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-left text-foreground">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-secondary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-secondary" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Still have questions? We're here to help!
              </p>
              <Button variant="luxury">
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
