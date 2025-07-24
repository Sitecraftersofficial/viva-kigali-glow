import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open("https://wa.me/250789572263?text=Hi! I'm interested in your beauty products", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#25D366]/90 text-white p-4 rounded-full shadow-floating hover:shadow-glow transition-all duration-300 transform hover:scale-110 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppFloat;