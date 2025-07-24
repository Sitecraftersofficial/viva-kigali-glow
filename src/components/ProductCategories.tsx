import { Palette, Sparkles, Flower2, Scissors } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      icon: Palette,
      name: "Makeup",
      description: "Foundations, lipsticks, eyeshadows & more",
      gradient: "from-pink-400 to-rose-500"
    },
    {
      icon: Sparkles,
      name: "Skincare", 
      description: "Serums, moisturizers, cleansers",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Flower2,
      name: "Fragrance",
      description: "Perfumes & body mists",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Scissors,
      name: "Haircare",
      description: "Shampoos, treatments & styling",
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Our Product Categories
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore our carefully curated selection of premium beauty products from top international brands
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 cursor-pointer hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-muted-foreground group-hover:text-card-foreground transition-colors">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;