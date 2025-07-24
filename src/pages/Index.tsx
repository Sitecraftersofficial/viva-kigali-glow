import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductCategories from "@/components/ProductCategories";
import BrandCarousel from "@/components/BrandCarousel";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="products">
        <ProductCategories />
      </div>
      <div id="brands">
        <BrandCarousel />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
