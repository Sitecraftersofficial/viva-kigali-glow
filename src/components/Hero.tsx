import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingBag } from "lucide-react";
import heroImage from "@/assets/hero-beauty.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/250789572263?text=Hi! I'm interested in your beauty products", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury beauty products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in">
          VIVA PLUS
        </h1>
        
        <p className="text-base md:text-xl lg:text-2xl mb-3 md:mb-4 animate-fade-in opacity-90 font-light">
          Your Premier Beauty Destination in Kigali
        </p>
        
        <p className="text-sm md:text-lg mb-6 md:mb-8 animate-fade-in opacity-80 max-w-2xl mx-auto px-2">
          Discover authentic high-end cosmetics, skincare, and fragrances from world-renowned brands. 
          Verified • Trusted • Delivered Fast
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button 
            variant="hero" 
            size="lg" 
            className="w-full sm:w-auto text-lg px-8 py-6 bg-gold hover:bg-gold/90"
            onClick={() => window.location.href = '/products'}
          >
            <ShoppingBag className="mr-2" />
            Shop Now
          </Button>
          
          <Button 
            variant="whatsapp" 
            size="lg" 
            className="w-full sm:w-auto text-lg px-8 py-6"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="mr-2" />
            Order via WhatsApp
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse" />
            Verified Store
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse" />
            Authentic Products
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse" />
            Fast Delivery
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;