import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Instagram, MapPin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import vivaLogo from "@/assets/viva-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-700 cursor-default">
            <img src={vivaLogo} alt="VIVA PLUS" className="w-10 h-10 rounded-full" />
            <span className="text-xl md:text-2xl font-bold text-foreground">
              VIVA PLUS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-gray-200 transition-colors duration-500 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-gray-200 transition-colors duration-500 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-gray-200 transition-colors duration-500 font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-gray-200 transition-colors duration-500 font-medium"
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
              <Instagram className="w-8 h-8" />
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

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="fixed top-0 right-0 h-full w-72 max-w-[80vw] bg-card/95 backdrop-blur-lg border-l shadow-2xl transform transition-transform duration-300">
              <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <img src={vivaLogo} alt="VIVA PLUS" className="w-6 h-6 rounded-full" />
                    <span className="text-sm font-bold text-foreground">VIVA PLUS</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 h-8 w-8"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                
                <nav className="flex flex-col space-y-3">
                  <button 
                    onClick={() => {
                      scrollToSection('home');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-base text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/20"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => {
                      scrollToSection('about');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-base text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/20"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => {
                      scrollToSection('products');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-base text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/20"
                  >
                    Products
                  </button>
                  <button 
                    onClick={() => {
                      scrollToSection('contact');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-base text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/20"
                  >
                    Contact
                  </button>
                  
                  <div className="flex flex-col space-y-3 pt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        window.open("https://instagram.com/viva_.plus", "_blank");
                        setIsMobileMenuOpen(false);
                      }}
                      className="justify-start text-sm"
                    >
                      <Instagram className="w-4 h-4 mr-2" />
                      Follow on Instagram
                    </Button>
                    
                    <Button
                      variant="whatsapp"
                      size="sm"
                      onClick={() => {
                        handleWhatsAppClick();
                        setIsMobileMenuOpen(false);
                      }}
                      className="justify-start text-sm"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </Button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;