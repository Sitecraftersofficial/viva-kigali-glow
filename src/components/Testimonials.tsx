import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Kigali",
      text: "Amazing quality products! My CeraVe skincare arrived perfectly packaged and is 100% authentic. Viva_.plus is now my go-to beauty store.",
      rating: 5
    },
    {
      name: "Grace K.",
      location: "Kimihurura",
      text: "Fast delivery and excellent customer service. I ordered Fenty Beauty foundation and it matches perfectly. Highly recommend!",
      rating: 5
    },
    {
      name: "Emma R.",
      location: "Nyarutarama",
      text: "Finally found a reliable place for authentic luxury beauty products in Kigali. The team knows their products well and gives great advice.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          What Our Customers Say
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Viva_.plus for their beauty needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-card-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to experience premium beauty products?
          </p>
          <button
            onClick={() => window.open("https://wa.me/250789572263?text=Hi! I'd like to know more about your products", "_blank")}
            className="text-primary hover:text-accent font-semibold underline underline-offset-4 transition-colors"
          >
            Share your review with us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;