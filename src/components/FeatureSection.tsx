import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  MapPin, 
  Clock, 
  Shield, 
  DollarSign, 
  Users,
  Battery,
  Smartphone
} from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* How it Works */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How ChargeShare Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the EV charging revolution in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">1. Sign Up</h3>
            <p className="text-muted-foreground">
              Create your account as a host or driver in under 2 minutes
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-secondary">
                <MapPin className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">2. List or Find</h3>
            <p className="text-muted-foreground">
              Hosts list their chargers, drivers search and book nearby stations
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-accent">
                <Zap className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">3. Charge & Earn</h3>
            <p className="text-muted-foreground">
              Secure payments, easy access, and community-driven charging
            </p>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose ChargeShare?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">24/7 Availability</h3>
                  <p className="text-muted-foreground">
                    Access charging stations any time, day or night
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 flex-shrink-0">
                  <Shield className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Secure & Trusted</h3>
                  <p className="text-muted-foreground">
                    Verified hosts, secure payments, and comprehensive insurance
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 flex-shrink-0">
                  <DollarSign className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Affordable Rates</h3>
                  <p className="text-muted-foreground">
                    Up to 40% cheaper than public charging networks
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Community Driven</h3>
                  <p className="text-muted-foreground">
                    Built by EV owners, for EV owners - join the movement
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-6 shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <Battery className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">Chargers Listed</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-8 w-8 text-secondary" />
                <div>
                  <div className="text-2xl font-bold">2,500+</div>
                  <div className="text-sm text-muted-foreground">Happy Users</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="h-8 w-8 text-success" />
                <div>
                  <div className="text-2xl font-bold">50k+</div>
                  <div className="text-sm text-muted-foreground">Charging Sessions</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="h-8 w-8 text-warning" />
                <div>
                  <div className="text-2xl font-bold">$150</div>
                  <div className="text-sm text-muted-foreground">Avg Monthly Earnings</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join the EV Revolution?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you want to earn money with your charger or find convenient charging, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="electric" size="lg">
              <Zap className="h-4 w-4 mr-2" />
              List Your Charger
            </Button>
            <Button variant="secondary" size="lg">
              <MapPin className="h-4 w-4 mr-2" />
              Find Charging
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;