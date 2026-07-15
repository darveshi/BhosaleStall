import { MenuItem, ContactInfo } from "./types";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "poha",
    name: "Poha",
    price: 20,
    description: "Flavorful and light flattened rice cooked with mustard seeds, curry leaves, finely chopped onions, roasted peanuts, and a dash of turmeric. Garnished with fresh coriander and lemon.",
    ingredients: ["Rice Flakes", "Onions", "Peanuts", "Green Chillies", "Curry Leaves", "Mustard Seeds", "Fresh Coriander", "Lemon"],
    tags: ["Best Seller", "Light & Fluffy", "Gluten Free"],
    prepTime: "Instant / Freshly Made",
    isPopular: true,
    image: "/src/assets/images/poha_banner_1784089197885.jpg"
  },
  {
    id: "ghavane",
    name: "Ghavane",
    price: 20,
    description: "A traditional Konkan specialty: soft, lace-like rice crepes made from fermented rice batter. Handcrafted on a hot griddle, served steaming hot and melt-in-your-mouth soft.",
    ingredients: ["Basmati Rice Flour", "Water", "Rock Salt", "Slight Coconut Oil"],
    tags: ["Konkan Specialty", "Super Soft", "Vegan Friendly"],
    prepTime: "Made-to-order",
    isPopular: true,
    image: "/src/assets/images/ghavane_banner_1784089151111.jpg"
  },
  {
    id: "upma",
    name: "Upma",
    price: 20,
    description: "A comforting, savory roasted semolina (suji) breakfast, simmered with green peas, roasted peanuts, curry leaves, and local spices. Soft, warm, and highly satisfying.",
    ingredients: ["Roasted Semolina", "Green Peas", "Carrots", "Onions", "Ginger", "Curry Leaves", "Mustard Seeds"],
    tags: ["Comfort Food", "Low Calorie", "Warm & Filling"],
    prepTime: "Freshly Brewed",
    image: "/src/assets/images/upma_banner_1784089183822.jpg"
  },
  {
    id: "sabudana-khichdi",
    name: "Sabudana Khichdi",
    price: 20,
    description: "A delicious Maharashtrian breakfast made of soaked sago pearls (tapioca), tossed with generous amounts of roasted crushed peanuts, green chillies, potatoes, and cumin. Perfect for fasts too!",
    ingredients: ["Premium Sago Pearls", "Roasted Crushed Peanuts", "Diced Potatoes", "Green Chillies", "Cumin Seeds", "Pure Ghee"],
    tags: ["Fasting Special", "High Energy", "Crunchy & Chewy"],
    prepTime: "Made-to-order",
    isPopular: true,
    image: "/src/assets/images/sabudana_khichdi_banner_1784089169662.jpg"
  },
  {
    id: "chai",
    name: "Chai",
    price: 10,
    description: "The ultimate Indian morning fuel: hot, robust spiced milk tea brewed with crushed fresh ginger, cardamom pods, tea leaves, and just the right sweetness to wake up your senses.",
    ingredients: ["Full Cream Milk", "Assam Tea Leaves", "Fresh Ginger", "Green Cardamom", "Sugar"],
    tags: ["Morning Essential", "Spiced Ginger", "Steaming Hot"],
    prepTime: "Brewed Fresh Daily",
    isPopular: true,
    image: "/src/assets/images/breakfast_hero_1784088753516.jpg"
  },
  {
    id: "maggi",
    name: "Meggi",
    price: 20,
    description: "Our special instant masala noodles prepared with chopped fresh veggies, aromatic spices, and served steaming hot. A perfect comfort snack for quick energy!",
    ingredients: ["Maggi Noodles", "Masala Tastemaker", "Onions", "Green Peas", "Carrots", "Green Chillies", "Fresh Coriander"],
    tags: ["Commuter Favorite", "Hot & Savory", "Quick Bite"],
    prepTime: "2-3 Minutes",
    image: "/src/assets/images/maggi_noodles_1784090912878.jpg"
  }
];

export const CONTACT_INFO: ContactInfo = {
  proprietor: "Komal Bhosle",
  phones: ["9987388184", "8286659618"],
  location: {
    stallName: "Bhosle Corner Shop Stall",
    landmark: "Vaishali Talkies",
    stationDetail: "Near Badlapur Railway Station",
    platform: "Platform No. 1",
    city: "Badlapur, Maharashtra"
  }
};
