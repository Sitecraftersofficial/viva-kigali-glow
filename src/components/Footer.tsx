import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Instagram, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/250789572263?text=Hi! I'm interested in your beauty products", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold text-card-foreground">
                VIVA PLUS
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Your premier beauty destination in Kigali, offering authentic luxury cosmetics, 
              skincare, fragrances, and haircare products from world-renowned brands.
            </p>

            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>MIC Building F1 Room 14, Kigali, Rwanda</span>
              </div>
              
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+250 789 572 263</span>
              </div>
              
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Mon-Sat: 9AM-8PM, Sun: 10AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-card-foreground mb-4">Quick Links</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Product Categories
              </button>
              <button 
                onClick={() => scrollToSection('brands')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Top Brands
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-bold text-card-foreground mb-4">Categories</h3>
            <div className="space-y-3">
              <span className="block text-muted-foreground">Makeup</span>
              <span className="block text-muted-foreground">Skincare</span>
              <span className="block text-muted-foreground">Fragrance</span>
              <span className="block text-muted-foreground">Haircare</span>
              <span className="block text-muted-foreground">Beauty Tools</span>
              <span className="block text-muted-foreground">Gift Sets</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social & Contact */}
            <div className="flex items-center space-x-4">
              <Button
                variant="whatsapp"
                size="sm"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Order Now
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("https://instagram.com/viva_.plus", "_blank")}
              >
                <Instagram className="w-4 h-4 mr-2" />
                Follow Us
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Verified Store</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Authentic Products</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2024 VIVA PLUS. All rights reserved. • Premium Beauty Products in Kigali, Rwanda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;