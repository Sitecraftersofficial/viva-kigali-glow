import { MapPin, Phone, Clock, Shield, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/250789572263?text=Hi! I'd like to visit your store or place an order", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Visit Us & Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience our products in person or order through WhatsApp for convenient delivery
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Store Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      MIC Building F1 Room 14<br />
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">+250 789 572 263</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Store Hours</h4>
                    <p className="text-muted-foreground">
                      Mon - Sat: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                variant="whatsapp" 
                className="w-full mt-8" 
                size="lg"
                onClick={handleWhatsAppClick}
              >
                <Phone className="mr-2" />
                Contact Us on WhatsApp
              </Button>
            </div>
          </div>

          {/* Trust & Delivery */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Why Choose Viva_.plus</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">100% Authentic</h4>
                    <p className="text-muted-foreground">
                      All products are genuine and sourced from authorized distributors
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Fast Delivery</h4>
                    <p className="text-muted-foreground">
                      Same-day delivery in Kigali, next-day delivery nationwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Verified Store</h4>
                    <p className="text-muted-foreground">
                      Instagram verified with thousands of satisfied customers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Link */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Follow Us on Instagram</h3>
              <p className="mb-6 opacity-90">
                Stay updated with our latest arrivals, beauty tips, and exclusive offers
              </p>
              <Button 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                onClick={() => window.open("https://instagram.com/viva_.plus", "_blank")}
              >
                @viva_.plus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;