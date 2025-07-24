import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ArrowLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  subcategory: string;
}

interface Category {
  subcategories: string[];
  quantity: number;
}

const Products = () => {
  const navigate = useNavigate();
  const [products] = useState<Product[]>([
    {
      id: "1",
      name: "Dior Foundation",
      price: "45,000 RWF",
      image: "/placeholder.svg",
      category: "Makeup",
      subcategory: "Foundation"
    },
    {
      id: "2", 
      name: "Fenty Beauty Lipstick",
      price: "25,000 RWF",
      image: "/placeholder.svg",
      category: "Makeup",
      subcategory: "Lips"
    },
    {
      id: "3",
      name: "CeraVe Moisturizer",
      price: "18,000 RWF",
      image: "/placeholder.svg",
      category: "Skincare",
      subcategory: "Moisturizer"
    },
    {
      id: "4",
      name: "Chanel Perfume",
      price: "85,000 RWF",
      image: "/placeholder.svg",
      category: "Fragrance",
      subcategory: "Perfume"
    },
    {
      id: "5",
      name: "Olaplex Hair Treatment",
      price: "32,000 RWF",
      image: "/placeholder.svg",
      category: "Haircare",
      subcategory: "Treatment"
    },
    {
      id: "6",
      name: "Rare Beauty Blush",
      price: "28,000 RWF",
      image: "/placeholder.svg",
      category: "Makeup",
      subcategory: "Blush"
    }
  ]);

  const [categories] = useState<Record<string, Category>>({
    "Makeup": {
      subcategories: ["Foundation", "Lips", "Eyes", "Blush"],
      quantity: 0
    },
    "Skincare": {
      subcategories: ["Cleanser", "Moisturizer", "Serum", "Sunscreen"],
      quantity: 0
    },
    "Fragrance": {
      subcategories: ["Perfume", "Body Mist", "Cologne"],
      quantity: 0
    },
    "Haircare": {
      subcategories: ["Shampoo", "Treatment", "Styling", "Oil"],
      quantity: 0
    }
  });

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Calculate quantities
    Object.keys(categories).forEach(cat => {
      categories[cat].quantity = products.filter(p => p.category === cat).length;
    });
  }, [products, categories]);

  const filterProducts = (category: string | null, subcategory: string | null = null) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    
    let filtered = category 
      ? products.filter(p => p.category === category && (!subcategory || p.subcategory === subcategory))
      : products;
    
    setFilteredProducts(filtered);
  };

  const openModal = (product: Product) => {
    setModalProduct(product);
    setMessage("");
  };

  const closeModal = () => {
    setModalProduct(null);
    setMessage("");
  };

  const sendViaWhatsApp = () => {
    if (!modalProduct) return;
    const productMessage = `Hello,

I'm interested in "${modalProduct.name}" (ID: ${modalProduct.id}). Could you please provide more details?

Link: ${window.location.origin}/products?product=${modalProduct.id}

${message}

Best regards,
[Your Name]`;
    
    const url = `https://wa.me/250789572263?text=${encodeURIComponent(productMessage)}`;
    window.open(url, "_blank");
  };

  const sendViaEmail = () => {
    if (!modalProduct) return;
    const productMessage = `Hello,

I'm interested in "${modalProduct.name}" (ID: ${modalProduct.id}). Could you please provide more details?

Link: ${window.location.origin}/products?product=${modalProduct.id}

${message}

Best regards,
[Your Name]`;
    
    const url = `mailto:vivaplus.kigali@gmail.com?subject=${encodeURIComponent(`Inquiry: ${modalProduct.name}`)}&body=${encodeURIComponent(productMessage)}`;
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile Header */}
      <div className="lg:hidden p-4 border-b bg-card flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
        <Button
          variant="outline"
          onClick={() => setSelectedCategory(selectedCategory === "menu" ? null : "menu")}
          className="flex items-center gap-2"
        >
          <Menu className="w-4 h-4" />
          Categories
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className={`lg:w-64 bg-card p-4 overflow-y-auto border-r transition-all duration-300 ${
          selectedCategory === "menu" ? "block" : "hidden lg:block"
        }`}>
          <h2 className="text-primary text-xl font-bold mb-4">Categories</h2>
          <div className="space-y-2">
            <button 
              onClick={() => filterProducts(null)}
              className={`w-full text-left p-3 rounded cursor-pointer transition ${
                !selectedCategory ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-accent'
              }`}
            >
              <strong>All Products</strong>
              <br />
              <span className="text-sm text-muted-foreground">{products.length} items</span>
            </button>
            {Object.entries(categories).map(([cat, data]) => (
              <button
                key={cat}
                onClick={() => filterProducts(cat)}
                className={`w-full text-left p-3 rounded cursor-pointer transition ${
                  selectedCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-accent'
                }`}
              >
                <strong>{cat}</strong>
                <br />
                <span className="text-sm text-muted-foreground">{data.quantity} items</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="hidden lg:flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <h1 className="text-xl md:text-2xl font-bold text-primary">All Products</h1>
          </div>
          
          {/* Subcategory Buttons */}
          {selectedCategory && selectedCategory !== "menu" && categories[selectedCategory] && (
            <div className="flex flex-wrap gap-2 mb-6">
              {categories[selectedCategory].subcategories.map((sub) => (
                <Button
                  key={sub}
                  variant={selectedSubcategory === sub ? "default" : "outline"}
                  onClick={() => filterProducts(selectedCategory, sub)}
                  className="text-sm"
                >
                  {sub}
                </Button>
              ))}
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length === 0 ? (
              <p className="text-muted-foreground">No products available.</p>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-card p-4 rounded-lg shadow-soft border transition hover:shadow-glow"
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover mb-2 rounded" 
                  />
                  <h3 className="text-xl font-semibold text-card-foreground">{product.name}</h3>
                  <p className="text-primary mb-2">{product.price}</p>
                  <Button 
                    onClick={() => openModal(product)}
                    className="w-full"
                  >
                    Inquire
                  </Button>
                </div>
              ))
            )}
          </div>
        </main>
      </div>

      {/* Modal */}
      {modalProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg max-w-md w-full p-6 relative border shadow-glow">
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 text-2xl leading-none hover:text-primary"
            >
              ×
            </button>
            <img 
              src={modalProduct.image} 
              alt={modalProduct.name}
              className="w-full h-48 object-cover mb-4 rounded" 
            />
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">{modalProduct.name}</h2>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Additional message (optional)"
              className="w-full p-2 border rounded mb-4 bg-background text-foreground resize-none"
              rows={3}
            />
            <div className="flex gap-4">
              <Button 
                onClick={sendViaWhatsApp}
                variant="whatsapp"
                className="flex-1"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp
              </Button>
              <Button 
                onClick={sendViaEmail}
                variant="secondary"
                className="flex-1"
              >
                <Mail className="mr-2 w-4 h-4" />
                Email
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;