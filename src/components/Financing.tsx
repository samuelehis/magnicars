import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CreditCard, 
  Calculator, 
  CheckCircle, 
  Download, 
  FileText, 
  Users,
  Shield,
  Clock,
  Percent
} from "lucide-react";

const Financing = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");

  const loanPrograms = [
    {
      name: "FlexiPay",
      term: "36 months",
      interestRate: "12% - 15%",
      minDeposit: "20%",
      description: "Flexible payment plan for standard vehicles",
      features: ["Low monthly payments", "Quick approval", "Early repayment options"],
      icon: CreditCard,
      color: "bg-blue-500"
    },
    {
      name: "PremiumDrive Loan",
      term: "48 months",
      interestRate: "10% - 13%",
      minDeposit: "15%",
      description: "Exclusive financing for luxury vehicles",
      features: ["Minimal deposit", "Premium vehicle access", "Concierge service"],
      icon: Shield,
      color: "bg-secondary"
    },
    {
      name: "Corporate Fleet Finance",
      term: "60 months",
      interestRate: "8% - 12%",
      minDeposit: "10%",
      description: "Special rates for business fleet purchases",
      features: ["Bulk discounts", "Fleet management", "Tax benefits"],
      icon: Users,
      color: "bg-green-500"
    }
  ];

  const requirements = [
    { icon: FileText, title: "Valid ID", description: "National ID or International Passport" },
    { icon: Calculator, title: "Proof of Income", description: "Salary certificate or business registration" },
    { icon: Users, title: "Guarantor Form", description: "Completed guarantor information and documentation" }
  ];

  const calculateMonthlyPayment = () => {
    if (!loanAmount || !loanTerm) return 0;
    
    const principal = parseFloat(loanAmount);
    const months = parseInt(loanTerm);
    const monthlyRate = 0.12 / 12; // 12% annual rate divided by 12 months
    
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                          (Math.pow(1 + monthlyRate, months) - 1);
    
    return monthlyPayment;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="financing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Car <span className="text-secondary">Financing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible financing solutions to make your dream car affordable
          </p>
        </div>

        {/* Loan Programs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {loanPrograms.map((program, index) => (
            <Card key={index} className="group hover:shadow-luxury transition-luxury bg-gradient-card border-border/50 relative overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1 ${program.color}`}></div>
              
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full ${program.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-luxury`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {program.name}
                </CardTitle>
                <p className="text-muted-foreground text-sm">{program.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-secondary">{program.term}</div>
                    <div className="text-xs text-muted-foreground">Loan Term</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">{program.minDeposit}</div>
                    <div className="text-xs text-muted-foreground">Min Deposit</div>
                  </div>
                </div>

                <Separator />

                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground mb-1">Interest Rate</div>
                  <div className="text-xl font-bold text-secondary">{program.interestRate}</div>
                </div>

                <Separator />

                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-4" variant="outline">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Loan Calculator */}
          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-secondary" />
                Loan Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="loanAmount">Loan Amount (₦)</Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    placeholder="e.g., 50,000,000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="loanTerm">Loan Term</Label>
                  <Select value={loanTerm} onValueChange={setLoanTerm}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select loan term" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12 months</SelectItem>
                      <SelectItem value="24">24 months</SelectItem>
                      <SelectItem value="36">36 months</SelectItem>
                      <SelectItem value="48">48 months</SelectItem>
                      <SelectItem value="60">60 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="monthlyIncome">Monthly Income (₦)</Label>
                  <Input
                    id="monthlyIncome"
                    type="number"
                    placeholder="e.g., 2,000,000"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                  />
                </div>
              </div>

              {loanAmount && loanTerm && (
                <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-4 text-center">
                    Estimated Monthly Payment
                  </h4>
                  <div className="text-3xl font-bold text-secondary text-center mb-2">
                    {formatPrice(calculateMonthlyPayment())}
                  </div>
                  <div className="text-sm text-muted-foreground text-center">
                    Based on 12% annual interest rate
                  </div>
                </div>
              )}

              <Button variant="luxury" className="w-full">
                Get Pre-Approved
              </Button>
            </CardContent>
          </Card>

          {/* Requirements & Application */}
          <div className="space-y-8">
            {/* Requirements */}
            <Card className="bg-gradient-card shadow-card border-border/50">
              <CardHeader>
                <CardTitle>Documentation Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <req.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{req.title}</h4>
                      <p className="text-sm text-muted-foreground">{req.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Lead Form */}
            <Card className="bg-gradient-card shadow-card border-border/50">
              <CardHeader>
                <CardTitle>Request Information</CardTitle>
                <p className="text-muted-foreground text-sm">
                  Get detailed financing information and brochures
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
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
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+234 800 000 0000" />
                </div>

                <div>
                  <Label htmlFor="interest">Financing Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flexipay">FlexiPay Program</SelectItem>
                      <SelectItem value="premium">PremiumDrive Loan</SelectItem>
                      <SelectItem value="corporate">Corporate Fleet Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your financing needs..."
                    rows={3}
                  />
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                  <Button variant="luxury" className="flex-1">
                    Submit Request
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <Card className="mt-16 bg-gradient-luxury text-primary-foreground">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              Why Finance with MagniCarz?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Quick Approval</h4>
                <p className="text-sm text-primary-foreground/80">
                  Get approved in as little as 24 hours
                </p>
              </div>
              
              <div className="text-center">
                <Percent className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Competitive Rates</h4>
                <p className="text-sm text-primary-foreground/80">
                  Best financing rates in Nigeria
                </p>
              </div>
              
              <div className="text-center">
                <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Secure Process</h4>
                <p className="text-sm text-primary-foreground/80">
                  Bank-level security for your information
                </p>
              </div>
              
              <div className="text-center">
                <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Expert Support</h4>
                <p className="text-sm text-primary-foreground/80">
                  Dedicated financing specialists
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Financing;