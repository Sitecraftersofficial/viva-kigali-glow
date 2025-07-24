import { useEffect, useState } from "react";

const BrandCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const brands = [
    "Dior", "Fenty Beauty", "CeraVe", "The Ordinary", "Charlotte Tilbury",
    "Rare Beauty", "Glossier", "YSL Beauty", "Clinique", "Estée Lauder",
    "Mac Cosmetics", "Urban Decay", "Benefit", "Too Faced", "Nars"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(brands.length / 3));
    }, 3000);

    return () => clearInterval(timer);
  }, [brands.length]);

  const getVisibleBrands = () => {
    const brandsPerSlide = 3;
    const start = currentIndex * brandsPerSlide;
    return brands.slice(start, start + brandsPerSlide);
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Top Beauty Brands
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We carry authentic products from the world's most prestigious beauty brands
        </p>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden bg-card rounded-2xl shadow-soft p-8">
            <div className="flex items-center justify-center min-h-[120px]">
              {getVisibleBrands().map((brand, index) => (
                <div
                  key={`${brand}-${currentIndex}-${index}`}
                  className="text-center animate-fade-in"
                >
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-glow">
                    <span className="text-primary-foreground font-bold text-lg">
                      {brand.charAt(0)}
                    </span>
                  </div>
                  <p className="font-semibold text-card-foreground text-sm">
                    {brand}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: Math.ceil(brands.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
          {brands.slice(0, 10).map((brand, index) => (
            <div
              key={brand}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 text-center group hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-glow group-hover:scale-110 transition-transform">
                <span className="text-primary-foreground font-bold text-xl">
                  {brand.charAt(0)}
                </span>
              </div>
              <p className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {brand}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;