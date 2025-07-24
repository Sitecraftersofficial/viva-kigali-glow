import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Instagram, MapPin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-foreground">
              VIVA PLUS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-accent-foreground transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent-foreground transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-accent-foreground transition-colors font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent-foreground transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Contact Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("https://instagram.com/viva_.plus", "_blank")}
            >
              <Instagram className="w-4 h-4" />
            </Button>
            
            <Button
              variant="whatsapp"
              size="sm"
              onClick={handleWhatsAppClick}
              className="text-sm"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/10">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  scrollToSection('home');
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-accent-foreground transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  scrollToSection('about');
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-accent-foreground transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => {
                  scrollToSection('products');
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-accent-foreground transition-colors font-medium"
              >
                Products
              </button>
              <button 
                onClick={() => {
                  scrollToSection('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-accent-foreground transition-colors font-medium"
              >
                Contact
              </button>
              
              <div className="flex items-center space-x-3 pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open("https://instagram.com/viva_.plus", "_blank")}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                
                <Button
                  variant="whatsapp"
                  size="sm"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;