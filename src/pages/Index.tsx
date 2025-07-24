import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductCategories from "@/components/ProductCategories";
import BrandCarousel from "@/components/BrandCarousel";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ProductCategories />
      <BrandCarousel />
      <Testimonials />
      <Contact />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
