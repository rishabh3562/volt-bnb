import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Zap, Clock, Shield, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-charging.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern home with EV charging station" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Share Your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  EV Charger
                </span>
                <br />
                Earn While You Sleep
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Join the decentralized charging revolution. List your home charger or find nearby charging when you need it.
              </p>
            </div>

            {/* Search Bar */}
            <Card className="p-6 shadow-lg bg-background/95 backdrop-blur">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Enter your location..." 
                      className="pl-10"
                    />
                  </div>
                  <Button variant="electric" size="lg" className="sm:w-auto">
                    <Search className="h-4 w-4 mr-2" />
                    Find Chargers
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  Find 500+ chargers near you or list yours in minutes
                </div>
              </div>
            </Card>

            {/* Key Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">24/7 Available</div>
                  <div className="text-sm text-muted-foreground">Book anytime</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                  <Shield className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">Secure</div>
                  <div className="text-sm text-muted-foreground">Safe payments</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <DollarSign className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="font-semibold">Earn Money</div>
                  <div className="text-sm text-muted-foreground">$50-200/month</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CTA Cards */}
          <div className="space-y-6">
            <Card className="p-8 shadow-electric hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Host a Charger</h3>
                    <p className="text-muted-foreground">Earn money with your EV charger</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="h-1 w-1 rounded-full bg-primary mr-3" />
                    List your charger in minutes
                  </li>
                  <li className="flex items-center">
                    <div className="h-1 w-1 rounded-full bg-primary mr-3" />
                    Set your own prices & availability
                  </li>
                  <li className="flex items-center">
                    <div className="h-1 w-1 rounded-full bg-primary mr-3" />
                    Earn $50-200 per month
                  </li>
                </ul>
                <Button variant="electric" className="w-full">
                  Become a Host
                </Button>
              </div>
            </Card>

            <Card className="p-8 shadow-blue hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-secondary">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Find Charging</h3>
                    <p className="text-muted-foreground">Convenient charging near you</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="h-1 w-1 rounded-full bg-secondary mr-3" />
                    500+ verified chargers
                  </li>
                  <li className="flex items-center">
                    <div className="h-1 w-1 rounded-full bg-secondary mr-3" />
                    Real-time availability
                  </li>
                  <li className="flex items-center">
                    <div className="h-1 w-1 rounded-full bg-secondary mr-3" />
                    Starting from $0.25/kWh
                  </li>
                </ul>
                <Button variant="secondary" className="w-full">
                  Start Charging
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;