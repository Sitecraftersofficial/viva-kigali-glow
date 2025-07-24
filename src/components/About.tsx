import { Zap, Heart, Check } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          About VIVA PLUS
        </h2>
        
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
            Located in the heart of Kigali at <strong>MIC Building F1 Room 14</strong>, 
            VIVA PLUS is your trusted destination for authentic luxury cosmetics and beauty products.
          </p>
          
          <p className="text-md md:text-lg text-muted-foreground mb-8 leading-relaxed">
            We specialize in bringing you the finest selection of international beauty brands, 
            from premium makeup and skincare to exquisite fragrances and professional haircare. 
            Every product in our store is carefully curated and 100% authentic.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-muted rounded-xl">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl"><Check /></span>
              </div>
              <h3 className="font-semibold mb-2">100% Authentic</h3>
              <p className="text-sm text-muted-foreground">All products are sourced directly from authorized distributors</p>
            </div>

            <div className="text-center p-6 bg-muted rounded-xl">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl"><Zap /></span>
              </div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Quick and reliable delivery across Kigali</p>
            </div>

            <div className="text-center p-6 bg-muted rounded-xl">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl"><Heart /></span>
              </div>
              <h3 className="font-semibold mb-2">Expert Care</h3>
              <p className="text-sm text-muted-foreground">Personalized beauty advice from our knowledgeable team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;